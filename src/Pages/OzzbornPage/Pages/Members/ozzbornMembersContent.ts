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
    'Conheça quem transforma fidelidade musical em peso, precisão e presença no palco. Passe o cursor e clique para fixar.',
  mobileGuide:
    'Toque em cada integrante e conheça seu papel na experiência Ozzborn.',
} as const

export const OZZBORN_MEMBERS: readonly OzzbornMember[] = [
  {
    id: 'vocal',
    name: 'Marcelo',
    role: 'Vocalista',
    signature: 'A voz que aproxima o público de Ozzy.',
    description:
      'Marcelo trabalha o timbre, a intenção e a maneira de interpretar cada frase para trazer a identidade de Ozzy ao palco. Sua voz acompanha as mudanças de clima e intensidade do tributo.',
    instrument: 'Voz',
    contribution: 'Timbre, intenção e interpretação',
    presence: 'A identidade vocal do tributo',
    experience: '+30 anos de música',
    Icon: VocalIcon,
  },
  {
    id: 'guitar',
    name: 'Victor',
    role: 'Guitarrista',
    signature: 'A assinatura de cada fase na guitarra.',
    description:
      'Dos riffs do Sabbath aos solos da carreira solo, Victor recria timbres e arranjos que marcaram a obra de Ozzy. Sua guitarra acompanha a identidade de cada fase com precisão.',
    instrument: 'Guitarra',
    contribution: 'Timbres, riffs e solos fiéis',
    presence: 'A força das guitarras de cada fase',
    experience: '+20 anos de música',
    Icon: ElectricGuitarIcon,
  },
  {
    id: 'bass',
    name: 'Adriano',
    role: 'Baixista',
    signature: 'O peso de cada música, presente no baixo.',
    description:
      'Com peso e definição, Adriano preserva as linhas de baixo que dão corpo às músicas. A ligação com a bateria e os sons de apoio mantém o tributo firme em cada mudança de intensidade.',
    instrument: 'Baixo',
    contribution: 'Peso, definição e fidelidade',
    presence: 'Firmeza em cada mudança do show',
    experience: '+20 anos de música',
    Icon: BassGuitarIcon,
  },
  {
    id: 'drums',
    name: 'Toddynho',
    role: 'Baterista',
    signature: 'Cada virada a serviço da música.',
    description:
      'Toddynho recria ritmos, viradas e percussões com atenção a cada gravação. Sua bateria se integra aos sons de apoio e conduz o crescimento da apresentação com precisão.',
    instrument: 'Bateria',
    contribution: 'Ritmos, viradas e percussões',
    presence: 'Precisão que conduz a experiência',
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
