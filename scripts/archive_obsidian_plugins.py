#!/usr/bin/env python3
"""Archive Obsidian plugin sources and installed builds.

This script is designed to live in the standalone Obsidian-Plugin repo.
It reads a vault, builds an inventory of installed plugins, resolves source
repositories from submodules/BRAT/community registry, stores real source code
as git bundles, and snapshots installed plugin build artifacts.
"""
from __future__ import annotations

import argparse
import configparser
import datetime as dt
import json
import os
import re
import shutil
import subprocess
import sys
import urllib.request
from pathlib import Path
from typing import Any, Dict, List, Optional, Tuple

REGISTRY_URL = "https://raw.githubusercontent.com/obsidianmd/obsidian-releases/master/community-plugins.json"
BUILD_KEEP = {"manifest.json", "manifest-beta.json", "main.js", "styles.css"}
DEFAULT_EXCLUDED_PLUGINS = {
    # The installed build includes bundled OAuth client credentials that GitHub
    # push protection blocks in public repositories.
    "smart-composer",
}


def run(cmd: List[str], cwd: Optional[Path] = None, check: bool = True, timeout: Optional[int] = None) -> subprocess.CompletedProcess:
    return subprocess.run(cmd, cwd=str(cwd) if cwd else None, text=True, stdout=subprocess.PIPE, stderr=subprocess.PIPE, check=check, timeout=timeout)


def safe_slug(text: str) -> str:
    text = text.strip().replace("/", "__")
    text = re.sub(r"[^A-Za-z0-9._@+\-=一-龥ぁ-んァ-ン가-힣]+", "-", text)
    return text.strip("-") or "unknown"


def load_json(path: Path, default: Any) -> Any:
    try:
        return json.loads(path.read_text())
    except Exception:
        return default


def normalize_repo_url(repo: str) -> str:
    repo = repo.strip()
    if not repo:
        return repo
    if repo.startswith("git@github.com:"):
        return repo
    if repo.startswith("https://github.com/") or repo.startswith("http://github.com/"):
        return repo
    if re.match(r"^[A-Za-z0-9_.-]+/[A-Za-z0-9_.-]+$", repo):
        return f"https://github.com/{repo}.git"
    return repo


def repo_key_from_url(url: str) -> str:
    u = url.strip()
    u = u.removesuffix(".git")
    if u.startswith("git@github.com:"):
        return u.split(":", 1)[1]
    m = re.search(r"github\.com[:/](.+/.+)$", u)
    if m:
        return m.group(1)
    return u


def read_gitmodules(vault: Path) -> Dict[str, Dict[str, str]]:
    gm = vault / ".gitmodules"
    result: Dict[str, Dict[str, str]] = {}
    if not gm.exists():
        return result
    cfg = configparser.ConfigParser()
    cfg.read(gm)
    for sec in cfg.sections():
        path = cfg[sec].get("path", "")
        url = cfg[sec].get("url", "")
        if path:
            plugin_id = Path(path).name
            result[plugin_id] = {"path": path, "url": normalize_repo_url(url)}
    return result


def read_submodule_commits(vault: Path) -> Dict[str, str]:
    result: Dict[str, str] = {}
    try:
        cp = run(["git", "submodule", "status"], cwd=vault, check=False)
    except Exception:
        return result
    for line in cp.stdout.splitlines():
        parts = line.strip().split()
        if len(parts) >= 2:
            commit = parts[0].lstrip("-+")
            path = parts[1]
            result[Path(path).name] = commit
    return result


