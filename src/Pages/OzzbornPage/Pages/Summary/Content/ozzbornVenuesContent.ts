export type OzzbornVenue = {
  id: string
  name: string
  city?: string
  address?: string
  context?: string
  image?: string
  imageScale?: number
  imageBlend?: 'screen'
}

// Edit venue details here. Local image files live in public/images/venues.
// Research sources and pending confirmations: docs/venue-sources.txt.
export const OZZBORN_VENUES: readonly OzzbornVenue[] = [
  {
    id: 'palco-1',
    name: 'Tex Beer',
    city: 'Itupeva / SP',
    address: 'Av. Brasil, 1241 · Lagoa',
    image: '/images/venues/texBeerWhite.png',
    imageScale: 0.78,
  },
  {
    id: 'palco-2',
    name: 'Harley-Davidson Tennessee',
    city: 'Itupeva / SP',
    address: 'Estrada Municipal Joaquim Bueno, 999A · Rio Abaixo',
    image: '/images/venues/tennesseeWhite.png',
    imageScale: 1.35,
  },
]
