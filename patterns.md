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
- **Social**: quatro círculos com borda vermelha — Facebook, Instagram, YouTube, Spotify (SVG ou sprite consistente); na navbar pode haver **chase** em loop (brilho sequencial f→i→y→s) com `prefers-reduced-motion` a desligar.

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
- **Molduras “ornamentadas”**: PNG com alpha, `border-image`, ou SVG; fallback: `border` sólido + `box-shadow` vermelho.
- **Ícones**: preferir SVG inline ou sprite único para cor `#currentColor` ou `fill` vermelho fixo.

---

## 6. Changelog deste documento

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
