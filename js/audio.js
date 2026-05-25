(function () {
  'use strict';

  const CHORD_NOTES = {
    C:"C4,E4,G4,C5", G:"G3,B3,D4,G4", F:"F3,A3,C4,F4",
    D:"D3,F#3,A3,D4", E:"E3,G#3,B3,E4", A:"A3,C#4,E4,A4",
    Bb:"A#3,D4,F4,A#4", B:"B3,D#4,F#4,B4",
    Am:"A3,C4,E4,A4", Em:"E3,G3,B3,E4", Dm:"D3,F3,A3,D4",
    Bm:"B3,D4,F#4,B4", "C#m":"C#4,E4,G#4,C#5",
    "F#m":"F#3,A3,C#4,F#4", "G#m":"G#3,B3,D#4,G#4",
    "D#m":"D#4,F#4,A#4,D#5",
    G7:"G3,B3,D4,F4", D7:"D3,F#3,A3,C4", A7:"A3,C#4,E4,G4",
    E7:"E3,G#3,B3,D4", B7:"B3,D#4,F#4,A4", C7:"C4,E4,G4,A#4",
    F7:"F3,A3,C4,D#4", "C#7":"C#4,F4,G#4,B4",
    Am7:"A3,C4,E4,G4", Em7:"E3,G3,B3,D4", Dm7:"D3,F3,A3,C4",
    Bm7:"B3,D4,F#4,A4", "F#m7":"F#3,A3,C#4,E4",
    Cmaj7:"C4,E4,G4,B4", Gmaj7:"G3,B3,D4,F#4", Fmaj7:"F3,A3,C4,E4",
    Fm:"F3,G#3,C4,F4",
  };

  function getNotesFor(chord) {
    const entry = CHORD_NOTES[chord];
    return entry ? entry.split(',') : ['C4'];
  }

  const METRONOME_ID = '__metronome__';

  let synth = null;
  let activeId = null;
  let activeLoop = null;

  function ensureSynth() {
    if (!synth) {
      synth = new Tone.PolySynth(Tone.Synth, {
        oscillator: { type: 'triangle' },
        envelope: { attack: 0.02, decay: 0.3, sustain: 0.4, release: 1.2 },
        volume: -10,
      }).toDestination();
    }
  }

  function syncMetronomeBtn(active) {
    const btn = document.getElementById('metronome-btn');
    if (btn) btn.classList.toggle('active', active);
  }

  function stopActive() {
    if (activeLoop) { activeLoop.stop(); activeLoop.dispose(); activeLoop = null; }
    Tone.Transport.stop();
    Tone.Transport.cancel();
    if (synth) { try { synth.releaseAll(); } catch(e){} }
    if (activeId) {
      if (activeId === METRONOME_ID) {
        syncMetronomeBtn(false);
      } else {
        const prev = document.querySelector('[data-prog-id="' + activeId + '"]');
        if (prev) {
          prev.classList.remove('playing');
          const btn = prev.querySelector('.play-btn');
          if (btn) btn.classList.remove('active');
          prev.querySelectorAll('.chord-pill').forEach(function(p) { p.classList.remove('lit'); });
        }
      }
      activeId = null;
    }
  }

  async function toggleMetronome() {
    if (typeof Tone === 'undefined') return;
    if (activeId === METRONOME_ID) { stopActive(); return; }
    stopActive();
    await Tone.start();
    ensureSynth();
    const bpmEl = document.getElementById('bpm-value');
    Tone.Transport.bpm.value = parseInt(bpmEl ? bpmEl.textContent : '80', 10);
    activeId = METRONOME_ID;
    let beat = 0;
    activeLoop = new Tone.Sequence(function(time) {
      const note = beat === 0 ? 'C5' : 'G4';
      synth.triggerAttackRelease(note, '32n', time);
      beat = (beat + 1) % 4;
    }, [0, 1, 2, 3], '4n');
    activeLoop.start(0);
    Tone.Transport.start();
    syncMetronomeBtn(true);
  }

  async function toggleProg(header) {
    if (typeof Tone === 'undefined') return;
    await Tone.start();
    const card = header.closest('.prog-card');
    const id = card.dataset.progId;
    if (activeId === id) { stopActive(); return; }
    stopActive();

    const chords = card.dataset.chords.split(',');
    ensureSynth();
    const bpmEl = document.getElementById('bpm-value');
    Tone.Transport.bpm.value = parseInt(bpmEl ? bpmEl.textContent : '80', 10);

    activeId = id;
    card.classList.add('playing');
    const btn = card.querySelector('.play-btn');
    if (btn) btn.classList.add('active');

    let idx = 0;
    activeLoop = new Tone.Sequence(function(time, chord) {
      const capturedIdx = idx;
      Tone.getDraw().schedule(function() {
        card.querySelectorAll('.chord-pill').forEach(function(p) { p.classList.remove('lit'); });
        const pills = card.querySelectorAll('.chord-pill');
        if (pills[capturedIdx]) pills[capturedIdx].classList.add('lit');
        idx = (idx + 1) % chords.length;
      }, time);
      getNotesFor(chord).forEach(function(note, ni) {
        synth.triggerAttackRelease(note, '4n', time + ni * 0.025);
      });
    }, chords, '2n');

    activeLoop.start(0);
    Tone.Transport.start();
  }

  function updateBpm(v) {
    const el = document.getElementById('bpm-value');
    if (el) el.textContent = v + ' BPM';
    if (typeof Tone !== 'undefined') Tone.Transport.bpm.value = parseInt(v, 10);
  }

  function buildChordStrips() {
    document.querySelectorAll('.prog-card').forEach(function(card, i) {
      if (!card.dataset.progId) card.dataset.progId = 'prog-' + i;
      const chords = (card.dataset.chords || '').split(',');
      const strip = card.querySelector('.chord-strip');
      if (!strip) return;
      strip.innerHTML = chords.map(function(ch, ci) {
        return (ci > 0 ? '<span class="bar-sep">|</span>' : '') +
          '<span class="chord-pill">' + ch + '</span>';
      }).join('');
    });
  }

  window.RitmosAudio = { toggleProg, toggleMetronome, stopActive, updateBpm, buildChordStrips };

  document.addEventListener('DOMContentLoaded', function() {
    buildChordStrips();
  });
})();
