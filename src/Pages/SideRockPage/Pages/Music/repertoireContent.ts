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
  tone: 'arena' | 'alternative' | 'heavy'
  bands: readonly BandReference[]
}

export const REPERTOIRE_INTRO = {
  eyebrow: 'Amplitude musical',
  title: 'Repertório',
  lead: 'Clássicos, grunge, hard rock e heavy metal com a identidade da Side Rock.',
} as const

export const REPERTOIRE_MOVEMENTS: readonly RepertoireMovement[] = [
  {
    id: 'grandes-palcos',
    eyebrow: 'Classic rock · Hard rock',
    title: 'Grandes clássicos',
    body: 'Referências que atravessam gerações e representam o lado mais aberto do repertório.',
    tone: 'arena',
    bands: [
      { name: 'Bon Jovi', logo: bonJovi, logoScale: 'wide' },
      { name: "Guns N' Roses", logo: gnr },
      { name: 'Whitesnake', logo: whitesnake, logoScale: 'wide' },
      { name: 'Simple Minds', logo: simpleMinds },
    ],
  },
  {
    id: 'alternativo-grunge',
    eyebrow: 'Alternative rock · Grunge',
    title: 'Alternativo e grunge',
    body: 'O peso e a dinâmica dos anos 90 em uma parte importante da identidade da banda.',
    tone: 'alternative',
    bands: [
      { name: 'Pearl Jam', logo: pearlJam },
      { name: 'Alice in Chains', logo: aliceInChains },
      { name: 'Audioslave', logo: audioslave, logoScale: 'wide' },
      { name: 'Stone Temple Pilots', logo: stoneTemplePilots },
      { name: 'HIM', logo: him },
    ],
  },
  {
    id: 'heavy-metal',
    eyebrow: 'Heavy metal',
    title: 'Heavy metal',
    body: 'O lado mais pesado da Side Rock, com referências de técnica, intensidade e potência.',
    tone: 'heavy',
    bands: [
      { name: 'Ozzy Osbourne', logo: ozzy },
      { name: 'Metallica', logo: metallica, logoScale: 'wide' },
      { name: 'Megadeth', logo: megadeth, logoScale: 'wide' },
    ],
  },
] as const
