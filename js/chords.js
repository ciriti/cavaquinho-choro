/* Shared chord diagram rendering — used by choro.html, forro.html, pagode.html */
(function () {
  'use strict';

  const referenceOpenPitches = [2, 7, 11, 2];

  const notePitchClasses = {
    C: 0, 'C#': 1, Db: 1, D: 2, 'D#': 3, Eb: 3, E: 4, F: 5,
    'F#': 6, Gb: 6, G: 7, 'G#': 8, Ab: 8, A: 9, 'A#': 10, Bb: 10, B: 11
  };

  const getChordDescriptor = (chordName) => {
    const match = chordName.match(/^([A-G](?:#|b)?)(.*)$/);
    if (!match) return null;
    const [, root, suffix] = match;
    let thirdInterval = 4;
    let fifthInterval = 7;
    if (/^m(?!aj)/i.test(suffix) || /dim/i.test(suffix)) thirdInterval = 3;
    if (/dim|b5|ø/i.test(suffix)) fifthInterval = 6;
    else if (/#5|aug/i.test(suffix)) fifthInterval = 8;
    return {
      rootPc: notePitchClasses[root],
      thirdPc: (notePitchClasses[root] + thirdInterval) % 12,
      fifthPc: (notePitchClasses[root] + fifthInterval) % 12
    };
  };

  const getRoleMarkers = (frets, chordName, openPitches = referenceOpenPitches) => {
    const descriptor = getChordDescriptor(chordName);
    if (!descriptor) return { root: new Set(), third: new Set(), fifth: new Set() };
    const root = new Set();
    const third = new Set();
    const fifth = new Set();
    frets.forEach((fret, index) => {
      if (typeof fret !== 'number' || fret < 0) return;
      const pitchClass = (openPitches[index] + fret) % 12;
      if (pitchClass === descriptor.rootPc) root.add(index);
      else if (pitchClass === descriptor.thirdPc) third.add(index);
      else if (pitchClass === descriptor.fifthPc) fifth.add(index);
    });
    return { root, third, fifth };
  };

  const appendRoleRing = (svg, x, y, role) => {
    const ring = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    ring.setAttribute('cx', x);
    ring.setAttribute('cy', y);
    ring.setAttribute('r', '10.2');
    ring.setAttribute('class',
      role === 'root' ? 'diagram-role-root'
      : role === 'third' ? 'diagram-role-third'
      : 'diagram-role-fifth'
    );
    svg.append(ring);
  };

  const getFirstPlayedStringIndex = (frets) =>
    frets.findIndex((fret) => typeof fret === 'number' && fret >= 0);

  const svgEl = (tag) => document.createElementNS('http://www.w3.org/2000/svg', tag);

  /* 6-string guitar diagram */
  const createGuitarChordSvg = (shape, chordName) => {
    const svg = svgEl('svg');
    const stringsX = [18, 36, 54, 72, 90, 108];
    const lineY = [20, 48, 76, 104, 132];
    const frets = shape.frets || [];
    const positiveFrets = frets.filter((f) => typeof f === 'number' && f > 0);
    const minFret = positiveFrets.length ? Math.min(...positiveFrets) : 1;
    const maxFret = positiveFrets.length ? Math.max(...positiveFrets) : 1;
    const baseFret = shape.baseFret || ((maxFret > 4 || minFret > 3) ? minFret : 1);
    const markers = getRoleMarkers(frets, chordName, window.CavaquinhoInstruments.openPitches.guitar);
    const firstPlayedString = getFirstPlayedStringIndex(frets);

    svg.setAttribute('viewBox', '0 0 126 198');
    svg.setAttribute('role', 'img');
    svg.setAttribute('aria-label', `Diagramma dell'accordo ${chordName} per chitarra`);

    const append = (node) => { svg.append(node); return node; };
    const line = (x1, y1, x2, y2, stroke, width) => {
      const el = svgEl('line');
      el.setAttribute('x1', x1); el.setAttribute('y1', y1);
      el.setAttribute('x2', x2); el.setAttribute('y2', y2);
      el.setAttribute('stroke', stroke); el.setAttribute('stroke-width', width);
      el.setAttribute('stroke-linecap', 'round');
      append(el);
    };

    stringsX.forEach((x) => line(x, lineY[0], x, lineY[4], 'rgba(240, 230, 208, 0.92)', 2.1));
    lineY.forEach((y, i) => line(stringsX[0], y, stringsX[5], y, 'rgba(240, 230, 208, 0.92)', i === 0 && baseFret === 1 ? 4.6 : 2.1));

    if (baseFret > 1 && !shape.hideBaseFretLabel) {
      const label = svgEl('text');
      label.setAttribute('x', '10'); label.setAttribute('y', '17');
      label.setAttribute('text-anchor', 'end');
      label.setAttribute('fill', 'rgba(240, 230, 208, 0.82)');
      label.setAttribute('font-family', 'Source Serif 4, Georgia, serif');
      label.setAttribute('font-size', '11'); label.setAttribute('font-weight', '700');
      label.setAttribute('paint-order', 'stroke');
      label.setAttribute('stroke', 'rgba(22, 24, 24, 0.94)');
      label.setAttribute('stroke-width', '3'); label.setAttribute('stroke-linejoin', 'round');
      label.textContent = `${baseFret}ª`;
      append(label);
    }

    if (shape.barre) {
      const relFret = baseFret === 1 ? shape.barre.fret : shape.barre.fret - baseFret + 1;
      if (relFret > 0 && relFret < lineY.length) {
        const rect = svgEl('rect');
        const y = (lineY[relFret - 1] + lineY[relFret]) / 2 - 6;
        rect.setAttribute('x', stringsX[shape.barre.from - 1] - 8);
        rect.setAttribute('y', y);
        rect.setAttribute('width', stringsX[shape.barre.to - 1] - stringsX[shape.barre.from - 1] + 16);
        rect.setAttribute('height', '12'); rect.setAttribute('rx', '6');
        rect.setAttribute('fill', '#3c4040');
        append(rect);
      }
    }

    frets.forEach((fret, index) => {
      if (typeof fret !== 'number' || fret <= 0) return;
      const relFret = baseFret === 1 ? fret : fret - baseFret + 1;
      if (relFret <= 0 || relFret >= lineY.length) return;
      const cy = (lineY[relFret - 1] + lineY[relFret]) / 2;
      if (markers.root.has(index)) appendRoleRing(svg, stringsX[index], cy, 'root');
      else if (markers.third.has(index)) appendRoleRing(svg, stringsX[index], cy, 'third');
      else if (markers.fifth.has(index)) appendRoleRing(svg, stringsX[index], cy, 'fifth');
      const circle = svgEl('circle');
      circle.setAttribute('cx', stringsX[index]); circle.setAttribute('cy', cy);
      circle.setAttribute('r', '8.5');
      circle.setAttribute('fill', 'rgba(255,255,255,0.96)');
      circle.setAttribute('stroke', 'rgba(34, 28, 22, 0.78)');
      circle.setAttribute('stroke-width', '1.1');
      append(circle);
      let finger = shape.fingers && shape.fingers[index];
      if (!finger && shape.barre && shape.barre.finger && shape.barre.fret === fret) {
        const li = (shape.barre.labelString || shape.barre.from) - 1;
        if (index === li) finger = shape.barre.finger;
      }
      if (finger) {
        const lbl = svgEl('text');
        lbl.setAttribute('x', stringsX[index]); lbl.setAttribute('y', cy + 3.4);
        lbl.setAttribute('fill', '#6a6a6a');
        lbl.setAttribute('font-family', 'Source Serif 4, Georgia, serif');
        lbl.setAttribute('font-size', '9.4'); lbl.setAttribute('font-weight', '700');
        lbl.setAttribute('text-anchor', 'middle');
        lbl.textContent = `${finger}`;
        append(lbl);
      }
    });

    stringsX.forEach((x, index) => {
      const fret = frets[index];
      if (typeof fret !== 'number' || fret < 0) {
        const muted = svgEl('text');
        muted.setAttribute('x', x); muted.setAttribute('y', '182');
        muted.setAttribute('fill', 'rgba(220, 214, 201, 0.88)');
        muted.setAttribute('font-family', 'Source Serif 4, Georgia, serif');
        muted.setAttribute('font-size', '12'); muted.setAttribute('font-weight', '700');
        muted.setAttribute('text-anchor', 'middle');
        muted.textContent = '×';
        append(muted);
        return;
      }
      if (fret === 0) {
        if (markers.root.has(index)) appendRoleRing(svg, x, 178, 'root');
        else if (markers.third.has(index)) appendRoleRing(svg, x, 178, 'third');
        else if (markers.fifth.has(index)) appendRoleRing(svg, x, 178, 'fifth');
      }
      const dot = svgEl('circle');
      dot.setAttribute('cx', x); dot.setAttribute('cy', '178');
      dot.setAttribute('r', '5.3');
      dot.setAttribute('stroke', 'rgba(240, 230, 208, 0.92)');
      dot.setAttribute('stroke-width', '1.5');
      dot.setAttribute('fill', index === firstPlayedString ? 'rgba(200, 200, 200, 0.92)' : 'transparent');
      append(dot);
    });

    return svg;
  };

  /* 4-string cavaquinho reference diagram */
  const createReferenceChordSvg = (shape, chordName, openPitches = referenceOpenPitches) => {
    const svg = svgEl('svg');
    const stringsX = [18, 36, 54, 72];
    const lineY = [20, 46, 72, 98, 124];
    const frets = shape.frets || [];
    const markers = getRoleMarkers(frets, chordName, openPitches);
    const positiveFrets = frets.filter((f) => f > 0);
    const minFret = positiveFrets.length ? Math.min(...positiveFrets) : 1;
    const maxFret = positiveFrets.length ? Math.max(...positiveFrets) : 1;
    const baseFret = shape.baseFret || ((maxFret > 4 || minFret > 3) ? minFret : 1);

    svg.setAttribute('viewBox', '0 0 94 186');
    svg.setAttribute('role', 'img');
    svg.setAttribute('aria-label', `Diagramma dell'accordo ${chordName} per cavaquinho`);

    const append = (node) => { svg.append(node); return node; };
    const line = (x1, y1, x2, y2, stroke, width) => {
      const el = svgEl('line');
      el.setAttribute('x1', x1); el.setAttribute('y1', y1);
      el.setAttribute('x2', x2); el.setAttribute('y2', y2);
      el.setAttribute('stroke', stroke); el.setAttribute('stroke-width', width);
      el.setAttribute('stroke-linecap', 'round');
      append(el);
    };

    stringsX.forEach((x) => line(x, lineY[0], x, lineY[4], 'rgba(240, 230, 208, 0.92)', 2.2));
    lineY.forEach((y, i) => line(stringsX[0], y, stringsX[3], y, 'rgba(240, 230, 208, 0.92)', i === 0 && baseFret === 1 ? 5 : 2.2));

    if (baseFret > 1 && !shape.hideBaseFretLabel) {
      const label = svgEl('text');
      label.setAttribute('x', '8'); label.setAttribute('y', '16');
      label.setAttribute('text-anchor', 'end');
      label.setAttribute('fill', 'rgba(240, 230, 208, 0.82)');
      label.setAttribute('font-family', 'Source Serif 4, Georgia, serif');
      label.setAttribute('font-size', '11'); label.setAttribute('font-weight', '700');
      label.setAttribute('paint-order', 'stroke');
      label.setAttribute('stroke', 'rgba(22, 24, 24, 0.94)');
      label.setAttribute('stroke-width', '3'); label.setAttribute('stroke-linejoin', 'round');
      label.textContent = `${baseFret}ª`;
      append(label);
    }

    if (shape.barre) {
      const relFret = baseFret === 1 ? shape.barre.fret : shape.barre.fret - baseFret + 1;
      if (relFret > 0 && relFret < lineY.length) {
        const rect = svgEl('rect');
        const y = (lineY[relFret - 1] + lineY[relFret]) / 2 - 6;
        rect.setAttribute('x', stringsX[shape.barre.from - 1] - 6);
        rect.setAttribute('y', y);
        rect.setAttribute('width', stringsX[shape.barre.to - 1] - stringsX[shape.barre.from - 1] + 12);
        rect.setAttribute('height', '12'); rect.setAttribute('rx', '6');
        rect.setAttribute('fill', '#3c4040');
        append(rect);
      }
    }

    frets.forEach((fret, index) => {
      if (!fret) return;
      const relFret = baseFret === 1 ? fret : fret - baseFret + 1;
      if (relFret <= 0 || relFret >= lineY.length) return;
      const cy = (lineY[relFret - 1] + lineY[relFret]) / 2;
      if (markers.root.has(index)) appendRoleRing(svg, stringsX[index], cy, 'root');
      else if (markers.third.has(index)) appendRoleRing(svg, stringsX[index], cy, 'third');
      else if (markers.fifth.has(index)) appendRoleRing(svg, stringsX[index], cy, 'fifth');
      const circle = svgEl('circle');
      circle.setAttribute('cx', stringsX[index]); circle.setAttribute('cy', cy);
      circle.setAttribute('r', '8.5');
      circle.setAttribute('fill', 'rgba(255,255,255,0.96)');
      circle.setAttribute('stroke', 'rgba(34, 28, 22, 0.78)');
      circle.setAttribute('stroke-width', '1.1');
      append(circle);
      let finger = shape.fingers && shape.fingers[index];
      if (!finger && shape.barre && shape.barre.finger && shape.barre.fret === fret) {
        const li = (shape.barre.labelString || shape.barre.from) - 1;
        if (index === li) finger = shape.barre.finger;
      }
      if (finger) {
        const lbl = svgEl('text');
        lbl.setAttribute('x', stringsX[index]); lbl.setAttribute('y', cy + 3.4);
        lbl.setAttribute('fill', '#6a6a6a');
        lbl.setAttribute('font-family', 'Source Serif 4, Georgia, serif');
        lbl.setAttribute('font-size', '9.5'); lbl.setAttribute('font-weight', '700');
        lbl.setAttribute('text-anchor', 'middle');
        lbl.textContent = `${finger}`;
        append(lbl);
      }
    });

    stringsX.forEach((x, index) => {
      if (frets[index] === 0) {
        if (markers.root.has(index)) appendRoleRing(svg, x, 168, 'root');
        else if (markers.third.has(index)) appendRoleRing(svg, x, 168, 'third');
        else if (markers.fifth.has(index)) appendRoleRing(svg, x, 168, 'fifth');
      }
      const dot = svgEl('circle');
      dot.setAttribute('cx', x); dot.setAttribute('cy', '168');
      dot.setAttribute('r', '5.4');
      dot.setAttribute('stroke', 'rgba(240, 230, 208, 0.92)');
      dot.setAttribute('stroke-width', '1.5');
      dot.setAttribute('fill', index === getFirstPlayedStringIndex(frets) ? 'rgba(200, 200, 200, 0.92)' : 'transparent');
      append(dot);
    });

    return svg;
  };

  /* Sprite-sheet based diagram (cavaquinho only) */
  const createSpriteChordSvg = (chord, spritePath) => {
    const svg = svgEl('svg');
    const use = svgEl('use');
    svg.setAttribute('viewBox', '0 0 94 168');
    svg.setAttribute('role', 'img');
    svg.setAttribute('aria-label', `Diagramma dell'accordo ${chord.name} per cavaquinho`);
    use.setAttribute('href', `${spritePath}#${chord.symbolId}`);
    use.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', `${spritePath}#${chord.symbolId}`);
    svg.append(use);
    return svg;
  };

  /*
   * createHoverCardSystem({ renderDiagram, getInstrumentOptions? })
   *
   * Factory that creates the floating hover card DOM and returns show/hide/position
   * helpers. Pass renderDiagram (page-specific) and optionally getInstrumentOptions
   * to toggle the has-multiple-options class.
   */
  const createHoverCardSystem = ({ renderDiagram, getInstrumentOptions = null } = {}) => {
    const hoverCard = document.createElement('div');
    const hoverBanner = document.createElement('div');
    const hoverTitle = document.createElement('div');
    const hoverDiagram = document.createElement('div');
    const hoverCaption = document.createElement('div');
    hoverCard.className = 'chord-hover-card';
    hoverBanner.className = 'chord-hover-banner';
    hoverTitle.className = 'chord-hover-title';
    hoverDiagram.className = 'chord-hover-diagram';
    hoverCaption.className = 'chord-hover-caption';
    hoverCard.append(hoverBanner, hoverTitle, hoverDiagram, hoverCaption);
    document.body.append(hoverCard);

    const position = (x, y) => {
      const margin = 18;
      const rect = hoverCard.getBoundingClientRect();
      let left = x + 26;
      let top = y - 22;
      if (left + rect.width > window.innerWidth - margin) left = x - rect.width - 26;
      if (top + rect.height > window.innerHeight - margin) top = window.innerHeight - rect.height - margin;
      if (top < margin) top = margin;
      if (left < margin) left = margin;
      hoverCard.style.left = `${left}px`;
      hoverCard.style.top = `${top}px`;
    };

    const show = (trigger, chord, pos) => {
      hoverTitle.textContent = chord.name;
      hoverCaption.textContent = chord.caption;
      if (getInstrumentOptions) {
        hoverCard.classList.toggle('has-multiple-options', getInstrumentOptions(chord).length > 1);
      }
      if (renderDiagram) renderDiagram(hoverDiagram, chord);
      hoverCard.classList.add('is-visible');
      if (pos) { position(pos.x, pos.y); return; }
      const rect = trigger.getBoundingClientRect();
      position(rect.right, rect.top + rect.height / 2);
    };

    const hide = () => hoverCard.classList.remove('is-visible');

    return { hoverCard, hoverTitle, hoverDiagram, hoverCaption, show, hide, position };
  };

  window.CavaquinhoChords = {
    referenceOpenPitches,
    getRoleMarkers,
    appendRoleRing,
    getFirstPlayedStringIndex,
    createGuitarChordSvg,
    createReferenceChordSvg,
    createSpriteChordSvg,
    createHoverCardSystem
  };
})();
