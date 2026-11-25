import type { IconType } from 'react-icons'
import { VocalIcon } from '../../../../Components/InstrumentIcons/VocalIcon'
import { ElectricGuitarIcon } from '../../../../Components/InstrumentIcons/ElectricGuitarIcon'
import { BassGuitarIcon } from '../../../../Components/InstrumentIcons/BassGuitarIcon'
import { DrumKitIcon } from '../../../../Components/InstrumentIcons/DrumKitIcon'
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
  experience: string
  Icon: IconType
}

export const OZZBORN_MEMBERS_COPY = {
  eyebrow: 'Formação Ozzborn',
  title: 'Integrantes',
  desktopGuide:
    'Conheça os músicos do tributo e o trabalho de cada um. Passe o cursor sobre um integrante e clique para manter a seleção.',
  mobileGuide:
    'Toque em cada integrante e conheça seu papel no tributo.',
} as const

export const OZZBORN_MEMBERS: readonly OzzbornMember[] = [
  {
    id: 'vocal',
    name: 'Marcelo',
    role: 'Vocalista',
    signature: 'Ozzy na voz de Marcelo',
    description:
      'Marcelo toma a voz de Ozzy como referência para o timbre e a interpretação das músicas. O trabalho inclui a forma de cantar cada frase, tanto no repertório do Sabbath quanto na carreira solo.',
    instrument: 'Voz',
    contribution: 'Timbre, intenção e interpretação',
    presence: 'Vocal do Sabbath à carreira solo',
    experience: '+30 anos de música',
    Icon: VocalIcon,
  },
  {
    id: 'guitar',
    name: 'Victor',
    role: 'Guitarrista',
    signature: 'Dos riffs do Sabbath aos solos de Ozzy',
    description:
      'Victor trabalha os riffs do Black Sabbath e os solos da carreira solo de Ozzy. A escolha dos timbres e a atenção aos arranjos ajudam a distinguir as fases do repertório.',
    instrument: 'Guitarra',
    contribution: 'Riffs, solos e escolha de timbres',
    presence: 'Guitarra nas diferentes fases',
    experience: '+20 anos de música',
    Icon: ElectricGuitarIcon,
  },
  {
    id: 'bass',
    name: 'Adriano',
    role: 'Baixista',
    signature: 'O baixo por trás dos riffs',
    description:
      'Adriano usa as linhas das gravações como referência para o baixo. Junto da bateria, sustenta os riffs e acompanha as passagens entre as músicas mais pesadas e as baladas.',
    instrument: 'Baixo',
    contribution: 'Linhas de baixo e ligação com a bateria',
    presence: 'Base rítmica do tributo',
    experience: '+20 anos de música',
    Icon: BassGuitarIcon,
  },
  {
    id: 'drums',
    name: 'Todynho',
    role: 'Baterista',
    signature: 'A bateria de cada fase do tributo',
    description:
      'Todynho trabalha as levadas, viradas e percussões das gravações. No show, a bateria toca junto das bases sincronizadas que acrescentam os sons de apoio ao tributo.',
    instrument: 'Bateria',
    contribution: 'Ritmos, viradas e percussões',
    presence: 'Bateria e bases sincronizadas',
    experience: '+20 anos de música',
    Icon: DrumKitIcon,
  },
] as const

export function getOzzbornMemberById(id: OzzbornMemberId): OzzbornMember {
  return (
    OZZBORN_MEMBERS.find((member) => member.id === id) ?? OZZBORN_MEMBERS[0]
  )
}

export function formatOzzbornMemberIndex(index: number): string {
  return `${String(index + 1).padStart(2, '0')} / ${String(OZZBORN_MEMBERS.length).padStart(2, '0')}`
}
