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
  concept: string
}

export type OzzbornRepertoireEraTone =
  | 'origin'
  | 'rebirth'
  | 'transformation'
  | 'monumental'
  | 'legacy'

export type OzzbornRepertoireEra = {
  id: string
  period: string
  title: string
  narrative: string
  showRole: readonly string[]
  tone: OzzbornRepertoireEraTone
  albums: readonly OzzbornRepertoireAlbum[]
}

export const OZZBORN_REPERTOIRE_INTRO = {
  eyebrow: 'Repertório Ozzborn',
  titleLead: 'Cinco eras.',
  titleAccent: 'Um show.',
  lead: 'A Ozzborn percorre cinco décadas de Ozzy Osbourne e Black Sabbath em um show construído com fidelidade aos timbres, aos arranjos e à identidade de cada fase.',
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
      'A jornada começa nas raízes do Black Sabbath, com riffs marcantes, atmosferas sombrias e o peso que ajudou a definir o heavy metal. A Ozzborn preserva a identidade dessa fase para que o público reconheça sua força desde os primeiros acordes.',
    showRole: [
      'Peso imediato e riffs reconhecíveis',
      'Uma abertura sombria e imponente',
    ],
    tone: 'origin',
    albums: [
      {
        id: 'black-sabbath-1970',
        artist: 'Black Sabbath',
        title: 'Black Sabbath',
        year: 1970,
        cover: blackSabbath,
        concept:
          'O início de uma sonoridade sombria, pesada e diferente de tudo o que existia até então.',
      },
      {
        id: 'paranoid-1970',
        artist: 'Black Sabbath',
        title: 'Paranoid',
        year: 1970,
        cover: paranoid,
        concept:
          'Riffs inesquecíveis e uma identidade musical que atravessou gerações.',
      },
      {
        id: 'vol4-1972',
        artist: 'Black Sabbath',
        title: 'Vol. 4',
        year: 1972,
        cover: vol4,
        concept:
          'Mais contrastes, novas atmosferas e experimentação sem abandonar o peso das origens.',
      },
    ],
  },
  {
    id: 'renascimento',
    period: '1980 a 1981',
    title: 'O renascimento de Ozzy',
    narrative:
      'A carreira solo abre um novo capítulo, com mais velocidade, virtuosismo e uma linguagem própria. A Ozzborn leva essa transformação ao palco com atenção aos riffs, aos solos e às dinâmicas que tornaram essa fase tão marcante.',
    showRole: [
      'Virtuosismo, velocidade e refrões marcantes',
      'Uma nova fase com identidade própria',
    ],
    tone: 'rebirth',
    albums: [
      {
        id: 'blizzard-of-ozz-1980',
        artist: 'Ozzy Osbourne',
        title: 'Blizzard of Ozz',
        year: 1980,
        cover: blizzardOfOzz,
        concept:
          'O começo de uma nova identidade, com liberdade criativa, riffs marcantes e solos que se tornaram referência.',
      },
      {
        id: 'diary-of-a-madman-1981',
        artist: 'Ozzy Osbourne',
        title: 'Diary of a Madman',
        year: 1981,
        cover: diaryOfAMadman,
        concept:
          'Mais intensidade, complexidade e profundidade em um dos momentos mais importantes da carreira solo.',
      },
    ],
  },
  {
    id: 'transformacao',
    period: '1983 a 1988',
    title: 'A força dos anos 80',
    narrative:
      'Guitarras em evidência, refrões fortes e produções cada vez maiores transformam novamente a sonoridade de Ozzy. A Ozzborn recria os timbres, as camadas e a energia dessa fase sem perder os detalhes que tornam cada música reconhecível.',
    showRole: [
      'Guitarras em evidência e energia crescente',
      'Timbres e arranjos que definiram uma década',
    ],
    tone: 'transformation',
    albums: [
      {
        id: 'bark-at-the-moon-1983',
        artist: 'Ozzy Osbourne',
        title: 'Bark at the Moon',
        year: 1983,
        cover: barkAtTheMoon,
        concept:
          'Uma nova transformação sonora, marcada por guitarras afiadas, energia e identidade própria.',
      },
      {
        id: 'the-ultimate-sin-1986',
        artist: 'Ozzy Osbourne',
        title: 'The Ultimate Sin',
        year: 1986,
        cover: theUltimateSin,
        concept:
          'Produção grandiosa, refrões fortes e uma sonoridade feita para grandes palcos.',
      },
      {
        id: 'no-rest-for-the-wicked-1988',
        artist: 'Ozzy Osbourne',
        title: 'No Rest for the Wicked',
        year: 1988,
        cover: noRestForTheWicked,
        concept:
          'A retomada do peso e o início de outro capítulo importante da carreira.',
      },
    ],
  },
  {
    id: 'monumental',
    period: '1991 a 1995',
    title: 'Peso, emoção e grandes hinos',
    narrative:
      'Nesta fase, peso e emoção dividem o mesmo espaço. A Ozzborn explora essas mudanças de intensidade para criar momentos de impacto, aproximação e canto, sempre preservando a personalidade de cada arranjo.',
    showRole: [
      'Força e emoção na mesma apresentação',
      'Grandes momentos de conexão com o público',
    ],
    tone: 'monumental',
    albums: [
      {
        id: 'no-more-tears-1991',
        artist: 'Ozzy Osbourne',
        title: 'No More Tears',
        year: 1991,
        cover: noMoreTears,
        concept:
          'Peso, emoção e grandes melodias reunidos em uma das fases mais reconhecidas da carreira.',
      },
      {
        id: 'ozzmosis-1995',
        artist: 'Ozzy Osbourne',
        title: 'Ozzmosis',
        year: 1995,
        cover: ozzmosis,
        concept:
          'Uma sonoridade mais madura e densa, sem perder a identidade construída ao longo dos anos.',
      },
    ],
  },
  {
    id: 'legado',
    period: '2001 a 2010',
    title: 'Um legado que continua vivo',
    narrative:
      'A fase moderna mostra que a obra de Ozzy não ficou presa ao passado. Timbres mais atuais e novas produções mantêm o peso e renovam a energia de uma trajetória que continua relevante para diferentes gerações.',
    showRole: [
      'Peso moderno sem perder a identidade',
      'Um encerramento forte para a jornada',
    ],
    tone: 'legacy',
    albums: [
      {
        id: 'down-to-earth-2001',
        artist: 'Ozzy Osbourne',
        title: 'Down to Earth',
        year: 2001,
        cover: downToEarth,
        concept:
          'A entrada em um novo século com peso, reflexão e a identidade de Ozzy ainda bem presente.',
      },
      {
        id: 'black-rain-2007',
        artist: 'Ozzy Osbourne',
        title: 'Black Rain',
        year: 2007,
        cover: blackRain,
        concept:
          'Peso contemporâneo, atmosfera sombria e uma produção conectada ao seu tempo.',
      },
      {
        id: 'scream-2010',
        artist: 'Ozzy Osbourne',
        title: 'Scream',
        year: 2010,
        cover: scream,
        concept:
          'Energia renovada e a continuidade de um legado construído ao longo de décadas.',
      },
    ],
  },
] as const

export const OZZBORN_REPERTOIRE_CLOSING = {
  eyebrow: 'Uma história feita para o palco',
  title: 'Seu evento merece um tributo que respeita cada fase.',
  body: 'A Ozzborn transforma décadas de história em um show com peso, dinâmica e fidelidade musical. Uma experiência feita para fãs que conhecem cada detalhe e para quem quer sentir de perto a força da obra de Ozzy Osbourne.',
  primaryAction: 'Consultar disponibilidade',
  secondaryAction: 'Ver a banda em ação',
} as const

export const OZZBORN_REPERTOIRE_ALBUM_COUNT = OZZBORN_REPERTOIRE_ERAS.reduce(
  (total, era) => total + era.albums.length,
  0,
)
