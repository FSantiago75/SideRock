import { SIDE_ROCK_QUICK_WHATSAPP_URL } from '../../../bookingContact'
import promotionalVideo from '../../../../../assets/sideRock/media/booking/promotionalVideo.web.mp4'
import anniversaryVideo from '../../../../../assets/sideRock/media/booking/Participação Lenadro Dalle.mp4'
import isThisLoveVideo from "../../../../../assets/sideRock/media/booking/Is This Love - Dinossauro's.mp4"
import manInTheBoxVideo from '../../../../../assets/sideRock/media/booking/Man in The Box - Jump.mp4'
import sweetChildVideo from "../../../../../assets/sideRock/media/booking/Sweet Child'O Mine na Harley-Davidson.mp4"
import welcomeToTheJungleVideo from '../../../../../assets/sideRock/media/booking/Welcome to The Jungle na Harley-Davidson.mp4'
import promotionalPoster from '../../../../../assets/sideRock/media/booking/promotionalVideo-first-frame.webp'
import anniversaryPoster from '../../../../../assets/sideRock/media/booking/Participação Lenadro Dalle.webp'
import isThisLovePoster from "../../../../../assets/sideRock/media/booking/Is This Love - Dinossauro's.webp"
import manInTheBoxPoster from '../../../../../assets/sideRock/media/booking/Man in The Box - Jump.webp'
import sweetChildPoster from "../../../../../assets/sideRock/media/booking/Sweet Child'O Mine na Harley-Davidson.webp"
import welcomeToTheJunglePoster from '../../../../../assets/sideRock/media/booking/Welcome to The Jungle na Harley-Davidson.webp'

export const SIDE_ROCK_BOOKING = {
  manager: 'Vanessa',
  location: 'Jundiaí / SP',
  whatsappUrl: SIDE_ROCK_QUICK_WHATSAPP_URL,
  instagramUrl: 'https://www.instagram.com/bandasiderock',
  videos: [
    {
      src: promotionalVideo,
      poster: promotionalPoster,
      title: 'Vídeo promocional',
      href: 'https://www.instagram.com/reel/DHl9VzfxAWq/',
    },
    { src: welcomeToTheJungleVideo, poster: welcomeToTheJunglePoster, title: 'Welcome to the Jungle' },
    { src: sweetChildVideo, poster: sweetChildPoster, title: 'Sweet Child O’ Mine' },
    { src: anniversaryVideo, poster: anniversaryPoster, title: 'Aniversário' },
    { src: manInTheBoxVideo, poster: manInTheBoxPoster, title: 'Man in the Box' },
    { src: isThisLoveVideo, poster: isThisLovePoster, title: 'Is This Love' },
  ],
} as const
