import { EXPERIENCE_ROUTES } from '../../config/experiences'

export type SideRockSectionId = 'resumo' | 'integrantes' | 'musica' | 'galeria'

export const SIDE_ROCK_BASE_PATH = EXPERIENCE_ROUTES.sideRock

export const SIDE_ROCK_SECTION_ORDER: readonly SideRockSectionId[] = [
  'resumo',
  'integrantes',
  'musica',
  'galeria',
] as const

export const SIDE_ROCK_SECTION_LABELS: Record<SideRockSectionId, string> = {
  resumo: 'Resumo',
  integrantes: 'Integrantes',
  musica: 'Música',
  galeria: 'Galeria',
}

export function sideRockPath(section: SideRockSectionId): string {
  return `${SIDE_ROCK_BASE_PATH}/${section}`
}
