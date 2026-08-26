# SideRock — Padrões e inventário visual (MVP)

Inventário histórico das decisões de UI e dos mockups em `src/SiderockAssets/MVPStyles/`. Para contexto de produto e arquitetura atual, prevalecem `docs/PROJETO_ATUAL.md` e `docs/ARQUITETURA_ALVO.md`.

---

## 1. Contexto do produto

- Site de banda de rock/metal: identidade **escura, alto contraste**, acento **vermelho sangue/neon**.
- Objetivo: **responsivo**, chamativo, organizado; **não** reproduzir produtos inteiros (ex.: player Spotify completo) — preferir **CTAs externos**, players simplificados ou placeholders.
- Navegação principal recorrente nos mockups: **RESUMO**, **INTEGRANTES**, **MÚSICA**, **GALERIA**, **CONTATO** (em Integrantes o menu aparece sem CONTATO — tratar como variante de layout ou alinhar a um único modelo no código).

---

## 2. Sistema visual compartilhado (todas as telas)

### 2.1 Paleta (referência para CSS)

| Uso | Aproximação |
|-----|-------------|
| Fundo base | `#000000` → `#1a1a1a`, textura grunge/pedra/fumaça |
| Superfície / cartões | Preto com leve transparência ou cinza muito escuro |
| Acento primário | Vermelho intenso (`#8b0000` a `#ff0000` conforme glow) |
| Texto principal | Branco / prata |
| Texto secundário / inativo | Cinza claro |
| Bordas e ícones de ênfase | Vermelho contínuo ou com `box-shadow` vermelho (glow) |

### 2.2 Tipografia (papéis)

1. **Logo / marca**: fonte “metal” irregular, vermelha (pode usar gradiente/glow).
2. **Títulos de seção** (RESUMO, INTEGRANTES, etc.): display **serif ou brush distressado**, metálico/branco, alto impacto.
3. **UI** (nav, filtros, botões, corpo): **sans condensada ou geométrica**, caixa alta, boa legibilidade em fundo escuro (ex.: Montserrat, Oswald, Roboto Condensed).
4. **Navbar Side Rock (links)**: mesma família tipográfica que o resto da app (`:root` em `index.css`, stack **system-ui**); sem fonte web extra só para a nav salvo decisão futura.

### 2.3 Texturas e camadas de fundo

- **Base**: imagem ou noise repetível + gradiente escuro para leitura.
- **Watermark**: crânios grandes em baixa opacidade; **símbolos ocultistas** (círculos, estrelas/heptagramas) em vermelho desbotado.
- **Implementação (Side Rock)**: nas rotas da banda, o fundo full-art usa **`<img>` em grid** com scroll no `<main>`, não `cover`. Para outras áreas do site, `background-image` em camadas (`linear-gradient` + textura) continua válido; `background-attachment: fixed` só se não conflitar com o scroll da arte completa.

### 2.4 Navbar (padrão transversal)

- **Layout**: três zonas — logo à esquerda, links centralizados, redes à direita (flex/grid); a zona central usa **scroll horizontal** se não couber tudo, sem menu hamburger salvo decisão futura.
- **Side Rock (exceção)**: cabeçalho composto por `SideRockHeader` → `SideRockNavbar` (tabs) + `SideRockSocialRail` (redes). **Modo largo (`wide`)**: grid `1fr | tabs (max-content) | 1fr` com redes em `justify-self: end`; navbar só na coluna central. **Modo compacto (`compact`)**: mobile (`≤760px`) ou tabs a transbordar no desktop — navbar full-width no topo com `padding-inline-end` para o rail; redes em **coluna fixa à direita** (`position: fixed`). Ver `useSideRockCompactLayout` (mede `tabsScroll` + `tabsRegion`), `data-side-rock-layout` no `<html>`.
- **Tabs sem corte**: `.tabsScroll` só faz scroll (`overflow-x: auto`); filhos em `.tabsTrack` com `width: max-content` e `margin-inline: auto` (centrado quando cabe, scroll quando não). **Nunca** `justify-content: center` no scroller. **Sem coluna de logo** na nav monolítica atual.
- **Scroll da zona de links**: **não** usar `justify-content: center` no scroller quando há overflow — evita cortar o início dos itens com `overflow-x: hidden` no ascendente (`main`).
- **Escala tipográfica e espaçamentos**: preferir **`@media (max-width: …)` + variáveis CSS** (`--nav-*`, `--tab-*`, `--social-*`, `--side-rock-social-rail-width`) em `SideRockHeader.module.css` — **evitar `clamp()`** na nav Side Rock; faixas 992 / 720 / 760 / **640** / 560 / 480 / 380px; `--tab-letter-spacing` pode reduzir abaixo de 560px.
- **Viewport (TS)**: constantes e funções num único ficheiro `src/utils/viewport.ts` — `VIEWPORT_MOBILE_MAX_PX` (760), `VIEWPORT_NAV_STACK_MAX_PX` (590), `isMobileViewport`, `isDesktopViewport`, `isViewportWidthBelow`, `isNavStackViewport`, `getViewportWidth`. Importar de `utils/viewport`; não duplicar breakpoints nos componentes. Uso em React (hooks) fica para fase seguinte.
- **Logo**: “OZZBORNS” (no projeto: nome da banda real) em vermelho; em Integrantes há **crânio em medalhão** sob o logotipo — reforço de marca opcional.
- **Links**: uppercase, sans; inativo cinza/branco; **ativo em vermelho** com **sublinhado decorativo** (linha + elemento central: crânio ou losango); opcional **pulso lento** no texto e no glow da linha ativa; respeitar `prefers-reduced-motion`.
- **Separadores**: em Galeria aparecem **pontos vermelhos** entre itens — padronizar se usar ou não em todas as rotas.
- **Social**: quatro círculos com borda vermelha — Facebook, Instagram, YouTube, Spotify (SVG ou sprite consistente); na navbar pode haver **chase** em loop (brilho sequencial f→i→y→s) com `prefers-reduced-motion` a desligar. No telemóvel (≤590px) o `--social-gap` e o `--social-link-size` não devem colapsar abaixo de ~0.48rem / ~1.78rem — os ícones ficam ilegíveis e difíceis de tocar.

