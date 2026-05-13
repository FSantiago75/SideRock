export type SideRockSectionId = 'resumo' | 'integrantes' | 'musica' | 'galeria'

export const SIDE_ROCK_BASE_PATH = '/side-rock'

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
