import bandPortrait from '../../../../assets/sideRock/membersImages/membersNull.webp'

export const OZZBORN_SUMMARY_CONTENT = {
  heroPhoto: {
    src: bandPortrait,
    alt: 'Toddynho, Marcelo, Adriano e Victor, integrantes do Ozzborn',
    focalPoint: '50% 54%',
    scale: 1.2,
    mode: 'cutout' as const,
  },
  story: {
    index: 'Sobre o Ozzborn',
    title: 'Respeito em cada detalhe.',
    paragraphs: [
      'O Ozzborn reúne Marcelo, Victor, Adriano e Toddynho em um tributo construído para respeitar a obra de Ozzy Osbourne — da carreira solo aos anos de Black Sabbath.',
      'Timbres, arranjos, solos, percussões e bases programadas são tratados como parte essencial da experiência. No palco, cada músico segue a mesma direção para que peso, atmosfera e emoção cheguem ao público com consistência.',
    ],
    promise: {
      eyebrow: 'No palco',
      copy: 'Peso, precisão e uma experiência musical construída para honrar Ozzy.',
    },
  },
  repertoire: [
    'Black Sabbath',
    'Bark at the Moon',
    'No More Tears',
    'Shot in the Dark',
    'Miracle Man',
    'Changes',
    "Mama, I'm Coming Home",
  ],
} as const
