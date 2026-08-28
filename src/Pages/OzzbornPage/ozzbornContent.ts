import MembersNull from '../../assets/MembersImages/MembersNull.webp'
import type { MembersImageMemberId } from '../../Components/MembersImage'
import { EXPERIENCE_ROUTES } from '../../config/experiences'

const WHATSAPP_NUMBER = '5511971632992'

const DEFAULT_BOOKING_MESSAGE = `Olá, Vanessa! Gostaria de informações sobre o OzzBorn.

Data do evento:
Cidade:
Tipo de evento:`

function buildWhatsAppUrl(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}

export const OZZBORN_SCROLLBAR = {
  start: '#8243a8',
  end: '#432257',
  hoverStart: '#a963cf',
  hoverEnd: '#62327d',
} as const

export const OZZBORN_PAGE_META = {
  title: 'OzzBorn — Tributo a Ozzy Osbourne em Jundiaí | Side Rock',
  description:
    'OzzBorn é um tributo a Ozzy Osbourne em Jundiaí/SP, com formação completa e uma experiência preparada para casas de rock, festivais e eventos.',
} as const

export const OZZBORN_LINKS = {
  catalog: EXPERIENCE_ROUTES.catalog,
  whatsappUrl: buildWhatsAppUrl(DEFAULT_BOOKING_MESSAGE),
  instagramUrl: 'https://www.instagram.com/ozzborntributo',
} as const

export const OZZBORN_NAV = [
  { id: 'tributo', label: 'O tributo' },
  { id: 'experiencia', label: 'Experiência' },
  { id: 'formacao', label: 'Formação' },
  { id: 'midia', label: 'Mídia' },
  { id: 'contratacao', label: 'Contratação' },
] as const

export type OzzbornNavId = (typeof OZZBORN_NAV)[number]['id']

/** IDs alinhados ao MembersImage: vocal → Marcelo, guitar → Victor, etc. */
export type OzzbornMemberId = MembersImageMemberId

export const OZZBORN_ASSETS = {
  formationNeutral: {
    src: MembersNull,
    width: 1024,
    height: 1536,
    alt: 'Formação do OzzBorn: Marcelo, Victor, Adriano e Todynho em ensaio fotográfico',
  },
} as const

export const OZZBORN_FORMATION_OUTLINE_MS = 320

const APPLICATION_ITEMS = [
  {
    label: 'Casas de rock',
    description:
      'Presença de palco e repertório reconhecível para noites dedicadas ao público de heavy metal.',
    eventType: 'casas de rock',
  },
  {
    label: 'Festivais',
    description:
      'Formato de formação completa preparado para programações com impacto e densidade sonora.',
    eventType: 'festivais',
  },
  {
    label: 'Eventos particulares',
    description:
      'Uma noite temática para quem quer celebrar com a força dos clássicos de Ozzy.',
    eventType: 'eventos particulares',
  },
  {
    label: 'Eventos temáticos',
    description:
      'Identidade visual e atmosfera alinhadas a encontros e programações especializadas.',
    eventType: 'eventos temáticos',
  },
  {
    label: 'Programações culturais',
    description:
      'Um tributo profissional para calendários culturais que valorizam shows ao vivo.',
    eventType: 'programações culturais',
  },
] as const

export type OzzbornMember = {
  id: OzzbornMemberId
  name: string
  role: string
  imageAlt: string
  signature: string
  description: string
  instrument: string
  contribution: string
  presence: string
}

