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
  Icon: IconType
}

export const SIDE_ROCK_MEMBERS_COPY = {
  eyebrow: 'Formação completa',
  title: 'Integrantes',
  desktopGuide:
    'Explore a formação. Passe o cursor para conhecer cada integrante e clique para fixar.',
  mobileGuide: 'Toque em um integrante para fixar a seleção.',
} as const

export const SIDE_ROCK_MEMBERS: readonly SideRockMember[] = [
  {
    id: 'vocal',
    name: 'Marcelo',
    role: 'Vocalista',
    signature: 'Voz, interpretação e conexão.',
    description:
      'Marcelo está à frente da experiência, interpretando diferentes vertentes do rock internacional com presença e versatilidade.',
    instrument: 'Voz',
    contribution: 'Interpretação e conexão',
    presence: 'A frente da experiência',
    Icon: FaMicrophoneAlt,
  },
  {
    id: 'guitar',
    name: 'Victor',
    role: 'Guitarrista',
    signature: 'Textura, peso e melodia.',
    description:
      'Victor conduz as guitarras entre riffs, bases e solos, conectando diferentes décadas do rock com precisão e identidade.',
    instrument: 'Guitarra',
    contribution: 'Riffs, texturas e solos',
    presence: 'Intensidade e precisão',
    Icon: FaGuitar,
  },
  {
    id: 'bass',
    name: 'Adriano',
    role: 'Baixista',
    signature: 'A base que sustenta o show.',
    description:
      'Adriano ocupa o centro da base rítmica com linhas de baixo firmes, peso e consistência para manter a banda em movimento.',
    instrument: 'Baixo',
    contribution: 'Peso e sustentação',
    presence: 'Base firme do repertório',
    Icon: FaWaveSquare,
  },
  {
    id: 'drums',
    name: 'Toddynho',
    role: 'Baterista',
    signature: 'Pulso, dinâmica e impacto.',
    description:
      'Toddynho conduz a dinâmica do repertório e transforma cada virada em energia para a banda e para o público.',
    instrument: 'Bateria',
    contribution: 'Pulso e dinâmica',
    presence: 'Energia que conduz a banda',
    Icon: FaDrum,
  },
] as const

export function getMemberById(id: MemberId): SideRockMember {
  return SIDE_ROCK_MEMBERS.find((member) => member.id === id) ?? SIDE_ROCK_MEMBERS[0]
}

export function formatMemberIndex(index: number): string {
  return `${String(index + 1).padStart(2, '0')} / ${String(SIDE_ROCK_MEMBERS.length).padStart(2, '0')}`
}
