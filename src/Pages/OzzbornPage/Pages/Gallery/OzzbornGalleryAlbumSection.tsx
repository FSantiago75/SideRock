import type { OzzbornGalleryPhoto } from './ozzbornGalleryContent'
import { OzzbornGalleryPhotoCard } from './OzzbornGalleryPhotoCard'
import styles from './OzzbornGalleryAlbumSection.module.css'

type OzzbornGalleryAlbumSectionProps = {
  photos: readonly OzzbornGalleryPhoto[]
  onOpen: (photoId: string) => void
}

const MAX_STAGGER_INDEX = 7
const INITIAL_STAGGER_DELAY_MS = 140
const STAGGER_STEP_MS = 55

export function OzzbornGalleryAlbumSection({ photos, onOpen }: OzzbornGalleryAlbumSectionProps) {
  const groups = new Map<OzzbornGalleryPhoto['guest'], OzzbornGalleryPhoto[]>()
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
              <OzzbornGalleryPhotoCard
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