export const OZZBORN_MEMBERS: readonly OzzbornMember[] = [
  {
    id: 'vocal',
    name: 'Marcelo',
    role: 'Vocal',
    imageAlt: 'Marcelo, vocalista do OzzBorn',
    signature: 'Voz, interpretação e presença.',
    description:
      'Marcelo conduz a interpretação vocal do OzzBorn, aproximando o público dos timbres, da intensidade e da personalidade que marcaram os clássicos de Ozzy Osbourne.',
    instrument: 'Voz',
    contribution: 'Interpretação vocal',
    presence: 'Presença e conexão',
  },
  {
    id: 'guitar',
    name: 'Victor',
    role: 'Guitarra',
    imageAlt: 'Victor, guitarrista do OzzBorn',
    signature: 'Riffs, solos e identidade.',
    description:
      'Victor conduz as guitarras do tributo, articulando riffs, bases e solos que sustentam o peso e a identidade do repertório.',
    instrument: 'Guitarra',
    contribution: 'Riffs e solos',
    presence: 'Peso e precisão',
  },
  {
    id: 'bass',
    name: 'Adriano',
    role: 'Baixo',
    imageAlt: 'Adriano, baixista do OzzBorn',
    signature: 'Peso e sustentação.',
    description:
      'Adriano forma a base harmônica do OzzBorn, conectando baixo e bateria para manter o repertório firme, denso e consistente.',
    instrument: 'Baixo',
    contribution: 'Base harmônica',
    presence: 'Peso e consistência',
  },
  {
    id: 'drums',
    name: 'Todynho',
    role: 'Bateria',
    imageAlt: 'Todynho, baterista do OzzBorn',
    signature: 'Pulso, dinâmica e impacto.',
    description:
      'Todynho conduz a dinâmica do show na bateria, sustentando as mudanças de intensidade e a energia que o repertório exige ao vivo.',
    instrument: 'Bateria',
    contribution: 'Pulso e dinâmica',
    presence: 'Energia e impacto',
  },
] as const

export function getOzzbornMemberById(id: OzzbornMemberId): OzzbornMember {
  return OZZBORN_MEMBERS.find((member) => member.id === id) ?? OZZBORN_MEMBERS[0]
}

export function formatOzzbornMemberIndex(index: number): string {
  return `${String(index + 1).padStart(2, '0')} / ${String(OZZBORN_MEMBERS.length).padStart(2, '0')}`
}

