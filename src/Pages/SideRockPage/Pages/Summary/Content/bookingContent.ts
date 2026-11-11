import { SIDE_ROCK_QUICK_WHATSAPP_URL } from '../../../bookingContact'
import promotionalVideo from '../../../../../assets/sideRock/media/booking/promotionalVideo.web.mp4'
import anniversaryVideo from '../../../../../assets/sideRock/media/booking/Participação Lenadro Dalle.mp4'
import isThisLoveVideo from "../../../../../assets/sideRock/media/booking/Is This Love - Dinossauro's.mp4"
import manInTheBoxVideo from '../../../../../assets/sideRock/media/booking/Man in The Box - Jump.mp4'
import sweetChildVideo from "../../../../../assets/sideRock/media/booking/Sweet Child'O Mine na Harley-Davidson.mp4"
import welcomeToTheJungleVideo from '../../../../../assets/sideRock/media/booking/Welcome to The Jungle na Harley-Davidson.mp4'

export const SIDE_ROCK_BOOKING = {
  manager: 'Vanessa',
  location: 'Jundiaí / SP',
  whatsappUrl: SIDE_ROCK_QUICK_WHATSAPP_URL,
  instagramUrl: 'https://www.instagram.com/bandasiderock',
  videos: [
    {
      src: promotionalVideo,
      title: 'Vídeo promocional',
      href: 'https://www.instagram.com/reel/DHl9VzfxAWq/',
    },
    { src: welcomeToTheJungleVideo, title: 'Welcome to the Jungle' },
    { src: sweetChildVideo, title: 'Sweet Child O’ Mine' },
    { src: anniversaryVideo, title: 'Aniversário' },
    { src: manInTheBoxVideo, title: 'Man in the Box' },
    { src: isThisLoveVideo, title: 'Is This Love' },
  ],
} as const
