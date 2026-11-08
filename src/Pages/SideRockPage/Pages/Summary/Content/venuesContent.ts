export type SideRockVenue = {
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
export const SIDE_ROCK_VENUES: readonly SideRockVenue[] = [
  {
    id: 'palco-1',
    name: 'The Best Beer Festival',
    city: 'Campinas / SP',
    address: 'Praça Arautos da Paz · Taquaral',
    context: 'Prefeitura de Campinas',
    image: '/images/venues/prefeituraCampinasWhite.png',
  },
  {
    id: 'palco-2',
    name: 'Sexta no Centro',
    city: 'Jundiaí / SP',
    address: 'Praça Marechal Floriano Peixoto · Centro',
    context: 'Prefeitura de Jundiaí',
    image: '/images/venues/prefeituraJundiaiWhite.png',
  },
  {
    id: 'palco-3',
    name: 'Harley-Davidson Tennessee',
    city: 'Campinas / SP',
    address: 'Av. José Bonifácio, 3214 · Jardim das Paineiras',
    image: '/images/venues/tennesseeWhite.png',
    imageScale: 1.35,
  },
  {
    id: 'palco-4',
    name: 'Harley-Davidson Tennessee',
    city: 'Itupeva / SP',
    address: 'Estrada Municipal Joaquim Bueno, 999A · Rio Abaixo',
    image: '/images/venues/tennesseeWhite.png',
    imageScale: 1.35,
  },
  {
    id: 'palco-5',
    name: 'Dinossauros Rock Bar',
    city: 'Jundiaí / SP',
    address: 'Av. Nove de Julho, 2364 · Anhangabaú',
    image: '/images/venues/dinossaurosTransparent.png',
  },
  {
    id: 'palco-6',
    name: 'Tex Beer',
    city: 'Itupeva / SP',
    address: 'Av. Brasil, 1241 · Lagoa',
    image: '/images/venues/texBeerWhite.png',
    imageScale: 0.78,
  },
  {
    id: 'palco-7',
    name: 'Jumpbarbecue',
    city: 'Jundiaí / SP',
    address: 'Alameda dos Ipês, 101 · Vila Alvorada',
    image: '/images/venues/jumpbarbecueOriginal.jpg',
  },
  {
    id: 'palco-8',
    name: 'El Toro',
    city: 'Itatiba / SP',
    address: 'Rua Luiz Scavone, 842 · Jardim de Lucca',
    image: '/images/venues/elToro.jpg',
  },
  {
    id: 'palco-9',
    name: 'OficinaBar',
    city: 'Piracicaba / SP',
    address: 'Rua Riachuelo, 1138 · Centro',
    image: '/images/venues/oficinabar.jpg',
  },
  {
    id: 'palco-10',
    name: 'Vitão Rock Bar',
    city: 'Carapicuíba / SP',
    address: 'Av. Tâmara, 300 · Jardim das Belezas',
    image: '/images/venues/vitaoRockBarTransparent.png',
  },
  {
    id: 'palco-12',
    name: 'Hangar 111 Music Bar',
    city: 'Jundiaí / SP',
    address: 'Rua Dr. José Roberto Basile Bonito, 111 · Centro',
    image: '/images/venues/hangar111Original.png',
    imageScale: 1.8,
    imageBlend: 'screen',
  },
  {
    id: 'palco-13',
    name: 'Box 1200 Concept',
    city: 'Jundiaí / SP',
    address: 'Av. Luiz José Sereno, 1200 · Jardim Ermida II',
    image: '/images/venues/box1200.png',
    imageScale: 0.75,
  },
  {
    id: 'palco-14',
    name: 'The Bricks Brewpub',
    city: 'Jundiaí / SP',
    address: 'Av. Comendador Antônio Borin, 5793 · Jardim Caxambu',
    image: '/images/venues/theBricksTransparent.png',
  },
  {
    id: 'palco-15',
    name: 'Cervejaria Holy Water',
    city: 'Jundiaí / SP',
    address: 'Av. Nove de Julho, 3333 · JundiaíShopping · Piso Jundiaí',
    image: '/images/venues/holyWaterOriginal.png',
  },
  {
    id: 'palco-16',
    name: 'Elixir Myst',
    image: '/images/venues/elixirMystTransparent.png',
    city: 'Jundiaí / SP',
    address: 'Rua Cica, 201 · Vila Arens / Vila Progresso',
  },
  {
    id: 'palco-17',
    name: 'Quintal Caxambu',
    city: 'Jundiaí / SP',
    address: 'Av. Humberto Cereser, 5021 · Caxambu',
    image: '/images/venues/quintalCaxambuTransparent.png',
  },
]
