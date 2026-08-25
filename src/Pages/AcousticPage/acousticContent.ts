import ambientImage from '../../assets/acoustic/ambient.webp'
import detailImage from '../../assets/acoustic/detail.webp'
import hero640Image from '../../assets/acoustic/hero-640.webp'
import hero960Image from '../../assets/acoustic/hero-960.webp'
import heroImage from '../../assets/acoustic/hero.webp'
import { EXPERIENCE_ROUTES } from '../../config/experiences'

const WHATSAPP_NUMBER = '5511971632992'

const DEFAULT_BOOKING_MESSAGE = `Olá, Vanessa! Gostaria de informações sobre o Side Rock Acústico.

Data do evento:
Cidade:
Tipo de evento:`

function buildWhatsAppUrl(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}

const ACOUSTIC_SCROLLBAR_FALLBACK = {
  start: '#C47732',
  end: '#69401F',
  hoverStart: '#E39A55',
  hoverEnd: '#8A5428',
} as const

export const ACOUSTIC_SCROLLBAR = ACOUSTIC_SCROLLBAR_FALLBACK

export const ACOUSTIC_PAGE_META = {
  title: 'Side Rock Acústico — Música ao vivo para eventos',
  description:
    'Show acústico ao vivo com músicas brasileiras e clássicos do rock para bares, celebrações e eventos particulares.',
} as const

export const ACOUSTIC_LINKS = {
  catalog: EXPERIENCE_ROUTES.catalog,
  whatsappUrl: buildWhatsAppUrl(DEFAULT_BOOKING_MESSAGE),
  instagramUrl: 'https://www.instagram.com/bandasiderock',
} as const

/**
 * Perguntas frequentes — estrutura preparada para publicação futura.
 * Não renderizar enquanto `answer` for null.
 */
export const ACOUSTIC_FAQ_PENDING = [
  {
    id: 'formacao',
    question: 'Qual é a formação do show?',
    answer: null as string | null,
  },
  {
    id: 'instrumentos',
    question: 'Quais instrumentos entram na apresentação?',
    answer: null as string | null,
  },
  {
    id: 'duracao',
    question: 'Quanto tempo dura o show?',
    answer: null as string | null,
  },
  {
    id: 'som',
    question: 'O projeto leva equipamento de som?',
    answer: null as string | null,
  },
  {
    id: 'regioes',
    question: 'Quais cidades e regiões são atendidas?',
    answer: null as string | null,
  },
  {
    id: 'repertorio',
    question: 'É possível adaptar o repertório ao evento?',
    answer: null as string | null,
  },
  {
    id: 'antecedencia',
    question: 'Com quanta antecedência devo reservar a data?',
    answer: null as string | null,
  },
] as const

export const ACOUSTIC_NAV = [
  { id: 'formato', label: 'O show' },
  { id: 'experiencia', label: 'Para seu evento' },
  { id: 'repertorio', label: 'Músicas' },
  { id: 'como-contratar', label: 'Como contratar' },
] as const

export type AcousticNavId = (typeof ACOUSTIC_NAV)[number]['id']

export const ACOUSTIC_ASSETS = {
  hero: {
    src: heroImage,
    srcSet: `${hero640Image} 640w, ${hero960Image} 960w, ${heroImage} 1672w`,
    sizes:
      '(max-width: 640px) 100vw, (max-width: 960px) 100vw, min(50vw, 42rem)',
    width: 1672,
    height: 941,
    alt: 'Imagem ilustrativa de apresentação acústica com luz âmbar — placeholder até fotos oficiais do Side Rock Acústico',
  },
  detail: {
    src: detailImage,
    width: 1536,
    height: 1024,
    alt: 'Imagem ilustrativa de apresentação acústica em ambiente intimista — placeholder até fotos oficiais do Side Rock Acústico',
  },
  ambient: {
    src: ambientImage,
    width: 1672,
    height: 941,
    alt: '',
  },
} as const

const APPLICATION_ITEMS = [
  {
    label: 'Bares e espaços intimistas',
    description:
      'Música ao vivo para criar ambiente sem afastar a conversa.',
    eventType: 'bares e espaços intimistas',
  },
  {
    label: 'Celebrações',
    description: 'Uma trilha ao vivo para encontros e momentos especiais.',
    eventType: 'celebrações',
  },
  {
    label: 'Eventos particulares',
    description:
      'Apresentação adaptada ao espaço e ao perfil dos convidados.',
    eventType: 'eventos particulares',
  },
  {
    label: 'Programações especiais',
    description:
      'Um formato flexível para noites temáticas e ocasiões específicas.',
    eventType: 'programações especiais',
  },
  {
    label: 'Recepções e experiências de marca',
    description:
      'Música ao vivo para receber convidados e valorizar a atmosfera.',
    eventType: 'recepções e experiências de marca',
  },
] as const