### 2.5 Micro-decoração

- **Crânio** em círculo vermelho / “mira” — repete em títulos, CTAs e divisórias.
- **Divisória horizontal**: linha vermelha fina + crânio central (hero → conteúdo em Resumo; rodapé de seção em Integrantes).
- **Cantoneiras / molduras** vermelhas em elementos-chave (foto em Resumo, bordas de cards).

### 2.6 Botões (ghost)

- Contorno vermelho fino, fundo transparente ou muito escuro, texto branco uppercase, **ícone** (crânio ou rede) à direita.
- Hover (sugestão): aumentar glow, borda mais brilhante ou leve `background` vermelho escuro.

### 2.7 Acessibilidade e realismo de escopo

- Contraste: validar vermelho sobre preto para tamanhos pequenos (WCAG).
- Efeitos “neon”: combinar `box-shadow` com conteúdo legível (não depender só da cor do glow para significado).
- **Música**: mockup inclui carrossel, player rico e waveform — para MVP, **simplificar** (lista + link Spotify/YouTube) mantendo o **layout** e a **casca visual** se desejado.

---

## 3. Inventário por tela MVP

### 3.1 Resumo (`ResumoMVP.png`)

**Hero (metade superior)**

- Fundo escuro com **nébula/glow vermelho** atrás dos integrantes; crânio desbotado à direita.
- **Coluna esquerda**: headline grande “LADO SOMBRIO DO ROCK” (parte em vermelho); sublinha sans; CTA “CONHEÇA NOSSA HISTÓRIA” + crânio.
- **Direita**: foto promocional do quarteto.
- **Divisor**: linha vermelha + crânio em losango entre hero e bloco inferior.

**Bloco “RESUMO” (três colunas)**

- **Esquerda**: título “RESUMO” com **cantoneiras** vermelhas; dois parágrafos; CTA “SAIBA MAIS SOBRE A BANDA”.
- **Centro**: foto PB de show em **moldura ornamentada** vermelha com aspecto “queimado”.
- **Direita**: lista de fatos com **ícone vermelho** + rótulo + valor (calendário “DESDE 2018”, pin “ORIGEM…”, guitarra “ESTILO…”, crânio “MISSÃO…”); fundo com pentagrama + crânio em watermark.

**Grid sugerido**: `1fr` / `1.2–1.5fr` / `1fr` em desktop; empilhar em mobile (ordem: texto → foto → fatos ou conforme prioridade de conteúdo).

---

### 3.2 Integrantes (`IntegrantesMVP.png`)

**Cabeçalho de página**

- Título “INTEGRANTES” central, fonte distressada branca/prata, flanqueado por **símbolos estelares** vermelhos (não crânios no título nesta tela).
- Subtítulo instrucional: “CLIQUE EM UM MEMBRO PARA CONHECER MAIS” (cinza, pequeno, uppercase).

**Corpo em duas colunas**

- **Esquerda**: foto grupal; membro selecionado com **contorno branco** (glow/outline); interação: hotspots ou áreas clicáveis trocam o card.
- **Direita**: **card** com borda vermelha luminosa, crânio no topo da moldura, watermark de crânio no card.
- **Paginação** “01 / 04” com setas em caixas vermelhas (alternativa à seleção direta na foto).
- Conteúdo do card: nome (display), instrumento em vermelho, bio, lista **IDADE / INSTRUMENTO / INFLUÊNCIAS / CURIOSIDADE / FRASE** com ícones vermelhos à esquerda.

**Rodapé de seção**: linha + crânio (eco visual do Resumo).

**Responsivo**: empilhar — foto em cima, card abaixo; manter paginação acessível.

---

### 3.3 Música (`MusicaMVP.png`)

**Hero de seção**

- Título “MÚSICA” com **crânios em miras** vermelhas nas laterais (como Galeria); tagline em sans abaixo (“HONRANDO OS CLÁSSICOS…”).

**Carrossel de álbuns**

- Três capas; **centro maior** com **borda/glow vermelho forte**; laterais menores e mais esmaecidas (`opacity`).
- Setas grandes vermelhas nas laterais do carrossel.

**Player (faixa única)**

