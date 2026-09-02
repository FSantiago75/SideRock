import type { OzzbornGalleryPhoto } from './ozzbornGalleryContent'
import { OzzbornGalleryPhotoCard } from './OzzbornGalleryPhotoCard'
import styles from './OzzbornGalleryAlbumSection.module.css'

type OzzbornGalleryAlbumSectionProps = {
  photos: readonly OzzbornGalleryPhoto[]
  onOpen: (photoId: string) => void
}

const MAX_STAGGER_INDEX = 7
const STAGGER_STEP_MS = 70

export function OzzbornGalleryAlbumSection({
  photos,
  onOpen,
}: OzzbornGalleryAlbumSectionProps) {
  return (
    <section className={styles.section} aria-label="Galeria Ozzborn">
      <ul className={styles.photoGrid}>
        {photos.map((photo, index) => (
          <OzzbornGalleryPhotoCard
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
