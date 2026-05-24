(function () {
  const STORAGE_KEY = 'cavaquinho-site-language';
  const SCROLL_RESTORE_KEY = 'cavaquinho-site-scroll-restore';
  const SUPPORTED = ['it', 'en', 'pt'];
  const NATIVE_LABELS = {
    it: 'Italiano',
    en: 'English',
    pt: 'Português'
  };
  const SWITCHER_LABELS = {
    it: 'Selettore lingua',
    en: 'Language switcher',
    pt: 'Seletor de idioma'
  };
  const MOBILE_PREFERENCES_LABELS = {
    it: {
      trigger: 'Aa',
      triggerAria: 'Apri lingua e strumento',
      title: 'Lingua e strumento',
      close: 'Chiudi',
      language: 'Lingua',
      instrument: 'Strumento'
    },
    en: {
      trigger: 'Aa',
      triggerAria: 'Open language and instrument',
      title: 'Language and instrument',
      close: 'Close',
      language: 'Language',
      instrument: 'Instrument'
    },
    pt: {
      trigger: 'Aa',
      triggerAria: 'Abrir idioma e instrumento',
      title: 'Idioma e instrumento',
      close: 'Fechar',
      language: 'Idioma',
      instrument: 'Instrumento'
    }
  };

  const NOTE_NAMES = {
    it: {
      C: 'Do',
      'C#': 'Do diesis',
      Db: 'Re bemolle',
      D: 'Re',
      'D#': 'Re diesis',
      Eb: 'Mi bemolle',
      E: 'Mi',
      F: 'Fa',
      'F#': 'Fa diesis',
      Gb: 'Sol bemolle',
      G: 'Sol',
      'G#': 'Sol diesis',
      Ab: 'La bemolle',
      A: 'La',
      'A#': 'La diesis',
      Bb: 'Si bemolle',
      B: 'Si'
    },
    en: {
      C: 'C',
      'C#': 'C sharp',
      Db: 'D flat',
      D: 'D',
      'D#': 'D sharp',
      Eb: 'E flat',
      E: 'E',
      F: 'F',
      'F#': 'F sharp',
      Gb: 'G flat',
      G: 'G',
      'G#': 'G sharp',
      Ab: 'A flat',
      A: 'A',
      'A#': 'A sharp',
      Bb: 'B flat',
      B: 'B'
    },
    pt: {
      C: 'Dó',
      'C#': 'Dó sustenido',
      Db: 'Ré bemol',
      D: 'Ré',
      'D#': 'Ré sustenido',
      Eb: 'Mi bemol',
      E: 'Mi',
      F: 'Fá',
      'F#': 'Fá sustenido',
      Gb: 'Sol bemol',
      G: 'Sol',
      'G#': 'Sol sustenido',
      Ab: 'Lá bemol',
      A: 'Lá',
      'A#': 'Lá sustenido',
      Bb: 'Si bemol',
      B: 'Si'
    }
  };

  const QUALITIES = {
    it: {
      major: 'maggiore',
      minor: 'minore',
      seventh: 'settima',
      majorSeventh: 'settima maggiore',
      minorSeventh: 'minore settima',
      diminished: 'diminuito',
      diminishedSeventh: 'settima diminuita',
      halfDiminished: 'semidiminuito',
      flatNine: 'settima bemolle nove',
      suspended: 'sus4',
      sixth: 'sesta',
      ninth: 'nona',
      flatFive: 'quinta diminuita',
      sharpFive: 'quinta aumentata',
      slash: 'con basso in'
    },
    en: {
      major: 'major',
      minor: 'minor',
      seventh: 'seventh',
      majorSeventh: 'major seventh',
      minorSeventh: 'minor seventh',
      diminished: 'diminished',
      diminishedSeventh: 'diminished seventh',
      halfDiminished: 'half-diminished',
      flatNine: 'seventh flat nine',
      suspended: 'sus4',
      sixth: 'sixth',
      ninth: 'ninth',
      flatFive: 'flat five',
      sharpFive: 'sharp five',
      slash: 'with bass on'
    },
    pt: {
      major: 'maior',
      minor: 'menor',
      seventh: 'sétima',
      majorSeventh: 'sétima maior',
      minorSeventh: 'menor com sétima',
      diminished: 'diminuto',
      diminishedSeventh: 'sétima diminuta',
      halfDiminished: 'meio diminuto',
      flatNine: 'sétima com nona bemol',
      suspended: 'sus4',
      sixth: 'sexta',
      ninth: 'nona',
      flatFive: 'quinta diminuta',
      sharpFive: 'quinta aumentada',
      slash: 'com baixo em'
    }
  };

  const getCurrentLanguage = function () {
    const params = new URLSearchParams(window.location.search);
    const fromUrl = params.get('lang');
    if (SUPPORTED.includes(fromUrl)) {
      try {
        window.localStorage.setItem(STORAGE_KEY, fromUrl);
      } catch (error) {
        // Ignore persistence failures.
      }
      return fromUrl;
    }

    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (SUPPORTED.includes(stored)) {
        return stored;
      }
    } catch (error) {
      // Ignore storage failures.
    }

    const navigatorLang = (window.navigator.language || 'it').slice(0, 2).toLowerCase();
    return SUPPORTED.includes(navigatorLang) ? navigatorLang : 'it';
  };

  const setCurrentLanguage = function (lang) {
    if (!SUPPORTED.includes(lang)) {
      return;
    }
    try {
      window.localStorage.setItem(STORAGE_KEY, lang);
    } catch (error) {
      // Ignore persistence failures.
    }
  };

  const getScrollRestoreState = function () {
    try {
      const rawState = window.sessionStorage.getItem(SCROLL_RESTORE_KEY);
      if (!rawState) {
        return null;
      }
      return JSON.parse(rawState);
    } catch (error) {
      return null;
    }
  };

  const clearScrollRestoreState = function () {
    try {
      window.sessionStorage.removeItem(SCROLL_RESTORE_KEY);
    } catch (error) {
      // Ignore persistence failures.
    }
  };

  const getHeadingCandidates = function () {
    return Array.from(
      document.querySelectorAll('main section[id], main [id][data-toc-title], h1[id], h2[id], h3[id]')
    ).filter((node) => node.id);
  };

  const getCurrentViewportAnchor = function () {
    const activeTocLink = document.querySelector('.toc-link[aria-current="true"]');
    if (activeTocLink) {
      const activeSectionId = activeTocLink.getAttribute('href')?.replace(/^#/, '');
      if (activeSectionId) {
        const activeSection = document.getElementById(activeSectionId);
        if (activeSection) {
          return activeSection;
        }
      }
    }

    const scrollTop = window.scrollY;
    const headingCandidates = getHeadingCandidates();
    let currentAnchor = null;

    headingCandidates.forEach((node) => {
      if (node.getBoundingClientRect().top + window.scrollY <= scrollTop + 12) {
        currentAnchor = node;
      }
    });

    return currentAnchor;
  };

  const saveScrollRestoreState = function (targetLang) {
    if (!SUPPORTED.includes(targetLang)) {
      return;
    }

    const anchor = getCurrentViewportAnchor();
    const anchorTop = anchor ? anchor.getBoundingClientRect().top + window.scrollY : 0;
    const restoreState = {
      pathname: window.location.pathname,
      targetLang,
      scrollX: window.scrollX,
      scrollY: window.scrollY,
      anchorId: anchor ? anchor.id : null,
      offsetWithinAnchor: anchor ? Math.max(0, window.scrollY - anchorTop) : null
    };

    try {
      window.sessionStorage.setItem(SCROLL_RESTORE_KEY, JSON.stringify(restoreState));
    } catch (error) {
      // Ignore persistence failures.
    }
  };

  const restoreScrollPosition = function () {
    const restoreState = getScrollRestoreState();
    if (!restoreState || restoreState.pathname !== window.location.pathname) {
      return;
    }

    const scrollToSavedPosition = function () {
      let targetY = Number.isFinite(restoreState.scrollY) ? restoreState.scrollY : 0;

      if (restoreState.anchorId) {
        const anchor = document.getElementById(restoreState.anchorId);
        if (anchor) {
          const anchorTop = anchor.getBoundingClientRect().top + window.scrollY;
          const offsetWithinAnchor = Number.isFinite(restoreState.offsetWithinAnchor)
            ? restoreState.offsetWithinAnchor
            : 0;
          targetY = anchorTop + offsetWithinAnchor;
        }
      }

      const maxScrollY = Math.max(
        0,
        document.documentElement.scrollHeight - window.innerHeight
      );

      window.scrollTo({
        left: Number.isFinite(restoreState.scrollX) ? restoreState.scrollX : 0,
        top: Math.min(Math.max(0, targetY), maxScrollY)
      });
    };

    [0, 80, 220, 450].forEach((delay) => {
      window.setTimeout(scrollToSavedPosition, delay);
    });

    window.setTimeout(clearScrollRestoreState, 900);

    window.addEventListener(
      'load',
      () => {
        scrollToSavedPosition();
        window.setTimeout(clearScrollRestoreState, 600);
      },
      { once: true }
    );
  };

  const buildUrlForLanguage = function (href, lang) {
    if (!href || href.startsWith('#') || href.startsWith('mailto:') || href.startsWith('tel:')) {
      return href;
    }
    const url = new URL(href, window.location.href);
    if (url.origin !== window.location.origin) {
      return href;
    }
    if (!url.pathname.endsWith('.html')) {
      return href;
    }
    if (SUPPORTED.includes(lang)) {
      url.searchParams.set('lang', lang);
    }
    return `${url.pathname}${url.search}${url.hash}`;
  };

  const decorateLocalLinks = function (root, lang) {
    root.querySelectorAll('a[href]').forEach((anchor) => {
      if (anchor.closest('.language-switcher')) {
        return;
      }
      const href = anchor.getAttribute('href');
      const localizedHref = buildUrlForLanguage(href, lang);
      if (localizedHref && localizedHref !== href) {
        anchor.setAttribute('href', localizedHref);
      }
    });
  };

  const renderLanguageSwitchers = function (lang) {
    document.querySelectorAll('.language-switcher').forEach((container) => {
      container.replaceChildren();
      container.setAttribute('aria-label', SWITCHER_LABELS[lang] || SWITCHER_LABELS.it);
      SUPPORTED.forEach((targetLang) => {
        const link = document.createElement('a');
        link.className = `language-link${targetLang === lang ? ' is-active' : ''}`;
        link.textContent = targetLang.toUpperCase();
        link.href = buildUrlForLanguage(window.location.href, targetLang);
        if (targetLang === lang) {
          link.setAttribute('aria-current', 'true');
        }
        link.addEventListener('click', () => {
          if (targetLang !== lang) {
            saveScrollRestoreState(targetLang);
          }
          setCurrentLanguage(targetLang);
        });
        container.append(link);
      });
    });
  };

  const setupMobilePreferenceSheet = function (lang) {
    const locale = SUPPORTED.includes(lang) ? lang : getCurrentLanguage();
    const labels = MOBILE_PREFERENCES_LABELS[locale] || MOBILE_PREFERENCES_LABELS.it;
    let root = document.querySelector('.mobile-preferences');
    if (!root) {
      root = document.createElement('div');
      root.className = 'mobile-preferences';
      root.innerHTML = `
        <button
          class="mobile-preferences-trigger"
          type="button"
          aria-expanded="false"
          aria-controls="mobile-preferences-sheet"
        ></button>
        <div class="mobile-preferences-sheet" id="mobile-preferences-sheet" hidden>
          <button class="mobile-preferences-backdrop" type="button" tabindex="-1" aria-hidden="true"></button>
          <div class="mobile-preferences-panel" role="dialog" aria-modal="true" aria-labelledby="mobile-preferences-title">
            <div class="mobile-preferences-header">
              <h2 class="mobile-preferences-title" id="mobile-preferences-title"></h2>
              <button class="mobile-preferences-close" type="button"></button>
            </div>
            <div class="mobile-preferences-group">
              <p class="mobile-preferences-label" id="mobile-preferences-language-label"></p>
              <div class="language-switcher mobile-preferences-switcher" aria-labelledby="mobile-preferences-language-label"></div>
            </div>
            <div class="mobile-preferences-group">
              <p class="mobile-preferences-label" id="mobile-preferences-instrument-label"></p>
              <div class="instrument-switcher mobile-preferences-switcher" aria-labelledby="mobile-preferences-instrument-label"></div>
            </div>
          </div>
        </div>
      `;
      document.body.append(root);
    }

    const trigger = root.querySelector('.mobile-preferences-trigger');
    const sheet = root.querySelector('.mobile-preferences-sheet');
    const closeButton = root.querySelector('.mobile-preferences-close');
    const backdrop = root.querySelector('.mobile-preferences-backdrop');
    const title = root.querySelector('.mobile-preferences-title');
    const languageLabel = root.querySelector('#mobile-preferences-language-label');
    const instrumentLabel = root.querySelector('#mobile-preferences-instrument-label');
    const mobileQuery = window.matchMedia('(max-width: 640px)');

    const setOpen = (isOpen) => {
      if (!trigger || !sheet) {
        return;
      }
      trigger.setAttribute('aria-expanded', String(isOpen));
      sheet.hidden = !isOpen;
      document.body.classList.toggle('mobile-preferences-open', isOpen);
    };

    if (trigger) {
      trigger.textContent = labels.trigger;
      trigger.setAttribute('aria-label', labels.triggerAria);
    }
    if (title) {
      title.textContent = labels.title;
    }
    if (closeButton) {
      closeButton.textContent = labels.close;
      closeButton.setAttribute('aria-label', labels.close);
    }
    if (languageLabel) {
      languageLabel.textContent = labels.language;
    }
    if (instrumentLabel) {
      instrumentLabel.textContent = labels.instrument;
    }

    if (!root.dataset.bound) {
      trigger?.addEventListener('click', () => {
        const isOpen = trigger.getAttribute('aria-expanded') === 'true';
        setOpen(!isOpen);
      });
      closeButton?.addEventListener('click', () => setOpen(false));
      backdrop?.addEventListener('click', () => setOpen(false));
      root.addEventListener('click', (event) => {
        if (event.target.closest('.instrument-link')) {
          window.setTimeout(() => setOpen(false), 80);
        }
      });
      window.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
          setOpen(false);
        }
      });
      mobileQuery.addEventListener('change', (event) => {
        if (!event.matches) {
          setOpen(false);
        }
      });
      root.dataset.bound = 'true';
    }

    renderLanguageSwitchers(locale);
    if (window.CavaquinhoInstruments?.renderInstrumentSwitchers) {
      window.CavaquinhoInstruments.renderInstrumentSwitchers(locale);
    }
  };

  const setDocumentLanguage = function (lang) {
    document.documentElement.lang = lang;
    document.body.dataset.lang = lang;
  };

  const getPageTranslation = function (pageName, lang) {
    if (!window.CavaquinhoSiteContent || !window.CavaquinhoSiteContent[pageName]) {
      return null;
    }
    return window.CavaquinhoSiteContent[pageName][lang] || null;
  };

  const describeChord = function (chordName, lang) {
    const locale = SUPPORTED.includes(lang) ? lang : getCurrentLanguage();
    const noteNames = NOTE_NAMES[locale];
    const qualities = QUALITIES[locale];
    const match = chordName.match(/^([A-G](?:#|b)?)(.*?)(?:\/([A-G](?:#|b)?))?$/);
    if (!match) {
      return chordName;
    }

    const [, root, suffix, bass] = match;
    let quality = qualities.major;

    if (/^maj7$/i.test(suffix)) {
      quality = qualities.majorSeventh;
    } else if (/^m7b5$/i.test(suffix) || /ø/i.test(suffix)) {
      quality = qualities.halfDiminished;
    } else if (/^dim7$/i.test(suffix)) {
      quality = qualities.diminishedSeventh;
    } else if (/^dim$/i.test(suffix)) {
      quality = qualities.diminished;
    } else if (/^m7$/i.test(suffix)) {
      quality = qualities.minorSeventh;
    } else if (/^m$/i.test(suffix)) {
      quality = qualities.minor;
    } else if (/^7b9$/i.test(suffix)) {
      quality = qualities.flatNine;
    } else if (/^7$/i.test(suffix)) {
      quality = qualities.seventh;
    } else if (/^sus4$/i.test(suffix)) {
      quality = qualities.suspended;
    } else if (/^6$/i.test(suffix)) {
      quality = qualities.sixth;
    } else if (/^9$/i.test(suffix)) {
      quality = qualities.ninth;
    } else if (/^b5$/i.test(suffix)) {
      quality = qualities.flatFive;
    } else if (/^#5$/i.test(suffix) || /^\+$/i.test(suffix) || /^aug$/i.test(suffix)) {
      quality = qualities.sharpFive;
    }

    const rootLabel = noteNames[root] || root;
    if (!bass) {
      return `${rootLabel} ${quality}`.trim();
    }

    const bassLabel = noteNames[bass] || bass;
    return `${rootLabel} ${quality} ${qualities.slash} ${bassLabel}`.trim();
  };

  const applyBasicPageLocalization = function (pageName, options) {
    const lang = getCurrentLanguage();
    setCurrentLanguage(lang);
    setDocumentLanguage(lang);
    renderLanguageSwitchers(lang);
    decorateLocalLinks(document, lang);

    const translation = getPageTranslation(pageName, lang);
    if (!translation) {
      restoreScrollPosition();
      return { lang, translation: null };
    }

    if (translation.metaTitle) {
      document.title = translation.metaTitle;
    }
    if (options.titleSelector && translation.title) {
      const titleNode = document.querySelector(options.titleSelector);
      if (titleNode) {
        titleNode.textContent = translation.title;
      }
    }
    if (options.subtitleSelector && translation.subtitle) {
      const subtitleNode = document.querySelector(options.subtitleSelector);
      if (subtitleNode) {
        subtitleNode.textContent = translation.subtitle;
      }
    }
    if (options.footerSelector && translation.footer) {
      const footerNode = document.querySelector(options.footerSelector);
      if (footerNode) {
        footerNode.textContent = translation.footer;
      }
    }
    if (options.heroSelector && translation.heroHtml) {
      const heroNode = document.querySelector(options.heroSelector);
      if (heroNode) {
        heroNode.innerHTML = translation.heroHtml;
      }
    }
    if (options.mainSelector && translation.mainHtml) {
      const mainNode = document.querySelector(options.mainSelector);
      if (mainNode) {
        mainNode.innerHTML = translation.mainHtml;
      }
    }
    if (options.tocTitleSelector && translation.ui && translation.ui.tocTitle) {
      const tocTitleNode = document.querySelector(options.tocTitleSelector);
      if (tocTitleNode) {
        tocTitleNode.textContent = translation.ui.tocTitle;
      }
    }
    if (options.tocSummarySelector && translation.ui && translation.ui.tocSummary) {
      const tocSummaryNode = document.querySelector(options.tocSummarySelector);
      if (tocSummaryNode) {
        tocSummaryNode.textContent = translation.ui.tocSummary;
      }
    }
    if (options.backToTopSelector && translation.ui && translation.ui.backToTop) {
      const backToTopNode = document.querySelector(options.backToTopSelector);
      if (backToTopNode) {
        backToTopNode.setAttribute('aria-label', translation.ui.backToTop);
      }
    }
    if (translation.nav) {
      const chooseLink = document.querySelector('[data-nav="choose"]');
      const choroLink = document.querySelector('[data-nav="choro"]');
      const forroLink = document.querySelector('[data-nav="forro"]');
      const pagodeLink = document.querySelector('[data-nav="pagode"]');
      if (chooseLink && translation.nav.choose) {
        chooseLink.textContent = translation.nav.choose;
      }
      if (choroLink && translation.nav.choro) {
        choroLink.textContent = translation.nav.choro;
      }
      if (forroLink && translation.nav.forro) {
        forroLink.textContent = translation.nav.forro;
      }
      if (pagodeLink && translation.nav.pagode) {
        pagodeLink.textContent = translation.nav.pagode;
      }
    }

    decorateLocalLinks(document, lang);
    restoreScrollPosition();
    return { lang, translation };
  };

  window.CavaquinhoI18n = {
    supported: SUPPORTED,
    nativeLabels: NATIVE_LABELS,
    getCurrentLanguage,
    setCurrentLanguage,
    buildUrlForLanguage,
    decorateLocalLinks,
    renderLanguageSwitchers,
    setDocumentLanguage,
    getPageTranslation,
    describeChord,
    setupMobilePreferenceSheet,
    saveScrollRestoreState,
    restoreScrollPosition,
    applyBasicPageLocalization
  };
})();