export const OZZBORN_CONTENT = {
  brand: 'OzzBorn',
  brandSubtitle: 'Tributo a Ozzy Osbourne',
  location: 'Jundiaí/SP',
  manager: 'Vanessa',
  headerCta: 'Consultar data',
  hero: {
    kicker: 'Tributo a Ozzy Osbourne · Jundiaí/SP',
    title: 'OzzBorn',
    signature: 'Ozzy Tribute',
    headline: 'A experiência Ozzy toma o palco.',
    description:
      'Um tributo construído para reviver a força, a atmosfera e os clássicos da carreira de Ozzy Osbourne em um show de formação completa.',
    primaryCta: 'Consultar data e orçamento',
    secondaryCta: 'Conhecer o tributo',
    note: 'Atendimento direto com Vanessa · Manager',
    facts: [
      { term: 'Tributo', description: 'a Ozzy Osbourne' },
      { term: '4', description: 'integrantes' },
      { term: 'Formação', description: 'completa' },
      { term: 'Origem', description: 'Jundiaí/SP' },
    ],
  },
  manifesto: {
    kicker: 'O tributo',
    title: 'Mais que interpretar os clássicos.',
    body: 'O OzzBorn nasce para levar ao palco uma experiência dedicada à carreira de Ozzy Osbourne. Repertório, timbres, interpretação e presença trabalham juntos para aproximar o público da energia que transformou essas músicas em referências do heavy metal.',
    highlight:
      'Uma homenagem construída com respeito, personalidade e entrega ao vivo.',
  },
  experience: {
    kicker: 'Experiência',
    title: 'Uma noite feita para quem reconhece os primeiros acordes.',
    points: [
      {
        index: '01',
        title: 'Repertório reconhecível',
        copy: 'Clássicos de diferentes fases da carreira solo de Ozzy Osbourne.',
      },
      {
        index: '02',
        title: 'Formação completa',
        copy: 'Voz, guitarra, baixo e bateria em uma apresentação dedicada ao peso e à dinâmica do repertório.',
      },
      {
        index: '03',
        title: 'Identidade de tributo',
        copy: 'Visual, atmosfera e execução trabalhando como uma única experiência.',
      },
      {
        index: '04',
        title: 'Pronto para o palco',
        copy: 'Formato indicado para casas de rock, festivais, eventos temáticos e programações culturais.',
      },
    ],
  },
  repertoire: {
    kicker: 'Repertório',
    title: 'Clássicos que atravessaram gerações.',
    body: 'O show percorre momentos marcantes da carreira de Ozzy Osbourne com uma seleção preparada para manter reconhecimento, peso e energia do início ao fim.',
    /** TODO: substituir por músicas/eras confirmadas quando a lista oficial existir */
    pillars: [
      {
        title: 'Peso',
        copy: 'Riffs e bases que sustentam a densidade do heavy metal clássico.',
      },
      {
        title: 'Melodia',
        copy: 'Linhas vocais e temas que o público identifica desde o primeiro verso.',
      },
      {
        title: 'Atmosfera',
        copy: 'Clima de palco pensado para envolver a plateia na narrativa do tributo.',
      },
      {
        title: 'Energia ao vivo',
        copy: 'Dinâmica de show completa, do impacto à interpretação.',
      },
    ],
    featuredTracks: [] as readonly string[],
  },
  formation: {
    kicker: 'Formação',
    title: 'Quem sobe ao palco.',
    body: 'Quatro músicos, uma direção clara: entregar o tributo com presença, peso e fidelidade à experiência Ozzy.',
    desktopGuide:
      'Passe o cursor para explorar. Clique para fixar; clique novamente para liberar.',
    mobileGuide:
      'Toque em um integrante para fixar. Toque novamente para liberar.',
    lockHint: 'Seleção fixada',
    exploreHint: 'Em destaque',
    autoHint: 'Destaque automático',
    facts: {
      instrument: 'Instrumento',
      contribution: 'No tributo',
      presence: 'Presença',
    },
    memberCounterLabel: 'Integrante',
    members: OZZBORN_MEMBERS,
  },
  media: {
    kicker: 'Mídia',
    title: 'Registros do projeto.',
    body: 'Acompanhe apresentações, ensaios e bastidores no Instagram oficial do OzzBorn.',
    cardKicker: 'Registros oficiais',
    cardTitle: 'Veja o OzzBorn em cena.',
    cardBody:
      'Apresentações, ensaios e bastidores estão disponíveis no Instagram oficial do tributo.',
    instagramCta: 'Ver apresentações no Instagram',
    /** Quando houver URL real, o bloco assume o estado de player. */
    videoUrl: null as string | null,
    videoPoster: null as string | null,
    gallery: [] as readonly string[],
  },
  applications: {
    kicker: 'Onde se apresenta',
    title: 'Feito para ambientes que pedem presença.',
    actionLabel: 'Consultar disponibilidade',
    items: APPLICATION_ITEMS.map((item) => ({
      label: item.label,
      description: item.description,
      whatsappUrl: buildWhatsAppUrl(
        `Olá, Vanessa! Gostaria de consultar o OzzBorn para ${item.eventType}.`,
      ),
    })),
  },
  process: {
    kicker: 'Contratação',
    title: 'Do primeiro contato ao palco.',
    body: 'Envie as informações principais do evento. A manager retorna com disponibilidade, formato e os próximos passos para a contratação.',
    steps: [
      {
        index: '01',
        title: 'Informe data e cidade',
        copy: 'Os dados essenciais para checar a agenda.',
      },
      {
        index: '02',
        title: 'Conte o perfil do evento',
        copy: 'Casa, festival, particular ou programação temática.',
      },
      {
        index: '03',
        title: 'Receba disponibilidade e próximos passos',
        copy: 'A equipe orienta o caminho mais adequado.',
      },
      {
        index: '04',
        title: 'Alinhe formato e condições',
        copy: 'Detalhes definidos diretamente com o atendimento.',
      },
    ],
  },
  booking: {
    kicker: 'Contrate o OzzBorn',
    title: 'Prepare o palco para uma noite de Ozzy.',
    body: 'Consulte disponibilidade, conte como será o evento e receba as informações para levar o tributo OzzBorn ao seu público.',
    cta: 'Consultar data e orçamento',
    note: 'Atendimento com Vanessa · Manager · Jundiaí/SP',
  },
  footer: {
    catalogLabel: 'Voltar ao catálogo de experiências',
    instagramLabel: 'Instagram',
    whatsappLabel: 'WhatsApp',
  },
} as const