def read_registry(cache_path: Path, refresh: bool = False) -> Dict[str, Dict[str, Any]]:
    cache_path.parent.mkdir(parents=True, exist_ok=True)
    data = None
    if cache_path.exists() and not refresh:
        data = load_json(cache_path, None)
    if data is None:
        try:
            with urllib.request.urlopen(REGISTRY_URL, timeout=20) as r:
                raw = r.read().decode("utf-8")
            cache_path.write_text(raw)
            data = json.loads(raw)
        except Exception as e:
            # macOS Python installations sometimes miss CA roots. Fall back to curl.
            try:
                cp = run(["curl", "-fsSL", REGISTRY_URL], check=True, timeout=30)
                raw = cp.stdout
                cache_path.write_text(raw)
                data = json.loads(raw)
            except Exception as e2:
                print(f"WARN: failed to fetch registry: {e}; curl fallback also failed: {e2}", file=sys.stderr)
                data = []
    result = {}
    for item in data or []:
        pid = item.get("id")
        if pid:
            result[pid] = item
    return result


def read_installed_plugins(vault: Path) -> Dict[str, Dict[str, Any]]:
    result: Dict[str, Dict[str, Any]] = {}
    plugins_dir = vault / ".obsidian" / "plugins"
    for mf in sorted(plugins_dir.glob("*/manifest.json")):
        manifest = load_json(mf, {})
        plugin_id = manifest.get("id") or mf.parent.name
        result[plugin_id] = {
            "id": plugin_id,
            "folder": mf.parent.name,
            "name": manifest.get("name", ""),
            "version": manifest.get("version", ""),
            "author": manifest.get("author", ""),
            "authorUrl": manifest.get("authorUrl", ""),
            "manifest": manifest,
        }
    return result


def read_enabled(vault: Path) -> set[str]:
    data = load_json(vault / ".obsidian" / "community-plugins.json", [])
    return set(data if isinstance(data, list) else [])


def read_brat(vault: Path) -> Dict[str, Dict[str, Any]]:
    data = load_json(vault / ".obsidian" / "plugins" / "obsidian42-brat" / "data.json", {})
    result: Dict[str, Dict[str, Any]] = {}
    for repo in data.get("pluginList", []) or []:
        key = repo_key_from_url(normalize_repo_url(repo))
        result[key] = {"repo": repo, "version": "", "mode": "brat"}
    for item in data.get("pluginSubListFrozenVersion", []) or []:
        repo = item.get("repo", "")
        key = repo_key_from_url(normalize_repo_url(repo))
        result[key] = {"repo": repo, "version": item.get("version", ""), "mode": "brat-frozen"}
    return result


def resolve_repo(plugin: Dict[str, Any], submods: Dict[str, Dict[str, str]], registry: Dict[str, Dict[str, Any]], brat_by_key: Dict[str, Dict[str, Any]]) -> Tuple[str, str, str]:
    pid = plugin["id"]
    folder = plugin["folder"]
    if folder in submods:
        return submods[folder]["url"], "submodule", submods[folder].get("path", "")
    if pid in submods:
        return submods[pid]["url"], "submodule", submods[pid].get("path", "")

    # BRAT can identify by repo, but often not by plugin id. If only one BRAT repo matches dynamic-views etc. via repo name, use it.
    for key, info in brat_by_key.items():
        if key.lower().endswith("/" + pid.lower()) or key.lower().split("/")[-1] == pid.lower():
            return normalize_repo_url(info["repo"]), info["mode"], ""

    reg = registry.get(pid)
    if reg and reg.get("repo"):
        return normalize_repo_url(reg["repo"]), "obsidian-community-registry", ""

    author_url = str(plugin.get("authorUrl") or "")
    if "github.com" in author_url:
        # This is often an author profile, not a repo, so mark as weak. Do not archive automatically.
        return author_url, "authorUrl-weak", ""

    return "", "unresolved", ""


