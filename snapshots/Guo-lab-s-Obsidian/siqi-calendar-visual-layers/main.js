const { Plugin, Notice, Menu, parseYaml } = require('obsidian');

const EVENT_ROOTS = ['70-Events/'];
const OVERRIDE_ROOTS = ['60-Resources/Calendar/Full Calendar Render Overrides/'];
const LAYER_CLASSES = ['siqi-fc-layer-background', 'siqi-fc-layer-normal', 'siqi-fc-layer-foreground'];
const STATE_CLASSES = ['siqi-fc-event-cancelled'];

function debounce(fn, ms) {
  let timer = null;
  return (...args) => {
    if (timer) window.clearTimeout(timer);
    timer = window.setTimeout(() => fn(...args), ms);
  };
}

function clamp(n, min, max) {
  return Math.max(min, Math.min(max, n));
}

function normalizeTitle(s) {
  return String(s || '')
    .replace(/[☐☑✓✔]/g, '')
    .replace(/^\s*\[[ xX-]\]\s*/, '')
    .replace(/^\s*\d{1,2}:\d{2}\s*(?:[-–—]|to|→)\s*\d{1,2}:\d{2}\s*/i, '')
    .replace(/^\s*\d{1,2}:\d{2}\s*/i, '')
    .replace(/\s+/g, ' ')
    .trim()
    .toLowerCase();
}

function normalizeLayer(raw) {
  if (raw === undefined || raw === null || raw === '') return null;
  if (typeof raw === 'number') {
    const z = clamp(Math.round(raw), -20, 50);
    if (z > 0) return { key: 'foreground', z: 30 + z, opacity: null };
    if (z < 0) return { key: 'background', z: 1 + z, opacity: null };
    return { key: 'normal', z: 10, opacity: null };
  }

  const value = String(raw).trim().toLowerCase();
  const numeric = Number(value);
  if (!Number.isNaN(numeric) && value !== '') return normalizeLayer(numeric);

  if (['foreground', 'front', 'top', 'above', 'high', 'important', 'pinned'].includes(value)) {
    return { key: 'foreground', z: 80, opacity: null };
  }
  if (['background', 'back', 'bottom', 'below', 'low', 'soft', 'ambient'].includes(value)) {
    return { key: 'background', z: 1, opacity: null };
  }
  if (['normal', 'default', 'middle', 'mid'].includes(value)) {
    return { key: 'normal', z: 10, opacity: null };
  }
  return null;
}

function parseFrontmatter(text) {
  const m = /^---\n([\s\S]*?)\n---/.exec(text);
  if (!m) return null;
  try {
    return parseYaml(m[1]);
  } catch (e) {
    console.warn('[SIQI Calendar Visual Layers] failed to parse YAML', e);
    return null;
  }
}

