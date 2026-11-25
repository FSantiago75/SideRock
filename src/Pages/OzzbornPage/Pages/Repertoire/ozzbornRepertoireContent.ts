import blackSabbath from '../../../../assets/ozzborn/albums/blackSabbath.png'
import paranoid from '../../../../assets/ozzborn/albums/paranoid.jpg'
import vol4 from '../../../../assets/ozzborn/albums/vol4.jpg'
import blizzardOfOzz from '../../../../assets/ozzborn/albums/blizzardOfOzz.jpg'
import diaryOfAMadman from '../../../../assets/ozzborn/albums/diaryOfAMadman.jpg'
import barkAtTheMoon from '../../../../assets/ozzborn/albums/barkAtTheMoon.jpg'
import theUltimateSin from '../../../../assets/ozzborn/albums/theUltimateSin.jpg'
import noRestForTheWicked from '../../../../assets/ozzborn/albums/noRestForTheWicked.jpg'
import noMoreTears from '../../../../assets/ozzborn/albums/noMoreTears.jpg'
import ozzmosis from '../../../../assets/ozzborn/albums/ozzmosis.jpg'
import downToEarth from '../../../../assets/ozzborn/albums/downToEarth.jpg'
import blackRain from '../../../../assets/ozzborn/albums/blackRain.jpg'
import scream from '../../../../assets/ozzborn/albums/scream.jpg'

export type OzzbornRepertoireAlbum = {
  id: string
  artist: string
  title: string
  year: number
  cover: string
}

export type OzzbornRepertoireEraTone =
  'origin' | 'rebirth' | 'transformation' | 'monumental' | 'legacy'

export type OzzbornRepertoireEra = {
  id: string
  period: string
  title: string
  narrative: string
  tone: OzzbornRepertoireEraTone
  albums: readonly OzzbornRepertoireAlbum[]
}

export const OZZBORN_REPERTOIRE_INTRO = {
  eyebrow: 'Repertório Ozzborn',
  titleLead: 'Cinco eras',
  titleAccent: 'Um show',
  lead: 'Ouça as gravações da Ozzborn e conheça as cinco fases da discografia de Ozzy que orientam o tributo',
} as const

export const OZZBORN_REPERTOIRE_JOURNEY = {
  label: 'Uma história levada ao palco',
  startYear: '1970',
  endYear: '2010',
  origin: 'Black Sabbath',
  destination: 'Ozzy Osbourne',
} as const

export const OZZBORN_REPERTOIRE_ERAS: readonly OzzbornRepertoireEra[] = [
  {
    id: 'origem',
    period: '1970 a 1972',
    title: 'Onde o peso começou',
    narrative:
      'Os primeiros discos do Black Sabbath são a referência para esta parte do repertório, com os riffs e o som da banda no início da trajetória de Ozzy.',
    tone: 'origin',
    albums: [
      {
        id: 'black-sabbath-1970',
        artist: 'Black Sabbath',
        title: 'Black Sabbath',
        year: 1970,
        cover: blackSabbath,
      },
      {
        id: 'paranoid-1970',
        artist: 'Black Sabbath',
        title: 'Paranoid',
        year: 1970,
        cover: paranoid,
      },
      {
        id: 'vol4-1972',
        artist: 'Black Sabbath',
        title: 'Vol. 4',
        year: 1972,
        cover: vol4,
      },
    ],
  },
  {
    id: 'renascimento',
    period: '1980 a 1981',
    title: 'O renascimento de Ozzy',
    narrative:
      'Blizzard of Ozz e Diary of a Madman representam o começo da carreira solo. Os arranjos de guitarra dessa fase recebem atenção especial no tributo.',
    tone: 'rebirth',
    albums: [
      {
        id: 'blizzard-of-ozz-1980',
        artist: 'Ozzy Osbourne',
        title: 'Blizzard of Ozz',
        year: 1980,
        cover: blizzardOfOzz,
      },
      {
        id: 'diary-of-a-madman-1981',
        artist: 'Ozzy Osbourne',
        title: 'Diary of a Madman',
        year: 1981,
        cover: diaryOfAMadman,
      },
    ],
  },
  {
    id: 'transformacao',
    period: '1983 a 1988',
    title: 'A força dos anos 80',
    narrative:
      'De Bark at the Moon a No Rest for the Wicked, o repertório acompanha as mudanças de guitarra e produção dos anos 80. Shot in the Dark está entre as músicas dessa fase.',
    tone: 'transformation',
    albums: [
      {
        id: 'bark-at-the-moon-1983',
        artist: 'Ozzy Osbourne',
        title: 'Bark at the Moon',
        year: 1983,
        cover: barkAtTheMoon,
      },
      {
        id: 'the-ultimate-sin-1986',
        artist: 'Ozzy Osbourne',
        title: 'The Ultimate Sin',
        year: 1986,
        cover: theUltimateSin,
      },
      {
        id: 'no-rest-for-the-wicked-1988',
        artist: 'Ozzy Osbourne',
        title: 'No Rest for the Wicked',
        year: 1988,
        cover: noRestForTheWicked,
      },
    ],
  },
  {
    id: 'monumental',
    period: '1991 a 1995',
    title: 'Os clássicos dos anos 90',
    narrative:
      'No More Tears e Ozzmosis são as referências dos anos 90. Essa parte da discografia reúne as baladas e as guitarras mais pesadas que também fazem parte da proposta do tributo.',
    tone: 'monumental',
    albums: [
      {
        id: 'no-more-tears-1991',
        artist: 'Ozzy Osbourne',
        title: 'No More Tears',
        year: 1991,
        cover: noMoreTears,
      },
      {
        id: 'ozzmosis-1995',
        artist: 'Ozzy Osbourne',
        title: 'Ozzmosis',
        year: 1995,
        cover: ozzmosis,
      },
    ],
  },
  {
    id: 'legado',
    period: '2001 a 2010',
    title: 'Ozzy nos anos 2000',
    narrative:
      'Down to Earth, Black Rain e Scream completam o percurso pela discografia. Os timbres e os sons de apoio desses discos ampliam as referências para a banda.',
    tone: 'legacy',
    albums: [
      {
        id: 'down-to-earth-2001',
        artist: 'Ozzy Osbourne',
        title: 'Down to Earth',
        year: 2001,
        cover: downToEarth,
      },
      {
        id: 'black-rain-2007',
        artist: 'Ozzy Osbourne',
        title: 'Black Rain',
        year: 2007,
        cover: blackRain,
      },
      {
        id: 'scream-2010',
        artist: 'Ozzy Osbourne',
        title: 'Scream',
        year: 2010,
        cover: scream,
      },
    ],
  },
] as const

const OZZBORN_CLOSING_LINES = [
  'Seu evento merece um',
  'tributo que respeita',
  'cada fase',
] as const

export const OZZBORN_REPERTOIRE_CLOSING = {
  eyebrow: 'Ozzy na programação da sua casa',
  title: OZZBORN_CLOSING_LINES.join(' '),
  titleLines: OZZBORN_CLOSING_LINES,
  primaryAction: 'Consultar data e orçamento',
  secondaryAction: 'Ver fotos dos shows',
} as const

export const OZZBORN_REPERTOIRE_ALBUM_COUNT = OZZBORN_REPERTOIRE_ERAS.reduce(
  (total, era) => total + era.albums.length,
  0,
)
