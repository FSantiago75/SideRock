export const EXPERIENCE_ROUTES = {
  catalog: '/',
  sideRock: '/side-rock',
  acoustic: '/acoustic',
  ozzborn: '/ozzborn',
} as const

export const LEGACY_EXPERIENCE_ROUTES = {
  ozzborn: '/ozzborns',
} as const
export const EXPERIENCE_AVAILABILITY = {
  acoustic: false,
  'side-rock': true,
  ozzborn: true,
} satisfies Record<string, boolean>

