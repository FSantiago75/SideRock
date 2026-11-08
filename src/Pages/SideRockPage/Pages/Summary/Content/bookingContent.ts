import { SIDE_ROCK_QUICK_WHATSAPP_URL } from '../../../bookingContact'
import promotionalVideo from '../../../../../assets/sideRock/media/booking/promotionalVideo.web.mp4'
import promotionalVideoPoster from '../../../../../assets/sideRock/media/booking/promotionalVideo.webp'
import promotionalVideo2 from '../../../../../assets/sideRock/media/booking/promotionalVideo2.web.mp4'
import promotionalVideo2Poster from '../../../../../assets/sideRock/media/booking/promotionalVideo2.webp'

export const SIDE_ROCK_BOOKING = {
  manager: 'Vanessa',
  location: 'Jundiaí / SP',
  whatsappUrl: SIDE_ROCK_QUICK_WHATSAPP_URL,
  instagramUrl: 'https://www.instagram.com/bandasiderock',
  videos: [
    {
      src: promotionalVideo,
      poster: promotionalVideoPoster,
      title: 'Pearl Jam — Even Flow',
      href: 'https://www.instagram.com/reel/DHl9VzfxAWq/',
    },
    {
      src: promotionalVideo2,
      poster: promotionalVideo2Poster,
      title: "Don't Cry — Guns N' Roses",
      href: 'https://www.instagram.com/bandasiderock/reel/DKvypJ1tOzX/',
    },
  ],
} as const
