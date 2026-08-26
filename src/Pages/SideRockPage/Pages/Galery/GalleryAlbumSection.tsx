import type { GalleryPhoto } from './galleryContent'
import { GalleryPhotoCard } from './GalleryPhotoCard'
import styles from './GalleryAlbumSection.module.css'

type GalleryAlbumSectionProps = {
  photos: readonly GalleryPhoto[]
  onOpen: (photoId: string) => void
}

const MAX_STAGGER_INDEX = 7
const STAGGER_STEP_MS = 70

export function GalleryAlbumSection({ photos, onOpen }: GalleryAlbumSectionProps) {
  return (
    <section className={styles.section} aria-label="Galeria">
      <ul className={styles.photoGrid}>
        {photos.map((photo, index) => (
          <GalleryPhotoCard
            key={photo.id}
            photo={photo}
            priority={index < 4}
            staggerDelayMs={Math.min(index, MAX_STAGGER_INDEX) * STAGGER_STEP_MS}
            onOpen={onOpen}
          />
        ))}
      </ul>
    </section>
  )
}
