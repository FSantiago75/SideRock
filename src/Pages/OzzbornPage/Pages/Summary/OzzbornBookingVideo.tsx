import type { SyntheticEvent } from 'react'
import styles from './OzzbornBookingSection.module.css'

type BookingVideoProps = {
  src: string
  poster: string
  title: string
  href: string
  onPlay: (event: SyntheticEvent<HTMLVideoElement>) => void
  onPause: () => void
  onEnded: () => void
}

export function OzzbornBookingVideo({
  src,
  poster,
  title,
  href,
  onPlay,
  onPause,
  onEnded,
}: BookingVideoProps) {
  return (
    <article className={styles.videoCard}>
      <div className={styles.videoFrame}>
        <video
          controls
          playsInline
          preload="none"
          poster={poster}
          width={1080}
          height={1920}
          aria-label={title}
          onPlay={onPlay}
          onPause={onPause}
          onEnded={onEnded}
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
