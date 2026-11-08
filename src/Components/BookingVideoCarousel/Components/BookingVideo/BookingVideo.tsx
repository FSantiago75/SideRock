import type { SyntheticEvent } from 'react'
import { VideoSlideTransition } from '../VideoSlideTransition/VideoSlideTransition'
import styles from '../../BookingVideoCarousel.module.css'

type BookingVideoProps = {
  src: string
  poster: string
  title: string
  href: string
  onPlay: (event: SyntheticEvent<HTMLVideoElement>) => void
  onPause: () => void
  onEnded: () => void
  transition?: { previousPoster: string; direction: 'next' | 'previous' }
  onTransitionEnd: () => void
}

export function BookingVideo({
  src,
  poster,
  title,
  href,
  onPlay,
  onPause,
  onEnded,
  transition,
  onTransitionEnd,
}: BookingVideoProps) {
  return (
    <article className={styles.videoCard}>
      <div className={styles.videoFrame}>
        <video
          controls
          playsInline
          preload="metadata"
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
        {transition ? (
          <VideoSlideTransition
            {...transition}
            poster={poster}
            onFinish={onTransitionEnd}
          />
        ) : null}
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