- Container com borda vermelha fina.
- Bloco esquerdo: thumb, nome da faixa, álbum em vermelho.
- Centro: shuffle, prev, play/pause (destaque circular), next, repeat; **barra de progresso** vermelha com thumb; tempo atual/total.
- Direita: **waveform** estilizado + volume (para MVP: estático ou simplificado).

**Tracklist**

- Título “FAIXAS DO ÁLBUM” com linhas decorativas; área com borda; **duas colunas** de faixas; faixa ativa com **fundo vermelho semi-transparente** e ícone de “equalizador” animado (opcional no MVP).

**CTA**: “OUVIR NO SPOTIFY” — priorizar link externo em vez de lógica de streaming completa.

---

### 3.4 Galeria (`GaleriaMVP.png`)

**Hero de seção**

- Título “GALERIA” com **crânios em círculos com “espinhos”** vermelhos nas laterais; linhas/setas vermelhas decorativas (setas apontando para fora).
- Subtítulo: “MOMENTOS REAIS, ENERGIA PURA.” (grafias podem variar — alinhar copy ao conteúdo final).

**Filtros horizontais**

- Chips: TODAS | SHOWS | BASTIDORES | ESTÚDIO | FÃS; estado ativo = **caixa com borda vermelha**; tipografia sans uppercase cinza.

**Grid**

- Estilo **masonry** ou colunas com alturas variadas; **borda vermelha distressada** em cada célula; gutters estreitos e consistentes.

**CTA inferior**: “VER MAIS FOTOS” + crânio (mesmo vocabulário visual do título).

---

## 4. Componentes reutilizáveis sugeridos

| Componente | Onde aparece |
|-------------|----------------|
| `SiteNavbar` | Todas |
| `SideRockHeader` / `SideRockNavbar` / `SideRockSocialRail` | Rotas Side Rock |
| `SectionHeading` (título + flanqueadores + subtítulo) | Resumo, Integrantes, Música, Galeria |
| `SocialLinksRow` | Navbar |
| `GhostButton` / `OutlineButton` | CTAs em todas |
| `SectionDivider` (linha + crânio) | Resumo, Integrantes |
| `FilterChips` | Galeria |
| `MediaCard` / `FramedImage` | Galeria, Resumo, capas |
| `ProfileCard` | Integrantes |
| `AlbumCarousel` + `TrackList` (versão simplificada) | Música |

---

## 5. Assets e implementação

- **Fundos temporários por rota**: o protótipo referencia PNGs em `src/SiderockAssets/Bgs2/`. Eles permanecem somente até a migração para a composição responsiva em camadas descrita em `docs/PROJETO_ATUAL.md`.

### 5.1 Side Rock — rotas, páginas e fundo (implementado)

