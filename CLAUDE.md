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

## CSS conventions

- Add **cross-page** styles to `shared.css`; add **content-page** styles to `page.css`.
- Never add `position: fixed` or `z-index` to `.language-switcher` or `.instrument-switcher` — they live inside `.site-nav .nav-controls` and must be `position: static`.
- CSS custom properties are defined in `shared.css :root`. Use them; don't hardcode hex values in page-specific rules.

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

// 3. Chord system destructuring — always include createSpriteChordSvg
const { createGuitarChordSvg, createReferenceChordSvg,
  createSpriteChordSvg: _createSpriteChordSvg, createHoverCardSystem } = window.CavaquinhoChords;
const chordSpritePath = 'assets/chords/cavaco-diagrams.svg?v=20260523g';
const createSpriteChordSvg = (chord) => _createSpriteChordSvg(chord, chordSpritePath);

// 4. createHoverCardSystem — always pass getInstrumentOptions
const { show: showHoverCard, hide: hideHoverCard, position: positionHoverCard } =
  createHoverCardSystem({ renderDiagram: renderChordDiagram, getInstrumentOptions });
```

### renderChordDiagram — mandatory structure

All three pages must use the same two-branch pattern:

```js
const renderChordDiagram = (container, chord) => {
  container.replaceChildren();
  const instrument = getSelectedInstrument();
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

### chordPattern regex escaping

```js
const chordPattern = new RegExp(
  `(^|[^A-Za-z0-9#/])(${hoverableChordNames
    .map((name) => name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'))
    .join('|')})(?=$|[^A-Za-z0-9#/])`, 'g');
```

Use `'\\$&'` (single escape in the replacement string). Double-escaping (`'\\\\$&'`) breaks matching for chord names containing special characters.

## What not to do

- Do not add `<nav>` or title elements directly to the HTML — `layout.js` generates them.
- Do not duplicate CSS between `shared.css` and `page.css`.
- Do not add IT fallbacks in `layout.js` — use the data files.
- Do not call `buildSidebar()` or `buildChordStrips()` inside `applyBasicPageLocalization` — the existing DOMContentLoaded path already handles it.
- Do not add content (text, sections, exercises) that is not derived from existing material in the page.
- Do not skip updating all three language entries when adding a translatable field.
- Do not apply a structural change (head order, chord-token, regex, renderChordDiagram, syncBackToTop) to only one page — always check all three.
