# Ritmos do Brasil — Claude Code Guidelines

Static HTML site (GitHub Pages). No build step, no framework, no bundler.
All logic is vanilla JS loaded as `<script>` tags; all styles are plain CSS.

## Architecture

### File responsibilities

| File | Responsibility |
|---|---|
| `css/shared.css` | Cross-page chrome: nav, switchers, mobile sheet, CSS vars |
| `css/page.css` | Content-page layout: sidebar, cards, audio player, zone blocks |
| `js/layout.js` | Injects `.site-nav` and empty `#page-title`/`#page-subtitle` via JS |
| `js/i18n.js` | Language detection, translation application, scroll restoration |
| `js/instruments.js` | Instrument switcher UI and chord voicing helpers |
| `js/progress.js` | Progress sidebar (localStorage), scroll spy |
| `js/audio.js` | Tone.js chord playback, BPM control, chord strip rendering |
| `js/data/*.js` | Per-page translation data (EN, PT, IT for every page) |

### Script loading order (bottom of `<body>`)

```
layout.js → i18n.js → instruments.js → chords.js → data/<page>-content.js
→ progress.js → audio.js
→ <script> buildSidebar() + initScrollSpy() </script>   ← explicit, immediate
→ <script> applyBasicPageLocalization(...) </script>     ← fills title/subtitle, may replace mainHtml for EN/PT
```

`buildSidebar()` must run **both** before and (via DOMContentLoaded in progress.js) after `applyBasicPageLocalization`, because EN/PT translations replace `main.content-column` innerHTML.

## Translation system — IMPORTANT

Every change to visible text must be applied to **all three languages**.

### How it works

- `js/data/choro-content.js` (and forro, pagode) export `{ en: {...}, pt: {...}, it: {...} }`.
- `applyBasicPageLocalization(pageId, options)` in i18n.js reads the current language and applies the matching entry.
- For **IT**: only `metaTitle`, `title`, `subtitle` — no `mainHtml` (the static HTML *is* the Italian content).
- For **EN/PT**: includes `mainHtml` which replaces `main.content-column` entirely on language switch.

### Rules

- Never put fallback title/subtitle in `layout.js` or inline scripts. They belong in the data files.
- When adding a new translatable string, add it to all three language entries (`it`, `en`, `pt`) in the same commit.
- `ui.*` fields (tocTitle, open, close, backToTop) have inline IT fallbacks in each page's inline script — only add them to the data file if the fallback is wrong.

## Design system

This project uses a token-based design system. **Before writing any new CSS, check whether a token, class or component already exists.**

### Design tokens — `shared.css :root`

| Token | Value | Purpose |
|---|---|---|
| `--text-body` | `#d4c8b4` | Paragraph and list-item text |
| `--code-text` | `#c8b99a` | `<pre>` and inline `<code>` text |
| `--genre-accent-rgb` | `201,149,42` (default) | Page accent colour as an RGB triple for `rgba()` — **overridden per page** |
| `--section-grad-start` | `34,28,22` (default) | Section card gradient start (warm dark, used by all pages) |
| `--section-grad-end` | `24,18,14` (default) | Section card gradient end (warm dark, used by all pages) |

Never hardcode a hex value that matches an existing token. If a new colour is needed across more than one page, add it as a token first.

### What lives in `page.css` (shared across all content pages)

These rules are already defined and must **not** be duplicated in per-page inline styles:

- `section` — card style (border, border-radius, gradient background via `--section-grad-*` and `--genre-accent-rgb`, box-shadow, animation)
- `@keyframes fadeUp` and `section:nth-child(N)` animation delays
- `h3`, `h4` — typography (Playfair Display for h3, gold uppercase for h4)
- `p`, `li` — colour via `--text-body`
- `pre`, `code`, `pre code` — monospace blocks using `--code-text`
- `blockquote`, `blockquote strong`
- `th`, `td`, `tr:hover td`, `tr:last-child td`
- `header::after` — single radial-gradient using `--genre-accent-rgb`
- `.genre-link.is-active` — active nav state using `--genre-accent-rgb`
- `.back-to-top` — position, size, z-index
- `@media (min-width: 901px)` — two-column `.page-layout` grid

### What must stay in each page's inline `<style>`

Each content page inline style must contain **only**:

1. `:root { }` — the genre accent token **plus** the warm-dark background palette:
   ```css
   /* ONLY this changes per page — all other :root values must match the table below */
   --genre-accent-rgb: R, G, B;   /* choro: 201,149,42 | forro: 92,134,89 | pagode: 90,127,168 | armonia: 123,90,184 */

   /* Warm-dark palette — identical on every page */
   --surface:  #1a1410;
   --card:     #221c16;
   --muted:    #9d8b75;
   --code-bg:  #130f0b;
   ```
   **Critical rule: `--surface`, `--card`, `--muted`, `--code-bg` must always be the warm-dark values above. Never tint them with the genre accent colour.** The genre accent belongs only in `--genre-accent-rgb`.

   All pages share the same warm dark section gradient (`--section-grad-start/end` defaults in `shared.css`). Do not override them per page.