def git_archive_bundle(repo_url: str, plugin_id: str, mirror_dir: Path, bundle_dir: Path, verify_dir: Path, dry_run: bool = False) -> Tuple[str, str]:
    if not repo_url or not ("github.com" in repo_url or repo_url.endswith(".git") or repo_url.startswith("git@")):
        return "skipped", "no usable git repo url"

    slug = safe_slug(plugin_id)
    mirror = mirror_dir / f"{slug}.git"
    bundle = bundle_dir / f"{slug}.bundle"
    verify = verify_dir / slug

    if dry_run:
        return "dry-run", str(bundle.relative_to(Path.cwd()))

    mirror_dir.mkdir(parents=True, exist_ok=True)
    bundle_dir.mkdir(parents=True, exist_ok=True)
    verify_dir.mkdir(parents=True, exist_ok=True)

    try:
        if mirror.exists():
            cp = run(["git", "remote", "set-url", "origin", repo_url], cwd=mirror, check=False, timeout=30)
            cp = run(["git", "fetch", "--prune", "--tags", "origin"], cwd=mirror, check=True, timeout=180)
        else:
            cp = run(["git", "clone", "--mirror", repo_url, str(mirror)], check=True, timeout=240)
        run(["git", "bundle", "create", str(bundle), "--all"], cwd=mirror, check=True, timeout=180)
        # Verify by cloning bare from the bundle. This proves the bundle is real source, not just a URL.
        if verify.exists():
            shutil.rmtree(verify)
        run(["git", "clone", "--bare", str(bundle), str(verify)], check=True, timeout=120)
        return "bundled", str(bundle.relative_to(Path.cwd()))
    except subprocess.CalledProcessError as e:
        msg = (e.stderr or e.stdout or str(e)).strip().splitlines()[-1:] or [str(e)]
        return "failed", msg[0]
    except Exception as e:
        return "failed", str(e)


def snapshot_installed_plugin(vault: Path, plugin: Dict[str, Any], snap_root: Path) -> Tuple[str, str]:
    src = vault / ".obsidian" / "plugins" / plugin["folder"]
    dest = snap_root / plugin["folder"]
    if not src.exists():
        return "missing", "installed folder missing"
    if dest.exists():
        shutil.rmtree(dest)
    dest.mkdir(parents=True, exist_ok=True)
    copied = 0
    for item in src.iterdir():
        if item.name == "node_modules" or item.name.startswith("."):
            continue
        if item.is_file() and item.name in BUILD_KEEP:
            shutil.copy2(item, dest / item.name)
            copied += 1
        elif item.is_dir() and item.name in {"assets", "dist", "styles", "media"}:
            shutil.copytree(item, dest / item.name, ignore=shutil.ignore_patterns("node_modules", ".git", ".DS_Store"))
            copied += 1
    return "snapshotted", f"{copied} entries"


