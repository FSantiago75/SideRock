# Side Rock — contexto oficial do produto e da banda

Este documento registra o contexto confirmado pelo responsável pelo projeto. Ele deve orientar decisões futuras de conteúdo, produto, identidade, marketing e implementação. Quando houver conflito com rascunhos antigos, este documento prevalece.

## 1. A banda Side Rock

- A Side Rock é uma banda de covers de classic rock, hard rock e heavy metal.
- Integrantes: **Toddynho, Adriano, Victor e Marcelo**. Formas como Tod, Adr, Vic e Mar são apenas abreviações informais.
- Marcelo é o líder da banda, vocalista e padrasto de Felipe. Canta todo o repertório com alto nível técnico e artístico, reconhecido por músicos e também por ouvintes estrangeiros.
- A banda principal existe há mais de cinco anos. Durante boa parte desse período, trabalhou sem nicho, público próprio, casas recorrentes ou segurança comercial, com poucos shows e retorno financeiro muito baixo.
- A Side Rock não quer ser percebida como “banda de boteco” nem permanecer um projeto de garagem. O objetivo é ampliar reconhecimento, público, presença social e volume/qualidade das contratações.
- A banda não se limita a uma “panela musical”: a amplitude de referências e gerações faz parte da proposta. O show precisa unir clássicos reconhecíveis, valor musical e alcance para públicos diferentes.

## 2. Repertório

Artistas já mencionados no repertório ou na comunicação:

- Ozzy Osbourne
- Metallica
- Megadeth
- Guns N' Roses
- Bon Jovi
- Pearl Jam
- Alice in Chains
- Audioslave
- Whitesnake
- Deep Purple
- Stone Temple Pilots
- Simple Minds
- HIM

Observações importantes:

- Iron Maiden aparece atualmente somente no começo de **The Number of the Beast**; não deve ser comunicado como uma presença ampla no repertório sem contextualização.
- Skid Row ainda entrará no repertório; é conteúdo planejado, não uma oferta atual consolidada.
- A comunicação de repertório deve priorizar reconhecimento e poder comercial, sem publicar setlist, ordem, versões ou detalhes que exponham a engenharia do show.

## 3. Posicionamento e identidade

A Side Rock deve comunicar rapidamente:

> Uma banda profissional, com identidade própria, repertório forte e capacidade de entregar um show vendável.

Hierarquia desejada:

> BANDA → SIDE ROCK → proposta musical → integrantes/experiência → contratação

- O objetivo é aumentar o alcance social e de marketing e gerar mais contratações.
- A marca deve parecer grande e profissional antes mesmo de possuir a fama correspondente: construir percepção, consistência e entrega até que a realidade alcance o posicionamento.
- A imagem da Side Rock é escura: preto, carvão, vermelho profundo, metal envelhecido, fumaça e caveiras. Essa identidade visual não descreve literalmente todas as músicas do repertório, mas pertence à marca.
- A estética precisa ser pesada e autêntica, sem exageros que façam a banda parecer thrash metal ou death metal.
- Integrantes e experiência do show são protagonistas. Caveiras, ornamentos, logos e efeitos são elementos de apoio.

## 4. Ecossistema correto

As três frentes são:

1. **Side Rock**
2. **Side Rock Acústico**
3. **Ozzborn**

Não usar “Ozzborns” nem “Banda Side Rock Acústico” como nomes oficiais, salvo em conteúdo histórico que precise ser citado literalmente.

### Side Rock

É a formação e proposta principal. Tem mais de cinco anos de história, mas ainda busca nicho, público próprio, casas recorrentes, segurança comercial e um posicionamento proporcional à qualidade musical.

### Side Rock Acústico

- Frente associada a Victor e Marcelo.
- Surgiu como resposta à dificuldade de entrada nas casas e ao preço do cachê da banda completa.
- A estratégia combina música nacional popular e memorável com música internacional conhecida e respeitável. Isso permite dialogar tanto com músicos quanto com o público brasileiro mais pop e menos familiarizado com rock internacional.
- A redução de preço abriu mercado e levou a aproximadamente cinco ou seis shows por mês.
- Limitações atuais: disponibilidade apenas às sextas, sábados e domingos e cachê baixo. Mesmo com cinco ou seis apresentações, a renda mensal fica próxima de um salário mínimo e, no melhor cenário relatado, pouco acima de R$ 2 mil. O volume atual não sustenta o projeto como atividade principal.

### Ozzborn

