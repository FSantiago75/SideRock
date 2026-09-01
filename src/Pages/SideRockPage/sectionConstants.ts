import { EXPERIENCE_ROUTES } from '../../config/experiences'

export type SideRockSectionId =
  | 'resumo'
  | 'integrantes'
  | 'repertorio'
  | 'galeria'

export const SIDE_ROCK_BASE_PATH = EXPERIENCE_ROUTES.sideRock

export const SIDE_ROCK_SECTION_ORDER: readonly SideRockSectionId[] = [
  'resumo',
  'integrantes',
  'repertorio',
  'galeria',
] as const

export const SIDE_ROCK_SECTION_LABELS: Record<SideRockSectionId, string> = {
  resumo: 'Resumo',
  integrantes: 'Integrantes',
  repertorio: 'Repertório',
  galeria: 'Galeria',
}

export function sideRockPath(section: SideRockSectionId): string {
  return `${SIDE_ROCK_BASE_PATH}/${section}`
}

export const SIDE_ROCK_SCROLLBAR = {
  start: '#c52b31',
  end: '#59171b',
  hoverStart: '#d4434a',
  hoverEnd: '#7b2025',
} as const
