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
    'Conheça quem transforma repertório em presença e energia no palco. Passe o cursor e clique para fixar.',
  mobileGuide: 'Toque em cada integrante e conheça seu papel no show.',
} as const

export const SIDE_ROCK_MEMBERS: readonly SideRockMember[] = [
  {
    id: 'vocal',
    name: 'Marcelo',
    role: 'Vocalista',
    signature: 'Uma voz que dá identidade ao show.',
    description:
      'O timbre próximo ao de Axl Rose faz de Guns N’ Roses um dos destaques da Side Rock. Marcelo atravessa o restante do repertório com alcance, potência e personalidade.',
    instrument: 'Voz',
    contribution: 'Alcance, potência e interpretação',
    presence: 'Uma voz que marca o show',
    experience: '+30 anos de música',
    Icon: VocalIcon,
  },
  {
    id: 'guitar',
    name: 'Victor',
    role: 'Guitarrista',
    signature: 'Dos solos marcantes às passagens mais delicadas.',
    description:
      'Victor combina precisão e sensibilidade para interpretar o rock em suas diferentes intensidades. Riffs, solos e timbres recebem o cuidado que torna cada clássico reconhecível.',
    instrument: 'Guitarra',
    contribution: 'Riffs, solos e atenção aos timbres',
    presence: 'Expressão e intensidade',
    experience: '+20 anos de música',
    Icon: ElectricGuitarIcon,
  },
  {
    id: 'bass',
    name: 'Adriano',
    role: 'Baixista',
    signature: 'Um baixo que se faz ouvir.',
    description:
      'Presente e bem definido, o baixo de Adriano dá peso aos riffs e corpo à música. Suas linhas unem a banda com firmeza e mantêm cada passagem consistente, do começo ao fim.',
    instrument: 'Baixo',
    contribution: 'Peso, definição e consistência',
    presence: 'Um som que preenche o palco',
    experience: '+20 anos de música',
    Icon: BassGuitarIcon,
  },
  {
    id: 'drums',
    name: 'Toddynho',
    role: 'Baterista',
    signature: 'Criatividade para dar força a cada virada.',
    description:
      'Toddynho combina ritmos complexos, viradas criativas e precisão. Sua bateria conduz os contrastes do repertório, das passagens mais contidas aos momentos de maior peso.',
    instrument: 'Bateria',
    contribution: 'Ritmos, viradas e precisão',
    presence: 'Energia que conduz o show',
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
