export type GalleryPhoto = {
  id: string
  src: string
  albumId: string
  albumLabel: string
  fileName: string
  label: string
  alt: string
}

export type GalleryAlbum = {
  id: string
  label: string
  photos: GalleryPhoto[]
}

export const GALLERY_COPY = {
  eyebrow: 'A Side Rock em cena',
  title: 'Galeria',
  lead: 'O palco, a presença e a energia de uma banda feita para tocar ao vivo.',
  emptyTitle: 'Galeria em preparação',
  emptyBody: 'Os próximos registros da Side Rock serão publicados aqui.',
} as const

const IMAGE_EXTENSIONS = /\.(?:avif|gif|jpeg|jpg|png|webp)$/i
const GALLERY_MARKER = '/assets/sideRock/gallery/'
const LEADING_DATE =
  /^(?:\d{4}-\d{2}-\d{2}|\d{8}|\d{4}-\d{2}|\d{4})[-_]?/i
const LEADING_INDEX = /^\d+\s*[-_.]\s*/
const ALBUM_LABEL_OVERRIDES: Record<string, string> = {
  publico: 'Público',
  estudio: 'Estúdio',
}

const GALLERY_FOLDERS = ['Publico', 'Shows', 'Formação']

const PHOTO_LABEL_OVERRIDES: Record<string, string> = {
  'Marcelo e Leandro Dalle': 'Marcelo e Dalle',
  'Dinossauro\'s publico': 'Público no Dinossauro’s',
  'Dinossauro\'s  visão da plateia': 'Dinossauro’s — visão da plateia',
  'Victor solando na jump': 'Victor solando na Jump',
  'Vocal e Guitarra Jump': 'Vocal e guitarra na Jump',
}

const imageModules = import.meta.glob<string>(
  '../../../../assets/sideRock/gallery/**/*.{avif,gif,jpeg,jpg,png,webp}',
  {
    eager: true,
    import: 'default',
  },
)

function toGalleryRelativePath(modulePath: string): string | null {
  const normalized = modulePath.replaceAll('\\', '/')
  const markerIndex = normalized.lastIndexOf(GALLERY_MARKER)
  if (markerIndex === -1) return null

  const relative = normalized.slice(markerIndex + GALLERY_MARKER.length)
  return relative && IMAGE_EXTENSIONS.test(relative) ? relative : null
}

function stripDecorators(value: string): string {
  let current = value
  let previous = ''

  while (current !== previous) {
    previous = current
    current = current.replace(LEADING_DATE, '').replace(LEADING_INDEX, '')
  }

  return current
}

function toAlbumTitle(slug: string): string {
  const words = slug
    .split(/[-_]+/)
    .map((part) => part.trim())
    .filter(Boolean)

  if (words.length === 0) return slug

  const formatted = words.map((word) => {
    const lower = word.toLocaleLowerCase('pt-BR')
    return lower.charAt(0).toLocaleUpperCase('pt-BR') + lower.slice(1)
  })

  return formatted.join(' ')
}

function toAlbumLabel(folderName: string): string {
  const slug = stripDecorators(folderName).toLocaleLowerCase('pt-BR')
  return ALBUM_LABEL_OVERRIDES[slug] ?? toAlbumTitle(slug)
}

function toPhotoLabel(fileName: string): string {
  const stem = fileName.replace(IMAGE_EXTENSIONS, '')
  const slug = stripDecorators(stem)
  return PHOTO_LABEL_OVERRIDES[slug] ?? slug.replaceAll('_', ' ')
}

function compareLocale(left: string, right: string): number {
  return left.localeCompare(right, 'pt-BR', {
    numeric: true,
    sensitivity: 'base',
  })
}

function buildCatalog(modules: Record<string, string>): {
  albums: readonly GalleryAlbum[]
  photos: readonly GalleryPhoto[]
} {
  const photosByAlbum = new Map<string, GalleryPhoto[]>(
    GALLERY_FOLDERS.map((id) => [id, []]),
  )
  const albumLabels = new Map<string, string>()

  for (const [modulePath, src] of Object.entries(modules)) {
    if (!src) continue

    const relativePath = toGalleryRelativePath(modulePath)
    if (!relativePath) continue

    const segments = relativePath.split('/').filter(Boolean)
    if (segments.length < 2) continue

    const fileName = segments.at(-1)
    const albumId = segments[0]
    if (!fileName || !albumId) continue

    const albumLabel = toAlbumLabel(albumId)
    const label = toPhotoLabel(fileName)
    const photo: GalleryPhoto = {
      id: relativePath,
      src,
      albumId,
      albumLabel,
      fileName,
      label,
      alt: `Side Rock — ${albumLabel} — ${label}`,
    }

    albumLabels.set(albumId, albumLabel)
    const albumPhotos = photosByAlbum.get(albumId)
    if (albumPhotos) {
      albumPhotos.push(photo)
    } else {
      photosByAlbum.set(albumId, [photo])
    }
  }

  const albums = [...photosByAlbum.entries()]
    .sort(([left], [right]) => {
      const leftOrder = GALLERY_FOLDERS.indexOf(left)
      const rightOrder = GALLERY_FOLDERS.indexOf(right)
      if (leftOrder === -1 && rightOrder === -1) return compareLocale(left, right)
      if (leftOrder === -1) return 1
      if (rightOrder === -1) return -1
      return leftOrder - rightOrder
    })
    .map(([albumId, albumPhotos]) => ({
      id: albumId,
      label: albumLabels.get(albumId) ?? toAlbumLabel(albumId),
      photos: [...albumPhotos].sort((left, right) =>
        compareLocale(left.fileName, right.fileName),
      ),
    }))

  return {
    albums,
    photos: albums.flatMap((album) => album.photos),
  }
}

const catalog = buildCatalog(imageModules)

export const GALLERY_ALBUMS: readonly GalleryAlbum[] = catalog.albums
export const GALLERY_PHOTOS: readonly GalleryPhoto[] = catalog.photos

export function formatRecordCount(count: number): string {
  return count === 1 ? '1 registro' : `${count} registros`
}

export function getPhotoById(
  photoId: string,
  photos: readonly GalleryPhoto[] = GALLERY_PHOTOS,
): GalleryPhoto | undefined {
  return photos.find((photo) => photo.id === photoId)
}

export function getAdjacentPhotoId(
  photos: readonly GalleryPhoto[],
  photoId: string,
  direction: -1 | 1,
): string | null {
  if (photos.length === 0) return null

  const currentIndex = photos.findIndex((photo) => photo.id === photoId)
  if (currentIndex < 0) return photos[0]?.id ?? null

  const nextIndex = (currentIndex + direction + photos.length) % photos.length
  return photos[nextIndex]?.id ?? null
}
