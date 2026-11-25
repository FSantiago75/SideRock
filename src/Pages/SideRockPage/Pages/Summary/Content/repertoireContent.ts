import gnr from '../../../../../assets/sideRock/bandsLogos/gnr.png'
import pearlJam from '../../../../../assets/sideRock/bandsLogos/pearlJam.png'
import metallica from '../../../../../assets/sideRock/bandsLogos/metallica.png'

export const REPERTOIRE_ATMOSPHERES = [
  {
    id: 'classicos',
    label: 'Clássicos',
    title: 'Clássicos & hard rock',
    accent: 'Melodia e atitude',
    copy: 'Guns N’ Roses, Bon Jovi e Whitesnake estão entre as referências do show, das baladas aos refrões para cantar junto.',
    logo: gnr,
    artist: 'Guns N’ Roses',
  },
  {
    id: 'alternativo',
    label: 'Alternativo',
    title: 'Grunge & alternativo',
    accent: 'Contrastes e intensidade',
    copy: 'Pearl Jam, Alice in Chains e Audioslave trazem outro lado do repertório, com músicas como Black, Man in the Box e Like a Stone.',
    logo: pearlJam,
    artist: 'Pearl Jam',
  },
  {
    id: 'metal',
    label: 'Metal',
    title: 'Heavy metal',
    accent: 'Riffs, solos e peso',
    copy: 'Metallica, Megadeth e Ozzy Osbourne entram na seleção para quem gosta do lado mais pesado do rock.',
    logo: metallica,
    artist: 'Metallica',
  },
] as const
