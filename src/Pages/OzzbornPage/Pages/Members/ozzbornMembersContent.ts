import type { IconType } from 'react-icons'
import { FaDrum, FaGuitar, FaMicrophoneAlt, FaWaveSquare } from 'react-icons/fa'
import type { MembersImageMemberId } from '../../../../Components/MembersImage'

export type OzzbornMemberId = MembersImageMemberId

export type OzzbornMember = {
  id: OzzbornMemberId
  name: string
  role: string
  signature: string
  description: string
  instrument: string
  contribution: string
  presence: string
  Icon: IconType
}

export const OZZBORN_MEMBERS_COPY = {
  eyebrow: 'Formação Ozzborn',
  title: 'Integrantes',
  desktopGuide:
    'Conheça a formação. Passe o cursor sobre cada músico e clique para fixar.',
  mobileGuide: 'Toque em um integrante para conhecer sua função no tributo.',
} as const

export const OZZBORN_MEMBERS: readonly OzzbornMember[] = [
  {
    id: 'vocal',
    name: 'Marcelo',
    role: 'Vocalista',
    signature: 'Interpretação, presença e identidade vocal.',
    description:
      'Marcelo conduz a experiência à frente do Ozzborn, trabalhando interpretação, timbre e presença para aproximar o público das diferentes fases de Ozzy.',
    instrument: 'Voz',
    contribution: 'Interpretação e condução',
    presence: 'A figura central do tributo',
    Icon: FaMicrophoneAlt,
  },
  {
    id: 'guitar',
    name: 'Victor',
    role: 'Guitarrista',
    signature: 'Timbre, precisão e linguagem de guitarra.',
    description:
      'Victor cuida dos riffs, bases e solos com atenção aos timbres e às escolhas que definem as diferentes eras da carreira de Ozzy e do Black Sabbath.',
    instrument: 'Guitarra',
    contribution: 'Riffs, timbres e solos',
    presence: 'Peso com precisão',
    Icon: FaGuitar,
  },
  {
    id: 'bass',
    name: 'Adriano',
    role: 'Baixista',
    signature: 'Peso, sustentação e disciplina rítmica.',
    description:
      'Adriano sustenta a base do repertório com linhas firmes e execução disciplinada, mantendo a formação conectada aos arranjos e às bases programadas.',
    instrument: 'Baixo',
    contribution: 'Base, peso e sustentação',
    presence: 'Consistência em cada arranjo',
    Icon: FaWaveSquare,
  },
  {
    id: 'drums',
    name: 'Toddynho',
    role: 'Baterista',
    signature: 'Dinâmica, impacto e detalhe.',
    description:
      'Toddynho conduz as mudanças de energia do show com atenção às viradas, às percussões e à dinâmica necessária para acompanhar cada atmosfera do repertório.',
    instrument: 'Bateria',
    contribution: 'Pulso, dinâmica e percussões',
    presence: 'Impacto que conduz o show',
    Icon: FaDrum,
  },
] as const

export function getOzzbornMemberById(id: OzzbornMemberId): OzzbornMember {
  return OZZBORN_MEMBERS.find((member) => member.id === id) ?? OZZBORN_MEMBERS[0]
}

export function formatOzzbornMemberIndex(index: number): string {
  return `${String(index + 1).padStart(2, '0')} / ${String(OZZBORN_MEMBERS.length).padStart(2, '0')}`
}
