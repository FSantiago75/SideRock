import type { SyntheticEvent } from 'react'
import { VideoSlideTransition } from '../VideoSlideTransition/VideoSlideTransition'
import styles from '../../BookingVideoCarousel.module.css'

type BookingVideoProps = {
  src: string
  poster?: string
  title: string
  href?: string
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
          <source src={poster ? src : `${src}#t=0.001`} type="video/mp4" />
        </video>
        {transition && poster ? (
          <VideoSlideTransition
            {...transition}
            poster={poster}
            onFinish={onTransitionEnd}
          />
        ) : null}
      </div>
      <div className={styles.videoCaption}>
        <span>Ao vivo</span>
        {href ? (
          <a href={href} target="_blank" rel="noopener noreferrer">
            {title}
          </a>
        ) : (
          <strong className={styles.videoTitle}>{title}</strong>
        )}
      </div>
    </article>
  )
}
