import bandPortrait from '../../../../../assets/ozzborn/membersImages/membersNull.webp'

export const OZZBORN_SUMMARY_CONTENT = {
  heroPhoto: {
    src: bandPortrait,
    alt: 'Toddynho, Marcelo, Adriano e Victor, integrantes da Ozzborn',
    focalPoint: '50% 54%',
    scale: 1.2,
    mode: 'cutout' as const,
  },
  story: {
    title: 'A história de Ozzy. Viva no palco.',
    copy: 'A Ozzborn percorre a obra de Ozzy Osbourne em uma apresentação que cresce a cada música. Dos timbres de guitarra e baixo aos efeitos e sons de fundo, cada detalhe é trabalhado para recriar a força e a atmosfera das gravações originais. Um cuidado que ganha vida no palco e aproxima o público da experiência de um show de Ozzy.',
  },
  live: {
    title: 'A Ozzborn no seu palco.',
    copy: 'Voz, timbres e arranjos trabalham juntos para trazer a experiência de um show de Ozzy ao palco. Conheça a Ozzborn em apresentação e ouça os detalhes dessa interpretação.',
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