def write_yaml_like(path: Path, data: Any) -> None:
    try:
        import yaml  # type: ignore
        path.write_text(yaml.safe_dump(data, allow_unicode=True, sort_keys=False))
    except Exception:
        # JSON is valid YAML 1.2 enough for our purposes.
        path.write_text(json.dumps(data, ensure_ascii=False, indent=2))


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("--vault", default="../Guo-lab-s-Obsidian", help="Path to Obsidian vault")
    parser.add_argument("--dry-run", action="store_true", help="Do not clone/fetch/bundle; only generate inventory")
    parser.add_argument("--refresh-registry", action="store_true", help="Refresh Obsidian community registry cache")
    parser.add_argument("--skip-bundles", action="store_true", help="Only inventory and snapshot installed builds")
    parser.add_argument("--include-excluded", action="store_true", help="Include plugins normally excluded from public archives")
    args = parser.parse_args()

    root = Path.cwd()
    vault = Path(args.vault).expanduser().resolve()
    if not vault.exists():
        print(f"ERROR: vault does not exist: {vault}", file=sys.stderr)
        return 2

    now = dt.datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    date = dt.datetime.now().strftime("%Y-%m-%d")
    vault_name = vault.name

    registry = read_registry(root / "cache" / "community-plugins.json", refresh=args.refresh_registry)
    installed = read_installed_plugins(vault)
    if not args.include_excluded:
        for plugin_id in DEFAULT_EXCLUDED_PLUGINS:
            installed.pop(plugin_id, None)
    enabled = read_enabled(vault)
    submods = read_gitmodules(vault)
    sub_commits = read_submodule_commits(vault)
    brat = read_brat(vault)

    snap_root = root / "snapshots" / vault_name
    mirror_dir = root / "mirrors"
    bundle_dir = root / "bundles"
    verify_dir = root / ".verify"

    if not args.include_excluded:
        for plugin_id in DEFAULT_EXCLUDED_PLUGINS:
            old_snapshot = snap_root / plugin_id
            old_bundle = bundle_dir / f"{safe_slug(plugin_id)}.bundle"
            if old_snapshot.exists():
                shutil.rmtree(old_snapshot)
            if old_bundle.exists():
                old_bundle.unlink()

    plugins: List[Dict[str, Any]] = []
    for pid, plugin in sorted(installed.items()):
        repo_url, source_type, source_path = resolve_repo(plugin, submods, registry, brat)
        archive_status = "not-run"
        archive_detail = ""
        if not args.skip_bundles and source_type != "authorUrl-weak" and source_type != "unresolved":
            archive_status, archive_detail = git_archive_bundle(repo_url, pid, mirror_dir, bundle_dir, verify_dir, dry_run=args.dry_run)
        elif source_type == "authorUrl-weak":
            archive_status, archive_detail = "skipped", "authorUrl looks like GitHub but may be an author profile, not a plugin repo"
        elif source_type == "unresolved":
            archive_status, archive_detail = "skipped", "repo unresolved"
        else:
            archive_status, archive_detail = "skipped", "--skip-bundles"

        snap_status, snap_detail = ("dry-run", "") if args.dry_run else snapshot_installed_plugin(vault, plugin, snap_root)

        plugins.append({
            "id": pid,
            "folder": plugin["folder"],
            "name": plugin.get("name", ""),
            "version": plugin.get("version", ""),
            "enabled": pid in enabled,
            "author": plugin.get("author", ""),
            "authorUrl": plugin.get("authorUrl", ""),
            "repo_url": repo_url,
            "repo_source": source_type,
            "submodule_path": source_path,
            "submodule_commit": sub_commits.get(plugin["folder"], sub_commits.get(pid, "")),
            "archive_status": archive_status,
            "archive_detail": archive_detail,
            "installed_snapshot_status": snap_status,
            "installed_snapshot_detail": snap_detail,
        })

    inventory = {
        "generated_at": now,
        "vault_name": vault_name,
        "registry_url": REGISTRY_URL,
        "counts": {
            "installed": len(plugins),
            "enabled": sum(1 for p in plugins if p["enabled"]),
            "bundled": sum(1 for p in plugins if p["archive_status"] == "bundled"),
            "failed": sum(1 for p in plugins if p["archive_status"] == "failed"),
            "unresolved": sum(1 for p in plugins if p["repo_source"] == "unresolved"),
        },
        "plugins": plugins,
    }

    write_yaml_like(root / "plugins.yaml", inventory)

    reports = root / "reports"
    reports.mkdir(exist_ok=True)
    report_path = reports / f"{date}.md"
    lines = [
        f"# Obsidian Plugin Archive Report - {date}",
        "",
        f"Vault: `{vault_name}`",
        f"Generated: {now}",
        "",
        "## Counts",
        "",
        f"- Installed: {inventory['counts']['installed']}",
        f"- Enabled: {inventory['counts']['enabled']}",
        f"- Bundled: {inventory['counts']['bundled']}",
        f"- Failed: {inventory['counts']['failed']}",
        f"- Unresolved: {inventory['counts']['unresolved']}",
        "",
        "## Plugins",
        "",
        "| Plugin | Enabled | Version | Repo source | Archive | Detail |",
        "|---|---:|---|---|---|---|",
    ]
    for p in plugins:
        detail = str(p["archive_detail"]).replace("|", "\\|")
        lines.append(f"| {p['id']} | {str(p['enabled']).lower()} | {p['version']} | {p['repo_source']} | {p['archive_status']} | {detail} |")
    report_path.write_text("\n".join(lines) + "\n")
    (reports / "latest.md").write_text(report_path.read_text())

    print(f"Wrote {root/'plugins.yaml'}")
    print(f"Wrote {report_path}")
    print(json.dumps(inventory["counts"], ensure_ascii=False, indent=2))
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
