import type { SyntheticEvent } from 'react'
import styles from './BookingSection.module.css'

type BookingVideoProps = {
  src: string
  poster: string
  title: string
  href: string
  onPlay: (event: SyntheticEvent<HTMLVideoElement>) => void
}

export function BookingVideo({
  src,
  poster,
  title,
  href,
  onPlay,
}: BookingVideoProps) {
  return (
    <article className={styles.videoCard}>
      <div className={styles.videoFrame}>
        <video
          controls
          playsInline
          preload="none"
          poster={poster}
          aria-label={title}
          onPlay={onPlay}
        >
          <source src={src} type="video/mp4" />
        </video>
      </div>
      <div className={styles.videoCaption}>
        <span>Ao vivo</span>
        <a href={href} target="_blank" rel="noopener noreferrer">
          {title}
        </a>
      </div>
    </article>
  )
}
