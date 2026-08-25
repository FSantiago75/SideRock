import AcousticImage from '../../assets/SideRockAcoustic.png'
import SideRockImage from '../../assets/SideRock.jpg'
import OzzbornImage from '../../assets/SideRockOzzborn.png'
import { EXPERIENCE_ROUTES } from '../../config/experiences'

export type CatalogScrollbarTheme = {
  start: string
  end: string
  hoverStart: string
  hoverEnd: string
}

export type CatalogTheme = {
  accent: string
  scrollbar: CatalogScrollbarTheme
}

export const CATALOG_NEUTRAL_THEME = {
  accent: '#a39b90',
  scrollbar: {
    start: '#737373',
    end: '#3f3f3f',
    hoverStart: '#969696',
    hoverEnd: '#575757',
  },
} as const satisfies CatalogTheme

export const HOME_EXPERIENCES = [
  {
    id: 'acoustic',
    name: 'Acústico',
    path: EXPERIENCE_ROUTES.acoustic,
    image: AcousticImage,
    eyebrow: 'Próximo e versátil',
    description:
      'Música nacional e internacional em um formato intimista, elegante e pronto para se adaptar ao seu evento.',
    idealFor: 'Bares, celebrações e ambientes intimistas',
    theme: {
      accent: '#df7a22',
      scrollbar: {
        start: '#c47732',
        end: '#69401f',
        hoverStart: '#e39a55',
        hoverEnd: '#8a5428',
      },
    },
  },
  {
    id: 'side-rock',
    name: 'Side Rock',
    path: EXPERIENCE_ROUTES.sideRock,
    image: SideRockImage,
    eyebrow: 'Clássicos para cantar junto',
    description:
      'Várias gerações do rock reunidas em um show completo, reconhecível e feito para movimentar a casa.',
    idealFor: 'Casas de rock, eventos e grandes noites',
    theme: {
      accent: '#c52b31',
      scrollbar: {
        start: '#a72a31',
        end: '#59171b',
        hoverStart: '#d4434a',
        hoverEnd: '#7b2025',
      },
    },
  },
  {
    id: 'ozzborn',
    name: 'Ozzborn',
    path: EXPERIENCE_ROUTES.ozzborn,
    image: OzzbornImage,
    eyebrow: 'Tributo com presença',
    description:
      'Um projeto de nicho com identidade visual, repertório e presença de palco para transformar o show em espetáculo.',
    idealFor: 'Tributos, festivais e eventos temáticos',
    theme: {
      accent: '#9a3ad1',
      scrollbar: {
        start: '#8243a8',
        end: '#432257',
        hoverStart: '#a963cf',
        hoverEnd: '#62327d',
      },
    },
  },
] as const

export type HomeExperience = (typeof HOME_EXPERIENCES)[number]
export type HomeExperienceId = HomeExperience['id']
export type ActiveHomeExperienceId = HomeExperienceId | null

export function getCatalogTheme(
  experienceId: ActiveHomeExperienceId,
): CatalogTheme {
  if (!experienceId) {
    return CATALOG_NEUTRAL_THEME
  }

  const experience = HOME_EXPERIENCES.find((item) => item.id === experienceId)

  return experience?.theme ?? CATALOG_NEUTRAL_THEME
}
