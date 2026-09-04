import aha from '../../../../assets/acoustic/bandsLogos/aha.png'
import audioslave from '../../../../assets/acoustic/bandsLogos/audioslave.png'
import bonJovi from '../../../../assets/acoustic/bandsLogos/bonJovi.png'
import capitalInicial from '../../../../assets/acoustic/bandsLogos/capitalInicial.png'
import djavan from '../../../../assets/acoustic/bandsLogos/djavan.png'
import gnr from '../../../../assets/acoustic/bandsLogos/gnr.png'
import legiao from '../../../../assets/acoustic/bandsLogos/legiao.png'
import oasis from '../../../../assets/acoustic/bandsLogos/oasis.png'
import pearlJam from '../../../../assets/acoustic/bandsLogos/pearlJam.png'
import raimundos from '../../../../assets/acoustic/bandsLogos/raimundos.png'
import stp from '../../../../assets/acoustic/bandsLogos/stp.png'
import whitesnake from '../../../../assets/acoustic/bandsLogos/whitesnake.png'
import type { RepertoireMovement } from '../../../SideRockPage/Pages/Repertoire/repertoireContent'

export const ACOUSTIC_REPERTOIRE_INTRO = {
  eyebrow: '12 artistas · Brasil e mundo · 3 horas',
  title: 'Repertório',
  lead: 'Do refrão internacional ao coro brasileiro.',
} as const

export const ACOUSTIC_REPERTOIRE_MOVEMENTS: readonly RepertoireMovement[] = [
  {
    id: 'grandes-refroes',
    eyebrow: 'Clássicos · Hard rock · Pop rock',
    title: 'Grandes refrões',
    body: 'Referências reconhecíveis desde os primeiros acordes, escolhidas para aproximar gerações e abrir espaço para o público cantar junto.',
    tone: 'arena',
    bands: [
      { name: 'Bon Jovi', logo: bonJovi, logoScale: 'wide' },
      { name: "Guns N’ Roses", logo: gnr },
      { name: 'Whitesnake', logo: whitesnake, logoScale: 'wide' },
      { name: 'a-ha', logo: aha, logoScale: 'wide' },
    ],
  },
  {
    id: 'rock-alternativo',
    eyebrow: 'Grunge · Britpop · Alternative rock',
    title: 'Rock alternativo',
    body: 'Textura, dinâmica e intensidade em um movimento que revela as raízes da Side Rock mesmo dentro da formação acústica.',
    tone: 'alternative',
    bands: [
      { name: 'Pearl Jam', logo: pearlJam },
      { name: 'Oasis', logo: oasis, logoScale: 'wide' },
      { name: 'Audioslave', logo: audioslave, logoScale: 'wide' },
      { name: 'Stone Temple Pilots', logo: stp },
    ],
  },
  {
    id: 'brasil-canta-junto',
    eyebrow: 'Rock nacional · Canção brasileira',
    title: 'Brasil canta junto',
    body: 'A parte mais próxima e participativa do repertório: música brasileira popular, direta e feita para transformar o ambiente em coro.',
    tone: 'heavy',
    bands: [
      { name: 'Legião Urbana', logo: legiao, logoScale: 'wide' },
      { name: 'Capital Inicial', logo: capitalInicial, logoScale: 'wide' },
      { name: 'Raimundos', logo: raimundos, logoScale: 'wide' },
      { name: 'Djavan', logo: djavan, logoScale: 'wide' },
    ],
  },
] as const

export const ACOUSTIC_REPERTOIRE_CLOSING = {
  eyebrow: 'Reconhecível sem ser previsível',
  title: 'Doze referências. Dois formatos. Um show.',
  body: 'O repertório é fechado e organizado para agradar públicos diferentes ao longo da apresentação. Duo ou Trio mudam a pulsação — a identidade e o cuidado com o show permanecem.',
} as const

const BOOKING_MESSAGE =
  'Olá, Vanessa! Gostaria de consultar disponibilidade e orçamento do Side Rock Acústico para um evento.'

export const ACOUSTIC_REPERTOIRE_BOOKING_URL =
  `https://wa.me/5511971632992?text=${encodeURIComponent(BOOKING_MESSAGE)}`
