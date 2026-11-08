import gnr from '../../../../../assets/sideRock/bandsLogos/gnr.png'
import pearlJam from '../../../../../assets/sideRock/bandsLogos/pearlJam.png'
import metallica from '../../../../../assets/sideRock/bandsLogos/metallica.png'

export const REPERTOIRE_ATMOSPHERES = [
  {
    id: 'classicos',
    label: 'Clássicos',
    title: 'Clássicos & hard rock',
    accent: 'Melodia e atitude',
    copy: 'Do classic rock ao hard rock: melodias marcantes, vocais em destaque e refrões para cantar junto.',
    logo: gnr,
    artist: 'Guns N’ Roses',
  },
  {
    id: 'alternativo',
    label: 'Alternativo',
    title: 'Grunge & alternativo',
    accent: 'Contrastes e intensidade',
    copy: 'Guitarras encorpadas e vozes cheias de personalidade. O alternativo traz contrastes entre passagens contidas e momentos de intensidade.',
    logo: pearlJam,
    artist: 'Pearl Jam',
  },
  {
    id: 'metal',
    label: 'Metal',
    title: 'Heavy metal',
    accent: 'Riffs, solos e peso',
    copy: 'Riffs pesados, solos e bateria em evidência. A vertente metal coloca o cuidado com a execução no centro do show.',
    logo: metallica,
    artist: 'Metallica',
  },
] as const
