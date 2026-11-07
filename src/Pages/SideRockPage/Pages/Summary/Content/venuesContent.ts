export type SideRockVenue = {
  id: string
  name: string
  city: string
  context: string
  image: string
}

// Fill each slot with a confirmed venue and its photo. Empty slots keep their layout.
export const SIDE_ROCK_VENUES: readonly SideRockVenue[] = Array.from(
  { length: 8 },
  (_, index) => ({
    id: `palco-${index + 1}`,
    name: '',
    city: '',
    context: '',
    image: '',
  }),
)
