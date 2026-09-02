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
  eyebrow: '13 discos · 5 eras · Uma trajetória',
  title: 'Repertório',
  lead: 'O Ozzborn transforma cinco décadas de Ozzy Osbourne e Black Sabbath em um show intenso, reconhecível e construído para conectar diferentes gerações.',
  signature:
    '13 discos. Cinco eras. Uma história construída para o palco.',
} as const

export const OZZBORN_REPERTOIRE_STATS = [
  { value: '13', label: 'discos', highlight: true },
  { value: '5', label: 'eras', highlight: false },
  { value: '1970–2010', label: 'arco cronológico', highlight: false },
  {
    value: 'Black Sabbath + Ozzy Osbourne',
    label: 'duas fases artísticas',
    highlight: false,
  },
] as const

export const OZZBORN_REPERTOIRE_ERAS: readonly OzzbornRepertoireEra[] = [
  {
    id: 'origem',
    period: '1970–1972',
    title: 'O nascimento do heavy metal',
    narrative:
      'Começamos pelas raízes: peso, atmosfera e riffs que o público reconhece desde o primeiro impacto. É a base mais sombria e visceral do show do Ozzborn.',
    showRole: [
      'Peso imediato e riffs reconhecíveis',
      'Uma abertura sombria e imponente',
      'Representar o nascimento do heavy metal',
      'Conectar o público à fase mais histórica e sombria da trajetória',
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
          'O surgimento da escuridão, da tensão e de uma nova linguagem musical.',
      },
      {
        id: 'paranoid-1970',
        artist: 'Black Sabbath',
        title: 'Paranoid',
        year: 1970,
        cover: paranoid,
        concept:
          'A consolidação de uma sonoridade que atravessaria gerações.',
      },
      {
        id: 'vol4-1972',
        artist: 'Black Sabbath',
        title: 'Vol. 4',
        year: 1972,
        cover: vol4,
        concept:
          'Expansão, contraste e experimentação dentro das raízes do peso.',
      },
    ],
  },
  {
    id: 'renascimento',
    period: '1980–1981',
    title: 'O renascimento de Ozzy',
    narrative:
      'A carreira solo eleva a energia do espetáculo. O Ozzborn traduz essa virada com precisão, virtuosismo e a presença de palco que transformou Ozzy em um nome absoluto do metal.',
    showRole: [
      'Virtuosismo, velocidade e refrões marcantes',
      'A virada de energia da carreira solo',
      'Mostrar o nascimento de uma nova personalidade artística',
      'Criar um salto de energia em relação à primeira era',
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
          'Renascimento, liberdade criativa e o início de uma identidade solo definitiva.',
      },
      {
        id: 'diary-of-a-madman-1981',
        artist: 'Ozzy Osbourne',
        title: 'Diary of a Madman',
        year: 1981,
        cover: diaryOfAMadman,
        concept:
          'Intensidade, complexidade e aprofundamento desse novo universo.',
      },
    ],
  },
  {
    id: 'transformacao',
    period: '1983–1988',
    title: 'A década da transformação',
    narrative:
      'Aqui o show cresce: mais teatralidade, guitarras em evidência e a energia exagerada dos anos 80. Uma fase escolhida para ampliar a força visual e musical do Ozzborn no palco.',
    showRole: [
      'Teatralidade e presença de palco',
      'A energia intensa dos anos 80',
      'Ampliar o espetáculo para além do peso das primeiras fases',
      'Mostrar diferentes transformações preservando a continuidade artística',
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
          'Transformação, teatralidade e uma nova criatura de palco.',
      },
      {
        id: 'the-ultimate-sin-1986',
        artist: 'Ozzy Osbourne',
        title: 'The Ultimate Sin',
        year: 1986,
        cover: theUltimateSin,
        concept:
          'Brilho, produção grandiosa e linguagem de arena.',
      },
      {
        id: 'no-rest-for-the-wicked-1988',
        artist: 'Ozzy Osbourne',
        title: 'No Rest for the Wicked',
        year: 1988,
        cover: noRestForTheWicked,
        concept:
          'Retomada do peso e abertura de um novo capítulo musical.',
      },
    ],
  },
  {
    id: 'monumental',
    period: '1991–1995',
    title: 'Hinos para grandes palcos',
    narrative:
      'Peso e emoção ocupam o mesmo palco. O Ozzborn usa essa era para criar grandes momentos de canto, conexão e impacto — a dimensão mais monumental da apresentação.',
    showRole: [
      'Grandes momentos de conexão com o público',
      'Força e emoção no mesmo espetáculo',
      'Ampliar a conexão com diferentes gerações',
      'Trazer a dimensão dos grandes hinos sem revelar quais são executados',
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
          'Equilíbrio entre força, emoção e dimensão monumental.',
      },
      {
        id: 'ozzmosis-1995',
        artist: 'Ozzy Osbourne',
        title: 'Ozzmosis',
        year: 1995,
        cover: ozzmosis,
        concept:
          'Maturidade, densidade e continuidade de uma identidade consolidada.',
      },
    ],
  },
  {
    id: 'legado',
    period: '2001–2010',
    title: 'O legado continua',
    narrative:
      'O show não vive apenas de nostalgia. A fase moderna mantém o peso, atualiza os timbres e prova que o legado de Ozzy continua funcionando com potência diante de qualquer público.',
    showRole: [
      'Peso moderno sem perder a identidade',
      'Um encerramento atual, forte e resistente',
      'Conectar a identidade histórica a uma produção mais moderna',
      'Encerrar a viagem cronológica reafirmando a longevidade de Ozzy',
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
          'Reflexão, permanência e entrada em um novo século.',
      },
      {
        id: 'black-rain-2007',
        artist: 'Ozzy Osbourne',
        title: 'Black Rain',
        year: 2007,
        cover: blackRain,
        concept:
          'Peso contemporâneo e uma visão de mundo mais sombria.',
      },
      {
        id: 'scream-2010',
        artist: 'Ozzy Osbourne',
        title: 'Scream',
        year: 2010,
        cover: scream,
        concept:
          'Renovação de energia e continuidade do legado.',
      },
    ],
  },
] as const

export const OZZBORN_REPERTOIRE_CLOSING = {
  eyebrow: 'O repertório certo para cada palco',
  title: 'Seu evento merece mais do que uma sequência de músicas.',
  body: 'O Ozzborn entrega um show com dinâmica, identidade e impacto. Adaptamos o formato ao seu evento sem abrir mão da experiência que conecta fãs de todas as fases de Ozzy.',
} as const

export const OZZBORN_REPERTOIRE_ALBUM_COUNT = OZZBORN_REPERTOIRE_ERAS.reduce(
  (total, era) => total + era.albums.length,
  0,
)
