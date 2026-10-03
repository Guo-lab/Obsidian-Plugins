# Obsidian Plugin Archive

This repo is a local-first archive for Obsidian plugin source code and installed plugin builds.

Goals:

1. Keep the main Obsidian vault clean.
2. Preserve plugin source code even if upstream GitHub repositories disappear.
3. Keep a machine-readable plugin inventory for rebuilding a vault on a new computer.
4. Snapshot installed plugin build artifacts (`manifest.json`, `main.js`, `styles.css`, etc.) for fast restore.

## Structure

```text
Obsidian-Plugins/
  plugins.yaml                 # generated inventory: installed plugins, repo URLs, enabled state, archive status
  bundles/                     # tracked git bundle archives; these contain real source history
  snapshots/                   # tracked installed plugin build snapshots from vaults
  local-sources/               # source overlays for locally maintained plugin forks
  scripts/
    archive_obsidian_plugins.py
  reports/                     # generated reports for each archive run
  mirrors/                     # local git mirror cache, ignored by git
  .verify/                     # temporary verification clones, ignored by git
```

## Important concept

A report or URL is only an index. The actual source archive is the `.bundle` file.

A bundle can be restored without the upstream repo:

```bash
git clone bundles/dataview.bundle dataview
```

For a locally maintained fork, `local-sources/` preserves its current working source tree alongside the upstream `.bundle`. These source overlays exclude Git metadata, dependencies, generated build directories, and common private key files; they are source backups, not standalone build environments. The inventory records the overlay path and status. If the external working tree is moved or removed, an existing overlay remains in place and the next archive run keeps referring to it rather than clearing it.

Keep editable source backups here, outside the vault's `.obsidian/plugins/` runtime folders. Obsidian loads installed plugin builds from that directory, while this archive keeps source and Git history for recovery and maintenance. The installed build is separately preserved under `snapshots/`.

Plugins without a resolvable source repository are still preserved as installed build snapshots. A snapshot can restore the installed plugin files, but it does not contain the original editable source tree or full Git history.

## Typical workflow

From this repo:

```bash
python3 scripts/archive_obsidian_plugins.py --vault ../Guo-lab-s-Obsidian
```

To inspect the planned changes without touching archive outputs:

```bash
python3 scripts/archive_obsidian_plugins.py --vault ../Guo-lab-s-Obsidian --dry-run
```

Dry run mode does not write `plugins.yaml` or reports, update `cache/`, clone/fetch mirrors, create bundles, delete excluded plugin artifacts, or overwrite snapshots.

The script will:

1. Read installed plugins from `.obsidian/plugins/*/manifest.json`.
2. Read enabled plugins from `.obsidian/community-plugins.json`.
3. Read BRAT data from `.obsidian/plugins/obsidian42-brat/data.json`.
4. Read old submodule URLs from `.gitmodules` if present.
5. Query Obsidian community plugin registry as a fallback for repo URLs.
6. Create/update git mirror caches in `mirrors/`.
7. Create git bundles in `bundles/` containing full source history.
8. Snapshot installed plugin build artifacts into `snapshots/<vault-name>/`.
9. Generate `plugins.yaml` and a dated report in `reports/`.
