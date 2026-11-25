import type { IconType } from 'react-icons'
import { VocalIcon } from '../../../../Components/InstrumentIcons/VocalIcon'
import { ElectricGuitarIcon } from '../../../../Components/InstrumentIcons/ElectricGuitarIcon'
import { BassGuitarIcon } from '../../../../Components/InstrumentIcons/BassGuitarIcon'
import { DrumKitIcon } from '../../../../Components/InstrumentIcons/DrumKitIcon'
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
    'Conheça os quatro músicos da Side Rock. Passe o cursor sobre cada um e clique para manter a seleção.',
  mobileGuide: 'Toque em cada integrante e conheça seu papel no show.',
} as const

export const SIDE_ROCK_MEMBERS: readonly SideRockMember[] = [
  {
    id: 'vocal',
    name: 'Marcelo',
    role: 'Vocalista',
    signature: 'Guns N’ Roses em destaque no vocal',
    description:
      'O timbre de Marcelo lembra Axl Rose e faz de Guns N’ Roses uma referência no show. No restante do repertório, ele muda a interpretação para acompanhar as diferenças entre o hard rock, o grunge e o metal.',
    instrument: 'Voz',
    contribution: 'Alcance, potência e interpretação',
    presence: 'Vocal à frente da banda',
    experience: '+30 anos de música',
    Icon: VocalIcon,
  },
  {
    id: 'guitar',
    name: 'Victor',
    role: 'Guitarrista',
    signature: 'Dos riffs aos solos de cada clássico',
    description:
      'Victor cuida dos riffs, solos e timbres de um repertório que vai de Guns N’ Roses a Metallica. A guitarra acompanha essas mudanças, das baladas às músicas mais pesadas.',
    instrument: 'Guitarra',
    contribution: 'Riffs, solos e atenção aos timbres',
    presence: 'Guitarra entre baladas e metal',
    experience: '+20 anos de música',
    Icon: ElectricGuitarIcon,
  },
  {
    id: 'bass',
    name: 'Adriano',
    role: 'Baixista',
    signature: 'Um baixo que se faz ouvir',
    description:
      'Adriano faz a ligação entre a guitarra e a bateria. Seu baixo acompanha os riffs e sustenta as mudanças do repertório, sem deixar as linhas de cada música em segundo plano.',
    instrument: 'Baixo',
    contribution: 'Linhas de baixo e base rítmica',
    presence: 'Baixo junto da bateria',
    experience: '+20 anos de música',
    Icon: BassGuitarIcon,
  },
  {
    id: 'drums',
    name: 'Todynho',
    role: 'Baterista',
    signature: 'Ritmos e viradas de um repertório variado',
    description:
      'Todynho acompanha os diferentes caminhos do show, do hard rock ao grunge e ao metal. As levadas e viradas mudam com o repertório, mantendo a bateria ligada ao jeito de tocar de cada banda.',
    instrument: 'Bateria',
    contribution: 'Ritmos, viradas e precisão',
    presence: 'Bateria do hard rock ao metal',
    experience: '+20 anos de música',
    Icon: DrumKitIcon,
  },
] as const

export function getMemberById(id: MemberId): SideRockMember {
  return (
    SIDE_ROCK_MEMBERS.find((member) => member.id === id) ?? SIDE_ROCK_MEMBERS[0]
  )
}

export function formatMemberIndex(index: number): string {
  return `${String(index + 1).padStart(2, '0')} / ${String(SIDE_ROCK_MEMBERS.length).padStart(2, '0')}`
}
