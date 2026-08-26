import bandPortrait from '../../../../assets/MembersImages/MembersNull.png'

export const SIDE_ROCK_SUMMARY_CONTENT = {
  heroPhoto: {
    src: bandPortrait,
    alt: 'Toddynho, Marcelo, Adriano e Victor, integrantes da Side Rock',
    focalPoint: '50% 54%',
    scale: 1.2,
    mode: 'cutout' as const,
  },
  story: {
    index: 'Sobre a Side Rock',
    title: 'Uma identidade no palco.',
    paragraphs: [
      'A Side Rock reúne Marcelo, Victor, Adriano e Toddynho em um show de covers que atravessa décadas do rock internacional — do classic rock ao hard rock e ao heavy metal.',
      'O repertório privilegia músicas reconhecidas e uma execução consistente, com identidade visual própria, para o público reconhecer o que ouve e a casa sentir a presença de uma banda no palco.',
    ],
    promise: {
      eyebrow: 'No palco',
      copy: 'Presença, repertório reconhecível e uma leitura profissional do show.',
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