- **Rotas planas** em `App.tsx`: `SIDE_ROCK_BASE_PATH` redireciona para `sideRockPath('resumo')`; cada secção tem `<Route path={sideRockPath(...)} element={<...Page />} />`. **Sem** rota-pai com `<Outlet />` nem componente de layout dedicado.
- **Shell temporário compartilhado**: `SideRockSectionPage` concentra o padrão do protótipo atual (`100dvh`, fundo em artboard, navbar sobreposta e área de conteúdo). As páginas de Resumo, Integrantes, Música e Galeria apenas fornecem fundo e conteúdo. Esse shell deve ser substituído pela landing contínua planejada, não expandido como arquitetura definitiva.
- **Artboard proporcional**: `.bgStack` deve declarar a proporção real do asset (`aspect-ratio`) e `.fgLayer` / `.inner` devem ocupar exatamente a mesma área da imagem. Posicionar conteúdo futuro por grid ou percentuais dentro dessa área, preservando os highlights do BG.
- **Véu cinza sobre o BG**: `.fgLayer::before` com `background: rgba(180, 180, 180, 0.1)` entre a imagem e o conteúdo — suaviza contraste agressivo sem alterar o PNG; ajustar só a opacidade se precisar mais ou menos “neutro”.
- **Não usar `background-size: cover`** nestes BGs de arte completa: o objectivo é ver **toda a imagem** com scroll no `<main>`.
- **Navbar**: `SideRockHeader` orquestra `SideRockNavbar` + `SideRockSocialRail`; **sem** imagem de fundo no strip; **sobre o BG** dentro de `<main>` (`.navOverlay` `sticky`); `NavLink` com `to={sideRockPath(id)}`. Redes em `socialLinks.ts`: Facebook, Instagram, YouTube, Spotify. Detecção compacto: `VIEWPORT_MOBILE_MAX_PX = 760` + `useElementOverflow` nas tabs (com latch para não oscilar wide↔compact).
- **Navbar — evolução intencional**: remoções no CSS (keyframes, pseudo-elementos, blur, linhas decorativas, etc.) feitas pelo autor são **deliberadas**; o assistente **não** deve voltar a acrescentar esses trechos salvo pedido explícito — limitar-se a alinhar o que restar (grid, `grid-area`, overflow mínimo, variáveis em uso).
- **Scrollbar Side Rock**: o mesmo sistema da home (`useScrollbarTheme` → `--scrollbar-thumb-*` no `html`). Nas rotas Side Rock o thumb é vermelho (`SIDE_ROCK_SCROLLBAR`, `#c52b31`). Home sem seleção continua cinza. Sem interpolar essas variáveis no `html`. O `.main` do shell usa a mesma receita visual da home (8px, botões ocultos, cor sólida, track na cor do fundo) — não uma barra nativa cinza à parte.
- **Scroll interno Side Rock**: o shell marca `data-app-scroll="inner"` no próprio `html` (além do nó) para o Internet/Samsung sem `:has()`. `html`/`body`/`#root` ficam `overflow: hidden` e altura `100dvh` (fallback `100vh`). `100svh` deixa vazio no fundo quando a janela é maior que o viewport pequeno. O scroll real é só no `.main`, com `-webkit-overflow-scrolling: touch` e `overscroll-behavior: none`. Layout `flow`: `min-height: 0` no palco/inner — `min-height: 100%` estica espaço vazio depois do último bloco (faixa de bandas no Resumo). A home **não** usa este atributo — continua a rolar o documento.
- **Foto da banda no Resumo**: `MembersNull.png` é recorte com alpha; o tamanho vive em `summaryContent.heroPhoto.scale`. Em `cutout`, não pintar overlay preto (`::after` com `#050505` / fade no fundo da figure) — no letterbox isso vira um quadrado preto em cima do palco. Halo/órbita ficam atrás da PNG, não por cima.
- **Vídeo de contratação**: lista em `bookingContent.ts` (`videos`); o site serve `promotionalVideo*.web.mp4` + posters `.webp`. Os originais `promotionalVideo*.mp4` permanecem no repositório e não são importados. Player nativo; desktop lado a lado; ≤760px carrossel nativo (`overflow-x: auto`, `scroll-snap`, scrollbar oculta, peek do próximo card). Sem autoplay. `preload="none"` + poster. Ao tocar um, pausar os outros da fila. Não hotlinkar CDN do Instagram. CTA “Ver apresentações” aponta para o perfil (`instagramUrl`). Com `as const`, se todos tiverem `href`, não usar `'href' in video` com ramo else.
- **ScrollReveal**: `src/Components/ScrollReveal`. Um `IntersectionObserver` (root = `.main` interno), `threshold: 0.1`, `rootMargin: 0 0 -6% 0`. Anima só `opacity`/`transform`. Estado inicial visível (`idle`) se o JS falhar. `prefers-reduced-motion` tira o arrasto e faz fade curto — **não** saltar o observer nem revelar pelo viewport com margem positiva (dispara cedo demais). Tokens `--reveal-duration` / `--reveal-distance` / `--reveal-ease` na página. Não animar `width`/`height`/`margin`. Não aplicar `transform` no elemento `position: sticky`. Último bloco do Resumo (faixa de bandas, linha legal) **sem** `ScrollReveal`.
- **Resumo — linha legal**: `.legalBar` em `BookingSection.module.css`. Barra baixa, padding vertical igual, flex a centrar o texto. Espaço acima (~1.35rem) para não colar nos blocos de contratação; sem padding extra abaixo da linha. Sem `ScrollReveal`.
- **Resumo — faixa de bandas**: último bloco, sempre pintado (sem `ScrollReveal`). No mobile (`≤760px`) sem `mask-image` — no Internet/Samsung a máscara some com o texto. Sem `padding-bottom` extra no `.page` — isso abre vazio depois das bandas.
- **MembersImage**: componente único em `src/Components/MembersImage`. A foto de grupo (`MembersNull`) fica sempre visível e imóvel; as camadas (`vocal`/`guitar`/`drums`/`bass`) são as mesmas poses já pintadas com a linha branca, empilhadas com `inset: 0` no mesmo retângulo. A animação é só fade de `opacity`/`visibility` (`--member-outline-duration`, 0.8s). `prefers-reduced-motion` não encurta este fade — só o arrasto do card. Sem `mix-blend-mode`, `filter`, `translate`, `scale` ou `object-position` distinto nas camadas. O `.root` não usa `width/height: 100%` — o tamanho vem do palco da página (Side Rock) ou de `.standalone` (Ozzborn). Modo interno (sem props) ou controlado (`activeId`, `onHover`, `onSelect`, `className`, `alt`). Hitmap SVG só para clique/hover. Identificadores: `vocal` | `guitar` | `bass` | `drums`.
- **Toque no telemóvel**: em áreas clicáveis (`MembersImage` hitmap, cards, botões) usar `-webkit-tap-highlight-color: transparent`. Sem isso, Android/Internet pintam um retângulo azul no bounding box do toque — no hitmap SVG isso vira um quadrado em cima do integrante. Manter `outline` só em `:focus-visible` (teclado).
- **Integrantes — fundo**: um único asset de atmosfera (`side-rock-members-atmosphere-v2.png`) atrás da formação. Sem glows radiais extra, sem spotlight a seguir o membro, sem pontos de luz duplicados. Véus só para leitura (escurecer o card à direita).
- **Integrantes — copy de uso**: o guia (“Explore a formação…”) vive **sob o título**, no mesmo gutter do Resumo. Não flutuar à direita. “Seleção fixada” existe **só no card**. Sem figcaption repetindo a instrução.
- **Integrantes — card e seletores**: superfície alinhada aos cards de contratação (borda vermelha discreta, fundo escuro translúcido, acento vertical à esquerda). Tipografia do nome escala com o **container do card** (`cqi`); `min-width: 0` + `overflow-wrap` para o texto não rebentar a moldura no telemóvel.
- **Integrantes — as 3 animações da ferramenta**: tempos numa fonte só (`membersMotion.ts` → variáveis no `.page`). (1) formação — fade da linha branca em 800ms (pode divergir dos cards); (2) seletor inferior — 800ms; (3) card — sai 400ms, entra 400ms, um conteúdo de cada vez. Saída + entrada do card = duração do seletor, para não ficarem desparelhados. `prefers-reduced-motion` remove o arrasto (`translate` 0) e a elevação do seletor, **sem** colapsar as durações.
- **Integrantes — palco da formação**: `.portrait` permanece `display: flex; align-items: flex-end; justify-content: center`. Não usar `display: grid`, `place-items` ou `justify-self` no palco — isso faz o `MembersImage` recalcular o tamanho. Escala aprovada só em `.photoStack`: `1.544` no desktop, `1.32` no mobile (`≤760px`). Origem no fundo; `translate` separado de `scale` (o atalho `transform` anula `scale`). Sem animação de entrada no palco (`portraitEntrance` ou equivalente). No mobile o palco é mais alto (`~70svh`) com `max-width` acima de 100%. O card de detalhes sobe com `margin-top` negativo e `z-index` por cima — pode cobrir a ponta da bota. Não usar `--portrait-shift` no mobile (a formação fica junto da descrição). Em `≤760px` o `.experience` é coluna flex para o seletor colar ao card (grid não colapsa margin negativo). O card usa `width: 100%` e `flex: 0 0 auto` — `align-self: start` no eixo cruzado colapsa a largura a 0 e o texto estica a página. `align-content: start` na página, sem `min-height: 100svh`.
- **Integrantes — centralização mobile**: o PNG tem alpha assimétrico (mais vazio ao lado de Adriano do que de Victor). Deslocar só o wrapper com `--portrait-offset-x` (cerca de `-2%` a `-4%`, só em `≤760px`); base, overlays e hitmap andam juntos. Não compensar com escala nem com offsets por integrante.
- **Molduras “ornamentadas”**: PNG com alpha, `border-image`, ou SVG; fallback: `border` sólido + `box-shadow` vermelho.
- **Ícones**: preferir SVG inline ou sprite único para cor `#currentColor` ou `fill` vermelho fixo.
- **Crédito de desenvolvimento**: `DeveloperCredit` em `src/Components/DeveloperCredit`. Só texto + URL (`https://n2codeworks.com.br/`), sem ícone. Mesmo `font-size` do meta do catálogo (0.68rem / 0.6rem ≤680px). Centrado, discreto, sem cor de identidade. Reutilizar nas páginas; não copiar o markup.
- **SPA no Vercel**: o React Router só existe no cliente. Sem rewrite, um link direto a `/side-rock/resumo` devolve 404. `vercel.json` reescreve rotas da app para `/index.html`; ficheiros reais (`/assets/…`) continuam a ser servidos. Após alterar, precisa de um deploy novo.

