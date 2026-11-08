import aliceInChains from '../../../../assets/sideRock/bandsLogos/aliceInChains.png'
import audioslave from '../../../../assets/sideRock/bandsLogos/audioslave.png'
import bonJovi from '../../../../assets/sideRock/bandsLogos/bonJovi.png'
import gnr from '../../../../assets/sideRock/bandsLogos/gnr.png'
import him from '../../../../assets/sideRock/bandsLogos/him.png'
import megadeth from '../../../../assets/sideRock/bandsLogos/megadeth.png'
import metallica from '../../../../assets/sideRock/bandsLogos/metallica.png'
import ozzy from '../../../../assets/sideRock/bandsLogos/Ozzy.png'
import pearlJam from '../../../../assets/sideRock/bandsLogos/pearlJam.png'
import simpleMinds from '../../../../assets/sideRock/bandsLogos/simpleMinds.png'
import stoneTemplePilots from '../../../../assets/sideRock/bandsLogos/stoneTemplePilots.png'
import whitesnake from '../../../../assets/sideRock/bandsLogos/whitesnake.png'

export type BandReference = {
  name: string
  logo: string
  logoScale?: 'compact' | 'wide'
}

export type RepertoireMovement = {
  id: string
  eyebrow: string
  title: string
  body: string
  sampleTracks?: readonly string[]
  tone: 'arena' | 'alternative' | 'heavy'
  bands: readonly BandReference[]
}

export const REPERTOIRE_INTRO = {
  eyebrow: 'O som da Side Rock',
  title: 'Repertório',
  lead: 'Clássicos do rock internacional, do hard rock ao grunge e ao metal. Refrões conhecidos, solos marcantes e peso na medida de cada música.',
} as const

export const REPERTOIRE_MOVEMENTS: readonly RepertoireMovement[] = [
  {
    id: 'grandes-palcos',
    eyebrow: 'Classic rock · Hard rock',
    title: 'Clássicos para cantar junto',
    body: 'Guns N’ Roses em destaque, com refrões conhecidos, solos marcantes e a energia dos clássicos do hard rock.',
    tone: 'arena',
    bands: [
      { name: 'Bon Jovi', logo: bonJovi, logoScale: 'wide' },
      { name: "Guns N' Roses", logo: gnr },
      { name: 'Whitesnake', logo: whitesnake, logoScale: 'wide' },
      { name: 'Simple Minds', logo: simpleMinds },
    ],
    sampleTracks: [
      "It's My Life",
      'Welcome to the Jungle',
      'Is This Love',
      "Don't You",
    ],
  },
  {
    id: 'alternativo-grunge',
    eyebrow: 'Alternativo · Grunge',
    title: 'A força dos anos 90',
    body: 'Atmosfera, contrastes e vozes marcantes. O grunge e o alternativo mudam o clima do show sem perder a intensidade.',
    tone: 'alternative',
    bands: [
      { name: 'Pearl Jam', logo: pearlJam },
      { name: 'Alice in Chains', logo: aliceInChains },
      { name: 'Audioslave', logo: audioslave, logoScale: 'wide' },
      { name: 'Stone Temple Pilots', logo: stoneTemplePilots },
      { name: 'HIM', logo: him },
    ],
    sampleTracks: [
      'Black',
      'Man in the Box',
      'Like a Stone',
      'Plush',
      'Wicked Game',
    ],
  },
  {
    id: 'heavy-metal',
    eyebrow: 'Heavy metal',
    title: 'Peso com precisão',
    body: 'Metallica e Megadeth trazem riffs pesados, solos e viradas que colocam a precisão dos quatro músicos em evidência.',
    tone: 'heavy',
    bands: [
      { name: 'Metallica', logo: metallica, logoScale: 'wide' },
      { name: 'Megadeth', logo: megadeth, logoScale: 'wide' },
      { name: 'Ozzy Osbourne', logo: ozzy },
    ],
    sampleTracks: [
      'Enter Sandman',
      'Symphony of Destruction',
      'Bark at the Moon',
    ],
  },
] as const

export const REPERTOIRE_CLOSING = {
  eyebrow: 'A experiência Side Rock',
  titleLines: [
    'Seu evento merece mais do',
    'que uma banda tocando',
    'sucessos conhecidos.',
  ],
  mobileTitleLines: [
    'Seu evento merece mais',
    'do que uma banda',
    'tocando sucessos',
    'conhecidos.',
  ],
  primaryAction: 'Consultar data e orçamento',
  secondaryAction: 'Ver a banda em ação',
} as const
