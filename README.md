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

## Typical workflow

From this repo:

```bash
python3 scripts/archive_obsidian_plugins.py --vault ../Guo-lab-s-Obsidian
```

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

## When is it safe to remove `plugin-repos` from the vault?

Only after:

- `plugins.yaml` exists.
- Important plugins have `archive_status: bundled`.
- Corresponding `bundles/<plugin-id>.bundle` files exist.
- `reports/latest.md` or dated report shows bundle verification success.
- Installed build snapshots exist under `snapshots/<vault-name>/`.

After that, the vault's `plugin-repos` submodules become redundant for archival purposes.
