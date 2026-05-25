window.CavaquinhoSiteContent = window.CavaquinhoSiteContent || {};
window.CavaquinhoSiteContent.pagode = {
    en: {
      metaTitle: 'Ritmos do Brasil — Pagode',
      title: 'Ritmos do Brasil — Pagode',
      subtitle: 'A practical path for pagode accompaniment on cavaquinho: levada, chorus lifts, harmonic turnarounds and song families that work in rodas, rehearsals and band settings.',
      nav: {
        choose: 'Choose path',
        choro: 'Choro',
        forro: 'Forró',
        pagode: 'Pagode'
      },
      ui: {
        tocTitle: 'Contents',
        tocSummary: 'A guided pagode path through levada, harmony, repertoire and accompaniment habits.',
        tocReadySummary: '{count} sections to study pagode in a practical order.',
        open: 'Open',
        close: 'Close',
        backToTop: 'Back to top'
      },
      footer: 'Good practice! In pagode, steady levada and elegant section changes carry the whole group.',
      mainHtml: `
        <section id="s1" data-toc-description="Tuning, role of the cavaquinho and how it relates to voice and percussion in pagode.">
          <span class="section-num">Introduction</span>
          <h2 class="section-title">The Cavaquinho in Pagode</h2>
          <h3>Standard tuning</h3>
          <pre>String 1 (highest): D4
String 2:            B3
String 3:            G3
String 4 (lowest):   D3</pre>
          <blockquote>In pagode the cavaquinho is not there to fill every space. It locks with the groove, supports the singer and makes the chorus arrive with authority.</blockquote>
          <h3>Three musical jobs</h3>
          <ul>
            <li>Keep the <strong>levada</strong> stable with a compact hand.</li>
            <li>Mark verse, pre-chorus and chorus without overplaying.</li>
            <li>Connect voice, pandeiro, tantan and harmony into one pulse.</li>
          </ul>
          <h3>Harmonic territory to know early</h3>
          <div class="table-wrap">
            <table>
              <thead><tr><th>Center</th><th>Use</th><th>Typical effect</th></tr></thead>
              <tbody>
                <tr><td><strong>C / D / G</strong></td><td>Comfortable vocal keys</td><td>Clear, singable refrains</td></tr>
                <tr><td><strong>A minor / E minor</strong></td><td>Emotional verses and bridges</td><td>Soft tension without losing groove</td></tr>
                <tr><td><strong>I–VI7–ii–V</strong></td><td>Classic pagode engine</td><td>Forward motion toward the refrain</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section id="s2" data-toc-description="Base levada, ghost/chuck motion and right-hand control before chord changes.">
          <span class="section-num">Module 0</span>
          <h2 class="section-title">Levada Before Harmony</h2>
          <h3>Base pagode pulse</h3>
          <pre>Count:    | 1  e  &amp;  a | 2  e  &amp;  a |
Hand:     | ↓     x ↑  | ↓   x  ↑   |
Feel:     | firm        | answer     |</pre>
          <h3>Ghost and chuck</h3>
          <pre>| ↓   x   ↑ | ↓   x   ↑ |
The muted stroke should sound dry, short and rhythmic, not heavy.</pre>
          <ol>
            <li>Practice the hand alone on muted strings.</li>
            <li>Hold one chord and keep the groove for three full minutes.</li>
            <li>Only then bring in harmonic movement.</li>
          </ol>
        </section>

        <section id="s3" data-toc-description="Core pagode loops in common keys and the logic of I, VI7, ii and V7.">
          <span class="section-num">Module A</span>
          <h2 class="section-title">The Core Language: I – VI7 – ii – V7</h2>
          <h3>Cycle in C</h3>
          <pre>| C | A7 | Dm7 | G7 |
| C | A7 | Dm7 | G7 |</pre>
          <h3>Cycle in G</h3>
          <pre>| G | E7 | Am7 | D7 |
| G | E7 | Am7 | D7 |</pre>
          <h3>What each chord does</h3>
          <ul>
            <li><strong>I</strong> settles the phrase.</li>
            <li><strong>VI7</strong> pushes forward immediately.</li>
            <li><strong>ii</strong> softens the move without stopping momentum.</li>
            <li><strong>V7</strong> prepares the return or opens the chorus.</li>
          </ul>
        </section>

        <section id="s4" data-toc-description="Pre-chorus lifts, refrain closes and cadences that make pagode sing.">
          <span class="section-num">Module B</span>
          <h2 class="section-title">Cadences That Open the Chorus</h2>
          <h3>Direct chorus close</h3>
          <pre>| F | G7 | Em7 | A7 |
| Dm7 | G7 | C | C7 |</pre>
          <h3>Lift before the refrain</h3>
          <pre>| Am7 | D7 | G7 | C7 |
| F | G7 | C | G7 |</pre>
          <h3>Pop pagode move in D</h3>
          <pre>| D | B7 | Em7 | A7 |
| F#m7 | B7 | Em7 | A7 |</pre>
          <p>Pagode often feels easy because the cadences sing clearly. The real work is making each arrival obvious without stiffening the groove.</p>
        </section>

        <section id="s5" data-toc-description="Secondary dominants, diminished passing chords and section preparation without excess.">
          <span class="section-num">Module C</span>
          <h2 class="section-title">Secondary Dominants and Passing Color</h2>
          <h3>Dominants that pull the section forward</h3>
          <pre>In C: | C | E7 | Am7 | A7 | Dm7 | G7 | C |
In G: | G | B7 | Em7 | E7 | Am7 | D7 | G |</pre>
          <h3>Passing diminished</h3>
          <pre>| C | C#dim7 | Dm7 | G7 |
| G | G#dim7 | Am7 | D7 |</pre>
          <h3>Practical rule</h3>
          <p>Use color to lead somewhere. In pagode, a secondary dominant or diminished chord should clarify the next arrival, not show off harmony for its own sake.</p>
        </section>

        <section id="s6" data-toc-description="Representative song families and accompaniment loops for roda, rehearsal and stage.">
          <span class="section-num">Repertoire</span>
          <h2 class="section-title">Pagode Song Families to Practice</h2>
          <div class="song-card">
            <h3>Family 1 — Classic loop in C</h3>
            <pre>| C | A7 | Dm7 | G7 |
| Em7 | A7 | Dm7 | G7 |</pre>
          </div>
          <div class="song-card">
            <h3>Family 2 — Chorus lift in G</h3>
            <pre>| G | E7 | Am7 | D7 |
| Bm7 | E7 | Am7 | D7 | G |</pre>
          </div>
          <div class="song-card">
            <h3>Family 3 — Softer verse in A minor</h3>
            <pre>| Am7 | D7 | Gmaj7 | Cmaj7 |
| F#m7b5 | B7 | Em7 | E7 |</pre>
          </div>
          <div class="song-card">
            <h3>Family 4 — Pop pagode refrain in D</h3>
            <pre>| D | B7 | Em7 | A7 |
| D | B7 | Em7 | A7 | D |</pre>
          </div>
        </section>

        <section id="s7" data-toc-description="A weekly plan and checklist for making pagode accompaniment usable in real playing situations.">
          <span class="section-num">Study</span>
          <h2 class="section-title">Study Plan &amp; Checklist</h2>
          <div class="study-week">
            <h3>Weeks 1–2 — Hand and base cycle</h3>
            <div class="table-wrap">
              <table>
                <thead><tr><th>Day</th><th>Work</th><th>Time</th></tr></thead>
                <tbody>
                  <tr><td>Mon</td><td>Muted levada only</td><td>10 min</td></tr>
                  <tr><td>Tue</td><td>C–A7–Dm7–G7</td><td>15 min</td></tr>
                  <tr><td>Wed</td><td>Ghost/chuck control on one chord</td><td>12 min</td></tr>
                  <tr><td>Thu</td><td>Verse and chorus contrast</td><td>18 min</td></tr>
                  <tr><td>Fri</td><td>Slow play-along with a pagode groove</td><td>20 min</td></tr>
                </tbody>
              </table>
            </div>
          </div>
          <div class="study-week">
            <h3>Weeks 3–4 — Lifts and passing color</h3>
            <div class="table-wrap">
              <table>
                <thead><tr><th>Focus</th><th>Goal</th></tr></thead>
                <tbody>
                  <tr><td>Chorus cadence</td><td>Make the refrain open naturally</td></tr>
                  <tr><td>Secondary dominants</td><td>Hear where each dominant wants to go</td></tr>
                  <tr><td>Diminished passing chords</td><td>Add color without losing pulse</td></tr>
                </tbody>
              </table>
            </div>
          </div>
          <h3>Final checklist</h3>
          <ul>
            <li>I keep a steady pagode levada without overstrumming.</li>
            <li>I hear and play I–VI7–ii–V in more than one key.</li>
            <li>I can prepare a chorus with a clear lift.</li>
            <li>I can use one secondary dominant and one passing diminished chord musically.</li>
            <li>I can accompany a full song while supporting voice and groove.</li>
          </ul>
        </section>
      `
    },
    pt: {
      metaTitle: 'Ritmos do Brasil — Pagode',
      title: 'Ritmos do Brasil — Pagode',
      subtitle: 'Um percurso prático para acompanhamento de pagode no cavaquinho: levada, preparação de refrão, giros harmônicos e famílias de canções que funcionam na roda, no ensaio e na banda.',
      nav: {
        choose: 'Escolher caminho',
        choro: 'Choro',
        forro: 'Forró',
        pagode: 'Pagode'
      },
      ui: {
        tocTitle: 'Índice',
        tocSummary: 'Um caminho guiado de pagode por levada, harmonia, repertório e hábitos de acompanhamento.',
        tocReadySummary: '{count} seções para estudar pagode em ordem prática.',
        open: 'Abrir',
        close: 'Fechar',
        backToTop: 'Voltar ao topo'
      },
      footer: 'Bom estudo! No pagode, levada firme e mudanças elegantes de seção carregam o grupo inteiro.',
      mainHtml: `
        <section id="s1" data-toc-description="Afinação, função do cavaquinho e relação com voz e percussão no pagode.">
          <span class="section-num">Introdução</span>
          <h2 class="section-title">O Cavaquinho no Pagode</h2>
          <h3>Afinação padrão</h3>
          <pre>Corda 1 (mais aguda): D4
Corda 2:              B3
Corda 3:              G3
Corda 4 (mais grave): D3</pre>
          <blockquote>No pagode o cavaco não está ali para preencher cada espaço. Ele trava com a levada, sustenta a voz e faz o refrão chegar com autoridade.</blockquote>
          <h3>Três funções musicais</h3>
          <ul>
            <li>Manter a <strong>levada</strong> estável com mão compacta.</li>
            <li>Marcar verso, pré-refrão e refrão sem tocar demais.</li>
            <li>Ligar voz, pandeiro, tantan e harmonia no mesmo pulso.</li>
          </ul>
          <h3>Território harmônico para conhecer cedo</h3>
          <div class="table-wrap">
            <table>
              <thead><tr><th>Centro</th><th>Uso</th><th>Efeito típico</th></tr></thead>
              <tbody>
                <tr><td><strong>C / D / G</strong></td><td>Tonalidades confortáveis para voz</td><td>Refrões claros e cantáveis</td></tr>
                <tr><td><strong>Am / Em</strong></td><td>Versos e pontes com cor emocional</td><td>Tensão suave sem perder balanço</td></tr>
                <tr><td><strong>I–VI7–ii–V</strong></td><td>Motor clássico do pagode</td><td>Movimento contínuo para o refrão</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section id="s2" data-toc-description="Levada base, ghost/chuck e controle da mão antes da troca de acordes.">
          <span class="section-num">Módulo 0</span>
          <h2 class="section-title">Levada Antes da Harmonia</h2>
          <h3>Pulso base do pagode</h3>
          <pre>Conta:    | 1  e  &amp;  a | 2  e  &amp;  a |
Mão:      | ↓     x ↑  | ↓   x  ↑   |
Sensação: | firme       | resposta   |</pre>
          <h3>Ghost e chuck</h3>
          <pre>| ↓   x   ↑ | ↓   x   ↑ |
O golpe abafado deve soar seco, curto e rítmico, não pesado.</pre>
          <ol>
            <li>Pratique a mão primeiro nas cordas abafadas.</li>
            <li>Segure um acorde só e mantenha a levada por três minutos inteiros.</li>
            <li>Só então traga o movimento harmônico.</li>
          </ol>
        </section>

        <section id="s3" data-toc-description="Giros centrais do pagode em tonalidades comuns e lógica de I, VI7, ii e V7.">
          <span class="section-num">Módulo A</span>
          <h2 class="section-title">A Linguagem Central: I – VI7 – ii – V7</h2>
          <h3>Ciclo em Dó</h3>
          <pre>| C | A7 | Dm7 | G7 |
| C | A7 | Dm7 | G7 |</pre>
          <h3>Ciclo em Sol</h3>
          <pre>| G | E7 | Am7 | D7 |
| G | E7 | Am7 | D7 |</pre>
          <h3>Função de cada acorde</h3>
          <ul>
            <li><strong>I</strong> assenta a frase.</li>
            <li><strong>VI7</strong> já empurra a música para frente.</li>
            <li><strong>ii</strong> suaviza o caminho sem travar o balanço.</li>
            <li><strong>V7</strong> prepara a volta ou abre o refrão.</li>
          </ul>
        </section>

        <section id="s4" data-toc-description="Pré-refrões, fechamentos e cadências que fazem o pagode cantar.">
          <span class="section-num">Módulo B</span>
          <h2 class="section-title">Cadências que Abrem o Refrão</h2>
          <h3>Fechamento direto de refrão</h3>
          <pre>| F | G7 | Em7 | A7 |
| Dm7 | G7 | C | C7 |</pre>
          <h3>Elevação antes do refrão</h3>
          <pre>| Am7 | D7 | G7 | C7 |
| F | G7 | C | G7 |</pre>
          <h3>Movimento de pop pagode em Ré</h3>
          <pre>| D | B7 | Em7 | A7 |
| F#m7 | B7 | Em7 | A7 |</pre>
          <p>O pagode frequentemente soa fácil porque as cadências cantam sozinhas. O verdadeiro trabalho é deixar cada chegada clara sem endurecer a levada.</p>
        </section>

        <section id="s5" data-toc-description="Dominantes secundárias, diminutos de passagem e preparação de seção sem exagero.">
          <span class="section-num">Módulo C</span>
          <h2 class="section-title">Dominantes Secundárias e Cor de Passagem</h2>
          <h3>Dominantes que empurram a seção</h3>
          <pre>Em C: | C | E7 | Am7 | A7 | Dm7 | G7 | C |
Em G: | G | B7 | Em7 | E7 | Am7 | D7 | G |</pre>
          <h3>Diminuto de passagem</h3>
          <pre>| C | C#dim7 | Dm7 | G7 |
| G | G#dim7 | Am7 | D7 |</pre>
          <h3>Regra prática</h3>
          <p>Use cor para conduzir. No pagode, uma dominante secundária ou um diminuto precisa esclarecer a próxima chegada, não apenas exibir harmonia.</p>
        </section>

        <section id="s6" data-toc-description="Famílias representativas de canções e giros de acompanhamento para roda, ensaio e palco.">
          <span class="section-num">Repertório</span>
          <h2 class="section-title">Famílias de Canções para Praticar</h2>
          <div class="song-card">
            <h3>Família 1 — Giro clássico em Dó</h3>
            <pre>| C | A7 | Dm7 | G7 |
| Em7 | A7 | Dm7 | G7 |</pre>
          </div>
          <div class="song-card">
            <h3>Família 2 — Elevação de refrão em Sol</h3>
            <pre>| G | E7 | Am7 | D7 |
| Bm7 | E7 | Am7 | D7 | G |</pre>
          </div>
          <div class="song-card">
            <h3>Família 3 — Verso mais macio em Lá menor</h3>
            <pre>| Am7 | D7 | Gmaj7 | Cmaj7 |
| F#m7b5 | B7 | Em7 | E7 |</pre>
          </div>
          <div class="song-card">
            <h3>Família 4 — Refrão de pop pagode em Ré</h3>
            <pre>| D | B7 | Em7 | A7 |
| D | B7 | Em7 | A7 | D |</pre>
          </div>
        </section>

        <section id="s7" data-toc-description="Plano semanal e checklist para tornar o acompanhamento de pagode realmente utilizável.">
          <span class="section-num">Estudo</span>
          <h2 class="section-title">Plano de Estudo &amp; Checklist</h2>
          <div class="study-week">
            <h3>Semanas 1–2 — Mão e ciclo base</h3>
            <div class="table-wrap">
              <table>
                <thead><tr><th>Dia</th><th>Trabalho</th><th>Tempo</th></tr></thead>
                <tbody>
                  <tr><td>Seg</td><td>Levada só nas cordas abafadas</td><td>10 min</td></tr>
                  <tr><td>Ter</td><td>C–A7–Dm7–G7</td><td>15 min</td></tr>
                  <tr><td>Qua</td><td>Controle de ghost/chuck em um acorde</td><td>12 min</td></tr>
                  <tr><td>Qui</td><td>Contraste entre verso e refrão</td><td>18 min</td></tr>
                  <tr><td>Sex</td><td>Play-along lento com groove de pagode</td><td>20 min</td></tr>
                </tbody>
              </table>
            </div>
          </div>
          <div class="study-week">
            <h3>Semanas 3–4 — Elevação e cor de passagem</h3>
            <div class="table-wrap">
              <table>
                <thead><tr><th>Foco</th><th>Meta</th></tr></thead>
                <tbody>
                  <tr><td>Cadência de refrão</td><td>Fazer o refrão abrir com naturalidade</td></tr>
                  <tr><td>Dominantes secundárias</td><td>Ouvir para onde cada dominante quer ir</td></tr>
                  <tr><td>Diminutos de passagem</td><td>Adicionar cor sem perder o pulso</td></tr>
                </tbody>
              </table>
            </div>
          </div>
          <h3>Checklist final</h3>
          <ul>
            <li>Consigo manter uma levada de pagode estável sem tocar demais.</li>
            <li>Ouço e toco I–VI7–ii–V em mais de uma tonalidade.</li>
            <li>Consigo preparar um refrão com clareza.</li>
            <li>Sei usar uma dominante secundária e um diminuto de passagem musicalmente.</li>
            <li>Consigo acompanhar uma canção inteira sustentando voz e groove.</li>
          </ul>
        </section>
      `
    },
    it: {
      metaTitle: 'Ritmos do Brasil — Pagode',
      title: 'Ritmos do Brasil — Pagode',
      subtitle: 'Un percorso pratico per l\'accompagnamento nel pagode con il cavaquinho: levada, preparazione del ritornello, giri armonici e famiglie di brani che funzionano in roda, in sala prove e in banda.'
    }
};
