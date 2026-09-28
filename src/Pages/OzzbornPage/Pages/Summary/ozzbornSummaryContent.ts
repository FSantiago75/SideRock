import bandPortrait from '../../../../assets/ozzborn/membersImages/membersNull.webp'

export const OZZBORN_SUMMARY_CONTENT = {
  heroPhoto: {
    src: bandPortrait,
    alt: 'Toddynho, Marcelo, Adriano e Victor, integrantes do Ozzborn',
    focalPoint: '50% 54%',
    scale: 1.2,
    mode: 'cutout' as const,
  },
  story: {
    index: 'Sobre a Ozzborn',
    title: 'Respeito em cada detalhe.',
    paragraphs: [
      'A Ozzborn reúne Marcelo, Victor, Adriano e Toddynho em um tributo dedicado à obra de Ozzy Osbourne, da carreira solo aos anos que ajudaram a transformar o Black Sabbath em uma referência do heavy metal.',
      'Timbres, arranjos, solos e mudanças de dinâmica são estudados para preservar a identidade de cada música. O uso de VS completa camadas importantes das gravações e ajuda a levar ao palco uma experiência mais próxima do som que o público conhece.',
    ],
    promise: {
      eyebrow: 'No palco',
      copy: 'Peso, precisão e uma experiência musical construída para honrar a obra de Ozzy Osbourne.',
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
