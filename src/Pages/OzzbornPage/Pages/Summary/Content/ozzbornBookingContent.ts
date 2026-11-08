import promotionalVideo from '../../../../../assets/sideRock/media/booking/promotionalVideo.web.mp4'
import promotionalVideoPoster from '../../../../../assets/sideRock/media/booking/promotionalVideo.webp'
import promotionalVideo2 from '../../../../../assets/sideRock/media/booking/promotionalVideo2.web.mp4'
import promotionalVideo2Poster from '../../../../../assets/sideRock/media/booking/promotionalVideo2.webp'

import { OZZBORN_QUICK_WHATSAPP_URL } from '../../../bookingContact'

export const OZZBORN_BOOKING = {
  manager: 'Vanessa',
  location: 'Jundiaí / SP',
  whatsappUrl: OZZBORN_QUICK_WHATSAPP_URL,
  instagramUrl: 'https://www.instagram.com/ozzborntributo',
  videos: [
    {
      src: promotionalVideo,
      poster: promotionalVideoPoster,
      title: 'Ozzborn ao vivo',
      href: 'https://www.instagram.com/ozzborntributo',
    },
    {
      src: promotionalVideo2,
      poster: promotionalVideo2Poster,
      title: 'A experiência Ozzborn no palco',
      href: 'https://www.instagram.com/ozzborntributo',
    },
  ],
} as const