2. `body::before` z-index/opacity tweak (choro, armonia only — makes the noise overlay more visible).

3. **Dual `header::after`** (forro, pagode only) — these pages use two stacked radial gradients (gold + genre colour). This cannot be expressed with a single `--genre-accent-rgb` token, so it stays inline. Do not try to generalise it.

4. **Page-specific component styles** only: `.level-intro`, `.prog-info`, `.inversion-*`, `.study-week`, `.glossary`, `.checklist`, `.song-card` variants, `.chord-gallery` column override, `.diagram-*` SVG classes, `footer` padding overrides, etc.

### Component background rule — IMPORTANT

Page-specific components (`.level-intro`, `.prog-info`, `.study-week`, callout boxes, etc.) must use **neutral dark backgrounds**, never the genre accent colour as a tint:

```css
/* Correct */
background: rgba(0, 0, 0, 0.14);
border: 1px solid var(--border);

/* Wrong — do not do this */
background: rgba(var(--genre-accent-rgb), 0.07);   /* visible colour tint */
border: 1px solid rgba(123, 90, 184, 0.28);        /* hardcoded accent */
```

The genre accent (`--genre-accent-rgb`) is for: the active nav link, the `header::after` glow, and the section card radial accent (8% opacity). Nowhere else.

### CSS conventions

- Add **cross-page** styles to `shared.css`; add **content-page** styles to `page.css`.
- Never add `position: fixed` or `z-index` to `.language-switcher` or `.instrument-switcher` — they live inside `.site-nav .nav-controls` and must be `position: static`.
- CSS custom properties are defined in `shared.css :root`. Use them; don't hardcode hex values in page-specific rules.
- When adding a new content-page component that will appear on more than one page, define it in `page.css` first, not in an inline `<style>`.

## Content zone blocks

`.exercise-block` and `.repertoire-block` wrap **existing** content — they never introduce new text.
Usage:

```html
<div class="exercise-block">
  <span class="zone-tag">Esercizio</span>
  <!-- existing <ol>, <p>, <pre> here -->
</div>

<div class="repertoire-block">
  <span class="zone-tag">Repertorio</span>
  <!-- existing .song-card divs or <ul> here -->
</div>
```

Do not wrap `<section>`, `<h2>`, or `.prog-card` elements with zone blocks.

## Audio player

- `.prog-card[data-chords="C,G7,Am,F"]` — comma-separated chord list drives both playback and pill rendering.
- `audio.js buildChordStrips()` populates `.chord-strip` inside each card on DOMContentLoaded.
- `window.RitmosAudio.toggleProg(header)` is called via `onclick` on `.prog-header`.
- Tone.js is loaded with `defer` in `<head>` — never call Tone APIs outside an `async` function guarded by `await Tone.start()`.

## Scroll restoration on language switch

Handled entirely by `i18n.js`:

