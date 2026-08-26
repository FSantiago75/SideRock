import { FiMaximize2 } from 'react-icons/fi'
import { ScrollReveal } from '../../../../Components/ScrollReveal/ScrollReveal'
import type { GalleryPhoto } from './galleryContent'
import styles from './GalleryPhotoCard.module.css'

type GalleryPhotoCardProps = {
  photo: GalleryPhoto
  priority?: boolean
  staggerDelayMs?: number
  onOpen: (photoId: string) => void
}

export function GalleryPhotoCard({
  photo,
  priority = false,
  staggerDelayMs = 0,
  onOpen,
}: GalleryPhotoCardProps) {
  return (
    <li className={styles.item}>
      <ScrollReveal className={styles.reveal} from="up" delayMs={staggerDelayMs}>
        <button
          type="button"
          className={styles.card}
          data-photo-id={photo.id}
          aria-label={`Ampliar ${photo.alt}`}
          onClick={() => onOpen(photo.id)}
        >
          <span className={styles.frame}>
            <img
              src={photo.src}
              alt={photo.alt}
              loading={priority ? 'eager' : 'lazy'}
              decoding="async"
            />
          </span>
          <span className={styles.overlay}>
            <span className={styles.meta}>
              <span className={styles.album}>{photo.albumLabel}</span>
              <span className={styles.label}>{photo.label}</span>
            </span>
            <FiMaximize2 className={styles.icon} aria-hidden />
          </span>
        </button>
      </ScrollReveal>
    </li>
  )
}
