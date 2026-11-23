import { OZZBORN_QUICK_WHATSAPP_URL } from '../../../bookingContact'

type VideoCredit = {
  title: string
  context?: string | null
  href?: string
  order?: number
}

const videoFiles = import.meta.glob<string>(
  '../../../../../assets/ozzborn/media/booking/*.mp4',
  { eager: true, import: 'default' },
)
const posters = import.meta.glob<string>(
  '../../../../../assets/ozzborn/media/booking/*.{webp,jpg,png}',
  { eager: true, import: 'default' },
)
const credits = import.meta.glob<VideoCredit>(
  '../../../../../assets/ozzborn/media/booking/*.json',
  { eager: true, import: 'default' },
)

const videos = Object.keys(videoFiles).sort((left, right) => {
  const a = credits[left.replace(/\.mp4$/, '.json')]
  const b = credits[right.replace(/\.mp4$/, '.json')]
  return ((a?.order ?? Infinity) - (b?.order ?? Infinity)) || left.localeCompare(right, 'pt-BR', { numeric: true })
}).map((path) => {
  const stem = path.replace(/\.mp4$/, '')
  const credit = credits[stem + '.json']
  return {
    src: videoFiles[path],
    poster: posters[stem + '.webp'] ?? posters[stem + '.jpg'] ?? posters[stem + '.png'],
    title: credit?.title ?? stem.slice(stem.lastIndexOf('/') + 1),
    context: credit?.context ?? null,
    href: credit?.href,
  }
})

export const OZZBORN_BOOKING = {
  manager: 'Vanessa',
  location: 'Jundiaí / SP',
  whatsappUrl: OZZBORN_QUICK_WHATSAPP_URL,
  instagramUrl: 'https://www.instagram.com/ozzborntributo',
  videos,
} as const
