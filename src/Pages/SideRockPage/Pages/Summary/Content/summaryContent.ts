import bandPortrait from '../../../../../assets/sideRock/membersImages/membersNull.png'

export const SIDE_ROCK_SUMMARY_CONTENT = {
  heroPhoto: {
    src: bandPortrait,
    alt: 'Toddynho, Marcelo, Adriano e Victor, integrantes da Side Rock',
    focalPoint: '50% 54%',
    scale: 1.2,
    mode: 'cutout' as const,
  },
  story: {
    title: 'Clássicos do rock. Identidade em cada interpretação.',
    copy: 'Guns N’ Roses é o carro-chefe da Side Rock, com o timbre de Marcelo remetendo à voz de Axl Rose. Com Victor na guitarra, Adriano no baixo e Toddynho na bateria, o show vai da atmosfera de Pearl Jam ao peso de Metallica e Megadeth. São músicas que os quatro gostam de tocar e que os desafiam a cuidar de cada detalhe, dos solos mais exigentes às passagens mais delicadas.',
  },
  live: {
    title: 'A Side Rock no seu palco.',
    copy: 'Vocal marcante, solos que impressionam, baixo de presença e bateria que combina ousadia e precisão. Ouça a Side Rock ao vivo, com o peso e a energia que elevam o palco.',
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