### 5.2 Home — catálogo de experiências

- **Estado ativo**: `HomeExperienceId | null`. `null` é o estado institucional neutro (carvão, grafite, prata envelhecida). Não usar Side Rock como fallback visual.
- **Tema**: cores de identidade (acento + scrollbar) vivem em `homeExperiences.ts` (`theme` / `CATALOG_NEUTRAL_THEME`). O CSS só consome `--catalog-accent`, `--card-accent` e `--ambient-accent`. Não acrescentar seletores por `id` para uma experiência nova.
- **Desktop (hover fino)**: a página inicia neutra; hover e foco no conjunto de cards aplicam a identidade correspondente; sair da região ou do foco restaura `null`.
- **Toque / viewport ≤760px**: `useCatalogExperienceRotation` percorre `HOME_EXPERIENCES` a cada 4s. **Sem hover**: o dedo só rola ou entra no card; a identidade vem da rotação, não do toque. `enableHover={!isAutomaticRotation}` nos cards — Safari ainda dispara `mouseenter` falso após o toque, então `pointerType` sozinho não basta. Pausar a rotação durante o toque e com a aba oculta. Ao sair deste modo (resize para desktop), voltar a `null`. Desktop largo com mouse permanece no hover + lift.
- **Scroll no toque**: o catálogo não usa `overflow: hidden` (quebra o scroll no Safari/Chrome móvel). `overflow-x: clip` + `touch-action: pan-y`. Lift de layout (`flex-grow`, `translateY`) só em `(hover: hover) and (pointer: fine) and (min-width: 981px)`.
- **Grid 2+1 (≤980px e >680px)**: lista em 4 colunas; cada card ocupa 2. Se o último for ímpar, `grid-column: 2 / span 2` — mesma largura dos de cima, centrado. Não esticar nas duas colunas.
- **Scrollbar**: cores sólidas com fallback `#737373` (sem `linear-gradient` nem transição de `@property` no `html` — no Internet/Samsung isso interpola para valor inválido e a barra fica branca). Variáveis ainda vêm de `useCatalogScrollbarTheme`. `color-scheme: dark` e `background-color` no `html`.
- **Rotação sem piscar**: no toque/≤980px, sem keyframes de entrada, sem scale/rotate/filter, sem `mix-blend-mode`. Card ativo só muda cor de borda — sem `isolation`, glow com `blur`, `clip-path` por cima do texto nem `box-shadow` (no Internet/Samsung isso rasteriza o título e fica serrilhado). A troca interpola `--catalog-accent` **no `.catalog`** (~900ms, ease-in-out) e `color`/`border-color`/`background-color` nos consumidores; **não** interpolar `--scrollbar-thumb-*` no `html`.
- **Movimento**: transições coordenadas em CSS (sem biblioteca). Layout/lift usam `--catalog-motion-duration` / `--catalog-motion-ease`. Cor de identidade usa `--catalog-identity-duration` / `--catalog-identity-ease` (no mobile, mais longos e menos agressivos). `prefers-reduced-motion` desliga só as animações de entrada, não a interpolação de identidade.
- **Medalhão**: tamanho via `--medallion-size` / `--orbit-size`. A órbita centra com `inset: 0` + `margin: auto` (largura e altura iguais a `--orbit-size`); **não** usar `translate(-50%, -50%)` para layout — no toque o CSS zera `transform` (texto serrilhado) e o círculo saía do centro. Rotate/scale da órbita só no desktop hover. Deve caber na moldura interna. Sem índices 01/02/03 nos cards.
- **Copy editorial**: o rodapé (“Três experiências…”) é texto fixo; o contador do intro deriva de `HOME_EXPERIENCES.length`. Não forçar o rodapé a gerar o numeral por código.
- **Crédito N2**: a home só coloca `DeveloperCredit` abaixo do `CatalogFooter`. Não duplicar o markup no catálogo.

