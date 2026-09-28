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
  eyebrow: 'Rock para cada momento',
  title: 'Repertório',
  lead: 'Clássicos escolhidos a dedo, tocados com a fidelidade que o público reconhece e a energia que faz todo mundo participar.',
} as const

export const REPERTOIRE_MOVEMENTS: readonly RepertoireMovement[] = [
  {
    id: 'grandes-palcos',
    eyebrow: 'Classic rock · Hard rock',
    title: 'Clássicos que todo mundo canta',
    body: 'Grandes refrões, músicas que atravessam gerações e um show que aproxima diferentes públicos.',
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
    eyebrow: 'Alternativo · Grunge',
    title: 'A força dos anos 90',
    body: 'Músicas que exigem técnica e domínio das mudanças de dinâmica. A Side Rock cuida dos detalhes sem perder a intensidade.',
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
    title: 'Peso com precisão',
    body: 'Riffs, viradas e solos executados com o peso e o cuidado que esses clássicos exigem.',
    tone: 'heavy',
    bands: [
      { name: 'Ozzy Osbourne', logo: ozzy },
      { name: 'Metallica', logo: metallica, logoScale: 'wide' },
      { name: 'Megadeth', logo: megadeth, logoScale: 'wide' },
    ],
  },
] as const
