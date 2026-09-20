import type { IconType } from 'react-icons'
import { FaDrum, FaGuitar, FaMicrophoneAlt, FaWaveSquare } from 'react-icons/fa'
import type { MembersImageMemberId } from '../../../../Components/MembersImage'

export type MemberId = MembersImageMemberId

export type SideRockMember = {
  id: MemberId
  name: string
  role: string
  signature: string
  description: string
  instrument: string
  contribution: string
  presence: string
  experience: string
  Icon: IconType
}

export const SIDE_ROCK_MEMBERS_COPY = {
  eyebrow: 'Formação completa',
  title: 'Integrantes',
  desktopGuide:
    'Conheça quem transforma repertório em presença e energia no palco. Passe o cursor e clique para fixar.',
  mobileGuide: 'Toque em cada integrante e conheça seu papel no show.',
} as const

export const SIDE_ROCK_MEMBERS: readonly SideRockMember[] = [
  {
    id: 'vocal',
    name: 'Marcelo',
    role: 'Vocalista',
    signature: 'Três décadas de voz, técnica e presença.',
    description:
      'Há mais de 30 anos, Marcelo enfrenta repertórios exigentes e transforma técnica vocal em interpretação. À frente da Side Rock, atravessa estilos e gerações com potência, personalidade e conexão com o público.',
    instrument: 'Voz',
    contribution: 'Amplitude, potência e interpretação',
    presence: 'Condução e conexão',
    experience: '+30 anos de música',
    Icon: FaMicrophoneAlt,
  },
  {
    id: 'guitar',
    name: 'Victor',
    role: 'Guitarrista',
    signature: 'Fidelidade construída em cada detalhe.',
    description:
      'Com mais de 20 anos de experiência, Victor recria riffs, bases e solos com atenção aos timbres, efeitos e arranjos que tornam cada clássico reconhecível. Uma guitarra precisa, feita para quem conhece a música e para quem quer sentir seu impacto.',
    instrument: 'Guitarra',
    contribution: 'Timbres, riffs e solos fiéis',
    presence: 'Precisão e intensidade',
    experience: '+20 anos de música',
    Icon: FaGuitar,
  },
  {
    id: 'bass',
    name: 'Adriano',
    role: 'Baixista',
    signature: 'O peso que mantém tudo no lugar.',
    description:
      'Com mais de 20 anos de experiência, Adriano dá corpo ao repertório com linhas firmes, equilíbrio e consistência. Sua base sustenta os arranjos e faz a energia da banda chegar inteira ao público.',
    instrument: 'Baixo',
    contribution: 'Peso, equilíbrio e sustentação',
    presence: 'Solidez e presença',
    experience: '+20 anos de música',
    Icon: FaWaveSquare,
  },
  {
    id: 'drums',
    name: 'Toddynho',
    role: 'Baterista',
    signature: 'Energia, velocidade e criatividade.',
    description:
      'Com mais de 20 anos de experiência, Toddynho conduz a dinâmica do show com precisão e inventividade. Seu pulso acompanha cada mudança do repertório e mantém a banda em movimento.',
    instrument: 'Bateria',
    contribution: 'Pulso, dinâmica e impacto',
    presence: 'Energia e movimento',
    experience: '+20 anos de música',
    Icon: FaDrum,
  },
] as const

export function getMemberById(id: MemberId): SideRockMember {
  return SIDE_ROCK_MEMBERS.find((member) => member.id === id) ?? SIDE_ROCK_MEMBERS[0]
}

export function formatMemberIndex(index: number): string {
  return `${String(index + 1).padStart(2, '0')} / ${String(SIDE_ROCK_MEMBERS.length).padStart(2, '0')}`
}