---

## 6. Review de qualidade na entrega

Ao concluir qualquer alteração, revisar **cada ficheiro tocado** nestes pilares e corrigir o que falhar **antes** de considerar a entrega feita. Não esperar o utilizador pedir a review.

### 6.1 Pilares

1. **Padronização** — alinhado a este documento, a `docs/PROJETO_ATUAL.md` / `docs/ARQUITETURA_ALVO.md`, e aos padrões já existentes na pasta (nomes, tokens, `utils/viewport.ts`, CSS modules).
2. **Simplicidade** — sem dados mortos, duplicação de cores/seletores, abstrações prematuras ou props que o próprio componente já pode ler da fonte de verdade.
3. **Organização** — um ficheiro, uma responsabilidade: dados/tema em config; página orquestra; hooks isolam efeitos; componentes só apresentam.
4. **Legibilidade** — nomes que dizem o porquê; handlers extraídos; constantes para intervalos e delays; evitar “truques” opacos (ex.: passar função de `setState` sem ser óbvio).
5. **Componentização** — páginas não embutem markup de card/intro/footer; efeitos de DOM global (scrollbar, media query) não ficam no JSX da página.
6. **Escalabilidade** — acrescentar um item deve ser dados, não copiar CSS/TS por `id`. Listas e contagens derivam do array. Breakpoints de layout vs. comportamento (ex.: 980 vs 760) ficam documentados quando forem deliberadamente distintos.
7. **Estabilidade** — cleanup de listeners, intervalos e estilos/atributos no `document`; guarda para `window` quando o valor corre em init; resize/hover/rotação não corrompem o estado; `prefers-reduced-motion` respeitado nas entradas.

### 6.2 O que não conta

Não reescrever copy nem layout visual só para “passar” no checklist. Se um pilar conflituar com o visual pedido, manter o visual e anotar o trade-off neste documento.

---

## 7. Changelog deste documento

