import type { GalleryPhoto } from './galleryContent'
import { GalleryPhotoCard } from './GalleryPhotoCard'
import styles from './GalleryAlbumSection.module.css'

type GalleryAlbumSectionProps = {
  photos: readonly GalleryPhoto[]
  onOpen: (photoId: string) => void
}

const MAX_STAGGER_INDEX = 7
const INITIAL_STAGGER_DELAY_MS = 140
const STAGGER_STEP_MS = 55

export function GalleryAlbumSection({ photos, onOpen }: GalleryAlbumSectionProps) {
  const groups = new Map<GalleryPhoto['guest'], GalleryPhoto[]>()
  for (const photo of photos) {
    const group = groups.get(photo.guest)
    if (group) group.push(photo)
    else groups.set(photo.guest, [photo])
  }

  return (
    <section className={styles.section} aria-label="Galeria">
      {[...groups].map(([guest, group]) => (
        <div className={styles.group} key={guest?.name ?? 'avulsas'}>
          {guest && (
            <header className={styles.guest}>
              <h3>{guest.name}</h3>
              {guest.band && <p>{guest.band}</p>}
            </header>
          )}
          <ul className={styles.photoGrid}>
            {group.map((photo, index) => (
              <GalleryPhotoCard
                key={photo.id}
                photo={photo}
                priority={index < 4}
                staggerDelayMs={
                  INITIAL_STAGGER_DELAY_MS +
                  Math.min(index, MAX_STAGGER_INDEX) * STAGGER_STEP_MS
                }
                onOpen={onOpen}
              />
            ))}
          </ul>
        </div>
      ))}
    </section>
  )
}
