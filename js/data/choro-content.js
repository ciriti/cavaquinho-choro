window.CavaquinhoSiteContent = window.CavaquinhoSiteContent || {};
window.CavaquinhoSiteContent.choro = {
    en: {
      metaTitle: 'Ritmos do Brasil — Choro',
      title: 'Ritmos do Brasil — Choro',
      subtitle: 'A practical path through rhythm, harmony, chord shapes and repertoire for accompanying choro on the Brazilian cavaquinho.',
      nav: {
        choose: 'Choose path',
        choro: 'Choro',
        forro: 'Forró',
        pagode: 'Pagode'
      },
      ui: {
        tocTitle: 'Contents',
        tocSummary: 'Move through the modules, jump to what you need and return quickly to the right section.',
        tocReadySummary: '{count} sections to navigate through rhythm, harmony and repertoire.',
        open: 'Open',
        close: 'Close',
        backToTop: 'Back to top'
      },
      footer: 'Good practice! In choro, calm repetition beats rushed repertoire.',
      mainHtml: `
        <section id="s1" data-toc-description="Tuning, role, key centers and mindset for accompanying choro well.">
          <span class="section-num">Introduction</span>
          <h2 class="section-title">The Cavaquinho in Choro</h2>
          <p>In choro the cavaquinho is the rhythmic engine, the harmonic signpost and the section marker. A good player makes the groove clear without covering the melody.</p>
          <h3>Standard tuning</h3>
          <pre>D4 — B3 — G3 — D3</pre>
          <h3>The keys you should meet first</h3>
          <div class="table-wrap">
            <table>
              <thead><tr><th>Key</th><th>Frequency</th><th>Typical tunes</th></tr></thead>
              <tbody>
                <tr><td><strong>C major</strong></td><td>Very high</td><td>Brasileirinho, Odeon</td></tr>
                <tr><td><strong>G major</strong></td><td>Very high</td><td>Noites Cariocas</td></tr>
                <tr><td><strong>F major</strong></td><td>High</td><td>Carinhoso, Vou Vivendo</td></tr>
                <tr><td><strong>A minor</strong></td><td>High</td><td>Tico-Tico no Fubá (section B)</td></tr>
                <tr><td><strong>D minor</strong></td><td>Medium</td><td>Lamento, Serenata</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section id="s2" data-toc-description="The garfinho, 2/4 pulse and harmonic anticipation.">
          <span class="section-num">Module 0</span>
          <h2 class="section-title">The Garfinho — Rhythmic Foundations</h2>
          <h3>The base pulse</h3>
          <pre>Bar 2/4:  |  1  e  &amp;  a  |  2  e  &amp;  a  |
          |  ↓     ↑     |  ↓     ↑     |</pre>
          <h3>The garfinho pattern</h3>
          <pre>         1    e    &amp;    a    2    e    &amp;    a
         ↓         ↑    ↓         ↑    ↓
         DOWN      UP   DOWN      UP   DOWN</pre>
          <h3>Anticipation rule</h3>
          <pre>| C  C  C  C½ | G7  G7  G7  G7½ | C ... |
             ↑
      Change early here</pre>
          <p>In choro the harmony often turns on the last upbeat. Your hand must feel that before your head explains it.</p>
        </section>

        <section id="s3" data-toc-description="Chord shapes and essential cadences in C major.">
          <span class="section-num">Module A</span>
          <h2 class="section-title">Key of C Major</h2>
          <h3>Essential progressions</h3>
          <pre>I – V7 – I:      | C | G7 | C | G7 | C |
ii – V – I:      | Dm7 | G7 | Cmaj7 |
Circular loop:   | Dm7 | G7 | Cmaj7 | A7 | Dm7 | ...</pre>
          <h3>Passing diminished</h3>
          <pre>| C | C#dim7 | Dm7 | G7 | C |</pre>
          <p>This is the first harmonic laboratory of choro. Learn to hear tonic, dominant and the pull of a passing diminished chord.</p>
        </section>

        <section id="s4" data-toc-description="Cadences, links and section behavior in G major.">
          <span class="section-num">Module B</span>
          <h2 class="section-title">Key of G Major</h2>
          <pre>I – V7 – I:       | G | D7 | G |
ii – V – I:       | Am7 | D7 | Gmaj7 |
Circular motion:  | Am7 | D7 | Gmaj7 | E7 | Am7 | ...</pre>
          <p>G major teaches you how the relative minor and the secondary dominant widen the harmonic field without losing the dance feel.</p>
        </section>

        <section id="s5" data-toc-description="The F-major universe, perfect for trio sections and lyrical choros.">
          <span class="section-num">Module C</span>
          <h2 class="section-title">Key of F Major</h2>
          <pre>| F | C7 | F | C7 |
| F | Gm7 | C7 | F |

ii – V – I: | Gm7 | C7 | Fmaj7 |
With bridge: | F | F#dim7 | Gm7 | C7 | F |</pre>
          <p>In many classic choros the trio opens in F major, so your right hand must sound lighter while the harmony grows broader.</p>
        </section>

        <section id="s6" data-toc-description="A minor as relative key and emotional contrast section.">
          <span class="section-num">Module D</span>
          <h2 class="section-title">Key of A Minor</h2>
          <pre>| Am | E7 | Am | E7 |
| Am | Dm | E7 | Am |

iiø – V – i: | Bm7b5 | E7 | Am |</pre>
          <p>A minor is where many choros reveal their shadow side. The challenge is to keep the accompaniment elegant, never dramatic.</p>
        </section>

        <section id="s7" data-toc-description="D minor, modal color and phrase support.">
          <span class="section-num">Module E</span>
          <h2 class="section-title">Key of D Minor</h2>
          <pre>| Dm | A7 | Dm | A7 |
| Dm | Gm | A7 | Dm |

Color move: | Dm | E7b9 | Am | D7 | Gm | A7 | Dm |</pre>
          <p>D minor teaches tension management. A dominant can intensify the phrase, but the groove still needs to breathe.</p>
        </section>

        <section id="s8" data-toc-description="Dominant chains and how they create circular movement in choro.">
          <span class="section-num">Module F</span>
          <h2 class="section-title">The Dominant Chain</h2>
          <pre>| E7 | A7 | D7 | G7 | C |
| A7 | D7 | G7 | C7 | F |</pre>
          <p>When you hear one dominant after another, do not play them as isolated events. Hear the entire chain pulling toward its destination.</p>
        </section>

        <section id="s9" data-toc-description="Modulation, trio logic and the A section returning with clarity.">
          <span class="section-num">Module G</span>
          <h2 class="section-title">Modulations — The Trio</h2>
          <h3>Typical plan</h3>
          <pre>A section: home key
Trio:      subdominant or relative key
Return:    dominant signal, then home key again</pre>
          <h4>A → Trio → A exercise</h4>
          <pre>Bars 1–8:   A section in C major
Bars 7–8:   Add C7 as modulation signal
Bars 9–16:  Trio in F major
Bars 15–16: Add G7 as return signal
Bars 17–24: Back to A section in C major</pre>
        </section>

        <section id="s10-inversions" data-toc-description="Closed voicings grouped by harmonic families, with useful inversions for cavaquinho.">
          <span class="section-num">Module H</span>
          <h2 class="section-title">Essential Chord Inversions</h2>
          <p class="inversion-intro">This is a quick reference organized by <strong>harmonic family</strong>. You will find practical closed shapes for <strong>major</strong>, <strong>minor</strong>, <strong>7</strong>, <strong>Maj7</strong>, <strong>m7</strong> and <strong>diminished</strong> chords. In the diagrams, the <strong>gold ring</strong> marks the <strong>root</strong>, the <strong>green ring</strong> marks the <strong>third</strong> and the <strong>blue ring</strong> marks the <strong>fifth</strong>.</p>
          <div class="inversion-note-list" id="inversion-groups" aria-label="Essential cavaquinho inversions"></div>
        </section>

        <section id="s10" data-toc-description="Reusable tune frameworks to bring to practice and roda immediately.">
          <span class="section-num">Repertoire</span>
          <h2 class="section-title">Essential Tunes with Chords</h2>
          <div class="song-card">
            <h3>Brasileirinho — Waldir Azevedo</h3>
            <pre>A: | C | G7 | C | G7 |
   | F | C | G7 | C |

B: | Am | E7 | Am | Dm |
   | E7 | Am |

Trio: | F | C7 | F | Bb |
      | F | C7 | F |</pre>
          </div>
          <div class="song-card">
            <h3>Carinhoso — Pixinguinha</h3>
            <pre>| F | F#dim7 | Gm7 | C7 |
| F | D7 | Gm7 | C7 |
| Dm | A7 | Dm | Gm | A7 | Dm |</pre>
          </div>
          <div class="song-card">
            <h3>Noites Cariocas — Jacob do Bandolim</h3>
            <pre>| G | D7 | G | D7 |
| G | Em7 | Am7 | D7 | G |

Trio: | C | G7 | C | F | G7 | C |</pre>
          </div>
          <div class="song-card">
            <h3>Visual Chord Glossary Used by the Site</h3>
            <p class="song-card-intro">This gallery joins the shapes already explained in the path with an extension inspired by tonal areas frequently found in Brazilian repertoire around the site.</p>
            <div class="chord-gallery" id="project-chords" aria-label="Visual cavaquinho chord shapes used by the site"></div>
          </div>
        </section>

        <section id="s11" data-toc-description="Weekly planning, final checklist and study habits that keep progress steady.">
          <span class="section-num">Study</span>
          <h2 class="section-title">Study Plan &amp; Checklist</h2>
          <div class="study-week">
            <h3>Weeks 1–2 — Garfinho and C major</h3>
            <div class="table-wrap">
              <table>
                <thead><tr><th>Day</th><th>Work</th><th>Time</th></tr></thead>
                <tbody>
                  <tr><td>Mon</td><td>Garfinho on one open string</td><td>10 min</td></tr>
                  <tr><td>Tue</td><td>C–G7–C and anticipation</td><td>15 min</td></tr>
                  <tr><td>Wed</td><td>Dm7–G7–Cmaj7</td><td>15 min</td></tr>
                  <tr><td>Thu</td><td>Slow repertoire with metronome</td><td>20 min</td></tr>
                  <tr><td>Fri</td><td>Listen and clap the changes</td><td>10 min</td></tr>
                </tbody>
              </table>
            </div>
          </div>
          <div class="study-week">
            <h3>Weeks 3–4 — G, F and dominant chains</h3>
            <div class="table-wrap">
              <table>
                <thead><tr><th>Focus</th><th>Goal</th></tr></thead>
                <tbody>
                  <tr><td>G major</td><td>Make ii–V–I feel natural</td></tr>
                  <tr><td>F major</td><td>Prepare for trio sections</td></tr>
                  <tr><td>Dominant chain</td><td>Hear long motion instead of isolated chords</td></tr>
                </tbody>
              </table>
            </div>
          </div>
          <h3>Final checklist</h3>
          <ul>
            <li>I keep a clear 2/4 pulse without tightening the hand.</li>
            <li>I can anticipate a chord on the last upbeat.</li>
            <li>I hear ii–V–I in C, G and F.</li>
            <li>I know how the trio modulates and returns.</li>
            <li>I can accompany at least three classic choros with confidence.</li>
          </ul>
        </section>
      `
    },
    pt: {
      metaTitle: 'Ritmos do Brasil — Choro',
      title: 'Ritmos do Brasil — Choro',
      subtitle: 'Um percurso prático de ritmo, harmonia, diteggiaturas e repertório para acompanhar choro no cavaquinho brasileiro.',
      nav: {
        choose: 'Escolher caminho',
        choro: 'Choro',
        forro: 'Forró',
        pagode: 'Pagode'
      },
      ui: {
        tocTitle: 'Índice',
        tocSummary: 'Percorra os módulos, pule para o que precisa e volte rapidamente para a seção certa.',
        tocReadySummary: '{count} seções para navegar por ritmo, harmonia e repertório.',
        open: 'Abrir',
        close: 'Fechar',
        backToTop: 'Voltar ao topo'
      },
      footer: 'Bom estudo! No choro, repetição calma vale mais que repertório apressado.',
      mainHtml: `
        <section id="s1" data-toc-description="Afinação, função, centros tonais e mentalidade para acompanhar choro com clareza.">
          <span class="section-num">Introdução</span>
          <h2 class="section-title">O Cavaquinho no Choro</h2>
          <p>No choro o cavaquinho é motor rítmico, sinalizador harmônico e marcador de seções. Um bom cavaquinhista deixa o pulso claro sem cobrir a melodia.</p>
          <h3>Afinação padrão</h3>
          <pre>D4 — B3 — G3 — D3</pre>
          <h3>Tonalidades para encontrar primeiro</h3>
          <div class="table-wrap">
            <table>
              <thead><tr><th>Tonalidade</th><th>Frequência</th><th>Peças típicas</th></tr></thead>
              <tbody>
                <tr><td><strong>Dó maior</strong></td><td>Muito alta</td><td>Brasileirinho, Odeon</td></tr>
                <tr><td><strong>Sol maior</strong></td><td>Muito alta</td><td>Noites Cariocas</td></tr>
                <tr><td><strong>Fá maior</strong></td><td>Alta</td><td>Carinhoso, Vou Vivendo</td></tr>
                <tr><td><strong>Lá menor</strong></td><td>Alta</td><td>Tico-Tico no Fubá (seção B)</td></tr>
                <tr><td><strong>Ré menor</strong></td><td>Média</td><td>Lamento, Serenata</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section id="s2" data-toc-description="Garfinho, pulso em 2/4 e antecipação harmônica.">
          <span class="section-num">Módulo 0</span>
          <h2 class="section-title">O Garfinho — Fundamentos Rítmicos</h2>
          <h3>Pulso base</h3>
          <pre>Compasso 2/4: |  1  e  &amp;  a  |  2  e  &amp;  a  |
              |  ↓     ↑     |  ↓     ↑     |</pre>
          <h3>Padrão de garfinho</h3>
          <pre>         1    e    &amp;    a    2    e    &amp;    a
         ↓         ↑    ↓         ↑    ↓
         BAIXO     CIMA BAIXO     CIMA BAIXO</pre>
          <h3>Regra da antecipação</h3>
          <pre>| C  C  C  C½ | G7  G7  G7  G7½ | C ... |
             ↑
      Mude um pouco antes</pre>
          <p>No choro a harmonia frequentemente vira no último contratempo. A sua mão precisa sentir isso antes que a cabeça explique.</p>
        </section>

        <section id="s3" data-toc-description="Diteggiaturas e cadências essenciais em Dó maior.">
          <span class="section-num">Módulo A</span>
          <h2 class="section-title">Tonalidade de Dó Maior</h2>
          <h3>Progressões essenciais</h3>
          <pre>I – V7 – I:      | C | G7 | C | G7 | C |
ii – V – I:      | Dm7 | G7 | Cmaj7 |
Ciclo circular:  | Dm7 | G7 | Cmaj7 | A7 | Dm7 | ...</pre>
          <h3>Diminuto de passagem</h3>
          <pre>| C | C#dim7 | Dm7 | G7 | C |</pre>
          <p>Esse é o primeiro laboratório harmônico do choro. Aprenda a ouvir tônica, dominante e a atração do diminuto de passagem.</p>
        </section>

        <section id="s4" data-toc-description="Cadências, encadeamentos e comportamento de seção em Sol maior.">
          <span class="section-num">Módulo B</span>
          <h2 class="section-title">Tonalidade de Sol Maior</h2>
          <pre>I – V7 – I:       | G | D7 | G |
ii – V – I:       | Am7 | D7 | Gmaj7 |
Movimento circular: | Am7 | D7 | Gmaj7 | E7 | Am7 | ...</pre>
          <p>Sol maior ensina como a relativa menor e a dominante secundária ampliam o campo harmônico sem perder o balanço.</p>
        </section>

        <section id="s5" data-toc-description="Universo de Fá maior, perfeito para trios e choros mais líricos.">
          <span class="section-num">Módulo C</span>
          <h2 class="section-title">Tonalidade de Fá Maior</h2>
          <pre>| F | C7 | F | C7 |
| F | Gm7 | C7 | F |

ii – V – I: | Gm7 | C7 | Fmaj7 |
Com ponte:  | F | F#dim7 | Gm7 | C7 | F |</pre>
          <p>Em muitos choros clássicos o trio abre em Fá maior, então a sua mão direita precisa soar mais leve enquanto a harmonia se expande.</p>
        </section>

        <section id="s6" data-toc-description="Lá menor como relativa e seção de contraste emocional.">
          <span class="section-num">Módulo D</span>
          <h2 class="section-title">Tonalidade de Lá Menor</h2>
          <pre>| Am | E7 | Am | E7 |
| Am | Dm | E7 | Am |

iiø – V – i: | Bm7b5 | E7 | Am |</pre>
          <p>Lá menor é onde muitos choros mostram o lado sombrio. O desafio é manter o acompanhamento elegante, nunca dramático demais.</p>
        </section>

        <section id="s7" data-toc-description="Ré menor, cor modal e sustentação de frase.">
          <span class="section-num">Módulo E</span>
          <h2 class="section-title">Tonalidade de Ré Menor</h2>
          <pre>| Dm | A7 | Dm | A7 |
| Dm | Gm | A7 | Dm |

Cor modal: | Dm | E7b9 | Am | D7 | Gm | A7 | Dm |</pre>
          <p>Ré menor ensina a administrar tensão. A dominante pode intensificar a frase, mas a levada precisa continuar respirando.</p>
        </section>

        <section id="s8" data-toc-description="Cadeias de dominantes e movimento circular no choro.">
          <span class="section-num">Módulo F</span>
          <h2 class="section-title">A Cadeia de Dominantes</h2>
          <pre>| E7 | A7 | D7 | G7 | C |
| A7 | D7 | G7 | C7 | F |</pre>
          <p>Quando você ouve uma dominante atrás da outra, não toque cada acorde como evento isolado. Escute a corrente inteira indo para o destino final.</p>
        </section>

        <section id="s9" data-toc-description="Modulação, lógica do trio e retorno claro da seção A.">
          <span class="section-num">Módulo G</span>
          <h2 class="section-title">Modulações — O Trio</h2>
          <h3>Plano típico</h3>
          <pre>Seção A: tonalidade principal
Trio:    subdominante ou relativa
Volta:   sinal de dominante e retorno à tonalidade principal</pre>
          <h4>Exercício A → Trio → A</h4>
          <pre>Compassos 1–8:   Seção A em Dó maior
Compassos 7–8:   Coloque C7 como sinal de modulação
Compassos 9–16:  Trio em Fá maior
Compassos 15–16: Coloque G7 como sinal de retorno
Compassos 17–24: Volta da seção A em Dó maior</pre>
        </section>

        <section id="s10-inversions" data-toc-description="Voicings fechados organizados por família harmônica, com inversões úteis para cavaco.">
          <span class="section-num">Módulo H</span>
          <h2 class="section-title">Inversões Essenciais dos Acordes</h2>
          <p class="inversion-intro">Aqui você encontra uma referência rápida organizada por <strong>família harmônica</strong>. Há formas fechadas para acordes <strong>maiores</strong>, <strong>menores</strong>, <strong>7</strong>, <strong>Maj7</strong>, <strong>m7</strong> e <strong>diminutos</strong>. Nos diagramas, o <strong>anel dourado</strong> marca a <strong>root</strong>, o <strong>anel verde</strong> marca a <strong>terça</strong> e o <strong>anel azul</strong> marca a <strong>quinta</strong>.</p>
          <div class="inversion-note-list" id="inversion-groups" aria-label="Inversões essenciais do cavaquinho"></div>
        </section>

        <section id="s10" data-toc-description="Estruturas de peças para levar direto ao estudo e à roda.">
          <span class="section-num">Repertório</span>
          <h2 class="section-title">Peças Essenciais com Acordes</h2>
          <div class="song-card">
            <h3>Brasileirinho — Waldir Azevedo</h3>
            <pre>A: | C | G7 | C | G7 |
   | F | C | G7 | C |

B: | Am | E7 | Am | Dm |
   | E7 | Am |

Trio: | F | C7 | F | Bb |
      | F | C7 | F |</pre>
          </div>
          <div class="song-card">
            <h3>Carinhoso — Pixinguinha</h3>
            <pre>| F | F#dim7 | Gm7 | C7 |
| F | D7 | Gm7 | C7 |
| Dm | A7 | Dm | Gm | A7 | Dm |</pre>
          </div>
          <div class="song-card">
            <h3>Noites Cariocas — Jacob do Bandolim</h3>
            <pre>| G | D7 | G | D7 |
| G | Em7 | Am7 | D7 | G |

Trio: | C | G7 | C | F | G7 | C |</pre>
          </div>
          <div class="song-card">
            <h3>Dicionário Visual de Acordes do Site</h3>
            <p class="song-card-intro">Essa galeria reúne as formas já explicadas no percurso com uma extensão inspirada por regiões tonais recorrentes no repertório brasileiro em torno do site.</p>
            <div class="chord-gallery" id="project-chords" aria-label="Diteggiaturas visuais de cavaquinho usadas no site"></div>
          </div>
        </section>

        <section id="s11" data-toc-description="Planejamento semanal, checklist final e hábitos de estudo que mantêm o progresso estável.">
          <span class="section-num">Estudo</span>
          <h2 class="section-title">Plano de Estudo &amp; Checklist</h2>
          <div class="study-week">
            <h3>Semanas 1–2 — Garfinho e Dó maior</h3>
            <div class="table-wrap">
              <table>
                <thead><tr><th>Dia</th><th>Trabalho</th><th>Tempo</th></tr></thead>
                <tbody>
                  <tr><td>Seg</td><td>Garfinho em uma corda solta</td><td>10 min</td></tr>
                  <tr><td>Ter</td><td>C–G7–C e antecipação</td><td>15 min</td></tr>
                  <tr><td>Qua</td><td>Dm7–G7–Cmaj7</td><td>15 min</td></tr>
                  <tr><td>Qui</td><td>Repertório lento com metrônomo</td><td>20 min</td></tr>
                  <tr><td>Sex</td><td>Ouvir e bater palmas nas trocas</td><td>10 min</td></tr>
                </tbody>
              </table>
            </div>
          </div>
          <div class="study-week">
            <h3>Semanas 3–4 — Sol, Fá e cadeias de dominantes</h3>
            <div class="table-wrap">
              <table>
                <thead><tr><th>Foco</th><th>Meta</th></tr></thead>
                <tbody>
                  <tr><td>Sol maior</td><td>Fazer ii–V–I soar natural</td></tr>
                  <tr><td>Fá maior</td><td>Preparar as seções de trio</td></tr>
                  <tr><td>Cadeia de dominantes</td><td>Ouvir o movimento longo em vez de acordes isolados</td></tr>
                </tbody>
              </table>
            </div>
          </div>
          <h3>Checklist final</h3>
          <ul>
            <li>Mantenho um pulso claro em 2/4 sem endurecer a mão.</li>
            <li>Consigo antecipar o acorde no último contratempo.</li>
            <li>Ouço ii–V–I em Dó, Sol e Fá.</li>
            <li>Entendo como o trio modula e retorna.</li>
            <li>Consigo acompanhar pelo menos três choros clássicos com segurança.</li>
          </ul>
        </section>
      `
    }
};