function extractMarkdownTitle(text) {
  const m = /^#\s+(.+)$/m.exec(text || '');
  if (!m) return null;
  return m[1]
    .replace(/\[\[([^\]|]+)(?:\|([^\]]+))?\]\]/g, (_, page, alias) => alias || page)
    .replace(/[*_`#]/g, '')
    .trim();
}

function truthyStatus(value) {
  if (value === true) return true;
  if (value === false || value === undefined || value === null) return false;
  const s = String(value).trim().toLowerCase();
  return ['cancelled', 'canceled', 'cancel', 'declined', 'skipped', 'skip'].includes(s);
}

function isCancelledFrontmatter(fm) {
  if (!fm) return false;
  return truthyStatus(fm.cancelled)
    || truthyStatus(fm.canceled)
    || truthyStatus(fm.status)
    || truthyStatus(fm.eventStatus)
    || truthyStatus(fm.attendance);
}

function normalizeDateValue(value) {
  if (value === undefined || value === null || value === '') return null;
  if (value instanceof Date && !Number.isNaN(value.getTime())) return value.toISOString().slice(0, 10);
  const s = String(value).trim();
  let m = /^(\d{4}-\d{2}-\d{2})/.exec(s);
  if (m) return m[1];
  m = /^(\d{4})(\d{2})(\d{2})/.exec(s);
  if (m) return `${m[1]}-${m[2]}-${m[3]}`;
  return null;
}

function normalizeTimeValue(value) {
  if (value === undefined || value === null || value === '') return null;
  if (value instanceof Date && !Number.isNaN(value.getTime())) {
    return `${String(value.getHours()).padStart(2, '0')}:${String(value.getMinutes()).padStart(2, '0')}`;
  }
  const s = String(value).trim().toLowerCase();
  let m = /(\d{1,2}):(\d{2})\s*(am|pm|a|p)?/.exec(s);
  if (!m) return null;
  let h = Number(m[1]);
  const min = Number(m[2]);
  let ampm = m[3];
  if (ampm === 'p') ampm = 'pm';
  if (ampm === 'a') ampm = 'am';
  if (ampm === 'pm' && h < 12) h += 12;
  if (ampm === 'am' && h === 12) h = 0;
  if (!Number.isFinite(h) || !Number.isFinite(min)) return null;
  return `${String(h).padStart(2, '0')}:${String(min).padStart(2, '0')}`;
}

function overrideKey(title, date, time) {
  return `${date || ''}|${time || ''}|${title || ''}`;
}

function yamlString(value) {
  return JSON.stringify(String(value || ''));
}

function safeFilename(value) {
  return String(value || 'Event')
    .replace(/[\\/:*?"<>|#^[\]]/g, '-')
    .replace(/\s+/g, ' ')
    .trim()
    .slice(0, 100) || 'Event';
}

function rgbComponents(color) {
  if (!color) return null;
  let m = /^rgba?\((\d+),\s*(\d+),\s*(\d+)/i.exec(color);
  if (m) return [Number(m[1]), Number(m[2]), Number(m[3])];
  m = /^#([0-9a-f]{6})$/i.exec(color.trim());
  if (m) {
    const n = parseInt(m[1], 16);
    return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
  }
  m = /^#([0-9a-f]{3})$/i.exec(color.trim());
  if (m) {
    return [
      parseInt(m[1][0] + m[1][0], 16),
      parseInt(m[1][1] + m[1][1], 16),
      parseInt(m[1][2] + m[1][2], 16),
    ];
  }
  return null;
}

function rgbaFromCssColor(color, alpha) {
  const rgb = rgbComponents(color);
  if (!rgb || !Number.isFinite(alpha)) return null;
  const a = clamp(alpha, 0.08, 1);
  return `rgba(${rgb[0]}, ${rgb[1]}, ${rgb[2]}, ${a})`;
}

function solidMixFromCssColor(color, alpha) {
  const rgb = rgbComponents(color);
  if (!rgb || !Number.isFinite(alpha)) return null;
  const pct = Math.round(clamp(alpha, 0.08, 1) * 100);
  // Looks like alpha, but is an opaque color. This prevents stacked events from blending into mud.
  return `color-mix(in srgb, rgb(${rgb[0]} ${rgb[1]} ${rgb[2]}) ${pct}%, var(--background-primary) ${100 - pct}%)`;
}

function cssNumberVar(name, fallback) {
  const raw = getComputedStyle(document.body).getPropertyValue(name).trim();
  const value = Number(raw);
  return Number.isFinite(value) ? value : fallback;
}

function opacityForLayer(layer) {
  if (layer && Number.isFinite(layer.opacity)) return clamp(layer.opacity, 0.08, 1);
  const key = layer?.key || 'default';
  if (key === 'background') return clamp(cssNumberVar('--siqi-fc-bg-layer-alpha', 0.28), 0.08, 1);
  if (key === 'foreground') return clamp(cssNumberVar('--siqi-fc-fg-layer-alpha', 0.78), 0.08, 1);
  return clamp(cssNumberVar('--siqi-fc-event-alpha', 0.56), 0.08, 1);
}

function borderOpacityFor(alpha, layer) {
  if (layer?.key === 'background') return clamp(cssNumberVar('--siqi-fc-bg-layer-border-alpha', alpha + 0.22), 0.08, 1);
  return clamp(cssNumberVar('--siqi-fc-event-border-alpha', alpha + 0.18), 0.08, 1);
}

module.exports = class SiqiCalendarVisualLayersPlugin extends Plugin {
  async onload() {
    this.layerByTitle = new Map();
    this.cancelledByTitle = new Map();
    this.cancelledByKey = new Map();
    this.cancelledRules = [];
    this.observer = null;
    this.rebuildIndexDebounced = debounce(() => this.rebuildIndexAndApply(), 500);
    this.applyDebounced = debounce(() => this.applyLayers(), 120);

    this.addCommand({
      id: 'reapply-calendar-visual-layers',
      name: 'Reapply Calendar Visual Layers',
      callback: async () => {
        await this.rebuildIndexAndApply();
        new Notice('Calendar visual layers reapplied', 1800);
      },
    });

    // Full Calendar owns the normal left-click action. A right-click gives us a
    // non-destructive visual Cancel / Recover menu without replacing that action.
    this.registerDomEvent(document, 'contextmenu', (evt) => {
      const target = evt.target;
      if (!(target instanceof Element)) return;
      const eventEl = target.closest('.fc .fc-event');
      if (!eventEl) return;
      evt.preventDefault();
      evt.stopPropagation();
      this.showEventStateMenu(eventEl, evt);
    }, true);

    this.registerEvent(this.app.metadataCache.on('changed', (file) => {
      if (this.isEventFile(file)) this.rebuildIndexDebounced();
    }));
    this.registerEvent(this.app.vault.on('modify', (file) => {
      if (this.isEventFile(file)) this.rebuildIndexDebounced();
    }));
    this.registerEvent(this.app.vault.on('create', (file) => {
      if (this.isEventFile(file)) this.rebuildIndexDebounced();
    }));
    this.registerEvent(this.app.vault.on('delete', (file) => {
      if (this.isEventFile(file)) this.rebuildIndexDebounced();
    }));

    this.app.workspace.onLayoutReady(async () => {
      await this.rebuildIndexAndApply();
      this.startObserver();
    });
  }

  onunload() {
    if (this.observer) this.observer.disconnect();
    this.observer = null;
  }

  isEventFile(file) {
    return file && file.path && file.extension === 'md'
      && [...EVENT_ROOTS, ...OVERRIDE_ROOTS].some((root) => file.path.startsWith(root));
  }

  async rebuildIndexAndApply() {
    const next = new Map();
    const files = this.app.vault.getMarkdownFiles().filter((file) => this.isEventFile(file));

    const cancelled = new Map();
    const cancelledByKey = new Map();
    const cancelledRules = [];

    for (const file of files) {
      let rawText = null;
      let fm = this.app.metadataCache.getFileCache(file)?.frontmatter;
      if (!fm) {
        try {
          rawText = await this.app.vault.cachedRead(file);
          fm = parseFrontmatter(rawText);
        } catch (_) { fm = null; }
      }
      if (!fm) continue;

      const rawLayer = fm.visualLayer ?? fm.eventLayer ?? fm.layer ?? fm.zIndex;
      const layer = normalizeLayer(rawLayer);
      const isCancelled = isCancelledFrontmatter(fm);
      if (!layer && !isCancelled) continue;

      if (layer) {
        const rawOpacity = Number(fm.visualOpacity ?? fm.opacity ?? '');
        if (Number.isFinite(rawOpacity)) layer.opacity = clamp(rawOpacity, 0.08, 1);
      }

      if (!rawText && !fm.title) {
        try { rawText = await this.app.vault.cachedRead(file); }
        catch (_) { rawText = null; }
      }
      const title = normalizeTitle(fm.title || extractMarkdownTitle(rawText) || file.basename);
      if (!title) continue;

      if (isCancelled) {
        const date = normalizeDateValue(fm.date || fm.startDate || fm['fc-event-recurrence-id']);
        const time = normalizeTimeValue(fm.startTime || fm.start || fm.time);
        const rawContains = fm.titleContains ?? fm.matchTitleContains ?? fm.containsTitle ?? null;
        const titleContains = rawContains ? normalizeTitle(rawContains) : null;
        const aliases = Array.isArray(fm.aliases) ? fm.aliases.map(normalizeTitle).filter(Boolean) : [];
        const state = { sourcePath: file.path, date, time, title, titleContains, aliases };
        if (date && time) {
          cancelledByKey.set(overrideKey(title, date, time), state);
          for (const alias of aliases) cancelledByKey.set(overrideKey(alias, date, time), state);
        }
        if (date) {
          cancelledByKey.set(overrideKey(title, date, null), state);
          for (const alias of aliases) cancelledByKey.set(overrideKey(alias, date, null), state);
        }
        if (!date && !titleContains) cancelled.set(title, state);
        cancelledRules.push(state);
      }

      if (layer) {
        // If duplicate titles exist, foreground wins; otherwise keep the stronger z-index.
        const prev = next.get(title);
        if (!prev || layer.z >= prev.z) {
          next.set(title, { ...layer, sourcePath: file.path });
        }
      }
    }

    this.layerByTitle = next;
    this.cancelledByTitle = cancelled;
    this.cancelledByKey = cancelledByKey;
    this.cancelledRules = cancelledRules;
    this.applyLayers();
  }

  startObserver() {
    if (this.observer) this.observer.disconnect();
    this.observer = new MutationObserver(() => this.applyDebounced());
    this.observer.observe(document.body, { childList: true, subtree: true });
    this.registerInterval(window.setInterval(() => this.applyLayers(), 2500));
  }

  getEventTitle(eventEl) {
    const titleEl = eventEl.querySelector('.fc-event-title');
    if (titleEl && titleEl.textContent) return titleEl.textContent;
    const main = eventEl.querySelector('.fc-event-main');
    if (main && main.textContent) return main.textContent;
    return eventEl.textContent || eventEl.getAttribute('title') || eventEl.getAttribute('aria-label') || '';
  }

  getEventDate(eventEl) {
    const dated = eventEl.closest('[data-date]');
    if (dated) return dated.getAttribute('data-date');
    const harness = eventEl.closest('.fc-timegrid-event-harness, .fc-daygrid-event-harness, .fc-list-event');
    const harnessDated = harness?.closest?.('[data-date]');
    return harnessDated?.getAttribute?.('data-date') || null;
  }

  getEventStartTime(eventEl) {
    const timeEl = eventEl.querySelector('.fc-event-time');
    return normalizeTimeValue(timeEl?.textContent || eventEl.getAttribute('aria-label') || eventEl.getAttribute('title') || '');
  }

  getCancelledOverride(title, eventEl) {
    const date = this.getEventDate(eventEl);
    const time = this.getEventStartTime(eventEl);
    if (date && time) {
      const exact = this.cancelledByKey.get(overrideKey(title, date, time));
      if (exact) return exact;
    }
    if (date) {
      const dateOnly = this.cancelledByKey.get(overrideKey(title, date, null));
      if (dateOnly) return dateOnly;
    }

    for (const rule of this.cancelledRules || []) {
      if (rule.date && date !== rule.date) continue;
      if (rule.time && time !== rule.time) continue;
      const titleOk = rule.title === title
        || (rule.aliases || []).includes(title)
        || (rule.titleContains && title.includes(rule.titleContains));
      if (titleOk) return rule;
    }

    return this.cancelledByTitle.get(title) || null;
  }

  getEventInfo(eventEl) {
    const rawTitle = String(this.getEventTitle(eventEl) || '').replace(/\s+/g, ' ').trim();
    return {
      rawTitle,
      title: normalizeTitle(rawTitle),
      date: normalizeDateValue(this.getEventDate(eventEl)),
      time: this.getEventStartTime(eventEl),
    };
  }

  matchingCancellationRules(info) {
    const matches = [];
    for (const rule of this.cancelledRules || []) {
      if (rule.date && rule.date !== info.date) continue;
      if (rule.time && rule.time !== info.time) continue;
      const titleOk = rule.title === info.title
        || (rule.aliases || []).includes(info.title)
        || (rule.titleContains && info.title.includes(rule.titleContains));
      if (titleOk) matches.push(rule);
    }
    const titleOnly = this.cancelledByTitle.get(info.title);
    if (titleOnly) matches.push(titleOnly);
    return matches;
  }

  showEventStateMenu(eventEl, mouseEvent) {
    const info = this.getEventInfo(eventEl);
    if (!info.rawTitle || !info.date) {
      new Notice('Cannot identify this event date', 2200);
      return;
    }

    const cancelled = Boolean(this.getCancelledOverride(info.title, eventEl));
    const menu = new Menu();
    if (cancelled) {
      menu.addItem((item) => item
        .setTitle('Recover event (visual only)')
        .setIcon('rotate-ccw')
        .onClick(async () => this.recoverEvent(info)));
    } else {
      menu.addItem((item) => item
        .setTitle('Cancel event (visual only)')
        .setIcon('ban')
        .onClick(async () => this.cancelEvent(info)));
    }
    menu.addSeparator();
    menu.addItem((item) => item
      .setTitle(`${info.date}${info.time ? ` ${info.time}` : ''} · ${info.rawTitle}`)
      .setDisabled(true));
    menu.showAtMouseEvent(mouseEvent);
  }

  async cancelEvent(info) {
    const root = OVERRIDE_ROOTS[0];
    const timePart = info.time ? info.time.replace(':', '') : 'all-day';
    const basename = `${info.date} ${timePart} ${safeFilename(info.rawTitle)} - Cancelled`;
    let path = `${root}${basename}.md`;
    let suffix = 2;
    while (this.app.vault.getAbstractFileByPath(path)) {
      path = `${root}${basename} ${suffix}.md`;
      suffix += 1;
    }

    const timeLine = info.time ? `startTime: ${info.time}\n` : '';
    const content = `---\n`+
      `type: calendar-render-override\n`+
      `title: ${yamlString(info.rawTitle)}\n`+
      `date: ${info.date}\n`+
      timeLine+
      `status: cancelled\n`+
      `source: full-calendar-context-menu\n`+
      `scope: single-instance\n`+
      `---\n\n`+
      `# ${info.rawTitle} — Cancelled\n\n`+
      `Visual-only cancellation for ${info.date}${info.time ? ` at ${info.time}` : ''}.\n`;

    try {
      await this.app.vault.create(path, content);
      await this.rebuildIndexAndApply();
      new Notice(`Cancelled visually: ${info.rawTitle}`, 1800);
    } catch (e) {
      console.error('[SIQI Calendar Visual Layers] failed to cancel event', e);
      new Notice('Could not create the cancellation override', 2600);
    }
  }

  async recoverEvent(info) {
    const rules = this.matchingCancellationRules(info);
    const sourcePaths = [...new Set(rules.map((rule) => rule.sourcePath).filter(Boolean))];
    let changed = 0;

    for (const path of sourcePaths) {
      const file = this.app.vault.getAbstractFileByPath(path);
      if (!file || file.extension !== 'md') continue;
      try {
        if (OVERRIDE_ROOTS.some((root) => path.startsWith(root))) {
          await this.app.vault.delete(file);
          changed += 1;
          continue;
        }

        await this.app.fileManager.processFrontMatter(file, (fm) => {
          let edited = false;
          for (const key of ['status', 'eventStatus', 'cancelled', 'canceled', 'attendance']) {
            if (key in fm && (truthyStatus(fm[key]) || key === 'status' || key === 'eventStatus')) {
              delete fm[key];
              edited = true;
            }
          }
          if ('visualOverrideOnly' in fm) {
            delete fm.visualOverrideOnly;
            edited = true;
          }
          if (edited) changed += 1;
        });
      } catch (e) {
        console.error(`[SIQI Calendar Visual Layers] failed to recover ${path}`, e);
      }
    }

    await this.rebuildIndexAndApply();
    if (changed) new Notice(`Recovered visually: ${info.rawTitle}`, 1800);
    else new Notice('No removable cancellation override was found', 2400);
  }

  resetElement(eventEl) {
    eventEl.classList.remove(...LAYER_CLASSES, ...STATE_CLASSES);
    eventEl.removeAttribute('data-siqi-visual-layer');
    eventEl.removeAttribute('data-siqi-visual-source');
    eventEl.style.removeProperty('--siqi-event-layer-z');
    if (eventEl.dataset.siqiOriginalBg) {
      eventEl.style.backgroundColor = eventEl.dataset.siqiOriginalBg;
      delete eventEl.dataset.siqiOriginalBg;
    }
    if (eventEl.dataset.siqiOriginalBorder) {
      eventEl.style.borderColor = eventEl.dataset.siqiOriginalBorder;
      delete eventEl.dataset.siqiOriginalBorder;
    }
    const harness = eventEl.closest('.fc-timegrid-event-harness, .fc-daygrid-event-harness, .fc-list-event');
    if (harness) {
      harness.style.removeProperty('z-index');
      harness.removeAttribute('data-siqi-visual-layer');
    }
  }

  applyLayers() {
    const eventEls = document.querySelectorAll('.fc .fc-event');
    if (!eventEls.length) return;

    for (const eventEl of eventEls) {
      const title = normalizeTitle(this.getEventTitle(eventEl));
      const layer = this.layerByTitle.get(title) || null;
      const cancelled = this.getCancelledOverride(title, eventEl);

      eventEl.classList.remove(...LAYER_CLASSES, ...STATE_CLASSES);
      eventEl.style.opacity = '1';

      const harness = eventEl.closest('.fc-timegrid-event-harness, .fc-daygrid-event-harness, .fc-list-event');
      if (harness) {
        harness.style.removeProperty('z-index');
        harness.removeAttribute('data-siqi-visual-layer');
      }

      if (layer) {
        eventEl.classList.add(`siqi-fc-layer-${layer.key}`);
        eventEl.dataset.siqiVisualLayer = layer.key;
        eventEl.dataset.siqiVisualSource = layer.sourcePath || '';
        eventEl.style.setProperty('--siqi-event-layer-z', String(layer.z));

        if (harness) {
          harness.style.setProperty('z-index', String(layer.z), 'important');
          harness.dataset.siqiVisualLayer = layer.key;
        }
      } else {
        eventEl.removeAttribute('data-siqi-visual-layer');
        eventEl.removeAttribute('data-siqi-visual-source');
        eventEl.style.removeProperty('--siqi-event-layer-z');
      }

      if (cancelled) {
        eventEl.classList.add('siqi-fc-event-cancelled');
        eventEl.dataset.siqiEventStatus = 'cancelled';
        eventEl.dataset.siqiVisualSource = eventEl.dataset.siqiVisualSource || cancelled.sourcePath || '';
      } else {
        eventEl.removeAttribute('data-siqi-event-status');
      }

      // Preserve the source/calendar color, but render only the event background as translucent.
      // Text stays fully opaque because we do not use element-level opacity.
      if (!eventEl.dataset.siqiOriginalBg) {
        eventEl.dataset.siqiOriginalBg = eventEl.style.backgroundColor || getComputedStyle(eventEl).backgroundColor;
      }
      if (!eventEl.dataset.siqiOriginalBorder) {
        eventEl.dataset.siqiOriginalBorder = eventEl.style.borderColor || getComputedStyle(eventEl).borderColor;
      }

      const alpha = opacityForLayer(layer);
      // Background-layer events stay truly translucent/glass-like.
      // Main-line events use an opaque color-mix that mimics alpha, so overlapping blocks do not blend colors.
      const bg = layer?.key === 'background'
        ? rgbaFromCssColor(eventEl.dataset.siqiOriginalBg, alpha)
        : solidMixFromCssColor(eventEl.dataset.siqiOriginalBg, alpha);
      const border = layer?.key === 'background'
        ? rgbaFromCssColor(eventEl.dataset.siqiOriginalBorder, borderOpacityFor(alpha, layer))
        : solidMixFromCssColor(eventEl.dataset.siqiOriginalBorder, borderOpacityFor(alpha, layer));
      if (bg) eventEl.style.backgroundColor = bg;
      if (border) eventEl.style.borderColor = border;
      eventEl.dataset.siqiEventAlpha = String(alpha);

      if (cancelled) {
        // Cancelled blocks should remain legible without becoming large white
        // masks over overlapping calendar events.
        eventEl.style.backgroundColor = 'rgba(var(--mono-rgb-100), 0.055)';
        eventEl.style.borderColor = 'rgba(var(--mono-rgb-100), 0.30)';
      }
    }
  }
};
