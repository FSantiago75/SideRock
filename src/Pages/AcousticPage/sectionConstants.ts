import { EXPERIENCE_ROUTES } from '../../config/experiences'

export type AcousticSectionId =
  | 'resumo'
  | 'integrantes'
  | 'repertorio'
  | 'galeria'

export const ACOUSTIC_BASE_PATH = EXPERIENCE_ROUTES.acoustic

export const ACOUSTIC_SECTION_ORDER: readonly AcousticSectionId[] = [
  'resumo',
  'integrantes',
  'repertorio',
  'galeria',
] as const

export const ACOUSTIC_SECTION_LABELS: Record<AcousticSectionId, string> = {
  resumo: 'Resumo',
  integrantes: 'Integrantes',
  repertorio: 'Repertório',
  galeria: 'Galeria',
}

export function acousticPath(section: AcousticSectionId): string {
  return `${ACOUSTIC_BASE_PATH}/${section}`
}

export const ACOUSTIC_SCROLLBAR = {
  start: '#d97706',
  end: '#63320f',
  hoverStart: '#f59e0b',
  hoverEnd: '#92400e',
} as const
