const { Plugin } = require("obsidian");

const GALLERY_SELECTOR = ".journal-photo-masonry";
const CARD_SELECTOR = ".journal-photo-masonry .card";
const COVER_SELECTOR = ".card-cover-slideshow";
const BADGE_CLASS = "journal-photo-page-badge";

module.exports = class JournalPhotoPageBadgePlugin extends Plugin {
  onload() {
    this.observers = new WeakMap();
    this.scan = this.scan.bind(this);
    this.scanSoon = this.debounce(this.scan, 100);

    this.registerEvent(this.app.workspace.on("layout-change", this.scanSoon));
    this.registerEvent(this.app.metadataCache.on("changed", this.scanSoon));

    this.bodyObserver = new MutationObserver(this.scanSoon);
    this.bodyObserver.observe(document.body, { childList: true, subtree: true });
    this.register(() => this.bodyObserver.disconnect());

    this.registerInterval(window.setInterval(this.scan, 750));
    this.scan();
  }

  onunload() {
    document.querySelectorAll(`.${BADGE_CLASS}`).forEach((badge) => badge.remove());
  }

  debounce(fn, delay) {
    let timer = null;
    return () => {
      if (timer) window.clearTimeout(timer);
      timer = window.setTimeout(fn, delay);
    };
  }

  scan() {
    if (!document.querySelector(GALLERY_SELECTOR)) return;
    document.querySelectorAll(CARD_SELECTOR).forEach((card) => this.attachCard(card));
  }

  attachCard(card) {
    const cover = card.querySelector(COVER_SELECTOR);
    if (!cover) {
      this.removeBadge(card);
      return;
    }

    const images = this.getEventImages(card);
    if (images.length <= 1) {
      this.removeBadge(card);
      return;
    }

    this.updateBadge(card, images);

    if (!this.observers.has(card)) {
      const observer = new MutationObserver(() => this.updateBadge(card, this.getEventImages(card)));
      observer.observe(cover, {
        attributes: true,
        attributeFilter: ["class", "src"],
        childList: true,
        subtree: true,
      });
      this.observers.set(card, observer);
      this.register(() => observer.disconnect());

      card.addEventListener("click", () => window.setTimeout(() => {
        this.updateBadge(card, this.getEventImages(card));
      }, 80));
      card.addEventListener("touchend", () => window.setTimeout(() => {
        this.updateBadge(card, this.getEventImages(card));
      }, 120));
    }
  }

  getEventImages(card) {
    const notePath = card.getAttribute("data-path");
    if (!notePath) return [];

    const cache = this.app.metadataCache.getCache(notePath);
    const value = cache?.frontmatter?.eventImages || cache?.frontmatter?.eventImage;
    return this.normalizeImageList(value);
  }

  normalizeImageList(value) {
    const values = Array.isArray(value) ? value : value ? [value] : [];
    return values
      .map((item) => this.extractLinkPath(item))
      .filter(Boolean);
  }

  extractLinkPath(value) {
    if (value && typeof value === "object" && value.path) return String(value.path).trim();

    const text = String(value);
    const embedMatch = text.match(/\[\[([^|\]]+)/);
    if (embedMatch) return embedMatch[1].trim();
    return text.replace(/^"|"$/g, "").trim();
  }

  updateBadge(card, images) {
    if (images.length <= 1) {
      this.removeBadge(card);
      return;
    }

    const index = this.getCurrentIndex(card, images);
    const badge = this.ensureBadge(card);
    badge.textContent = `${index + 1} / ${images.length}`;
  }

  getCurrentIndex(card, images) {
    const current = card.querySelector(".card-cover-slideshow .slideshow-img-current");
    const src = decodeURIComponent(current?.getAttribute("src") || current?.src || "");
    if (!src) return 0;

    const found = images.findIndex((path) => {
      const fileName = path.split("/").pop();
      return src.includes(path) || src.includes(encodeURI(path)) || (fileName && src.includes(fileName));
    });

    return found >= 0 ? found : 0;
  }

  ensureBadge(card) {
    let badge = card.querySelector(`.${BADGE_CLASS}`);
    if (!badge) {
      badge = card.ownerDocument.createElement("div");
      badge.className = BADGE_CLASS;
      card.appendChild(badge);
    }
    return badge;
  }

  removeBadge(card) {
    card.querySelector(`.${BADGE_CLASS}`)?.remove();
  }
};
