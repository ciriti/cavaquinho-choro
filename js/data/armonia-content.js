window.CavaquinhoSiteContent = window.CavaquinhoSiteContent || {};
window.CavaquinhoSiteContent.armonia = {
  it: {
    metaTitle: 'Ritmos do Brasil — Armonia',
    title: 'Ritmos do Brasil — Armonia',
    subtitle: 'Progressioni armoniche in Sol maggiore · cinque livelli dal giro base alla riarmonia avanzata'
  },
  en: {
    metaTitle: 'Ritmos do Brasil — Harmony',
    title: 'Ritmos do Brasil — Harmony',
    subtitle: 'Harmonic progressions in G major · five levels from basic cadences to advanced reharmonization',
    footer: 'Study harmony with method. Each progression is a musical sentence — learn to hear where it wants to go.',
    mainHtml: `
      <section id="s1" data-toc-description="V7–I, I–V7–I, I–IV–V7–I: the three fundamental tonal functions">
        <span class="section-num">Level 1</span>
        <h2 class="section-title">The Foundation</h2>
        <div class="level-intro">
          <p>A harmonic progression is a sequence of chords with an internal logic. Each chord plays a role: <strong>tonic (home)</strong>, <strong>subdominant (expansion)</strong>, <strong>dominant (tension)</strong>. In G major these roles are: G = tonic (I), C = subdominant (IV), D7 = dominant (V7). These three functions must become automatic before adding complexity.</p>
        </div>

        <h3>The three basic functions in G major</h3>
        <pre>
Tonic (I)          = G   — stability, home, point of arrival
Subdominant (IV)   = C   — expansion, outward pull
Dominant (V7)      = D7  — tension, magnetic pull toward the tonic
        </pre>

        <h4>Progression 1 · V7 – I</h4>
        <div class="prog-card" data-chords="D7,G,D7,G">
          <div class="prog-header" onclick="window.RitmosAudio && window.RitmosAudio.toggleProg(this)">
            <button class="play-btn" aria-label="Play this progression">
              <svg class="icon-play" width="12" height="14" viewBox="0 0 12 14" fill="none"><path d="M2 1l9 6-9 6V1z" fill="currentColor"/></svg>
              <svg class="icon-stop" width="10" height="12" viewBox="0 0 10 12" fill="none"><rect x="1" y="1" width="3" height="10" rx="1" fill="currentColor"/><rect x="6" y="1" width="3" height="10" rx="1" fill="currentColor"/></svg>
            </button>
            <div class="prog-meta">
              <span class="prog-name">V7 – I</span>
              <span class="prog-sub">the authentic cadence · universal closing gesture</span>
            </div>
            <span class="pulse-dot"></span>
          </div>
          <div class="chord-strip"></div>
        </div>
        <div class="prog-info">
          <ul>
            <li><strong>Feeling:</strong> Pure resolution — "coming home" after tension</li>
            <li><strong>When used:</strong> End of every musical phrase, section, or piece. Everywhere, always.</li>
            <li><strong>Why it works:</strong> D7 contains a tritone (F#–C) that expands toward B and G — the internal tension of the seventh chord dissolves into the most natural step in the key.</li>
          </ul>
        </div>

        <h4>Progression 2 · I – V7 – I</h4>
        <div class="prog-card" data-chords="G,D7,G,D7,G">
          <div class="prog-header" onclick="window.RitmosAudio && window.RitmosAudio.toggleProg(this)">
            <button class="play-btn" aria-label="Play this progression">
              <svg class="icon-play" width="12" height="14" viewBox="0 0 12 14" fill="none"><path d="M2 1l9 6-9 6V1z" fill="currentColor"/></svg>
              <svg class="icon-stop" width="10" height="12" viewBox="0 0 10 12" fill="none"><rect x="1" y="1" width="3" height="10" rx="1" fill="currentColor"/><rect x="6" y="1" width="3" height="10" rx="1" fill="currentColor"/></svg>
            </button>
            <div class="prog-meta">
              <span class="prog-name">I – V7 – I</span>
              <span class="prog-sub">the binary loop · tension and resolution</span>
            </div>
            <span class="pulse-dot"></span>
          </div>
          <div class="chord-strip"></div>
        </div>
        <div class="prog-info">
          <ul>
            <li><strong>Feeling:</strong> One step out and a return — the smallest complete musical story</li>
            <li><strong>When used:</strong> First exercises, minimalist accompaniment, question-and-answer phrases</li>
            <li><strong>Why it works:</strong> Tonic establishes home, dominant creates departure, tonic recalls. This is the breath of tonal music.</li>
          </ul>
        </div>

        <h4>Progression 3 · I – IV – V7 – I</h4>
        <div class="prog-card" data-chords="G,C,D7,G">
          <div class="prog-header" onclick="window.RitmosAudio && window.RitmosAudio.toggleProg(this)">
            <button class="play-btn" aria-label="Play this progression">
              <svg class="icon-play" width="12" height="14" viewBox="0 0 12 14" fill="none"><path d="M2 1l9 6-9 6V1z" fill="currentColor"/></svg>
              <svg class="icon-stop" width="10" height="12" viewBox="0 0 10 12" fill="none"><rect x="1" y="1" width="3" height="10" rx="1" fill="currentColor"/><rect x="6" y="1" width="3" height="10" rx="1" fill="currentColor"/></svg>
            </button>
            <div class="prog-meta">
              <span class="prog-name">I – IV – V7 – I</span>
              <span class="prog-sub">the three-chord loop · folk, MPB, rock, everything</span>
            </div>
            <span class="pulse-dot"></span>
          </div>
          <div class="chord-strip"></div>
        </div>
        <div class="prog-info">
          <ul>
            <li><strong>Feeling:</strong> A three-stage journey with return — complete and satisfying</li>
            <li><strong>When used:</strong> 90% of folk and popular songs worldwide — from sertaneja to rock, MPB to blues</li>
            <li><strong>Why it works:</strong> IV adds a downward pull (subdominant force), completing the tonal arc I→IV→V→I across all three main functions.</li>
          </ul>
        </div>

        <pre>
Practice: loop each progression at 70 BPM with the metronome.
Chords to master: G  C  D7
        </pre>
      </section>

      <section id="s2" data-toc-description="I–vi–IV–V7, I–IV–I–V7, I–vi–ii–V7: four chords, full emotional range">
        <span class="section-num">Level 2</span>
        <h2 class="section-title">The Four-Chord Loop</h2>
        <div class="level-intro">
          <p>Adding vi (Em) — the relative minor — introduces a darker emotional shade using the same notes as G major. <strong>Four chords cover roughly 70% of Brazilian popular songs.</strong> With them you can express joy (I), bittersweet nostalgia (vi), direction (IV), and tension (V7).</p>
        </div>

        <h4>Progression 4 · I – vi – IV – V7</h4>
        <div class="prog-card" data-chords="G,Em,C,D7">
          <div class="prog-header" onclick="window.RitmosAudio && window.RitmosAudio.toggleProg(this)">
            <button class="play-btn" aria-label="Play this progression">
              <svg class="icon-play" width="12" height="14" viewBox="0 0 12 14" fill="none"><path d="M2 1l9 6-9 6V1z" fill="currentColor"/></svg>
              <svg class="icon-stop" width="10" height="12" viewBox="0 0 10 12" fill="none"><rect x="1" y="1" width="3" height="10" rx="1" fill="currentColor"/><rect x="6" y="1" width="3" height="10" rx="1" fill="currentColor"/></svg>
            </button>
            <div class="prog-meta">
              <span class="prog-name">I – vi – IV – V7</span>
              <span class="prog-sub">the nostalgia progression · ballads, bolero, bossa</span>
            </div>
            <span class="pulse-dot"></span>
          </div>
          <div class="chord-strip"></div>
        </div>
        <div class="prog-info">
          <ul>
            <li><strong>Feeling:</strong> Sweet nostalgia, romance, memory — Em brings shade without drama</li>
            <li><strong>When used:</strong> Romantic ballads, bolero, slow songs, bossa nova</li>
            <li><strong>Why it works:</strong> I→vi is a descent by third (same harmony, different color). The "slide" from major to relative minor creates subtle emotional tension before IV and V7.</li>
          </ul>
        </div>

        <h4>Progression 5 · I – IV – I – V7</h4>
        <div class="prog-card" data-chords="G,C,G,D7">
          <div class="prog-header" onclick="window.RitmosAudio && window.RitmosAudio.toggleProg(this)">
            <button class="play-btn" aria-label="Play this progression">
              <svg class="icon-play" width="12" height="14" viewBox="0 0 12 14" fill="none"><path d="M2 1l9 6-9 6V1z" fill="currentColor"/></svg>
              <svg class="icon-stop" width="10" height="12" viewBox="0 0 10 12" fill="none"><rect x="1" y="1" width="3" height="10" rx="1" fill="currentColor"/><rect x="6" y="1" width="3" height="10" rx="1" fill="currentColor"/></svg>
            </button>
            <div class="prog-meta">
              <span class="prog-name">I – IV – I – V7</span>
              <span class="prog-sub">the samba pulse · natural oscillation</span>
            </div>
            <span class="pulse-dot"></span>
          </div>
          <div class="chord-strip"></div>
        </div>
        <div class="prog-info">
          <ul>
            <li><strong>Feeling:</strong> Circular, swinging, effortless energy — natural to dance to</li>
            <li><strong>When used:</strong> Samba accompaniment, basic baião, fast songs in 2/4 or 4/4</li>
            <li><strong>Why it works:</strong> The I–IV oscillation creates an internal harmonic "breath" before the V7 departure. This is the shoulder movement of Brazilian music.</li>
          </ul>
        </div>

        <h4>Progression 6 · I – vi – ii – V7</h4>
        <div class="prog-card" data-chords="G,Em,Am,D7">
          <div class="prog-header" onclick="window.RitmosAudio && window.RitmosAudio.toggleProg(this)">
            <button class="play-btn" aria-label="Play this progression">
              <svg class="icon-play" width="12" height="14" viewBox="0 0 12 14" fill="none"><path d="M2 1l9 6-9 6V1z" fill="currentColor"/></svg>
              <svg class="icon-stop" width="10" height="12" viewBox="0 0 10 12" fill="none"><rect x="1" y="1" width="3" height="10" rx="1" fill="currentColor"/><rect x="6" y="1" width="3" height="10" rx="1" fill="currentColor"/></svg>
            </button>
            <div class="prog-meta">
              <span class="prog-name">I – vi – ii – V7</span>
              <span class="prog-sub">the jazz turnaround · bossa nova, jazz standards</span>
            </div>
            <span class="pulse-dot"></span>
          </div>
          <div class="chord-strip"></div>
        </div>
        <div class="prog-info">
          <ul>
            <li><strong>Feeling:</strong> Fluid, circular, sophisticated — each chord leads naturally to the next</li>
            <li><strong>When used:</strong> Jazz standards, bossa nova, the "turnaround" that closes and restarts a form</li>
            <li><strong>Why it works:</strong> I→vi→ii→V7→I is motion by fourths (G→Em→Am→D7→G). The bass descends by thirds: G–E–A–D–G. Maximum harmonic fluency from four diatonic chords.</li>
          </ul>
        </div>

        <pre>
New chords: Em  Am
Full set so far: G  C  D7  Em  Am
        </pre>
      </section>

      <section id="s3" data-toc-description="Secondary dominants: B7→Em, E7→Am, A7→D7 — the circle of fifths">
        <span class="section-num">Level 3</span>
        <h2 class="section-title">Secondary Dominants</h2>
        <div class="level-intro">
          <p>A secondary dominant is a seventh chord built on the fifth of any chord in the key. In G major: <strong>B7</strong> prepares Em (III7→vi), <strong>E7</strong> prepares Am (VI7→ii), <strong>A7</strong> prepares D7 (II7→V7). Each one temporarily "tonicizes" its target — treats it as a local tonic — creating localized tension that enriches harmony without changing key.</p>
        </div>

        <h4>Progression 7 · I – III7 – vi – V7 – I</h4>
        <div class="prog-card" data-chords="G,B7,Em,D7,G">
          <div class="prog-header" onclick="window.RitmosAudio && window.RitmosAudio.toggleProg(this)">
            <button class="play-btn" aria-label="Play this progression">
              <svg class="icon-play" width="12" height="14" viewBox="0 0 12 14" fill="none"><path d="M2 1l9 6-9 6V1z" fill="currentColor"/></svg>
              <svg class="icon-stop" width="10" height="12" viewBox="0 0 10 12" fill="none"><rect x="1" y="1" width="3" height="10" rx="1" fill="currentColor"/><rect x="6" y="1" width="3" height="10" rx="1" fill="currentColor"/></svg>
            </button>
            <div class="prog-meta">
              <span class="prog-name">I – III7 – vi – V7 – I</span>
              <span class="prog-sub">toward the relative minor · choro, bossa nova, dramatic MPB</span>
            </div>
            <span class="pulse-dot"></span>
          </div>
          <div class="chord-strip"></div>
        </div>
        <div class="prog-info">
          <ul>
            <li><strong>Feeling:</strong> Bittersweet, moving — B7 loads intense emotional tension toward Em</li>
            <li><strong>When used:</strong> Dramatic passages toward the minor section, bridges, melancholic openings</li>
            <li><strong>Why it works:</strong> B7 is Em's dominant (contains D# pulling strongly to E). The progression tonicizes Em — treats it as a mini-tonic — before returning via D7 to G.</li>
          </ul>
        </div>

        <h4>Progression 8 · I – VI7 – II7 – V7 – I</h4>
        <div class="prog-card" data-chords="G,E7,A7,D7,G">
          <div class="prog-header" onclick="window.RitmosAudio && window.RitmosAudio.toggleProg(this)">
            <button class="play-btn" aria-label="Play this progression">
              <svg class="icon-play" width="12" height="14" viewBox="0 0 12 14" fill="none"><path d="M2 1l9 6-9 6V1z" fill="currentColor"/></svg>
              <svg class="icon-stop" width="10" height="12" viewBox="0 0 10 12" fill="none"><rect x="1" y="1" width="3" height="10" rx="1" fill="currentColor"/><rect x="6" y="1" width="3" height="10" rx="1" fill="currentColor"/></svg>
            </button>
            <div class="prog-meta">
              <span class="prog-name">I – VI7 – II7 – V7 – I</span>
              <span class="prog-sub">the circle of fifths · jazz, sophisticated bossa nova</span>
            </div>
            <span class="pulse-dot"></span>
          </div>
          <div class="chord-strip"></div>
        </div>
        <div class="prog-info">
          <ul>
            <li><strong>Feeling:</strong> Fluid, inevitable, sophisticated — the sound of jazz par excellence</li>
            <li><strong>When used:</strong> Jazz standards, bossa nova, refined MPB arrangements, song openings</li>
            <li><strong>Why it works:</strong> Motion by descending fifths (G→E→A→D→G) is the most powerful harmonic path in tonal music. Each chord is the dominant of the next: E7→A, A7→D, D7→G. Chained dominants create unstoppable forward momentum.</li>
          </ul>
        </div>

        <h4>Progression 9 · I – II7 – V7 – I</h4>
        <div class="prog-card" data-chords="G,A7,D7,G">
          <div class="prog-header" onclick="window.RitmosAudio && window.RitmosAudio.toggleProg(this)">
            <button class="play-btn" aria-label="Play this progression">
              <svg class="icon-play" width="12" height="14" viewBox="0 0 12 14" fill="none"><path d="M2 1l9 6-9 6V1z" fill="currentColor"/></svg>
              <svg class="icon-stop" width="10" height="12" viewBox="0 0 10 12" fill="none"><rect x="1" y="1" width="3" height="10" rx="1" fill="currentColor"/><rect x="6" y="1" width="3" height="10" rx="1" fill="currentColor"/></svg>
            </button>
            <div class="prog-meta">
              <span class="prog-name">I – II7 – V7 – I</span>
              <span class="prog-sub">the dominant chain · samba finales, choro endings</span>
            </div>
            <span class="pulse-dot"></span>
          </div>
          <div class="chord-strip"></div>
        </div>
        <div class="prog-info">
          <ul>
            <li><strong>Feeling:</strong> Drive, acceleration — tension building before the resolution</li>
            <li><strong>When used:</strong> Chorus endings, emphatic preparations of the tonic, song tags</li>
            <li><strong>Why it works:</strong> A7 (V7 of D7) adds a secondary dominant before the main dominant. Two consecutive dominants create momentum that makes the final resolution more satisfying.</li>
          </ul>
        </div>

        <pre>
New chords: B7  E7  A7
Full set so far: G  C  D7  Em  Am  B7  E7  A7
        </pre>
      </section>

      <section id="s4" data-toc-description="Borrowed chords from G minor: iv, bVII, descending chromaticism">
        <span class="section-num">Level 4</span>
        <h2 class="section-title">Borrowed Chords</h2>
        <div class="level-intro">
          <p>In G minor, the available chords include Cm (iv), F (bVII), and Eb (bVI). These can be "borrowed" into G major to add chromatic color and emotional depth without leaving the tonal center of G. This is one of the most characteristic stylistic devices of choro, bossa nova, and samba canção.</p>
        </div>

        <h4>Progression 10 · I – IV – iv – I</h4>
        <div class="prog-card" data-chords="G,C,Cm,G">
          <div class="prog-header" onclick="window.RitmosAudio && window.RitmosAudio.toggleProg(this)">
            <button class="play-btn" aria-label="Play this progression">
              <svg class="icon-play" width="12" height="14" viewBox="0 0 12 14" fill="none"><path d="M2 1l9 6-9 6V1z" fill="currentColor"/></svg>
              <svg class="icon-stop" width="10" height="12" viewBox="0 0 10 12" fill="none"><rect x="1" y="1" width="3" height="10" rx="1" fill="currentColor"/><rect x="6" y="1" width="3" height="10" rx="1" fill="currentColor"/></svg>
            </button>
            <div class="prog-meta">
              <span class="prog-name">I – IV – iv – I</span>
              <span class="prog-sub">the minor subdominant · choro and bossa nova signature</span>
            </div>
            <span class="pulse-dot"></span>
          </div>
          <div class="chord-strip"></div>
        </div>
        <div class="prog-info">
          <ul>
            <li><strong>Feeling:</strong> A sudden shadow, emotional depth, then return to light — like a cloud passing over the sun</li>
            <li><strong>When used:</strong> Intense emotional passages, slow bossa nova, samba canção</li>
            <li><strong>Why it works:</strong> C→Cm chromatically lowers the third (E→E♭) in an inner voice. A subtle but immediately felt chromatic move. Signature of Jobim, Pixinguinha, Garoto.</li>
          </ul>
        </div>

        <h4>Progression 11 · I – ♭VII – IV – I</h4>
        <div class="prog-card" data-chords="G,F,C,G">
          <div class="prog-header" onclick="window.RitmosAudio && window.RitmosAudio.toggleProg(this)">
            <button class="play-btn" aria-label="Play this progression">
              <svg class="icon-play" width="12" height="14" viewBox="0 0 12 14" fill="none"><path d="M2 1l9 6-9 6V1z" fill="currentColor"/></svg>
              <svg class="icon-stop" width="10" height="12" viewBox="0 0 10 12" fill="none"><rect x="1" y="1" width="3" height="10" rx="1" fill="currentColor"/><rect x="6" y="1" width="3" height="10" rx="1" fill="currentColor"/></svg>
            </button>
            <div class="prog-meta">
              <span class="prog-name">I – ♭VII – IV – I</span>
              <span class="prog-sub">the mixolydian flavor · forró, baião, Brazilian rock</span>
            </div>
            <span class="pulse-dot"></span>
          </div>
          <div class="chord-strip"></div>
        </div>
        <div class="prog-info">
          <ul>
            <li><strong>Feeling:</strong> Earthy, rustic, "nordestino" — open space, no closing cadence</li>
            <li><strong>When used:</strong> Forró, baião, Brazilian rock, northeastern music — songs that should never "close"</li>
            <li><strong>Why it works:</strong> F is the ♭VII — from the G mixolydian scale (G major with minor 7th). The absence of F# (the leading tone) eliminates the gravitational pull toward the tonic. The loop floats.</li>
          </ul>
        </div>

        <h4>Progression 12 · I – Imaj7 – I7 – IV</h4>
        <div class="prog-card" data-chords="G,Gmaj7,G7,C">
          <div class="prog-header" onclick="window.RitmosAudio && window.RitmosAudio.toggleProg(this)">
            <button class="play-btn" aria-label="Play this progression">
              <svg class="icon-play" width="12" height="14" viewBox="0 0 12 14" fill="none"><path d="M2 1l9 6-9 6V1z" fill="currentColor"/></svg>
              <svg class="icon-stop" width="10" height="12" viewBox="0 0 10 12" fill="none"><rect x="1" y="1" width="3" height="10" rx="1" fill="currentColor"/><rect x="6" y="1" width="3" height="10" rx="1" fill="currentColor"/></svg>
            </button>
            <div class="prog-meta">
              <span class="prog-name">I – Imaj7 – I7 – IV</span>
              <span class="prog-sub">descending chromaticism · ballad intro, bossa nova, jazz</span>
            </div>
            <span class="pulse-dot"></span>
          </div>
          <div class="chord-strip"></div>
        </div>
        <div class="prog-info">
          <ul>
            <li><strong>Feeling:</strong> Elegant, fluid, cinematic — a chromatic scale hidden inside the harmony</li>
            <li><strong>When used:</strong> Ballad introductions, slow song openings, passages toward IV</li>
            <li><strong>Why it works:</strong> The bass stays on G but the characteristic note descends chromatically: B (Gmaj7) → B♭ (G7) → A (in C). Classic jazz and bossa nova inner-voice chromaticism.</li>
          </ul>
        </div>

        <pre>
New chords: Cm  F  Gmaj7  G7
        </pre>
      </section>

      <section id="s5" data-toc-description="Chromatic passing dim7, starting from vi, complete dominant chain">
        <span class="section-num">Level 5</span>
        <h2 class="section-title">Chromaticism &amp; Reharmonization</h2>
        <div class="level-intro">
          <p>This level enters the territory of choro and bossa nova masters. The passing diminished, the chain of secondary dominants, and starting from vi are tools that build harmonic phrases with controlled tension and surprise. These are the techniques behind Chiquinha Gonzaga, Ernesto Nazareth, and Tom Jobim.</p>
        </div>

        <h4>Progression 13 · I – ♯IVdim7 – V7 – I</h4>
        <div class="prog-card" data-chords="G,C#dim7,D7,G">
          <div class="prog-header" onclick="window.RitmosAudio && window.RitmosAudio.toggleProg(this)">
            <button class="play-btn" aria-label="Play this progression">
              <svg class="icon-play" width="12" height="14" viewBox="0 0 12 14" fill="none"><path d="M2 1l9 6-9 6V1z" fill="currentColor"/></svg>
              <svg class="icon-stop" width="10" height="12" viewBox="0 0 10 12" fill="none"><rect x="1" y="1" width="3" height="10" rx="1" fill="currentColor"/><rect x="6" y="1" width="3" height="10" rx="1" fill="currentColor"/></svg>
            </button>
            <div class="prog-meta">
              <span class="prog-name">I – ♯IVdim7 – V7 – I</span>
              <span class="prog-sub">the chromatic passing chord · choro signature since Chiquinha Gonzaga</span>
            </div>
            <span class="pulse-dot"></span>
          </div>
          <div class="chord-strip"></div>
        </div>
        <div class="prog-info">
          <ul>
            <li><strong>Feeling:</strong> Chromatic tension, a "rise" toward the dominant — rich, sophisticated harmonic color</li>
            <li><strong>When used:</strong> Choro, samba, antique-style accompaniment — transitions between I and V7</li>
            <li><strong>Why it works:</strong> C♯dim7 has four notes (C♯, E, G, B♭) each a semitone away from a note in D7. The bass C♯ rises chromatically to D. Total symmetry: the diminished seventh chord is made of stacked minor thirds and can resolve in any direction.</li>
          </ul>
        </div>

        <h4>Progression 14 · vi – II7 – V7 – I</h4>
        <div class="prog-card" data-chords="Em,A7,D7,G">
          <div class="prog-header" onclick="window.RitmosAudio && window.RitmosAudio.toggleProg(this)">
            <button class="play-btn" aria-label="Play this progression">
              <svg class="icon-play" width="12" height="14" viewBox="0 0 12 14" fill="none"><path d="M2 1l9 6-9 6V1z" fill="currentColor"/></svg>
              <svg class="icon-stop" width="10" height="12" viewBox="0 0 10 12" fill="none"><rect x="1" y="1" width="3" height="10" rx="1" fill="currentColor"/><rect x="6" y="1" width="3" height="10" rx="1" fill="currentColor"/></svg>
            </button>
            <div class="prog-meta">
              <span class="prog-name">vi – II7 – V7 – I</span>
              <span class="prog-sub">starting from the minor · samba canção, sophisticated MPB</span>
            </div>
            <span class="pulse-dot"></span>
          </div>
          <div class="chord-strip"></div>
        </div>
        <div class="prog-info">
          <ul>
            <li><strong>Feeling:</strong> Opens in shadow, ends in bright resolution — sun after rain</li>
            <li><strong>When used:</strong> Songs that open in a "minor" mood for suspense, then resolve satisfyingly</li>
            <li><strong>Why it works:</strong> Em creates tonal ambiguity (G major or E minor?). A7 breaks the ambiguity toward D7, which resolves definitively to G. The answer arrives after two steps of tension.</li>
          </ul>
        </div>

        <h4>Progression 15 · I – III7 – vi – II7 – V7 – I</h4>
        <div class="prog-card" data-chords="G,B7,Em,A7,D7,G">
          <div class="prog-header" onclick="window.RitmosAudio && window.RitmosAudio.toggleProg(this)">
            <button class="play-btn" aria-label="Play this progression">
              <svg class="icon-play" width="12" height="14" viewBox="0 0 12 14" fill="none"><path d="M2 1l9 6-9 6V1z" fill="currentColor"/></svg>
              <svg class="icon-stop" width="10" height="12" viewBox="0 0 10 12" fill="none"><rect x="1" y="1" width="3" height="10" rx="1" fill="currentColor"/><rect x="6" y="1" width="3" height="10" rx="1" fill="currentColor"/></svg>
            </button>
            <div class="prog-meta">
              <span class="prog-name">I – III7 – vi – II7 – V7 – I</span>
              <span class="prog-sub">the complete chain · advanced choro, elaborate bossa nova</span>
            </div>
            <span class="pulse-dot"></span>
          </div>
          <div class="chord-strip"></div>
        </div>
        <div class="prog-info">
          <ul>
            <li><strong>Feeling:</strong> The maximum tonal harmonic motion — each chord prepares the next perfectly</li>
            <li><strong>When used:</strong> Elaborate choruses, harmonic demonstrations, advanced choro, jazz</li>
            <li><strong>Why it works:</strong> Three consecutive secondary dominants: B7→Em, A7→D7, D7→G. Each chord is prepared by its own dominant. The chain descends by fifths and resolves with maximum force onto the tonic.</li>
          </ul>
        </div>

        <pre>
New chords: C#dim7
Complete G major harmonic vocabulary: G  C  D7  Em  Am  B7  E7  A7  F  G7  Gmaj7  Cm  C#dim7
        </pre>
      </section>
    `
  },
  pt: {
    metaTitle: 'Ritmos do Brasil — Harmonia',
    title: 'Ritmos do Brasil — Harmonia',
    subtitle: 'Progressões harmônicas em Sol maior · cinco níveis da cadência básica à rearmonização avançada',
    footer: 'Estude a harmonia com método. Cada progressão é uma frase musical — aprenda a ouvir para onde ela quer ir.',
    mainHtml: `
      <section id="s1" data-toc-description="V7–I, I–V7–I, I–IV–V7–I: as três funções tonais fundamentais">
        <span class="section-num">Nível 1</span>
        <h2 class="section-title">Os Fundamentos</h2>
        <div class="level-intro">
          <p>Uma progressão harmônica é uma sequência de acordes com uma lógica interna. Cada acorde tem uma função: <strong>tônica (casa)</strong>, <strong>subdominante (expansão)</strong>, <strong>dominante (tensão)</strong>. Em Sol maior: G = tônica (I), C = subdominante (IV), D7 = dominante (V7). Essas três funções precisam se tornar automáticas antes de avançar.</p>
        </div>

        <h3>As três funções básicas em Sol maior</h3>
        <pre>
Tônica (I)         = G   — estabilidade, casa, ponto de chegada
Subdominante (IV)  = C   — expansão, força para baixo
Dominante (V7)     = D7  — tensão, atração magnética para a tônica
        </pre>

        <h4>Progressão 1 · V7 – I</h4>
        <div class="prog-card" data-chords="D7,G,D7,G">
          <div class="prog-header" onclick="window.RitmosAudio && window.RitmosAudio.toggleProg(this)">
            <button class="play-btn" aria-label="Tocar esta progressão">
              <svg class="icon-play" width="12" height="14" viewBox="0 0 12 14" fill="none"><path d="M2 1l9 6-9 6V1z" fill="currentColor"/></svg>
              <svg class="icon-stop" width="10" height="12" viewBox="0 0 10 12" fill="none"><rect x="1" y="1" width="3" height="10" rx="1" fill="currentColor"/><rect x="6" y="1" width="3" height="10" rx="1" fill="currentColor"/></svg>
            </button>
            <div class="prog-meta">
              <span class="prog-name">V7 – I</span>
              <span class="prog-sub">a cadência autêntica · gesto de fechamento universal</span>
            </div>
            <span class="pulse-dot"></span>
          </div>
          <div class="chord-strip"></div>
        </div>
        <div class="prog-info">
          <ul>
            <li><strong>Sensação:</strong> Resolução pura — "chegar em casa" depois da tensão</li>
            <li><strong>Quando usar:</strong> Final de toda frase musical, de seção, de música. Em todo lugar, sempre.</li>
            <li><strong>Por que funciona:</strong> O D7 contém um trítono (F#–C) que se expande em direção a B e G — a tensão interna do acorde de sétima se dissolve no movimento mais natural da tonalidade.</li>
          </ul>
        </div>

        <h4>Progressão 2 · I – V7 – I</h4>
        <div class="prog-card" data-chords="G,D7,G,D7,G">
          <div class="prog-header" onclick="window.RitmosAudio && window.RitmosAudio.toggleProg(this)">
            <button class="play-btn" aria-label="Tocar esta progressão">
              <svg class="icon-play" width="12" height="14" viewBox="0 0 12 14" fill="none"><path d="M2 1l9 6-9 6V1z" fill="currentColor"/></svg>
              <svg class="icon-stop" width="10" height="12" viewBox="0 0 10 12" fill="none"><rect x="1" y="1" width="3" height="10" rx="1" fill="currentColor"/><rect x="6" y="1" width="3" height="10" rx="1" fill="currentColor"/></svg>
            </button>
            <div class="prog-meta">
              <span class="prog-name">I – V7 – I</span>
              <span class="prog-sub">o giro binário · tensão e resolução</span>
            </div>
            <span class="pulse-dot"></span>
          </div>
          <div class="chord-strip"></div>
        </div>
        <div class="prog-info">
          <ul>
            <li><strong>Sensação:</strong> Um passo para fora e o retorno — a menor história musical completa</li>
            <li><strong>Quando usar:</strong> Primeiros exercícios, acompanhamento minimalista, perguntas e respostas</li>
            <li><strong>Por que funciona:</strong> A tônica estabelece o centro, a dominante cria a saída, a tônica chama de volta. É a respiração da música tonal.</li>
          </ul>
        </div>

        <h4>Progressão 3 · I – IV – V7 – I</h4>
        <div class="prog-card" data-chords="G,C,D7,G">
          <div class="prog-header" onclick="window.RitmosAudio && window.RitmosAudio.toggleProg(this)">
            <button class="play-btn" aria-label="Tocar esta progressão">
              <svg class="icon-play" width="12" height="14" viewBox="0 0 12 14" fill="none"><path d="M2 1l9 6-9 6V1z" fill="currentColor"/></svg>
              <svg class="icon-stop" width="10" height="12" viewBox="0 0 10 12" fill="none"><rect x="1" y="1" width="3" height="10" rx="1" fill="currentColor"/><rect x="6" y="1" width="3" height="10" rx="1" fill="currentColor"/></svg>
            </button>
            <div class="prog-meta">
              <span class="prog-name">I – IV – V7 – I</span>
              <span class="prog-sub">o giro dos três acordes · folk, MPB, rock, tudo</span>
            </div>
            <span class="pulse-dot"></span>
          </div>
          <div class="chord-strip"></div>
        </div>
        <div class="prog-info">
          <ul>
            <li><strong>Sensação:</strong> Viagem em três etapas com retorno — completo e satisfatório</li>
            <li><strong>Quando usar:</strong> 90% das músicas folk e populares do mundo — do sertanejo ao rock, da MPB ao blues</li>
            <li><strong>Por que funciona:</strong> O IV adiciona uma força descendente (subdominante), completando o arco tonal I→IV→V→I pelas três funções principais.</li>
          </ul>
        </div>

        <pre>
Prática: toque cada progressão em loop a 70 BPM com o metrônomo.
Acordes para dominar: G  C  D7
        </pre>
      </section>

      <section id="s2" data-toc-description="I–vi–IV–V7, I–IV–I–V7, I–vi–ii–V7: quatro acordes, gama emocional completa">
        <span class="section-num">Nível 2</span>
        <h2 class="section-title">O Giro de Quatro</h2>
        <div class="level-intro">
          <p>Adicionar o vi (Em) — o relativo menor — introduz uma sombra emocional usando as mesmas notas de Sol maior. <strong>Quatro acordes cobrem cerca de 70% das músicas brasileiras populares.</strong> Com eles você expressa alegria (I), nostalgia (vi), direção (IV) e tensão (V7).</p>
        </div>

        <h4>Progressão 4 · I – vi – IV – V7</h4>
        <div class="prog-card" data-chords="G,Em,C,D7">
          <div class="prog-header" onclick="window.RitmosAudio && window.RitmosAudio.toggleProg(this)">
            <button class="play-btn" aria-label="Tocar esta progressão">
              <svg class="icon-play" width="12" height="14" viewBox="0 0 12 14" fill="none"><path d="M2 1l9 6-9 6V1z" fill="currentColor"/></svg>
              <svg class="icon-stop" width="10" height="12" viewBox="0 0 10 12" fill="none"><rect x="1" y="1" width="3" height="10" rx="1" fill="currentColor"/><rect x="6" y="1" width="3" height="10" rx="1" fill="currentColor"/></svg>
            </button>
            <div class="prog-meta">
              <span class="prog-name">I – vi – IV – V7</span>
              <span class="prog-sub">a progressão da nostalgia · baladas, bolero, bossa</span>
            </div>
            <span class="pulse-dot"></span>
          </div>
          <div class="chord-strip"></div>
        </div>
        <div class="prog-info">
          <ul>
            <li><strong>Sensação:</strong> Nostalgia suave, romance, memória — o Em traz sombra sem drama</li>
            <li><strong>Quando usar:</strong> Baladas românticas, bolero, músicas lentas, bossa nova</li>
            <li><strong>Por que funciona:</strong> I→vi é uma descida de terça (mesma harmonia, cor diferente). O "deslize" do maior para o relativo menor cria tensão emocional sutil antes do IV e V7.</li>
          </ul>
        </div>

        <h4>Progressão 5 · I – IV – I – V7</h4>
        <div class="prog-card" data-chords="G,C,G,D7">
          <div class="prog-header" onclick="window.RitmosAudio && window.RitmosAudio.toggleProg(this)">
            <button class="play-btn" aria-label="Tocar esta progressão">
              <svg class="icon-play" width="12" height="14" viewBox="0 0 12 14" fill="none"><path d="M2 1l9 6-9 6V1z" fill="currentColor"/></svg>
              <svg class="icon-stop" width="10" height="12" viewBox="0 0 10 12" fill="none"><rect x="1" y="1" width="3" height="10" rx="1" fill="currentColor"/><rect x="6" y="1" width="3" height="10" rx="1" fill="currentColor"/></svg>
            </button>
            <div class="prog-meta">
              <span class="prog-name">I – IV – I – V7</span>
              <span class="prog-sub">o pulso do samba · oscilação natural</span>
            </div>
            <span class="pulse-dot"></span>
          </div>
          <div class="chord-strip"></div>
        </div>
        <div class="prog-info">
          <ul>
            <li><strong>Sensação:</strong> Circular, balançando, energia sem esforço — natural para dançar</li>
            <li><strong>Quando usar:</strong> Acompanhamento de samba, baião básico, músicas rápidas em 2/4 ou 4/4</li>
            <li><strong>Por que funciona:</strong> A oscilação I–IV cria uma "respiração" harmônica interna antes da saída pelo V7. É o movimento de ombro da música brasileira.</li>
          </ul>
        </div>

        <h4>Progressão 6 · I – vi – ii – V7</h4>
        <div class="prog-card" data-chords="G,Em,Am,D7">
          <div class="prog-header" onclick="window.RitmosAudio && window.RitmosAudio.toggleProg(this)">
            <button class="play-btn" aria-label="Tocar esta progressão">
              <svg class="icon-play" width="12" height="14" viewBox="0 0 12 14" fill="none"><path d="M2 1l9 6-9 6V1z" fill="currentColor"/></svg>
              <svg class="icon-stop" width="10" height="12" viewBox="0 0 10 12" fill="none"><rect x="1" y="1" width="3" height="10" rx="1" fill="currentColor"/><rect x="6" y="1" width="3" height="10" rx="1" fill="currentColor"/></svg>
            </button>
            <div class="prog-meta">
              <span class="prog-name">I – vi – ii – V7</span>
              <span class="prog-sub">o turnaround jazz · bossa nova, jazz standards</span>
            </div>
            <span class="pulse-dot"></span>
          </div>
          <div class="chord-strip"></div>
        </div>
        <div class="prog-info">
          <ul>
            <li><strong>Sensação:</strong> Fluido, circular, sofisticado — cada acorde conduz naturalmente ao próximo</li>
            <li><strong>Quando usar:</strong> Jazz standards, bossa nova, o "turnaround" que fecha e reinicia uma forma</li>
            <li><strong>Por que funciona:</strong> I→vi→ii→V7→I é movimento por quartas (G→Em→Am→D7→G). O baixo desce por terças: Sol–Mi–Lá–Ré–Sol. Máxima fluidez harmônica com quatro acordes diatônicos.</li>
          </ul>
        </div>

        <pre>
Novos acordes: Em  Am
Conjunto completo até agora: G  C  D7  Em  Am
        </pre>
      </section>

      <section id="s3" data-toc-description="Dominantes secundárias: B7→Em, E7→Am, A7→D7 — o ciclo das quintas">
        <span class="section-num">Nível 3</span>
        <h2 class="section-title">Dominantes Secundárias</h2>
        <div class="level-intro">
          <p>Uma dominante secundária é um acorde de sétima construído na quinta de qualquer acorde da tonalidade. Em Sol maior: <strong>B7</strong> prepara Em (III7→vi), <strong>E7</strong> prepara Am (VI7→ii), <strong>A7</strong> prepara D7 (II7→V7). Cada uma "toniciza" temporariamente seu acorde alvo, criando tensão localizada que enriquece a harmonia sem mudar a tonalidade.</p>
        </div>

        <h4>Progressão 7 · I – III7 – vi – V7 – I</h4>
        <div class="prog-card" data-chords="G,B7,Em,D7,G">
          <div class="prog-header" onclick="window.RitmosAudio && window.RitmosAudio.toggleProg(this)">
            <button class="play-btn" aria-label="Tocar esta progressão">
              <svg class="icon-play" width="12" height="14" viewBox="0 0 12 14" fill="none"><path d="M2 1l9 6-9 6V1z" fill="currentColor"/></svg>
              <svg class="icon-stop" width="10" height="12" viewBox="0 0 10 12" fill="none"><rect x="1" y="1" width="3" height="10" rx="1" fill="currentColor"/><rect x="6" y="1" width="3" height="10" rx="1" fill="currentColor"/></svg>
            </button>
            <div class="prog-meta">
              <span class="prog-name">I – III7 – vi – V7 – I</span>
              <span class="prog-sub">rumo ao relativo menor · choro, bossa nova, MPB dramática</span>
            </div>
            <span class="pulse-dot"></span>
          </div>
          <div class="chord-strip"></div>
        </div>
        <div class="prog-info">
          <ul>
            <li><strong>Sensação:</strong> Agridoce, tocante — o B7 carrega tensão emocional intensa em direção ao Em</li>
            <li><strong>Quando usar:</strong> Passagens dramáticas para a seção em menor, ponte, aberturas melancólicas</li>
            <li><strong>Por que funciona:</strong> B7 é a dominante de Em (contém D# puxando fortemente para E). A progressão toniciza o Em antes de retornar via D7 para G.</li>
          </ul>
        </div>

        <h4>Progressão 8 · I – VI7 – II7 – V7 – I</h4>
        <div class="prog-card" data-chords="G,E7,A7,D7,G">
          <div class="prog-header" onclick="window.RitmosAudio && window.RitmosAudio.toggleProg(this)">
            <button class="play-btn" aria-label="Tocar esta progressão">
              <svg class="icon-play" width="12" height="14" viewBox="0 0 12 14" fill="none"><path d="M2 1l9 6-9 6V1z" fill="currentColor"/></svg>
              <svg class="icon-stop" width="10" height="12" viewBox="0 0 10 12" fill="none"><rect x="1" y="1" width="3" height="10" rx="1" fill="currentColor"/><rect x="6" y="1" width="3" height="10" rx="1" fill="currentColor"/></svg>
            </button>
            <div class="prog-meta">
              <span class="prog-name">I – VI7 – II7 – V7 – I</span>
              <span class="prog-sub">o ciclo das quintas · jazz, bossa nova sofisticada</span>
            </div>
            <span class="pulse-dot"></span>
          </div>
          <div class="chord-strip"></div>
        </div>
        <div class="prog-info">
          <ul>
            <li><strong>Sensação:</strong> Fluido, inevitável, sofisticado — o som do jazz por excelência</li>
            <li><strong>Quando usar:</strong> Jazz standards, bossa nova, arranjos refinados de MPB, aberturas de músicas</li>
            <li><strong>Por que funciona:</strong> Movimento por quintas descendentes (G→E→A→D→G) — o caminho harmônico mais poderoso da música tonal. Cada acorde é a dominante do próximo: E7→A, A7→D, D7→G.</li>
          </ul>
        </div>

        <h4>Progressão 9 · I – II7 – V7 – I</h4>
        <div class="prog-card" data-chords="G,A7,D7,G">
          <div class="prog-header" onclick="window.RitmosAudio && window.RitmosAudio.toggleProg(this)">
            <button class="play-btn" aria-label="Tocar esta progressão">
              <svg class="icon-play" width="12" height="14" viewBox="0 0 12 14" fill="none"><path d="M2 1l9 6-9 6V1z" fill="currentColor"/></svg>
              <svg class="icon-stop" width="10" height="12" viewBox="0 0 10 12" fill="none"><rect x="1" y="1" width="3" height="10" rx="1" fill="currentColor"/><rect x="6" y="1" width="3" height="10" rx="1" fill="currentColor"/></svg>
            </button>
            <div class="prog-meta">
              <span class="prog-name">I – II7 – V7 – I</span>
              <span class="prog-sub">a cadeia dominante curta · finais de chorus, samba, choro</span>
            </div>
            <span class="pulse-dot"></span>
          </div>
          <div class="chord-strip"></div>
        </div>
        <div class="prog-info">
          <ul>
            <li><strong>Sensação:</strong> Impulso, aceleração — tensão que se acumula antes da resolução</li>
            <li><strong>Quando usar:</strong> Finais de chorus, preparações enfáticas da tônica, tags de música</li>
            <li><strong>Por que funciona:</strong> A7 (V7 de D7) adiciona uma dominante secundária antes da dominante principal. Duas dominantes consecutivas criam um momentum que torna a resolução final ainda mais satisfatória.</li>
          </ul>
        </div>

        <pre>
Novos acordes: B7  E7  A7
Conjunto completo até agora: G  C  D7  Em  Am  B7  E7  A7
        </pre>
      </section>

      <section id="s4" data-toc-description="Acordes emprestados de Sol menor: iv, bVII, cromatismo descendente">
        <span class="section-num">Nível 4</span>
        <h2 class="section-title">Acordes Emprestados</h2>
        <div class="level-intro">
          <p>Em Sol menor os acordes disponíveis incluem Cm (iv), F (bVII) e Eb (bVI). Estes podem ser "emprestados" para Sol maior, adicionando cor cromática e profundidade emocional sem abandonar o centro tonal de Sol. Esta é uma das características mais marcantes do choro, da bossa nova e do samba canção.</p>
        </div>

        <h4>Progressão 10 · I – IV – iv – I</h4>
        <div class="prog-card" data-chords="G,C,Cm,G">
          <div class="prog-header" onclick="window.RitmosAudio && window.RitmosAudio.toggleProg(this)">
            <button class="play-btn" aria-label="Tocar esta progressão">
              <svg class="icon-play" width="12" height="14" viewBox="0 0 12 14" fill="none"><path d="M2 1l9 6-9 6V1z" fill="currentColor"/></svg>
              <svg class="icon-stop" width="10" height="12" viewBox="0 0 10 12" fill="none"><rect x="1" y="1" width="3" height="10" rx="1" fill="currentColor"/><rect x="6" y="1" width="3" height="10" rx="1" fill="currentColor"/></svg>
            </button>
            <div class="prog-meta">
              <span class="prog-name">I – IV – iv – I</span>
              <span class="prog-sub">a subdominante menor · assinatura do choro e da bossa nova</span>
            </div>
            <span class="pulse-dot"></span>
          </div>
          <div class="chord-strip"></div>
        </div>
        <div class="prog-info">
          <ul>
            <li><strong>Sensação:</strong> Uma sombra repentina, profundidade emocional, depois retorno à luz — como uma nuvem passando pelo sol</li>
            <li><strong>Quando usar:</strong> Passagens emocionais intensas, bossa nova lenta, samba canção</li>
            <li><strong>Por que funciona:</strong> C→Cm abaixa cromaticamente a terça (E→E♭) numa voz interna. Movimento cromático sutil mas de impacto imediato. Assinatura de Jobim, Pixinguinha, Garoto.</li>
          </ul>
        </div>

        <h4>Progressão 11 · I – ♭VII – IV – I</h4>
        <div class="prog-card" data-chords="G,F,C,G">
          <div class="prog-header" onclick="window.RitmosAudio && window.RitmosAudio.toggleProg(this)">
            <button class="play-btn" aria-label="Tocar esta progressão">
              <svg class="icon-play" width="12" height="14" viewBox="0 0 12 14" fill="none"><path d="M2 1l9 6-9 6V1z" fill="currentColor"/></svg>
              <svg class="icon-stop" width="10" height="12" viewBox="0 0 10 12" fill="none"><rect x="1" y="1" width="3" height="10" rx="1" fill="currentColor"/><rect x="6" y="1" width="3" height="10" rx="1" fill="currentColor"/></svg>
            </button>
            <div class="prog-meta">
              <span class="prog-name">I – ♭VII – IV – I</span>
              <span class="prog-sub">o sabor mixolídio · forró, baião, rock brasileiro</span>
            </div>
            <span class="pulse-dot"></span>
          </div>
          <div class="chord-strip"></div>
        </div>
        <div class="prog-info">
          <ul>
            <li><strong>Sensação:</strong> Terroso, rústico, "nordestino" — espaço aberto, sem cadência de fechamento</li>
            <li><strong>Quando usar:</strong> Forró, baião, rock brasileiro, música nordestina — músicas que nunca devem "fechar"</li>
            <li><strong>Por que funciona:</strong> F é o ♭VII — da escala mixolídia de Sol (Sol maior com sétima menor). A ausência do F# (sensível) elimina a gravidade em direção à tônica. O giro flutua.</li>
          </ul>
        </div>

        <h4>Progressão 12 · I – Imaj7 – I7 – IV</h4>
        <div class="prog-card" data-chords="G,Gmaj7,G7,C">
          <div class="prog-header" onclick="window.RitmosAudio && window.RitmosAudio.toggleProg(this)">
            <button class="play-btn" aria-label="Tocar esta progressão">
              <svg class="icon-play" width="12" height="14" viewBox="0 0 12 14" fill="none"><path d="M2 1l9 6-9 6V1z" fill="currentColor"/></svg>
              <svg class="icon-stop" width="10" height="12" viewBox="0 0 10 12" fill="none"><rect x="1" y="1" width="3" height="10" rx="1" fill="currentColor"/><rect x="6" y="1" width="3" height="10" rx="1" fill="currentColor"/></svg>
            </button>
            <div class="prog-meta">
              <span class="prog-name">I – Imaj7 – I7 – IV</span>
              <span class="prog-sub">cromatismo descendente · intro de balada, bossa nova, jazz</span>
            </div>
            <span class="pulse-dot"></span>
          </div>
          <div class="chord-strip"></div>
        </div>
        <div class="prog-info">
          <ul>
            <li><strong>Sensação:</strong> Elegante, fluido, cinematográfico — uma escala cromática escondida na harmonia</li>
            <li><strong>Quando usar:</strong> Introduções de balada, aberturas de músicas lentas, passagens para o IV</li>
            <li><strong>Por que funciona:</strong> O baixo permanece em G mas a nota característica desce cromaticamente: B (Gmaj7) → B♭ (G7) → A (em C). Cromatismo clássico de voz interna do jazz e da bossa nova.</li>
          </ul>
        </div>

        <pre>
Novos acordes: Cm  F  Gmaj7  G7
        </pre>
      </section>

      <section id="s5" data-toc-description="Dim7 de passagem, partida do vi, cadeia dominante completa">
        <span class="section-num">Nível 5</span>
        <h2 class="section-title">Cromatismo e Rearmonização</h2>
        <div class="level-intro">
          <p>Este nível entra no território dos mestres do choro e da bossa nova. O diminuto de passagem, a cadeia de dominantes secundárias e a partida do vi são ferramentas que constroem frases harmônicas com tensão e surpresa controladas. Essas são as técnicas por trás de Chiquinha Gonzaga, Ernesto Nazareth e Tom Jobim.</p>
        </div>

        <h4>Progressão 13 · I – ♯IVdim7 – V7 – I</h4>
        <div class="prog-card" data-chords="G,C#dim7,D7,G">
          <div class="prog-header" onclick="window.RitmosAudio && window.RitmosAudio.toggleProg(this)">
            <button class="play-btn" aria-label="Tocar esta progressão">
              <svg class="icon-play" width="12" height="14" viewBox="0 0 12 14" fill="none"><path d="M2 1l9 6-9 6V1z" fill="currentColor"/></svg>
              <svg class="icon-stop" width="10" height="12" viewBox="0 0 10 12" fill="none"><rect x="1" y="1" width="3" height="10" rx="1" fill="currentColor"/><rect x="6" y="1" width="3" height="10" rx="1" fill="currentColor"/></svg>
            </button>
            <div class="prog-meta">
              <span class="prog-name">I – ♯IVdim7 – V7 – I</span>
              <span class="prog-sub">o acorde de passagem cromático · assinatura do choro desde Chiquinha Gonzaga</span>
            </div>
            <span class="pulse-dot"></span>
          </div>
          <div class="chord-strip"></div>
        </div>
        <div class="prog-info">
          <ul>
            <li><strong>Sensação:</strong> Tensão cromática, uma "subida" em direção à dominante — cor harmônica rica e sofisticada</li>
            <li><strong>Quando usar:</strong> Choro, samba, acompanhamento em estilo antigo — transições entre I e V7</li>
            <li><strong>Por que funciona:</strong> C♯dim7 tem quatro notas (C♯, E, G, B♭) cada uma a um semitom de uma nota do D7. O baixo C♯ sobe cromaticamente para D. Simetria total: o acorde diminuto de sétima é feito de terças menores empilhadas.</li>
          </ul>
        </div>

        <h4>Progressão 14 · vi – II7 – V7 – I</h4>
        <div class="prog-card" data-chords="Em,A7,D7,G">
          <div class="prog-header" onclick="window.RitmosAudio && window.RitmosAudio.toggleProg(this)">
            <button class="play-btn" aria-label="Tocar esta progressão">
              <svg class="icon-play" width="12" height="14" viewBox="0 0 12 14" fill="none"><path d="M2 1l9 6-9 6V1z" fill="currentColor"/></svg>
              <svg class="icon-stop" width="10" height="12" viewBox="0 0 10 12" fill="none"><rect x="1" y="1" width="3" height="10" rx="1" fill="currentColor"/><rect x="6" y="1" width="3" height="10" rx="1" fill="currentColor"/></svg>
            </button>
            <div class="prog-meta">
              <span class="prog-name">vi – II7 – V7 – I</span>
              <span class="prog-sub">partida do menor · samba canção, MPB sofisticada</span>
            </div>
            <span class="pulse-dot"></span>
          </div>
          <div class="chord-strip"></div>
        </div>
        <div class="prog-info">
          <ul>
            <li><strong>Sensação:</strong> Abre na sombra, termina em resolução luminosa — sol após a chuva</li>
            <li><strong>Quando usar:</strong> Músicas que abrem em clima "menor" para criar suspense, depois resolvem com satisfação</li>
            <li><strong>Por que funciona:</strong> Em cria ambiguidade tonal (Sol maior ou Mi menor?). A7 quebra a ambiguidade em direção ao D7, que resolve definitivamente em G. A resposta chega após dois passos de tensão.</li>
          </ul>
        </div>

        <h4>Progressão 15 · I – III7 – vi – II7 – V7 – I</h4>
        <div class="prog-card" data-chords="G,B7,Em,A7,D7,G">
          <div class="prog-header" onclick="window.RitmosAudio && window.RitmosAudio.toggleProg(this)">
            <button class="play-btn" aria-label="Tocar esta progressão">
              <svg class="icon-play" width="12" height="14" viewBox="0 0 12 14" fill="none"><path d="M2 1l9 6-9 6V1z" fill="currentColor"/></svg>
              <svg class="icon-stop" width="10" height="12" viewBox="0 0 10 12" fill="none"><rect x="1" y="1" width="3" height="10" rx="1" fill="currentColor"/><rect x="6" y="1" width="3" height="10" rx="1" fill="currentColor"/></svg>
            </button>
            <div class="prog-meta">
              <span class="prog-name">I – III7 – vi – II7 – V7 – I</span>
              <span class="prog-sub">a cadeia completa · choro avançado, bossa nova elaborada</span>
            </div>
            <span class="pulse-dot"></span>
          </div>
          <div class="chord-strip"></div>
        </div>
        <div class="prog-info">
          <ul>
            <li><strong>Sensação:</strong> O máximo do movimento harmônico tonal — cada acorde prepara o próximo perfeitamente</li>
            <li><strong>Quando usar:</strong> Refrões elaborados, demonstrações harmônicas, choro avançado, jazz</li>
            <li><strong>Por que funciona:</strong> Três dominantes secundárias consecutivas: B7→Em, A7→D7, D7→G. Cada acorde é preparado pela sua própria dominante. A cadeia desce por quintas e resolve com força máxima sobre a tônica.</li>
          </ul>
        </div>

        <pre>
Novo acorde: C#dim7
Vocabulário harmônico completo em Sol maior: G  C  D7  Em  Am  B7  E7  A7  F  G7  Gmaj7  Cm  C#dim7
        </pre>
      </section>
    `
  }
};
