window.CavaquinhoSiteContent = window.CavaquinhoSiteContent || {};
window.CavaquinhoSiteContent.forro = {
    en: {
      metaTitle: 'Ritmos do Brasil — Forró',
      title: 'Ritmos do Brasil — Forró',
      subtitle: 'A progressive learning system for xote, baião and stage-style accompaniment, built with the same teaching spirit as the Choro path but focused on popular repertoire close to Falamansa.',
      nav: {
        choose: 'Choose path',
        choro: 'Choro',
        forro: 'Forró',
        pagode: 'Pagode'
      },
      ui: {
        tocTitle: 'Contents',
        tocSummary: 'A practical path into forró through groove, loops and repertoire.',
        tocReadySummary: '{count} sections to study groove, harmony and repertoire in order.',
        open: 'Open',
        close: 'Close',
        backToTop: 'Back to top'
      },
      footer: 'Good practice! Forró asks for steady hands, harmonic ears and the desire to make people dance.',
      mainHtml: `
        <section id="s1" data-toc-description="Tuning, the role of the cavaquinho and the keys that show up most often in modern forró.">
          <span class="section-num">Introduction</span>
          <h2 class="section-title">The Cavaquinho in Forró</h2>
          <h3>Standard tuning</h3>
          <pre>String 1 (highest): D4
String 2:            B3
String 3:            G3
String 4 (lowest):   D3</pre>
          <blockquote>In forró the cavaquinho should not sound like a small guitar. It works as the hinge between zabumba, triangle and voice.</blockquote>
          <h3>Three clear jobs</h3>
          <ul>
            <li>Keep the <strong>levada</strong> stable and danceable.</li>
            <li>Make section changes obvious, especially pre-chorus and chorus.</li>
            <li>Support the singer with a compact sound that never crowds the arrangement.</li>
          </ul>
          <h3>Keys that come back all the time</h3>
          <div class="table-wrap">
            <table>
              <thead><tr><th>Key</th><th>Use</th><th>Reference songs</th></tr></thead>
              <tbody>
                <tr><td><strong>G</strong></td><td>Bright, direct xote</td><td>Rindo À Toa, Xote Dos Milagres</td></tr>
                <tr><td><strong>F#</strong></td><td>Very common for male vocals</td><td>Xote da Alegria</td></tr>
                <tr><td><strong>C#m</strong></td><td>Modern emotional color</td><td>Oh! Chuva</td></tr>
                <tr><td><strong>E</strong></td><td>Open and singable choruses</td><td>Esperando Na Janela, Asas</td></tr>
                <tr><td><strong>Am / Dm</strong></td><td>More Northeastern or nostalgic falls</td><td>Avisa, 100 anos</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section id="s2" data-toc-description="Xote, baião and arrasta-pé groove before chord changes.">
          <span class="section-num">Module 0</span>
          <h2 class="section-title">Groove Before Chords</h2>
          <h3>Basic xote</h3>
          <pre>Count:    | 1  e  &amp;  a | 2  e  &amp;  a |
Hand:     | ↓     ↑    | ↓   ↑  ↓   |
Accent:   | strong     |    medium   |</pre>
          <h3>Essential baião</h3>
          <pre>Count:    | 1  e  &amp;  a | 2  e  &amp;  a |
Hand:     | ↓  x  ↑    | ↓     ↑ ↓  |
Idea:     | zabumba    | response    |</pre>
          <h3>Arrasta-pé</h3>
          <pre>| ↓  ↑  ↓  ↑ | ↓  ↑  ↓  ↑ |
Denser motion, but always keep the downbeat clear.</pre>
          <ol>
            <li>Practice the hand motion first without chords.</li>
            <li>Then hold one chord for four minutes.</li>
            <li>Only after that move to real harmonic loops.</li>
          </ol>
        </section>

        <section id="s3" data-toc-description="The G-major xote vocabulary: base loop, chorus close and chromatic pre-chorus.">
          <span class="section-num">Module A</span>
          <h2 class="section-title">Key of G — The Great Singable Xote</h2>
          <h3>Loop to memorize without thinking</h3>
          <pre>| G | D7 | Em | C |
| G | D7 | Em | C |</pre>
          <h3>Chorus close</h3>
          <pre>| C | G | D7 | G |</pre>
          <h3>Pre-chorus with chromatic move</h3>
          <pre>| C | G | D7 | Db7 |
| C | G | D7 | G   |</pre>
          <p>This key center gets you inside a large part of radio-friendly and stage-friendly forró repertoire.</p>
        </section>

        <section id="s4" data-toc-description="Common loops in F sharp major, one of the most useful stage keys.">
          <span class="section-num">Module B</span>
          <h2 class="section-title">Key of F Sharp — A Stage Center</h2>
          <h3>Direct xote</h3>
          <pre>| F# | C# | D#m | B |
| F# | C# | D#m | B |</pre>
          <h3>Wide chorus</h3>
          <pre>| F# | C# | D#m | A#m |
| B  | F# | C#  | F#  |</pre>
          <h3>Push to the dominant</h3>
          <pre>| F# | C# | G#m | C#7 |
| F# | C# | B   | C#7 |</pre>
          <p>If your groove stays relaxed here, it will survive almost any popular forró setting.</p>
        </section>

        <section id="s5" data-toc-description="The territory of E major and C sharp minor, very common in melodic forró.">
          <span class="section-num">Module C</span>
          <h2 class="section-title">E Major and C Sharp Minor</h2>
          <h3>Emotional field in C#m</h3>
          <pre>| C#m | G#m | C#m | G#m |
| A   | E   | A   | G#  |</pre>
          <h3>Open chorus in E</h3>
          <pre>| E | B | C#m | A |
| E | B | A   | B | E |</pre>
          <h3>Bridge into the refrain</h3>
          <pre>| A | E | B | C#m |
| A | E | B | E   |</pre>
          <blockquote>Minor-key forró should not become heavy. The melancholy comes from harmony, not from a stiff right hand.</blockquote>
        </section>

        <section id="s6" data-toc-description="Minor descents and Northeastern cadences that color intros, bridges and endings.">
          <span class="section-num">Module D</span>
          <h2 class="section-title">Northeastern Cadence and Minor Keys</h2>
          <h3>The descent you should hear by ear</h3>
          <pre>| Am | G | F | E7 |
| Am | G | F | E7 | Am |</pre>
          <h3>Useful variants</h3>
          <pre>In D minor: | Dm | C | Bb | A7 |
In E minor: | Em | D | C  | B7 |
With bridge: | Am | Dm | E7 | Am |</pre>
          <ul>
            <li>Great for nostalgic intros.</li>
            <li>Useful when you need to drop the energy before a chorus.</li>
            <li>Excellent for more traditional endings.</li>
          </ul>
        </section>

        <section id="s7" data-toc-description="Secondary dominants and loops that move the song forward without making it heavy.">
          <span class="section-num">Module E</span>
          <h2 class="section-title">Dominants That Move the Song</h2>
          <h3>Three loops to study</h3>
          <pre>In G:  | G  | E7  | Am | D7  | G  |
In F#: | F# | D#7 | G#m | C#7 | F# |
In E:  | E  | C#7 | F#m | B7  | E  |</pre>
          <h3>Guided exercise</h3>
          <pre>Base:       | G | D | Em | C |
With push:  | G | D | B7 | Em | C | D7 | G |</pre>
          <h3>Cadence 1 — Square and Lift</h3>
          <pre>Key of C — Square:  | C  | A7 | Dm | G7 |
                     | C  | A7 | Dm | G7 |
Key of C — Lift 1: | Em | A7 | Dm | G7 |
Key of C — Lift 2: | Gm | C7 | F  | Fm |</pre>
          <pre>Key of G — Square:  | G  | E7 | Am | D7 |
Key of G — Lift 1: | Bm | E7 | Am | D7 |
Key of G — Lift 2: | Dm | G7 | C  | Cm |</pre>
          <pre>Key of D — Square:  | D   | B7 | Em | A7 |
Key of D — Lift 1: | F#m | B7 | Em | A7 |
Key of D — Lift 2: | Am  | D7 | G  | Gm |</pre>
          <p>As soon as you hear an outside chord, ask where it wants to go. That question turns a strummer into a real accompanist.</p>
        </section>

        <section id="s8" data-toc-description="Practical families of songs and patterns to take straight into your daily practice.">
          <span class="section-num">Repertoire</span>
          <h2 class="section-title">Essential Forró Repertoire Patterns</h2>
          <div class="song-card">
            <h3>Xote Dos Milagres — family in G</h3>
            <pre>| G | D | Am | C |
| G | D | Em | C D7 |</pre>
          </div>
          <div class="song-card">
            <h3>Rindo À Toa — loop to memorize early</h3>
            <pre>| G | D7 | Em | C |
| C | G | D7 | Db7 |</pre>
          </div>
          <div class="song-card">
            <h3>Xote da Alegria — family in F sharp</h3>
            <pre>| F# | C# | D#m | C# |
| F# | C# | D#m | A#m |
| B  | F# | C#  | F#  |</pre>
          </div>
          <div class="song-card">
            <h3>Oh! Chuva — family in C sharp minor</h3>
            <pre>| C#m | G#m | C#m | G#m |
| A   | E   | A   | G#  |</pre>
          </div>
          <div class="song-card">
            <h3>Quick Visual Chord Glossary</h3>
            <p class="song-card-intro">These shapes cover the tonal areas that keep reappearing in Falamansa-style repertoire and in a large part of modern forró.</p>
            <div class="chord-gallery" id="forro-quick-chords" aria-label="Visual forró chord shapes"></div>
          </div>
        </section>

        <section id="s9" data-toc-description="A weekly practice plan to make the style usable, not only readable.">
          <span class="section-num">Study</span>
          <h2 class="section-title">Study Plan &amp; Checklist</h2>
          <div class="study-week">
            <h3>Weeks 1–2 — Groove and G major</h3>
            <div class="table-wrap">
              <table>
                <thead><tr><th>Day</th><th>Work</th><th>Time</th></tr></thead>
                <tbody>
                  <tr><td>Mon</td><td>Xote on one open string</td><td>12 min</td></tr>
                  <tr><td>Tue</td><td>G–D7–Em–C loop</td><td>15 min</td></tr>
                  <tr><td>Wed</td><td>C–G–D7–G close</td><td>15 min</td></tr>
                  <tr><td>Thu</td><td>Verse/chorus contrast</td><td>18 min</td></tr>
                  <tr><td>Fri</td><td>Rindo À Toa or Xote Dos Milagres slowly</td><td>20 min</td></tr>
                </tbody>
              </table>
            </div>
          </div>
          <div class="study-week">
            <h3>Weeks 3–4 — F# and C#m</h3>
            <div class="table-wrap">
              <table>
                <thead><tr><th>Focus</th><th>Detail</th></tr></thead>
                <tbody>
                  <tr><td>F# major</td><td>F#, C#, D#m, B and closes with C#7</td></tr>
                  <tr><td>C#m</td><td>Emotional loop with A, E and G#</td></tr>
                  <tr><td>Goal</td><td>Move from regular groove to section dynamics</td></tr>
                </tbody>
              </table>
            </div>
          </div>
          <div class="study-week">
            <h3>Weeks 5–6 — Dominants and repertoire</h3>
            <div class="table-wrap">
              <table>
                <thead><tr><th>Training</th><th>Goal</th></tr></thead>
                <tbody>
                  <tr><td>Secondary dominants</td><td>Hear where they lead and make them sing without stiffening the groove</td></tr>
                  <tr><td>Minor falls</td><td>Am–G–F–E7, Dm–C–Bb–A7, Em–D–C–B7</td></tr>
                  <tr><td>Repertoire</td><td>Xote da Alegria, Rindo À Toa, Xote Dos Milagres, Oh! Chuva</td></tr>
                </tbody>
              </table>
            </div>
          </div>
          <h3>Final checklist</h3>
          <ul>
            <li>I can hold a xote groove without rushing.</li>
            <li>I recognize I–V–vi–IV by ear in more than one key.</li>
            <li>I can accompany at least one song in G and one in F#.</li>
            <li>I can use a secondary dominant to push a loop.</li>
            <li>I can open the chorus without losing the pulse.</li>
          </ul>
        </section>
      `
    },
    pt: {
      metaTitle: 'Ritmos do Brasil — Forró',
      title: 'Ritmos do Brasil — Forró',
      subtitle: 'Um sistema progressivo para xote, baião e acompanhamento de palco, construído com o mesmo espírito didático do percurso de Choro, mas voltado ao repertório popular próximo de Falamansa.',
      nav: {
        choose: 'Escolher caminho',
        choro: 'Choro',
        forro: 'Forró',
        pagode: 'Pagode'
      },
      ui: {
        tocTitle: 'Índice',
        tocSummary: 'Um caminho prático para entrar no forró por levada, giros e repertório.',
        tocReadySummary: '{count} seções para estudar levada, harmonia e repertório em ordem.',
        open: 'Abrir',
        close: 'Fechar',
        backToTop: 'Voltar ao topo'
      },
      footer: 'Bom estudo! O forró pede mão firme, ouvido harmônico e vontade de fazer dançar.',
      mainHtml: `
        <section id="s1" data-toc-description="Afinação, função do cavaco e tonalidades que aparecem com frequência no forró moderno.">
          <span class="section-num">Introdução</span>
          <h2 class="section-title">O Cavaquinho no Forró</h2>
          <h3>Afinação padrão</h3>
          <pre>Corda 1 (mais aguda): D4
Corda 2:              B3
Corda 3:              G3
Corda 4 (mais grave): D3</pre>
          <blockquote>No forró o cavaco não deve soar como um violão pequeno. Ele funciona como dobradiça entre zabumba, triângulo e voz.</blockquote>
          <h3>Três responsabilidades claras</h3>
          <ul>
            <li>Manter a <strong>levada</strong> estável e dançante.</li>
            <li>Deixar as mudanças de seção evidentes, sobretudo pré-refrão e refrão.</li>
            <li>Sustentar a voz com som compacto, sem invadir o arranjo.</li>
          </ul>
          <h3>Tonalidades que voltam sempre</h3>
          <div class="table-wrap">
            <table>
              <thead><tr><th>Tonalidade</th><th>Uso</th><th>Canções de referência</th></tr></thead>
              <tbody>
                <tr><td><strong>G</strong></td><td>Xote claro e direto</td><td>Rindo À Toa, Xote Dos Milagres</td></tr>
                <tr><td><strong>F#</strong></td><td>Muito comum para voz masculina</td><td>Xote da Alegria</td></tr>
                <tr><td><strong>C#m</strong></td><td>Cor emocional e moderna</td><td>Oh! Chuva</td></tr>
                <tr><td><strong>E</strong></td><td>Refrões abertos e cantáveis</td><td>Esperando Na Janela, Asas</td></tr>
                <tr><td><strong>Am / Dm</strong></td><td>Quedas mais nordestinas ou nostálgicas</td><td>Avisa, 100 anos</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section id="s2" data-toc-description="Xote, baião e arrasta-pé antes da troca de acordes.">
          <span class="section-num">Módulo 0</span>
          <h2 class="section-title">Levada Antes dos Acordes</h2>
          <h3>Xote básico</h3>
          <pre>Conta:    | 1  e  &amp;  a | 2  e  &amp;  a |
Mão:      | ↓     ↑    | ↓   ↑  ↓   |
Acento:   | forte      |    médio    |</pre>
          <h3>Baião essencial</h3>
          <pre>Conta:    | 1  e  &amp;  a | 2  e  &amp;  a |
Mão:      | ↓  x  ↑    | ↓     ↑ ↓  |
Ideia:    | zabumba    | resposta    |</pre>
          <h3>Arrasta-pé</h3>
          <pre>| ↓  ↑  ↓  ↑ | ↓  ↑  ↓  ↑ |
Movimento mais cheio, mas sempre com o tempo forte claro.</pre>
          <ol>
            <li>Pratique primeiro o gesto da mão sem acordes.</li>
            <li>Depois segure um acorde só por quatro minutos.</li>
            <li>Só então passe para os giros harmônicos reais.</li>
          </ol>
        </section>

        <section id="s3" data-toc-description="Vocabulário de xote em Sol maior: giro base, fechamento e pré-refrão cromático.">
          <span class="section-num">Módulo A</span>
          <h2 class="section-title">Tonalidade de Sol — O Grande Xote Cantável</h2>
          <h3>Giro para memorizar sem pensar</h3>
          <pre>| G | D7 | Em | C |
| G | D7 | Em | C |</pre>
          <h3>Fechamento de refrão</h3>
          <pre>| C | G | D7 | G |</pre>
          <h3>Pré-refrão com passagem cromática</h3>
          <pre>| C | G | D7 | Db7 |
| C | G | D7 | G   |</pre>
          <p>Esse centro tonal coloca você dentro de uma grande parte do forró de rádio e de palco.</p>
        </section>

        <section id="s4" data-toc-description="Giros comuns em Fá sustenido maior, uma das tonalidades mais úteis para palco.">
          <span class="section-num">Módulo B</span>
          <h2 class="section-title">Tonalidade de Fá Sustenido — Centro de Palco</h2>
          <h3>Xote direto</h3>
          <pre>| F# | C# | D#m | B |
| F# | C# | D#m | B |</pre>
          <h3>Refrão largo</h3>
          <pre>| F# | C# | D#m | A#m |
| B  | F# | C#  | F#  |</pre>
          <h3>Empurrão para a dominante</h3>
          <pre>| F# | C# | G#m | C#7 |
| F# | C# | B   | C#7 |</pre>
          <p>Se a sua levada permanece relaxada aqui, ela vai funcionar em quase qualquer situação de forró popular.</p>
        </section>

        <section id="s5" data-toc-description="Território de Mi maior e Dó sustenido menor, muito comum no forró melódico.">
          <span class="section-num">Módulo C</span>
          <h2 class="section-title">Mi Maior e Dó Sustenido Menor</h2>
          <h3>Campo emocional em C#m</h3>
          <pre>| C#m | G#m | C#m | G#m |
| A   | E   | A   | G#  |</pre>
          <h3>Refrão aberto em E</h3>
          <pre>| E | B | C#m | A |
| E | B | A   | B | E |</pre>
          <h3>Ponte para o refrão</h3>
          <pre>| A | E | B | C#m |
| A | E | B | E   |</pre>
          <blockquote>No forró em tonalidade menor a tristeza deve vir da harmonia, não de uma mão direita dura.</blockquote>
        </section>

        <section id="s6" data-toc-description="Descidas menores e cadências nordestinas para intros, pontes e finais.">
          <span class="section-num">Módulo D</span>
          <h2 class="section-title">Cadência Nordestina e Tonalidades Menores</h2>
          <h3>A descida para ouvir de ouvido</h3>
          <pre>| Am | G | F | E7 |
| Am | G | F | E7 | Am |</pre>
          <h3>Variações úteis</h3>
          <pre>Em Ré menor: | Dm | C | Bb | A7 |
Em Mi menor: | Em | D | C  | B7 |
Com ponte:   | Am | Dm | E7 | Am |</pre>
          <ul>
            <li>Ótima para intros nostálgicas.</li>
            <li>Útil para baixar a energia antes do refrão.</li>
            <li>Excelente para finais mais tradicionais.</li>
          </ul>
        </section>

        <section id="s7" data-toc-description="Dominantes secundárias e giros que empurram a música sem deixá-la pesada.">
          <span class="section-num">Módulo E</span>
          <h2 class="section-title">Dominantes que Fazem a Música Andar</h2>
          <h3>Três giros para estudar</h3>
          <pre>Em G:  | G  | E7  | Am | D7  | G  |
Em F#: | F# | D#7 | G#m | C#7 | F# |
Em E:  | E  | C#7 | F#m | B7  | E  |</pre>
          <h3>Exercício guiado</h3>
          <pre>Base:      | G | D | Em | C |
Com impulso: | G | D | B7 | Em | C | D7 | G |</pre>
          <h3>Cadência 1 — Quadrado e Subida</h3>
          <pre>Tom C — Quadrado: | C  | A7 | Dm | G7 |
                  | C  | A7 | Dm | G7 |
Tom C — Subida 1: | Em | A7 | Dm | G7 |
Tom C — Subida 2: | Gm | C7 | F  | Fm |</pre>
          <pre>Tom G — Quadrado: | G  | E7 | Am | D7 |
Tom G — Subida 1: | Bm | E7 | Am | D7 |
Tom G — Subida 2: | Dm | G7 | C  | Cm |</pre>
          <pre>Tom D — Quadrado: | D   | B7 | Em | A7 |
Tom D — Subida 1: | F#m | B7 | Em | A7 |
Tom D — Subida 2: | Am  | D7 | G  | Gm |</pre>
          <p>Quando aparecer um acorde de fora, pergunte sempre para onde ele quer ir. Essa pergunta transforma batida em acompanhamento real.</p>
        </section>

        <section id="s8" data-toc-description="Famílias práticas de músicas e padrões para levar direto para o estudo diário.">
          <span class="section-num">Repertório</span>
          <h2 class="section-title">Padrões Essenciais do Repertório de Forró</h2>
          <div class="song-card">
            <h3>Xote Dos Milagres — família em G</h3>
            <pre>| G | D | Am | C |
| G | D | Em | C D7 |</pre>
          </div>
          <div class="song-card">
            <h3>Rindo À Toa — giro para decorar cedo</h3>
            <pre>| G | D7 | Em | C |
| C | G | D7 | Db7 |</pre>
          </div>
          <div class="song-card">
            <h3>Xote da Alegria — família em Fá sustenido</h3>
            <pre>| F# | C# | D#m | C# |
| F# | C# | D#m | A#m |
| B  | F# | C#  | F#  |</pre>
          </div>
          <div class="song-card">
            <h3>Oh! Chuva — família em Dó sustenido menor</h3>
            <pre>| C#m | G#m | C#m | G#m |
| A   | E   | A   | G#  |</pre>
          </div>
          <div class="song-card">
            <h3>Dicionário Visual Rápido</h3>
            <p class="song-card-intro">Essas formas cobrem as regiões tonais que voltam o tempo todo no repertório de forró moderno e no universo Falamansa.</p>
            <div class="chord-gallery" id="forro-quick-chords" aria-label="Diteggiaturas visuais do forró"></div>
          </div>
        </section>

        <section id="s9" data-toc-description="Plano semanal para transformar o estilo em prática, não só em leitura.">
          <span class="section-num">Estudo</span>
          <h2 class="section-title">Plano de Estudo &amp; Checklist</h2>
          <div class="study-week">
            <h3>Semanas 1–2 — Levada e Sol maior</h3>
            <div class="table-wrap">
              <table>
                <thead><tr><th>Dia</th><th>Trabalho</th><th>Tempo</th></tr></thead>
                <tbody>
                  <tr><td>Seg</td><td>Xote numa corda solta</td><td>12 min</td></tr>
                  <tr><td>Ter</td><td>Giro G–D7–Em–C</td><td>15 min</td></tr>
                  <tr><td>Qua</td><td>Fechamento C–G–D7–G</td><td>15 min</td></tr>
                  <tr><td>Qui</td><td>Contraste entre estrofe e refrão</td><td>18 min</td></tr>
                  <tr><td>Sex</td><td>Rindo À Toa ou Xote Dos Milagres devagar</td><td>20 min</td></tr>
                </tbody>
              </table>
            </div>
          </div>
          <div class="study-week">
            <h3>Semanas 3–4 — F# e C#m</h3>
            <div class="table-wrap">
              <table>
                <thead><tr><th>Foco</th><th>Detalhe</th></tr></thead>
                <tbody>
                  <tr><td>F# maior</td><td>F#, C#, D#m, B e fechamentos com C#7</td></tr>
                  <tr><td>C#m</td><td>Giro emocional com A, E e G#</td></tr>
                  <tr><td>Meta</td><td>Sair da levada regular e entrar na dinâmica de seção</td></tr>
                </tbody>
              </table>
            </div>
          </div>
          <div class="study-week">
            <h3>Semanas 5–6 — Dominantes e repertório</h3>
            <div class="table-wrap">
              <table>
                <thead><tr><th>Treino</th><th>Objetivo</th></tr></thead>
                <tbody>
                  <tr><td>Dominantes secundárias</td><td>Ouvir para onde elas conduzem e fazê-las cantar sem endurecer a levada</td></tr>
                  <tr><td>Quedas menores</td><td>Am–G–F–E7, Dm–C–Bb–A7, Em–D–C–B7</td></tr>
                  <tr><td>Repertório</td><td>Xote da Alegria, Rindo À Toa, Xote Dos Milagres, Oh! Chuva</td></tr>
                </tbody>
              </table>
            </div>
          </div>
          <h3>Checklist final</h3>
          <ul>
            <li>Consigo manter uma levada de xote sem correr.</li>
            <li>Reconheço I–V–vi–IV de ouvido em mais de uma tonalidade.</li>
            <li>Consigo acompanhar pelo menos uma música em G e uma em F#.</li>
            <li>Sei usar uma dominante secundária para empurrar o giro.</li>
            <li>Consigo abrir o refrão sem perder o pulso.</li>
          </ul>
        </section>
      `
    }
};
