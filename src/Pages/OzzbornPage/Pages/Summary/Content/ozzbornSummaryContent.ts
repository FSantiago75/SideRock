import bandPortrait from '../../../../../assets/ozzborn/membersImages/membersNull.webp'

export const OZZBORN_SUMMARY_CONTENT = {
  heroPhoto: {
    src: bandPortrait,
    alt: 'Todynho, Marcelo, Adriano e Victor, integrantes da Ozzborn',
    focalPoint: '50% 54%',
    scale: 1.2,
    mode: 'cutout' as const,
  },
  story: {
    title: 'Do Sabbath à carreira solo',
    copy: 'A Ozzborn reúne músicas do Black Sabbath e da carreira solo de Ozzy Osbourne. O trabalho do tributo está nos detalhes: a maneira de cantar, os timbres dos instrumentos e os arranjos. Bases sincronizadas acrescentam efeitos e sons de apoio presentes nas gravações.',
  },
  live: {
    title: 'A Ozzborn no seu palco',
    copy: 'Assista aos trechos dos shows e ouça como a banda interpreta o repertório de Ozzy. São registros para conhecer o som e a apresentação da Ozzborn.',
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
