import { FaFacebook, FaInstagram, FaSpotify, FaYoutube } from 'react-icons/fa'

export const SIDE_ROCK_SOCIAL_LINKS = [
  {
    href: 'https://facebook.com/sua-pagina',
    label: 'Facebook',
    Icon: FaFacebook,
  },
  {
    href: 'https://instagram.com/bandasiderock',
    label: 'Instagram',
    Icon: FaInstagram,
  },
  {
    href: 'https://youtube.com/seu-canal',
    label: 'YouTube',
    Icon: FaYoutube,
  },
  {
    href: 'https://open.spotify.com/artist/sua-conta',
    label: 'Spotify',
    Icon: FaSpotify,
  },
] as const
