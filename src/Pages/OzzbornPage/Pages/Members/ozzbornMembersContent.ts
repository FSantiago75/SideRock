import type { IconType } from 'react-icons'
import { FaDrum, FaGuitar, FaMicrophoneAlt } from 'react-icons/fa'
import { GiGuitar } from 'react-icons/gi'
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
  mobileGuide: 'Toque em cada integrante e conheça seu papel na experiência Ozzborn.',
} as const

export const OZZBORN_MEMBERS: readonly OzzbornMember[] = [
  {
    id: 'vocal',
    name: 'Marcelo',
    role: 'Vocalista',
    signature: 'Três décadas de voz, técnica e presença.',
    description:
      'Há mais de 30 anos, Marcelo enfrenta repertórios exigentes e transforma técnica vocal em interpretação. À frente da Ozzborn, trabalha timbre, intenção e presença para aproximar o público das diferentes fases de Ozzy Osbourne.',
    instrument: 'Voz',
    contribution: 'Timbre, interpretação e condução',
    presence: 'Presença e conexão',
    experience: '+30 anos de música',
    Icon: FaMicrophoneAlt,
  },
  {
    id: 'guitar',
    name: 'Victor',
    role: 'Guitarrista',
    signature: 'Fidelidade construída em cada detalhe.',
    description:
      'Com mais de 20 anos de experiência, Victor recria riffs, bases e solos com atenção aos timbres, efeitos e arranjos que marcaram as diferentes fases de Ozzy Osbourne e Black Sabbath. Sua guitarra é uma das bases da fidelidade musical da Ozzborn.',
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
      'Com mais de 20 anos de experiência, Adriano sustenta o repertório com linhas firmes, equilíbrio e consistência. Seu baixo conecta bateria, guitarras e elementos sincronizados, mantendo os arranjos sólidos e próximos da identidade de cada música.',
    instrument: 'Baixo',
    contribution: 'Peso, equilíbrio e sustentação',
    presence: 'Solidez e presença',
    experience: '+20 anos de música',
    Icon: GiGuitar,
  },
  {
    id: 'drums',
    name: 'Toddynho',
    role: 'Baterista',
    signature: 'Energia, dinâmica e precisão.',
    description:
      'Com mais de 20 anos de experiência, Toddynho conduz as mudanças de energia do show com atenção às viradas, às percussões e à dinâmica de cada fase do repertório. Sua bateria mantém a banda e os elementos sincronizados trabalhando como uma única apresentação.',
    instrument: 'Bateria',
    contribution: 'Pulso, dinâmica e percussões',
    presence: 'Impacto que conduz o show',
    experience: '+20 anos de música',
    Icon: FaDrum,
  },
] as const

export function getOzzbornMemberById(id: OzzbornMemberId): OzzbornMember {
  return OZZBORN_MEMBERS.find((member) => member.id === id) ?? OZZBORN_MEMBERS[0]
}

export function formatOzzbornMemberIndex(index: number): string {
  return `${String(index + 1).padStart(2, '0')} / ${String(OZZBORN_MEMBERS.length).padStart(2, '0')}`
}
