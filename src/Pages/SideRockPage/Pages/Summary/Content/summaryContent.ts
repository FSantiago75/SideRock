import bandPortrait from '../../../../../assets/sideRock/membersImages/membersNull.png'

export const SIDE_ROCK_SUMMARY_CONTENT = {
  heroPhoto: {
    src: bandPortrait,
    alt: 'Todynho, Marcelo, Adriano e Victor, integrantes da Side Rock',
    focalPoint: '50% 54%',
    scale: 1.2,
    mode: 'cutout' as const,
  },
  story: {
    title: 'Identidade em cada apresentação',
    copy: 'Guns N’ Roses é o carro-chefe da Side Rock, com a qualidade vocal de Marcelo, amplamente elogiada por diversos vocalistas, e uma formação que reúne décadas de experiência. O show passa pelas baladas de Bon Jovi, do grunge de Pearl Jam ao metal de Metallica e Megadeth. Dos refrões para cantar junto aos riffs mais pesados.',
  },
  live: {
    title: 'A Side Rock no seu palco',
    copy: 'Confira a Side Rock na Jump, na Harley-Davidson Itupeva e no Dinossauro’s. Os vídeos mostram a banda tocando e ajudam a conhecer o show antes de contratar.',
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