- Segunda tentativa de abrir portas para a estrutura da Side Rock por meio de um nicho claro.
- É um projeto cover/tributo com apelo próprio, versus/VS, grupo fixo e maior compatibilidade com eventos públicos.
- Imagem, vestimenta, aparência e reconhecimento imediato são partes centrais da proposta.
- O nicho abre portas, mas enfrenta a limitação comercial do mercado brasileiro, dominado por samba, pagode e sertanejo.
- O repertório ainda não está completo. A frente existe e deve ser considerada no ecossistema, mas o foco atual é o site.

## 5. Site e ambição do produto

- O código atual é uma base de reaproveitamento, não um produto próximo da conclusão.
- Resumo, Integrantes, Música, Galeria e futuro Contato são apenas o início estrutural. Haverá refatoração significativa.
- Os passos iniciais servem para preparar uma cadeia de produção sólida antes da construção efetiva da landing page.
- O alvo não é apenas “um site bonito de banda”. A landing page deve ter nível de grandes bandas — ou superar seus sites em impacto, interatividade, acabamento e clareza comercial.
- O site tem duas funções simultâneas:
  1. marketing e contratação da Side Rock e de suas frentes;
  2. peça de portfólio técnico e criativo de alto nível.
- Referência de ambição: produzir algo tão convincente que uma banda internacional consolidada pudesse reconhecer que a Side Rock, ainda em crescimento, possui um site melhor que o dela.

## 6. Prioridade atual

O foco imediato é preparar e refatorar o site. Materiais promocionais do Side Rock Acústico e do Ozzborn continuam previstos, mas não devem desviar o trabalho atual antes que a base de produção da landing page esteja bem definida.

## 7. Arquitetura comercial confirmada

O produto é um **triportfólio** que resolve quatro necessidades comerciais dentro de um único domínio:

1. `/` — catálogo institucional para leads que desejam conhecer todos os serviços;
2. `/side-rock` — landing page independente da Side Rock;
3. `/acoustic` — landing page independente do Side Rock Acústico;
4. `/ozzborn` — landing page independente do Ozzborn.

A rota histórica `/ozzborns` deve continuar funcionando apenas como redirecionamento para `/ozzborn`, evitando quebrar links antigos.

Cada link direto deve apresentar a formação correspondente como uma banda completa, pronta para contratação, sem obrigar o lead a passar pelo catálogo. A home muda a percepção: nela, as três experiências formam um catálogo organizado de serviços musicais.

Princípio de arquitetura:

> Compartilhar estrutura sem compartilhar personalidade.

- Navbar, shell, seções, CTAs, galeria, contato, acessibilidade e engenharia podem compartilhar componentes.
- Paleta, logotipo, integrantes, fotografia, símbolos, movimento, linguagem e narrativa pertencem a cada experiência.
- A home possui uma quarta identidade: institucional, sofisticada e capaz de conectar os três mundos sem parecer apenas uma extensão da Side Rock.
- O catálogo deve aceitar uma quarta experiência futura sem exigir a reconstrução do layout.

## 8. Estratégia visual e responsiva

Os mockups épicos já produzidos são referência de qualidade e direção artística. O objetivo prático é atingir ao menos um nível visual comparável, mesmo que a implementação final não replique cada detalhe dos conceitos.

Esses mockups **não devem ser usados como screenshots integrais da interface**. A implementação será composta em camadas:

1. base temática e texturas tolerantes a corte;
2. atmosfera com gradientes, luz, vinheta e sombras em CSS;
3. ornamentos separados, preferencialmente em SVG ou mídia transparente otimizada;
4. fotografias e mídias com art direction para desktop/mobile quando necessário;
5. textos, botões, tabs, cards, filtros e demais UI em HTML/CSS real.

Não produzir por padrão um fundo desktop e um mobile para cada seção. Versões específicas por formato são reservadas principalmente para heróis fotográficos cuja composição realmente precise mudar. Desktop e mobile devem preservar a mesma identidade, mas podem ter composições diferentes.

Formatos preferenciais:

- AVIF/WebP para fotografias e texturas;
- SVG para ornamentos, linhas, ícones e molduras;
- CSS para luz, cor, profundidade e efeitos simples;
- PNG apenas quando transparência ou textura complexa justificarem.

O impacto deve vir de fotografia, composição, escala, contraste, movimento controlado e narrativa — não do peso ou rigidez de um grande PNG.

## 9. Elementos que devem ser preservados

- O sistema interativo de seleção de integrantes é um experimento com valor futuro e não deve ser removido durante a limpeza.
- Os mockups em `src/SiderockAssets/MVPStyles/` são referências visuais.
- Os fundos atualmente usados em `src/SiderockAssets/Bgs2/` permanecem enquanto a nova composição em camadas não estiver pronta.
- Assets de referência diretamente relacionados à evolução desses sistemas podem permanecer mesmo quando ainda não fazem parte do bundle de produção.
