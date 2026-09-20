import bandPortrait from '../../../../assets/sideRock/membersImages/membersNull.png'

export const SIDE_ROCK_SUMMARY_CONTENT = {
  heroPhoto: {
    src: bandPortrait,
    alt: 'Toddynho, Marcelo, Adriano e Victor, integrantes da Side Rock',
    focalPoint: '50% 54%',
    scale: 1.2,
    mode: 'cutout' as const,
  },
  story: {
    index: 'A experiência Side Rock',
    title: 'Versatilidade para conquistar o público.',
    paragraphs: [
      'A Side Rock atravessa diferentes décadas do rock internacional com um repertório pensado para aproximar públicos, despertar memórias e manter a energia do começo ao fim.',
      'Marcelo, Victor, Adriano e Toddynho unem interpretação, peso e precisão para respeitar a identidade de cada música sem perder a personalidade da banda no palco.',
    ],
    promise: {
      eyebrow: 'A experiência',
      copy: 'Para quem conhece cada detalhe. Para quem só quer sentir a energia.',
    },
  },
  repertoire: [
    'Ozzy Osbourne',
    'Metallica',
    'Megadeth',
    "Guns N' Roses",
    'Bon Jovi',
    'Pearl Jam',
    'Alice in Chains',
    'Audioslave',
    'Whitesnake',
    'Deep Purple',
    'Stone Temple Pilots',
    'Simple Minds',
    'HIM',
  ],
} as const
