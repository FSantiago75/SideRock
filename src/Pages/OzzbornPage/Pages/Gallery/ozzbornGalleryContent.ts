export type OzzbornGalleryPhoto = {
  id: string
  src: string
  albumId: string
  albumLabel: string
  fileName: string
  label: string
  alt: string
}

export type OzzbornGalleryAlbum = {
  id: string
  label: string
  photos: OzzbornGalleryPhoto[]
}

export const OZZBORN_GALLERY_COPY = {
  eyebrow: 'Registros do Ozzborn',
  title: 'Galeria',
  lead: 'Momentos de palco, bastidores e apresentações do tributo.',
  emptyTitle: 'Galeria em preparação',
  emptyBody: 'Os próximos registros do Ozzborn serão publicados aqui.',
} as const

const IMAGE_EXTENSIONS = /\.(?:avif|gif|jpeg|jpg|png|webp)$/i
const GALLERY_MARKER = '/assets/ozzborn/gallery/'
const LEADING_DATE =
  /^(?:\d{4}-\d{2}-\d{2}|\d{8}|\d{4}-\d{2}|\d{4})[-_]?/i
const LEADING_INDEX = /^\d+\s*[-_.]\s*/
const ALBUM_LABEL_OVERRIDES: Record<string, string> = {
  estudio: 'Estúdio',
}

const imageModules = import.meta.glob<string>(
  '../../../../assets/ozzborn/gallery/**/*.{avif,gif,jpeg,jpg,png,webp}',
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

function toReadableLabel(slug: string, mode: 'title' | 'sentence'): string {
  const words = slug
    .split(/[-_]+/)
    .map((part) => part.trim())
    .filter(Boolean)

  if (words.length === 0) return slug

  const formatted = words.map((word, index) => {
    const lower = word.toLocaleLowerCase('pt-BR')
    if (mode === 'title' || index === 0) {
      return lower.charAt(0).toLocaleUpperCase('pt-BR') + lower.slice(1)
    }
    return lower
  })

  return formatted.join(' ')
}

function toAlbumLabel(folderName: string): string {
  const slug = stripDecorators(folderName).toLocaleLowerCase('pt-BR')
  return ALBUM_LABEL_OVERRIDES[slug] ?? toReadableLabel(slug, 'title')
}

function toPhotoLabel(fileName: string): string {
  const stem = fileName.replace(IMAGE_EXTENSIONS, '')
  const slug = stripDecorators(stem)
  return toReadableLabel(slug, 'sentence')
}

function compareLocale(left: string, right: string): number {
  return left.localeCompare(right, 'pt-BR', {
    numeric: true,
    sensitivity: 'base',
  })
}

function buildCatalog(modules: Record<string, string>): {
  albums: readonly OzzbornGalleryAlbum[]
  photos: readonly OzzbornGalleryPhoto[]
} {
  const photosByAlbum = new Map<string, OzzbornGalleryPhoto[]>()
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
    const photo: OzzbornGalleryPhoto = {
      id: relativePath,
      src,
      albumId,
      albumLabel,
      fileName,
      label,
      alt: `Ozzborn — ${albumLabel} — ${label}`,
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
    .sort(([left], [right]) => compareLocale(left, right))
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

export const OZZBORN_GALLERY_ALBUMS: readonly OzzbornGalleryAlbum[] =
  catalog.albums
export const OZZBORN_GALLERY_PHOTOS: readonly OzzbornGalleryPhoto[] =
  catalog.photos

export function formatOzzbornRecordCount(count: number): string {
  return count === 1 ? '1 registro' : `${count} registros`
}

export function getOzzbornPhotoById(
  photoId: string,
  photos: readonly OzzbornGalleryPhoto[] = OZZBORN_GALLERY_PHOTOS,
): OzzbornGalleryPhoto | undefined {
  return photos.find((photo) => photo.id === photoId)
}

export function getOzzbornAdjacentPhotoId(
  photos: readonly OzzbornGalleryPhoto[],
  photoId: string,
  direction: -1 | 1,
): string | null {
  if (photos.length === 0) return null

  const currentIndex = photos.findIndex((photo) => photo.id === photoId)
  if (currentIndex < 0) return photos[0]?.id ?? null

  const nextIndex = (currentIndex + direction + photos.length) % photos.length
  return photos[nextIndex]?.id ?? null
}
