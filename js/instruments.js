(function () {
  const STORAGE_KEY = 'cavaquinho-site-instrument';
  const EVENT_NAME = 'cavaquinho:instrument-change';
  const SUPPORTED = ['cavaquinho', 'guitar', 'fisarmonica'];
  const OPEN_PITCHES = {
    cavaquinho: [2, 7, 11, 2],
    guitar: [4, 9, 2, 7, 11, 4]
  };
  const LABELS = {
    it: {
      switcher: 'Selettore strumento',
      cavaquinho: 'Cavaco',
      guitar: 'Chitarra',
      fisarmonica: 'Fisarmonica'
    },
    en: {
      switcher: 'Instrument switcher',
      cavaquinho: 'Cavaco',
      guitar: 'Guitar',
      fisarmonica: 'Accordion'
    },
    pt: {
      switcher: 'Seletor de instrumento',
      cavaquinho: 'Cavaco',
      guitar: 'Violao',
      fisarmonica: 'Acordeão'
    }
  };
  const NOTE_PITCH_CLASSES = {
    C: 0, 'C#': 1, Db: 1, D: 2, 'D#': 3, Eb: 3, E: 4, F: 5,
    'F#': 6, Gb: 6, G: 7, 'G#': 8, Ab: 8, A: 9, 'A#': 10, Bb: 10, B: 11
  };
  const SHARP_NAMES = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];

  const cloneOptions = function (options) {
    return (options || []).map((option) => ({
      ...option,
      frets: Array.isArray(option.frets) ? [...option.frets] : [],
      fingers: Array.isArray(option.fingers) ? [...option.fingers] : undefined,
      barre: option.barre ? { ...option.barre } : undefined
    }));
  };

  const getCurrentInstrument = function () {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (SUPPORTED.includes(stored)) {
        return stored;
      }
    } catch (error) {
      // Ignore persistence failures.
    }
    return 'cavaquinho';
  };

  const applyInstrumentToDocument = function (instrument) {
    document.documentElement.dataset.instrument = instrument;
    if (document.body) {
      document.body.dataset.instrument = instrument;
    }
  };

  const setCurrentInstrument = function (instrument) {
    if (!SUPPORTED.includes(instrument)) {
      return;
    }
    try {
      window.localStorage.setItem(STORAGE_KEY, instrument);
    } catch (error) {
      // Ignore persistence failures.
    }
    applyInstrumentToDocument(instrument);
  };

  const getLocalizedLabels = function (lang) {
    return LABELS[lang] || LABELS.it;
  };

  const renderInstrumentSwitchers = function (lang) {
    const labels = getLocalizedLabels(lang);
    const current = getCurrentInstrument();

    document.querySelectorAll('.instrument-switcher').forEach((container) => {
      container.replaceChildren();
      container.setAttribute('aria-label', labels.switcher);

      SUPPORTED.forEach((instrument) => {
        const button = document.createElement('button');
        button.type = 'button';
        button.className = `instrument-link${instrument === current ? ' is-active' : ''}`;
        button.textContent = labels[instrument];
        button.dataset.instrument = instrument;
        if (instrument === current) {
          button.setAttribute('aria-pressed', 'true');
        } else {
          button.setAttribute('aria-pressed', 'false');
        }
        button.addEventListener('click', () => {
          if (instrument === getCurrentInstrument()) {
            return;
          }
          setCurrentInstrument(instrument);
          renderInstrumentSwitchers(lang);
          window.dispatchEvent(new CustomEvent(EVENT_NAME, {
            detail: { instrument }
          }));
        });
        container.append(button);
      });
    });
  };

  const initInstrumentSwitchers = function (lang) {
    const instrument = getCurrentInstrument();
    applyInstrumentToDocument(instrument);
    renderInstrumentSwitchers(lang);
    return instrument;
  };

  const getInstrumentLabel = function (instrument, lang) {
    return getLocalizedLabels(lang)[instrument] || instrument;
  };

  const normalizeNoteName = function (noteName) {
    if (!noteName || !(noteName in NOTE_PITCH_CLASSES)) {
      return noteName;
    }
    return SHARP_NAMES[NOTE_PITCH_CLASSES[noteName]];
  };

  const getPitchClass = function (noteName) {
    return NOTE_PITCH_CLASSES[noteName];
  };

  const getRootFretOnString = function (rootName, openStringName) {
    const rootPc = getPitchClass(rootName);
    const stringPc = getPitchClass(openStringName);
    if (typeof rootPc !== 'number' || typeof stringPc !== 'number') {
      return null;
    }
    return (rootPc - stringPc + 12) % 12;
  };

  const majorAForm = function (rootName) {
    const fret = getRootFretOnString(rootName, 'A');
    if (fret === null) {
      return null;
    }
    if (fret === 0) {
      return { frets: [-1, 0, 2, 2, 2, 0], fingers: [null, 0, 1, 2, 3, 0] };
    }
    return {
      frets: [-1, fret, fret + 2, fret + 2, fret + 2, fret],
      fingers: [null, 1, 2, 3, 4, 1],
      barre: { fret, from: 2, to: 6, finger: 1, labelString: 2 },
      baseFret: fret
    };
  };

  const minorAForm = function (rootName) {
    const fret = getRootFretOnString(rootName, 'A');
    if (fret === null) {
      return null;
    }
    if (fret === 0) {
      return { frets: [-1, 0, 2, 2, 1, 0], fingers: [null, 0, 2, 3, 1, 0] };
    }
    return {
      frets: [-1, fret, fret + 2, fret + 2, fret + 1, fret],
      fingers: [null, 1, 3, 4, 2, 1],
      barre: { fret, from: 2, to: 6, finger: 1, labelString: 2 },
      baseFret: fret
    };
  };

  const dominantSevenAForm = function (rootName) {
    const fret = getRootFretOnString(rootName, 'A');
    if (fret === null) {
      return null;
    }
    if (fret === 0) {
      return { frets: [-1, 0, 2, 0, 2, 0], fingers: [null, 0, 1, 0, 2, 0] };
    }
    return {
      frets: [-1, fret, fret + 2, fret, fret + 2, fret],
      fingers: [null, 1, 3, 1, 4, 1],
      barre: { fret, from: 2, to: 6, finger: 1, labelString: 2 },
      baseFret: fret
    };
  };

  const majorSevenAForm = function (rootName) {
    const fret = getRootFretOnString(rootName, 'A');
    if (fret === null) {
      return null;
    }
    if (fret === 0) {
      return { frets: [-1, 0, 2, 1, 2, 0], fingers: [null, 0, 2, 1, 3, 0] };
    }
    return {
      frets: [-1, fret, fret + 2, fret + 1, fret + 2, fret],
      fingers: [null, 1, 3, 2, 4, 1],
      barre: { fret, from: 2, to: 6, finger: 1, labelString: 2 },
      baseFret: fret
    };
  };

  const minorSevenAForm = function (rootName) {
    const fret = getRootFretOnString(rootName, 'A');
    if (fret === null) {
      return null;
    }
    if (fret === 0) {
      return { frets: [-1, 0, 2, 0, 1, 0], fingers: [null, 0, 2, 0, 1, 0] };
    }
    return {
      frets: [-1, fret, fret + 2, fret, fret + 1, fret],
      fingers: [null, 1, 3, 1, 2, 1],
      barre: { fret, from: 2, to: 6, finger: 1, labelString: 2 },
      baseFret: fret
    };
  };

  const halfDiminishedAForm = function (rootName) {
    const fret = getRootFretOnString(rootName, 'A');
    if (fret === null) {
      return null;
    }
    return {
      frets: [-1, fret, fret + 1, fret, fret + 1, -1],
      fingers: [null, 1, 2, 1, 3, null],
      baseFret: Math.max(1, fret)
    };
  };

  const diminishedSevenAForm = function (rootName) {
    const fret = getRootFretOnString(rootName, 'A');
    if (fret === null || fret === 0) {
      return null;
    }
    return {
      frets: [-1, fret, fret + 1, fret - 1, fret + 1, -1],
      fingers: [null, 2, 3, 1, 4, null],
      baseFret: fret - 1
    };
  };

  const majorEForm = function (rootName) {
    const fret = getRootFretOnString(rootName, 'E');
    if (fret === null) {
      return null;
    }
    if (fret === 0) {
      return { frets: [0, 2, 2, 1, 0, 0], fingers: [0, 2, 3, 1, 0, 0] };
    }
    return {
      frets: [fret, fret + 2, fret + 2, fret + 1, fret, fret],
      fingers: [1, 3, 4, 2, 1, 1],
      barre: { fret, from: 1, to: 6, finger: 1, labelString: 1 },
      baseFret: fret
    };
  };

  const minorEForm = function (rootName) {
    const fret = getRootFretOnString(rootName, 'E');
    if (fret === null) {
      return null;
    }
    if (fret === 0) {
      return { frets: [0, 2, 2, 0, 0, 0], fingers: [0, 1, 2, 0, 0, 0] };
    }
    return {
      frets: [fret, fret + 2, fret + 2, fret, fret, fret],
      fingers: [1, 3, 4, 1, 1, 1],
      barre: { fret, from: 1, to: 6, finger: 1, labelString: 1 },
      baseFret: fret
    };
  };

  const dominantSevenEForm = function (rootName) {
    const fret = getRootFretOnString(rootName, 'E');
    if (fret === null) {
      return null;
    }
    if (fret === 0) {
      return { frets: [0, 2, 0, 1, 0, 0], fingers: [0, 2, 0, 1, 0, 0] };
    }
    return {
      frets: [fret, fret + 2, fret, fret + 1, fret, fret],
      fingers: [1, 3, 1, 2, 1, 1],
      barre: { fret, from: 1, to: 6, finger: 1, labelString: 1 },
      baseFret: fret
    };
  };

  const explicitGuitarOptions = {
    A: [{ frets: [-1, 0, 2, 2, 2, 0], fingers: [null, 0, 1, 2, 3, 0] }],
    A7: [{ frets: [-1, 0, 2, 0, 2, 0], fingers: [null, 0, 1, 0, 2, 0] }],
    Am: [{ frets: [-1, 0, 2, 2, 1, 0], fingers: [null, 0, 2, 3, 1, 0] }],
    Am7: [{ frets: [-1, 0, 2, 0, 1, 0], fingers: [null, 0, 2, 0, 1, 0] }],
    'A#m': [{
      frets: [-1, 1, 3, 3, 2, 1],
      fingers: [null, 1, 3, 4, 2, 1],
      barre: { fret: 1, from: 2, to: 6, finger: 1, labelString: 2 }
    }],
    B: [{
      frets: [-1, 2, 4, 4, 4, 2],
      fingers: [null, 1, 2, 3, 4, 1],
      barre: { fret: 2, from: 2, to: 6, finger: 1, labelString: 2 },
      baseFret: 2
    }],
    B7: [{ frets: [-1, 2, 1, 2, 0, 2], fingers: [null, 2, 1, 3, 0, 4] }],
    Bm7: [{
      frets: [-1, 2, 4, 2, 3, 2],
      fingers: [null, 1, 4, 1, 3, 1],
      barre: { fret: 2, from: 2, to: 6, finger: 1, labelString: 2 },
      baseFret: 2
    }],
    Bm7b5: [{ frets: [-1, 2, 3, 2, 3, -1], fingers: [null, 1, 2, 1, 3, null], baseFret: 2 }],
    Bb: [{
      frets: [-1, 1, 3, 3, 3, 1],
      fingers: [null, 1, 2, 3, 4, 1],
      barre: { fret: 1, from: 2, to: 6, finger: 1, labelString: 2 }
    }],
    C: [
      { label: 'open', frets: [-1, 3, 2, 0, 1, 0], fingers: [null, 3, 2, 0, 1, 0] },
      {
        label: 'barre',
        frets: [-1, 3, 5, 5, 5, 3],
        fingers: [null, 1, 2, 3, 4, 1],
        barre: { fret: 3, from: 2, to: 6, finger: 1, labelString: 2 },
        baseFret: 3
      }
    ],
    C7: [{ frets: [-1, 3, 2, 3, 1, 0], fingers: [null, 3, 2, 4, 1, 0] }],
    Cm: [{
      frets: [-1, 3, 5, 5, 4, 3],
      fingers: [null, 1, 3, 4, 2, 1],
      barre: { fret: 3, from: 2, to: 6, finger: 1, labelString: 2 },
      baseFret: 3
    }],
    'C#': [{
      frets: [-1, 4, 6, 6, 6, 4],
      fingers: [null, 1, 2, 3, 4, 1],
      barre: { fret: 4, from: 2, to: 6, finger: 1, labelString: 2 },
      baseFret: 4
    }],
    'C#m': [{
      frets: [-1, 4, 6, 6, 5, 4],
      fingers: [null, 1, 3, 4, 2, 1],
      barre: { fret: 4, from: 2, to: 6, finger: 1, labelString: 2 },
      baseFret: 4
    }],
    D: [{ frets: [-1, -1, 0, 2, 3, 2], fingers: [null, null, 0, 1, 3, 2] }],
    D7: [{ frets: [-1, -1, 0, 2, 1, 2], fingers: [null, null, 0, 2, 1, 3] }],
    Dm: [{
      frets: [-1, 5, 7, 7, 6, 5],
      fingers: [null, 1, 3, 4, 2, 1],
      barre: { fret: 5, from: 2, to: 6, finger: 1, labelString: 2 },
      baseFret: 5
    }],
    'Db7': [{
      frets: [-1, 4, 6, 4, 6, 4],
      fingers: [null, 1, 3, 1, 4, 1],
      barre: { fret: 4, from: 2, to: 6, finger: 1, labelString: 2 },
      baseFret: 4
    }],
    'D#m': [{
      frets: [-1, 6, 8, 8, 7, 6],
      fingers: [null, 1, 3, 4, 2, 1],
      barre: { fret: 6, from: 2, to: 6, finger: 1, labelString: 2 },
      baseFret: 6
    }],
    E: [{ frets: [0, 2, 2, 1, 0, 0], fingers: [0, 2, 3, 1, 0, 0] }],
    E7: [{ frets: [0, 2, 0, 1, 0, 0], fingers: [0, 2, 0, 1, 0, 0] }],
    E7b9: [{ frets: [0, 2, 0, 1, 0, 1], fingers: [0, 2, 0, 1, 0, 3] }],
    Em: [{ frets: [0, 2, 2, 0, 0, 0], fingers: [0, 1, 2, 0, 0, 0] }],
    Em7: [{ frets: [0, 2, 0, 0, 0, 0], fingers: [0, 2, 0, 0, 0, 0] }],
    Em7b5: [{ frets: [-1, 7, 8, 7, 8, -1], fingers: [null, 1, 2, 1, 3, null], baseFret: 7 }],
    F: [{
      frets: [1, 3, 3, 2, 1, 1],
      fingers: [1, 3, 4, 2, 1, 1],
      barre: { fret: 1, from: 1, to: 6, finger: 1, labelString: 1 }
    }],
    'F#': [{
      frets: [2, 4, 4, 3, 2, 2],
      fingers: [1, 3, 4, 2, 1, 1],
      barre: { fret: 2, from: 1, to: 6, finger: 1, labelString: 1 },
      baseFret: 2
    }],
    'F#7': [{
      frets: [2, 4, 2, 3, 2, 2],
      fingers: [1, 3, 1, 2, 1, 1],
      barre: { fret: 2, from: 1, to: 6, finger: 1, labelString: 1 },
      baseFret: 2
    }],
    'F#m7': [{ frets: [2, -1, 2, 2, 2, -1], fingers: [1, null, 2, 3, 4, null], baseFret: 2 }],
    'F#m7b5': [{ frets: [2, -1, 2, 2, 1, -1], fingers: [1, null, 3, 4, 2, null], baseFret: 1 }],
    'F#dim7': [{ frets: [-1, 9, 10, 8, 10, -1], fingers: [null, 2, 3, 1, 4, null], baseFret: 8 }],
    'F/C': [{ frets: [-1, 3, 3, 2, 1, 1], fingers: [null, 4, 3, 2, 1, 1] }],
    F7: [{
      frets: [1, 3, 1, 2, 1, 1],
      fingers: [1, 4, 1, 3, 1, 1],
      barre: { fret: 1, from: 1, to: 6, finger: 1, labelString: 1 }
    }],
    G: [
      { label: 'open', frets: [3, 2, 0, 0, 0, 3], fingers: [2, 1, 0, 0, 0, 3], baseFret: 1 },
      {
        label: 'barre',
        frets: [3, 5, 5, 4, 3, 3],
        fingers: [1, 3, 4, 2, 1, 1],
        barre: { fret: 3, from: 1, to: 6, finger: 1, labelString: 1 },
        baseFret: 3
      }
    ],
    G7: [{
      frets: [3, 5, 3, 4, 3, 3],
      fingers: [1, 4, 1, 3, 1, 1],
      barre: { fret: 3, from: 1, to: 6, finger: 1, labelString: 1 },
      baseFret: 3
    }],
    Gm: [{
      frets: [3, 5, 5, 3, 3, 3],
      fingers: [1, 3, 4, 1, 1, 1],
      barre: { fret: 3, from: 1, to: 6, finger: 1, labelString: 1 },
      baseFret: 3
    }],
    Gm7: [{
      frets: [3, 5, 3, 3, 3, 3],
      fingers: [1, 3, 1, 1, 1, 1],
      barre: { fret: 3, from: 1, to: 6, finger: 1, labelString: 1 },
      baseFret: 3
    }],
    'G#': [{
      frets: [4, 6, 6, 5, 4, 4],
      fingers: [1, 3, 4, 2, 1, 1],
      barre: { fret: 4, from: 1, to: 6, finger: 1, labelString: 1 },
      baseFret: 4
    }],
    'G#m': [{
      frets: [4, 6, 6, 4, 4, 4],
      fingers: [1, 3, 4, 1, 1, 1],
      barre: { fret: 4, from: 1, to: 6, finger: 1, labelString: 1 },
      baseFret: 4
    }]
  };

  const getDerivedGuitarChordOptions = function (chordName) {
    const match = chordName.match(/^([A-G](?:#|b)?)(.*)$/);
    if (!match) {
      return null;
    }

    const [, rawRoot, suffix] = match;
    const root = normalizeNoteName(rawRoot);

    if (suffix === 'maj7') {
      if (root === 'C') {
        return [{ frets: [-1, 3, 2, 0, 0, 0], fingers: [null, 3, 2, 0, 0, 0] }];
      }
      if (root === 'F') {
        return [{ frets: [1, -1, 3, 2, 1, 0], fingers: [1, null, 4, 3, 2, 0] }];
      }
      if (root === 'G') {
        return [{ frets: [3, 5, 4, 4, 3, 3], fingers: [1, 4, 3, 2, 1, 1], barre: { fret: 3, from: 1, to: 6, finger: 1, labelString: 1 }, baseFret: 3 }];
      }
      return [majorSevenAForm(root)].filter(Boolean);
    }

    if (suffix === 'm7') {
      return [minorSevenAForm(root)].filter(Boolean);
    }

    if (suffix === 'm7b5') {
      return [halfDiminishedAForm(root)].filter(Boolean);
    }

    if (suffix === 'dim7' || suffix === 'dim') {
      return [diminishedSevenAForm(root)].filter(Boolean);
    }

    if (suffix === '7') {
      if (root === 'F') {
        return [explicitGuitarOptions.F7[0]];
      }
      if (root === 'G') {
        return [explicitGuitarOptions.G7[0]];
      }
      return [dominantSevenAForm(root)].filter(Boolean);
    }

    if (suffix === 'm') {
      if (root === 'G') {
        return [explicitGuitarOptions.Gm[0]];
      }
      return [minorAForm(root)].filter(Boolean);
    }

    if (!suffix) {
      if (root === 'F') {
        return [explicitGuitarOptions.F[0]];
      }
      if (root === 'G') {
        return cloneOptions(explicitGuitarOptions.G);
      }
      if (root === 'G#') {
        return [explicitGuitarOptions['G#'][0]];
      }
      return [majorAForm(root)].filter(Boolean);
    }

    return null;
  };

  const getGuitarChordOptions = function (chordName) {
    if (explicitGuitarOptions[chordName]) {
      return cloneOptions(explicitGuitarOptions[chordName]);
    }
    if (chordName === 'Db7') {
      return cloneOptions(explicitGuitarOptions.Db7);
    }
    const derived = getDerivedGuitarChordOptions(chordName);
    return derived ? cloneOptions(derived) : null;
  };

  const getChordOptionsForInstrument = function (chordName, instrument) {
    if (instrument === 'guitar') {
      return getGuitarChordOptions(chordName);
    }
    return null;
  };

  window.CavaquinhoInstruments = {
    supported: SUPPORTED,
    eventName: EVENT_NAME,
    openPitches: OPEN_PITCHES,
    getCurrentInstrument,
    setCurrentInstrument,
    initInstrumentSwitchers,
    renderInstrumentSwitchers,
    getInstrumentLabel,
    getChordOptionsForInstrument
  };
})();