- **2026-08-26**: Resumo — ScrollReveal original (root `.main`, `-6%`); sem vazio após as bandas (`flow` sem min-height 100%, sem padding extra).
- **2026-08-26**: Integrantes mobile — card de detalhes sobe mais 5svh (`calc(-8rem - 5svh)`).
- **2026-08-26**: Integrantes mobile — formação sem shift (junto da descrição); card de detalhes no sítio; seletor colado ao card (`align-content: start`).
- **2026-08-26**: Integrantes — sem highlight azul de toque no telemóvel (`-webkit-tap-highlight-color: transparent` no hitmap e na página).
- **2026-08-26**: Integrantes mobile — card cobre a ponta da bota (`margin-top` negativo, sem `padding-bottom` no palco).
- **2026-08-26**: Resumo mobile — faixa de bandas visível (sem ScrollReveal/mask); shell `100svh`; ScrollReveal com fallback de viewport.
- **2026-08-26**: Integrantes — card de detalhes 400+400ms (= seletor 800ms); formação 800ms pode divergir.
- **2026-08-26**: Integrantes — tempos: formação 800ms, card 460/480ms, seletor 800ms (fonte `membersMotion.ts`).
- **2026-08-26**: Integrantes — `prefers-reduced-motion` encurtava as 3 animações para 160ms; tempos passam a vir de `membersMotion.ts` e o reduced só tira o arrasto.
- **2026-08-26**: Integrantes — `MembersImage` partilhado; overlay já vem com a linha branca; fade só de opacity (sem mix-blend/filter); cards só com fade; sem translate nas camadas.
- **2026-08-26**: Integrantes — formação maior no mobile (palco mais alto + scale 1.32), com folga para a bota não colidir com o card.
- **2026-08-25**: Integrantes — desktop: formação desce 10% sem mudar a escala; mobile inalterado.
- **2026-08-25**: Integrantes — formação +10% no desktop; no mobile o palco sobe para a bota não colidir com o card.
- **2026-08-25**: Integrantes — atmosfera única; guia sob o título; lock só no card; formação maior; card com tipografia em `cqi` para não rebentar no mobile.
- **2026-08-25**: `MembersImage` sem borda/glow e sem caveira superior; seleção por hitmap e troca das camadas preservadas.
- **2026-08-25**: Resumo — carrossel de vídeos no mobile; cópias `.web.mp4` + posters WebP; `preload="none"`; fechamento comercial; copy sem repetir factos do hero; `ScrollReveal`; linha legal em barra full-width centrada.
- **2026-08-25**: Vercel — rewrite SPA para `/index.html` para links diretos (`/side-rock/resumo`, etc.) não darem 404.
- **2026-08-25**: Contratação — títulos dos vídeos sempre com `href`; `'href' in video` com `as const` gerava `never` no `tsc`.
- **2026-08-25**: Navbar — ícones sociais no telemóvel com mais espaço e círculo maior (não colapsar o gap em 590/480/380).
- **2026-08-25**: Side Rock — no mobile, o documento não faz bounce além da página (não revela o fundo de caveiras); home continua a rolar o `html`.
- **2026-08-25**: Contratação — “Ver apresentações” vai para o Instagram da banda, com ícone da rede.
- **2026-08-25**: Contratação — dois vídeos locais lado a lado (`videos` em `bookingContent.ts`).
- **2026-08-25**: Contratação — player nativo com `promotionalVideo.mp4`; Instagram só como link do reel.
- **2026-08-25**: Resumo — foto da banda em cutout sem overlay preto na figure; escala só em `heroPhoto.scale`.
- **2026-08-25**: Side Rock — scrollbar vermelha padronizada (`useScrollbarTheme` + `SIDE_ROCK_SCROLLBAR`); home continua cinza no estado neutro.
- **2026-08-25**: `DeveloperCredit` só com texto (sem ícone N2), mesmo tamanho do footer editorial.
- **2026-08-25**: `DeveloperCredit` partilhado (logo + link N2); home só o consome, um pouco maior que o footer editorial.
- **2026-08-25**: Home — crédito discreto “Desenvolvido por N2 CodeWorks” abaixo do footer, link externo; `CatalogFooter` intacto.
- **2026-08-25**: Home — troca de identidade no mobile mais suave (900ms, ease-in-out) só em cor; sem voltar scale/blur.
- **2026-08-25**: Home — rotação de identidade no mobile a cada 4s.
- **2026-08-25**: Home — órbita do medalhão centrada por margem, não por `translate`; o `transform: none` do mobile deixava o círculo deslocado.
- **2026-08-25**: Home — no mobile, card ativo sem glow/blur/isolation para o texto não ficar serrilhado.
- **2026-08-25**: Home — troca de identidade no mobile sem reanimar os cards; scrollbar sólida com fallback escuro (Internet/Samsung não pinta branco).
- **2026-08-25**: Home — no mobile, sem hover de identidade (só rotação + tap para entrar); lift continua só no desktop 3 colunas.
- **2026-08-25**: Home — scroll móvel em qualquer browser (`overflow-x: clip`, `touch-action: pan-y`); hover de layout só no desktop 3 colunas; grid 2+1 com o terceiro card centrado na largura de uma coluna.
- **2026-08-25**: Entrega — review obrigatória nos 7 pilares (padronização, simplicidade, organização, legibilidade, componentização, escalabilidade, estabilidade) em cada ficheiro tocado.
- **2026-08-25**: Home — identidade (acento + scrollbar) em `homeExperiences.ts`; CSS só com variáveis; sem seletores de cor por `id`; resize para desktop restaura estado neutro.
- **2026-08-25**: Home — medalhão e órbita limitados por `clamp` e centralizados para não invadir a moldura no hover; removidos os índices 01/02/03 dos cards.
- **2026-08-25**: Home — rotação de 5s também em viewport ≤760px, mesmo com mouse/`hover: fine` (preview desktop); não usar só `(hover: none)`.
- **2026-08-25**: Home — estado ativo `HomeExperienceId | null`; paleta institucional neutra; transições de cor via `@property`; scrollbar cinza fora do catálogo ativo; footer só com “Três experiências. Uma só estrutura”.
- **2026-05-28**: Tabs — `.tabsTrack` dentro de `.tabsScroll`; scroller sem `justify-content: center`; escala mais forte ≤590/480/340; `.navOverlay` com `overflow-x: visible` e `min-width: 0` nas páginas Side Rock.
- **2026-05-28**: `src/utils/viewport.ts` — classificação celular/desktop (760px) e empilhamento nav (590px); CSS da navbar empilha tabs + redes em `max-width: 590px` (alinha com `VIEWPORT_NAV_STACK_MAX_PX`).
- **2026-05-28**: NavBar — removido `logoSlot` (grid só `tabs | social`); tokens `--tab-*` centralizados na `.root` com escala agressiva (1100 / 992 / 860 / 760 / 640 / 560 / 480 / 380); ícones sociais encolhem em sincronia; `.tabsScroll` com `justify-content: safe center` + scroll horizontal sem cortar início; separadores com `font-size: 0.55em` e `--tab-separator-pad` por faixa.
- **2026-05-28**: NavBar monolítica — `tabsRegion` fundido em `.tabsScroll`; removido `tabCell` (linha ativa dentro do `NavLink`); `SOCIAL_LINKS` em `socialLinks.ts`; tokens `--nav-*` / `--tab-*` / `--social-*` na `.root` com media queries (992 / 760 / 640 / 560 / 480 / 380); `SocialIcon` usa `IconType`, `data-chase-index` e herda `--social-link-size` / `--social-icon-font-size`; sem `clamp()` nos módulos da nav; `prefers-reduced-motion` em tabs e ícones sociais.
- **2026-05-28**: NavBar — centralização real (`max-content` + `margin-inline: auto`); header wide `1fr | max-content | 1fr`; `logoSlot` colapsado; faixa 640px; escala mais agressiva em 760/480; `--side-rock-social-rail-width` + padding compact na nav; overflow medido em `tabsScroll` + `tabsRegion` com `useLayoutEffect` + `ResizeObserver`.
- **2026-05-28**: Viewport — `isViewportWidthBelow(maxWidthPx)` em `constants/viewport.ts`; reexport em `src/utils/viewport.ts`. NavBar integrada: páginas usam `SideRockHeader`; `SideRockNavbar` só logo + tabs (`tabsScrollRef`, `data-layout`); redes em `SideRockSocialRail` + `socialLinks.ts`; sem `clamp()` nos módulos da nav; `.tabsRegion` centrada, `.tabsScroll` com `justify-content: flex-start`.
- **2026-05-28**: Side Rock — `SideRockHeader` separa tabs (`SideRockNavbar`) e redes (`SideRockSocialRail`); layout `wide` vs `compact` (mobile ou overflow de tabs); hooks `useViewportKind`, `useElementOverflow`, `useSideRockCompactLayout`; `data-viewport` e `data-side-rock-layout` no `<html>`; escala só com media queries e variáveis (sem `clamp()` na nav); clearance/padding das páginas com valores fixos por breakpoint.
- **2026-05-14**: Navbar Side Rock — escala por **media queries** (992 / 720 / 560 / 480 / 380px) e **variáveis CSS** em `.root`, tabs e ícones sociais (sem `clamp()` nesses módulos); padding com `max(env(safe-area-inset-*), var(--nav-pad-inline))`; coluna logo `minmax(var(--nav-logo-min), var(--nav-logo-max))`; `.tabsScroll` com `width: 100%`, `scroll-padding-inline`, `justify-content: flex-start`; coluna social `z-index: 2` + `flex-shrink: 0` nos links; `prefers-reduced-motion` nas tabs e no loop social; delays sociais (0 / 0,5s / 1s / 1,5s).
- **2026-05-13**: Navbar — gradiente vertical preto→transparente no strip; pulso lento na tab ativa (texto + linha); chase sequencial nos quatro ícones sociais (delays 0 / 2,5s / 5s / 7,5s em ciclo de 10s); pausa de animação em hover/focus/active; `prefers-reduced-motion` desliga animações e encolhe transições.
- **2026-05-13**: Navbar CSS — ficheiro reduzido ao essencial; removidas referências a animações inexistentes; alinhamento grid (`grid-area: tabs`, `.tabCell`, scroll horizontal suave em `.tabsScroll`); redes só com `transition` + hover estático; regra em 5.1 sobre não reintroduzir remoções intencionais.
- **2026-05-13**: Navbar — sem linha vermelha full-width no rodapé do strip; foco no indicador da tab (trilho + pico + glow); `padding-bottom` em `.tabsScroll` + `overflow-block: visible` para não cortar sombras; texto e altura da barra aumentados; `--side-rock-nav-clearance` nas páginas Side Rock.
- **2026-05-13**: Navbar — tipografia alinhada ao stack global (sem Teko em `index.html`); CSS mínimo com `grid-area: tabs`, `min-width: 0` na zona de links e scroll horizontal em `.tabsScroll`.
- **2026-05-13**: Navbar Side Rock — translúcida com blur + gradiente; posicionada sobre o BG (`main` em grid, sticky).
- **2026-05-13**: Side Rock BG — véu cinza 10% (`rgba(180,180,180,0.1)`) em `.fgLayer::before` sobre as rotas com arte completa.
- **2026-05-13**: Side Rock BG — formalizado o uso de `.bgStack` como artboard proporcional com `aspect-ratio` e overlay ocupando a mesma área do PNG.
- **2026-05-12**: Navbar Side Rock — removido `navbar.png` como fundo (referência só); gradiente leve; barra mais alta; animações de tab e glow mantidas.
- **2026-05-12**: Secção 5.1 — rotas planas Side Rock, páginas com shell duplicado, fundo em `<img>` + scroll no `main`.
- **2026-05-12**: Criação do documento com análise técnica das MVPs Galeria, Integrantes, Música e Resumo; sistema compartilhado; escopo MVP vs. features pesadas (streaming).
