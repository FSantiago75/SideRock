import { EXPERIENCE_ROUTES } from '../../config/experiences'

export type OzzbornSectionId =
  | 'resumo'
  | 'integrantes'
  | 'repertorio'
  | 'galeria'

export const OZZBORN_BASE_PATH = EXPERIENCE_ROUTES.ozzborn

export const OZZBORN_SECTION_ORDER: readonly OzzbornSectionId[] = [
  'resumo',
  'integrantes',
  'repertorio',
  'galeria',
] as const

export const OZZBORN_SECTION_LABELS: Record<OzzbornSectionId, string> = {
  resumo: 'Resumo',
  integrantes: 'Integrantes',
  repertorio: 'Repertório',
  galeria: 'Galeria',
}

export function ozzbornPath(section: OzzbornSectionId): string {
  return `${OZZBORN_BASE_PATH}/${section}`
}

export const OZZBORN_SCROLLBAR = {
  start: '#7c3aed',
  end: '#26113a',
  hoverStart: '#a855f7',
  hoverEnd: '#5b21b6',
} as const
