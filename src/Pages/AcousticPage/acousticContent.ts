import ambientImage from '../../assets/acoustic/ambient.webp'
import detailImage from '../../assets/acoustic/detail.webp'
import heroImage from '../../assets/acoustic/hero.webp'
import { EXPERIENCE_ROUTES } from '../../config/experiences'
import { HOME_EXPERIENCES } from '../HomePage/homeExperiences'

const WHATSAPP_NUMBER = '5511971632992'

const DEFAULT_BOOKING_MESSAGE =
  'Olá, Vanessa! Gostaria de consultar disponibilidade e orçamento do Side Rock Acústico para um evento.'

function buildWhatsAppUrl(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}

const ACOUSTIC_SCROLLBAR_FALLBACK = {
  start: '#C47732',
  end: '#69401F',
  hoverStart: '#E39A55',
  hoverEnd: '#8A5428',
} as const

export const ACOUSTIC_SCROLLBAR =
  HOME_EXPERIENCES.find((experience) => experience.id === 'acoustic')?.theme
    .scrollbar ?? ACOUSTIC_SCROLLBAR_FALLBACK

export const ACOUSTIC_PAGE_META = {
  title: 'Side Rock Acústico — Música ao vivo para eventos',
  description:
    'Victor e Marcelo levam música nacional e internacional em formato acústico intimista, elegante e preparado para bares, celebrações e eventos.',
} as const

export const ACOUSTIC_LINKS = {
  catalog: EXPERIENCE_ROUTES.catalog,
  whatsappUrl: buildWhatsAppUrl(DEFAULT_BOOKING_MESSAGE),
  instagramUrl: 'https://www.instagram.com/bandasiderock',
} as const

export const ACOUSTIC_NAV = [
  { id: 'formato', label: 'Formato' },
  { id: 'experiencia', label: 'Experiência' },
  { id: 'repertorio', label: 'Repertório' },
  { id: 'contratacao', label: 'Contratação', shortLabel: 'Contratar' },
] as const

export type AcousticNavId = (typeof ACOUSTIC_NAV)[number]['id']

export const ACOUSTIC_ASSETS = {
  hero: {
    src: heroImage,
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
    eventType: 'bares e espaços intimistas',
  },
  {
    label: 'Celebrações',
    eventType: 'celebrações',
  },
  {
    label: 'Eventos particulares',
    eventType: 'eventos particulares',
  },
  {
    label: 'Programações especiais',
    eventType: 'programações especiais',
  },
  {
    label: 'Recepções e experiências de marca',
    eventType: 'recepções e experiências de marca',
  },
] as const

export const ACOUSTIC_CONTENT = {
  brand: 'Side Rock Acústico',
  manager: 'Vanessa',
  hero: {
    kicker: 'Victor + Marcelo · Nacional + internacional',
    title: 'Side Rock Acústico',
    headline: 'Do Brasil ao rock internacional. Em formato acústico.',
    description:
      'Um repertório reconhecível, conduzido de forma próxima e preparado para conectar públicos diferentes ao ritmo de cada evento.',
    primaryCta: 'Consultar data e orçamento',
    secondaryCta: 'Conhecer o formato',
    facts: [
      {
        term: 'Victor + Marcelo',
        description: 'À frente da experiência',
      },
      {
        term: 'Nacional + internacional',
        description: 'Repertório reconhecível',
      },
      {
        term: 'Ao vivo',
        description: 'Formato acústico',
      },
    ],
  },
  format: {
    title: 'Um show que se adapta ao seu evento.',
    lead: 'O Side Rock Acústico aproxima músicas nacionais e internacionais em uma apresentação construída para criar conexão sem perder presença.',
    body: 'O formato reduz a distância entre músicos e público, adapta volume e dinâmica ao ambiente e mantém o repertório reconhecível do primeiro ao último acorde.',
    differentials: [
      {
        title: 'Repertório reconhecível',
        copy: 'Música nacional e internacional escolhida para conversar com públicos diferentes.',
      },
      {
        title: 'Formato versátil',
        copy: 'Uma apresentação que se adapta ao espaço, ao momento e ao perfil do evento.',
      },
      {
        title: 'Experiência próxima',
        copy: 'Interação natural, presença musical e uma atmosfera que convida o público a permanecer.',
      },
    ],
  },
  artists: {
    kicker: 'Quem conduz essa experiência',
    title: 'Victor e Marcelo.',
    paragraphs: [
      'O Side Rock Acústico nasceu como uma forma mais próxima e versátil de levar música nacional e internacional a diferentes públicos e ambientes.',
      'O formato preserva presença musical, repertório reconhecível e contato direto com quem está no evento.',
    ],
  },
  applications: {
    title: 'Na medida certa para cada ambiente.',
    actionLabel: 'Consultar para este formato',
    items: APPLICATION_ITEMS.map((item) => ({
      label: item.label,
      whatsappUrl: buildWhatsAppUrl(
        `Olá, Vanessa! Gostaria de consultar o Side Rock Acústico para ${item.eventType}.`,
      ),
    })),
  },
  repertoire: {
    title: 'Reconhecível para cantar. Interessante para ouvir.',
    body: 'O repertório aproxima a memória afetiva da música nacional de referências internacionais conhecidas, criando uma seleção acessível para o público e musicalmente consistente.',
    categories: [
      'Música nacional',
      'Pop rock',
      'Classic rock',
      'Hits internacionais',
      'Canções para cantar junto',
    ],
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
        title: 'Receba a recomendação',
        copy: 'A equipe indica o formato mais adequado para a ocasião.',
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
    title: 'Vamos encontrar o formato certo para a sua data.',
    body: 'Conte a cidade, a data e o perfil do evento. O atendimento retorna com disponibilidade, formato e próximos passos.',
    cta: 'Consultar disponibilidade',
    note: 'Atendimento direto com Vanessa · Manager',
  },
  footer: {
    catalogLabel: 'Voltar ao catálogo de experiências',
    instagramLabel: 'Instagram',
    whatsappLabel: 'WhatsApp',
  },
} as const
