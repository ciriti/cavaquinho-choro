(function () {
  const STORAGE_KEY = 'cavaquinho-site-language';
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
          setCurrentLanguage(targetLang);
        });
        container.append(link);
      });
    });
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
      if (chooseLink && translation.nav.choose) {
        chooseLink.textContent = translation.nav.choose;
      }
      if (choroLink && translation.nav.choro) {
        choroLink.textContent = translation.nav.choro;
      }
      if (forroLink && translation.nav.forro) {
        forroLink.textContent = translation.nav.forro;
      }
    }

    decorateLocalLinks(document, lang);
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
    applyBasicPageLocalization
  };
})();