1. `saveScrollRestoreState(lang)` → sessionStorage, called on language-link click.
2. The link's `href` is updated to include `#currentAnchorId` before navigation (native hash scroll as primary mechanism).
3. `restoreScrollPosition()` → sessionStorage restore at 0/80/220/450 ms after reload.
4. `getCurrentViewportAnchor()` reads `.sidebar-item.active[data-target]` (the progress sidebar's active item), not the old `.toc-link`.

Do not add scroll logic outside `i18n.js`.

## Cross-page consistency — IMPORTANT

All three pages (choro, forro, pagode) must stay structurally identical in every part that is not page-specific content. Before touching any of these, verify the same change applies to the other two pages.

### `<head>` order (mandatory)

```html
<link rel="stylesheet" href="css/shared.css" />
<link rel="stylesheet" href="css/page.css" />
<link href="https://fonts.googleapis.com/..." rel="stylesheet" />
<script src="Tone.js" defer></script>
<style> ... </style>
```

### Inline script — shared boilerplate

Every page's inline script must follow this exact pattern (only the page name string changes):

```js
// 1. applyBasicPageLocalization
const localization = window.CavaquinhoI18n.applyBasicPageLocalization('PAGE_ID', {
  titleSelector: '#page-title',
  subtitleSelector: '#page-subtitle',
  mainSelector: 'main.content-column',
  footerSelector: 'footer',
  backToTopSelector: '#back-to-top'
});
const lang = localization.lang;
window.CavaquinhoInstruments.initInstrumentSwitchers(lang);
window.CavaquinhoI18n.setupMobilePreferenceSheet(lang);

// 2. syncBackToTop — threshold is always 420
const backToTop = document.getElementById('back-to-top');
const syncBackToTop = () => { backToTop.classList.toggle('is-visible', window.scrollY > 420); };
window.addEventListener('scroll', syncBackToTop, { passive: true });
syncBackToTop();

// 3. Chord system destructuring — always include createSpriteChordSvg and createPianoKeyboardSvg
const { createGuitarChordSvg, createReferenceChordSvg,
  createSpriteChordSvg: _createSpriteChordSvg, createPianoKeyboardSvg, createHoverCardSystem } = window.CavaquinhoChords;
const chordSpritePath = 'assets/chords/cavaco-diagrams.svg?v=20260523g';
const createSpriteChordSvg = (chord) => _createSpriteChordSvg(chord, chordSpritePath);

// 4. createHoverCardSystem — always pass getInstrumentOptions
const { show: showHoverCard, hide: hideHoverCard, position: positionHoverCard } =
  createHoverCardSystem({ renderDiagram: renderChordDiagram, getInstrumentOptions });
```

### renderChordDiagram — mandatory structure

All pages must use the same three-branch pattern (fisarmonica first, then guitar, then cavaquinho):

```js
const renderChordDiagram = (container, chord) => {
  container.replaceChildren();
  const instrument = getSelectedInstrument();
  if (instrument === 'fisarmonica') {
    container.append(createPianoKeyboardSvg(chord.name));
    return;
  }
  const instrumentOptions = getInstrumentOptions(chord);
  if (instrument === 'guitar') {
    if (instrumentOptions.length === 0) return;
    // ... createGuitarChordSvg branch
    return;
  }
  if (instrumentOptions.length === 0) {
    container.append(createSpriteChordSvg(chord)); // sprite fallback
    return;
  }
  // ... createReferenceChordSvg branch
};
```

### chord-token — always `<span>` with tabIndex and mousemove

```js
const token = document.createElement('span');
token.className = 'chord-token';
token.textContent = chordName;
token.tabIndex = 0;
token.dataset.chordName = chord.name;
token.addEventListener('mouseenter', (event) => {
  showHoverCard(token, chord, { x: event.clientX, y: event.clientY });
});
token.addEventListener('mousemove', (event) => { positionHoverCard(event.clientX, event.clientY); });
token.addEventListener('mouseleave', hideHoverCard);
token.addEventListener('focus', () => { showHoverCard(token, chord); });
token.addEventListener('blur', hideHoverCard);
```

Never use `<button>` for chord tokens (different browser behavior, breaks hover card positioning).

### enhanceChordText scope

Always apply per section, not on the whole `main`:

```js
document.querySelectorAll('main section').forEach((section) => {
  enhanceChordText(section);
});
```

### enhanceChordText acceptNode — must accept `pre, p, li`, not just `pre`

The `acceptNode` filter inside `enhanceChordText` must always accept text nodes whose parent is inside `pre`, `p`, **or** `li`. Accepting only `pre` was the original implementation, but when chord progressions were converted from `<pre>` blocks to interactive prog-cards, all `<pre>` content disappeared — leaving hover with nothing to attach to.

Correct pattern (same exclusion list across all pages):

```js
acceptNode(node) {
  if (!node.textContent || !node.textContent.trim()) return NodeFilter.FILTER_REJECT;
  const el = node.parentElement;
  if (!el || el.closest('.chord-hover-card, .prog-header, .bpm-bar, .site-nav')) return NodeFilter.FILTER_REJECT;
  return el.closest('pre, p, li') ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
}
```

Each page adds its own additional exclusions (e.g. `#project-chords` in choro.html, `.chord-gallery` in forro.html) before the final line — that is fine. What must never change is `'pre, p, li'` as the acceptance selector.

### chordPattern regex escaping

```js
const chordPattern = new RegExp(
  `(^|[^A-Za-z0-9#/])(${hoverableChordNames
    .map((name) => name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'))
    .join('|')})(?=$|[^A-Za-z0-9#/])`, 'g');
```

Use `'\\$&'` (single escape in the replacement string). Double-escaping (`'\\\\$&'`) breaks matching for chord names containing special characters.

## Known bugs — rules derived from past fixes

### Never tint `--surface`, `--card`, `--muted`, `--code-bg` with the genre accent

When creating a new page, these four tokens must always be the warm-dark values — **never** derived from the genre accent colour. This mistake was made on `armonia.html`: the violet `--genre-accent-rgb` was used to tint the background tokens, making the entire page purple.

Wrong:
```css
--surface: #13101b;  /* violet-dark */
--card:    #1c1728;  /* violet-dark */
--muted:   #9080ae;  /* violet */
```

Correct (warm-dark, same on every page):
```css
--surface: #1a1410;
--card:    #221c16;
--muted:   #9d8b75;
--code-bg: #130f0b;
```

The genre accent shows only in `--genre-accent-rgb`, which drives the nav active state, header glow, and section card radial accent (8% opacity). Not in backgrounds or text.

### `<header id="top">` must come before `.bpm-bar`

`layout.js` uses `document.body.insertBefore(siteNav, header)` where `header = document.getElementById('top')`. If `.bpm-bar` appears before `<header id="top">` in the HTML, the nav is injected after the BPM bar instead of at the top.

Correct order in `<body>`:
```html
<header id="top" data-page="PAGE_ID"></header>
<div class="bpm-bar"> ... </div>
```

### Never pass selectors to `applyBasicPageLocalization` for elements that don't exist

The `options` object passed to `applyBasicPageLocalization` only contains `titleSelector`, `subtitleSelector`, `mainSelector`, `footerSelector`, `backToTopSelector`. Do not add other selectors (e.g. `tocTitleSelector`, `tocSummarySelector`) — they pointed to elements removed in an earlier refactor and were silently ignored, masking the fact that the elements were gone.

### IT translations belong in data files, not in `layout.js`

When Italian is selected, `applyBasicPageLocalization` reads the `it` entry from `js/data/<page>-content.js` and fills `#page-title` / `#page-subtitle`. If the `it` entry is missing, the title will be empty. The fix is always to add the `it` entry to the data file — never to add a fallback in `layout.js` or the inline script.

### Language navigation must use programmatic navigation, not `<a>` href update

On mobile browsers (especially Brave), updating `link.href` in a click handler is unreliable: the browser may capture the href at `touchstart` before the handler runs, or strip URL parameters as a privacy feature. Always use:

```js
link.addEventListener('click', (e) => {
  e.preventDefault();
  if (targetLang === lang) return;
  // ... build url ...
  saveScrollRestoreState(targetLang);
  setCurrentLanguage(targetLang);
  window.location.href = url;
});
```

### Language persistence requires both localStorage and sessionStorage

Brave and some privacy browsers strip `?lang=` URL parameters before the page loads. `setCurrentLanguage` writes to **both** `localStorage` and `sessionStorage`. `getCurrentLanguage` must read in order: URL param → localStorage → sessionStorage → `navigator.language`. If you modify the language persistence logic, keep all three sources.

### Scroll anchor detection uses `.sidebar-item.active`, not `.toc-link`

`getCurrentViewportAnchor()` in `i18n.js` reads `.sidebar-item.active[data-target]` (the progress sidebar). The old `.toc-link[aria-current="true"]` selector referred to a TOC component that was removed. Never reference `.toc-link` anywhere in the codebase.

### Sidebar anchors must use parent `<section id>`, not auto-generated h2 IDs

`buildSidebar()` in `progress.js` reads each `h2.section-title` and uses its parent `section[id]` as the anchor target (`data-target`, `href`, `check-btn data-id`). `initScrollSpy()` observes those `section[id]` elements too.

**Do not** revert this to assigning auto-generated `mod-N` IDs to the h2 elements. When a language switch replaces `main.content-column` innerHTML, the old h2 elements (with `mod-N` IDs) are destroyed. `restoreScrollPosition()` fires immediately after the replacement; at 0 ms, `getElementById('mod-2')` returns `null` because the new h2s have no IDs until DOMContentLoaded re-runs `buildSidebar()`. This race causes the page to scroll to the top instead of restoring position.

Section IDs (`s1`, `s2`, … `s6`) are declared in the static HTML **and** in the EN/PT `mainHtml` strings in `js/data/*-content.js`, so `getElementById('s1')` resolves correctly at 0 ms delay, eliminating the race.

When adding a new section to any page, give its `<section>` a stable `id` (e.g. `id="s7"`) and use the same id in all three language versions of `mainHtml`.

### `buildSidebar()` and `initScrollSpy()` must be called explicitly before `applyBasicPageLocalization`

Each page needs an explicit inline script block before the `applyBasicPageLocalization` call:

```html
<script>
  if (window.RitmosProgress) {
    window.RitmosProgress.buildSidebar();
    window.RitmosProgress.initScrollSpy();
  }
</script>
```

`progress.js` also calls these on `DOMContentLoaded` — that second call handles EN/PT language switches that replace `main.content-column` innerHTML. Both calls are needed.

## What not to do

- Do not add `<nav>` or title elements directly to the HTML — `layout.js` generates them.
- Do not duplicate CSS between `shared.css` and `page.css`.
- Do not add IT fallbacks in `layout.js` — use the data files.
- Do not call `buildSidebar()` or `buildChordStrips()` inside `applyBasicPageLocalization` — the existing DOMContentLoaded path already handles it.
- Do not add content (text, sections, exercises) that is not derived from existing material in the page.
- Do not skip updating all three language entries when adding a translatable field.
- Do not apply a structural change (head order, chord-token, regex, renderChordDiagram, syncBackToTop) to only one page — always check all three.