export const ACOUSTIC_CONTENT = {
  brand: 'Side Rock Acústico',
  manager: 'Vanessa',
  headerCta: 'Pedir orçamento',
  hero: {
    kicker: 'Victor + Marcelo · Brasil + internacional',
    title: 'Side Rock Acústico',
    headline:
      'Músicas brasileiras e clássicos do rock em um show acústico ao vivo, adaptado ao clima do seu evento.',
    description:
      'Para bares, celebrações e eventos particulares, com músicas que o público reconhece e aproveita do início ao fim.',
    primaryCta: 'Consultar minha data',
    secondaryCta: 'Ver como é o show',
    facts: [
      {
        term: 'Victor + Marcelo',
        description: 'Músicos do projeto',
      },
      {
        term: 'Brasil + internacional',
        description: 'Músicas para públicos diferentes',
      },
      {
        term: 'Show ao vivo',
        description: 'Adaptado ao seu evento',
      },
    ],
  },
  format: {
    kicker: 'O show',
    title: 'Um show que se adapta ao seu evento.',
    lead: 'O Side Rock Acústico aproxima músicas nacionais e internacionais em uma apresentação construída para criar conexão sem perder presença.',
    body: 'O formato reduz a distância entre músicos e público, adapta volume e dinâmica ao ambiente e mantém o repertório reconhecível do primeiro ao último acorde.',
    differentials: [
      {
        title: 'Músicas que o público conhece',
        copy: 'Sucessos nacionais e internacionais para diferentes idades e perfis.',
      },
      {
        title: 'Show adaptado ao ambiente',
        copy: 'Volume e dinâmica ajustados ao espaço e ao momento do evento.',
      },
      {
        title: 'Proximidade com os convidados',
        copy: 'Uma apresentação ao vivo que cria atmosfera sem perder naturalidade.',
      },
    ],
  },
  artists: {
    kicker: 'Quem conduz essa experiência',
    title: 'Victor e Marcelo.',
    // TODO: substituir por bio confirmada de Victor (função, formação, experiência)
    // TODO: substituir por bio confirmada de Marcelo (função, formação, experiência)
    paragraphs: [
      'Victor e Marcelo conduzem o Side Rock Acústico com uma apresentação próxima, dinâmica e ajustada a cada ambiente.',
      'O repertório reúne músicas brasileiras e referências internacionais em uma experiência pensada para públicos diferentes.',
    ],
  },
  applications: {
    kicker: 'Para seu evento',
    title: 'Na medida certa para cada ambiente.',
    actionLabel: 'Consultar pelo WhatsApp',
    items: APPLICATION_ITEMS.map((item) => ({
      label: item.label,
      description: item.description,
      whatsappUrl: buildWhatsAppUrl(
        `Olá, Vanessa! Gostaria de consultar o Side Rock Acústico para ${item.eventType}.`,
      ),
    })),
  },
  repertoire: {
    kicker: 'Músicas',
    title: 'Reconhecível para cantar. Interessante para ouvir.',
    body: 'Músicas brasileiras, pop rock, clássicos e sucessos internacionais que ajudam diferentes gerações a se reconhecer no repertório.',
    categoriesLabel: 'Estilos presentes no show',
    categories: [
      'Música nacional',
      'Pop rock',
      'Clássicos do rock',
      'Hits internacionais',
      'Canções para cantar junto',
    ],
    /** TODO: preencher com artistas confirmados; renderizar só quando houver itens */
    featuredArtists: [] as readonly string[],
  },
  media: {
    label: 'Vídeo oficial em produção',
    caption: 'Em breve, uma amostra completa da experiência ao vivo',
    /** Quando houver URL real, definir e o pôster vira controle acessível. */
    videoUrl: null as string | null,
  },
  process: {
    kicker: 'Contratação',
    title: 'Como funciona a contratação',
    steps: [
      {
        index: '01',
        title: 'Conte sobre o evento',
        copy: 'Cidade, data, espaço e perfil do público.',
      },
      {
        index: '02',
        title: 'Receba a melhor indicação',
        copy: 'A equipe confirma a disponibilidade e orienta a melhor opção para o seu evento.',
      },
      {
        index: '03',
        title: 'Alinhe os detalhes',
        copy: 'Repertório, estrutura e próximos passos são definidos diretamente.',
      },
    ],
  },
  booking: {
    kicker: 'Leve essa experiência para o seu evento',
    title: 'Vamos encontrar o show ideal para o seu evento.',
    body: 'Conte a cidade, a data e como será o evento. Você recebe a disponibilidade, a indicação mais adequada e os próximos passos.',
    cta: 'Falar com Vanessa no WhatsApp',
    note: 'Você fala diretamente com Vanessa, responsável pelo atendimento.',
  },
  footer: {
    catalogLabel: 'Voltar ao catálogo de experiências',
    instagramLabel: 'Instagram',
    whatsappLabel: 'WhatsApp',
  },
} as const
