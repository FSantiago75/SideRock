import type { SyntheticEvent } from 'react'
import { VideoSlideTransition } from '../VideoSlideTransition/VideoSlideTransition'
import styles from '../../BookingVideoCarousel.module.css'

type BookingVideoProps = {
  showControls?: boolean
  src: string
  poster?: string
  title: string
  context?: string | null
  href?: string
  onPlay: (event: SyntheticEvent<HTMLVideoElement>) => void
  onPause: () => void
  onEnded: () => void
  transition?: { previousPoster: string; direction: 'next' | 'previous' }
  onTransitionEnd: () => void
}

export function BookingVideo({
  showControls = true,
  src,
  poster,
  title,
  context,
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
          controls={showControls}
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
        {transition && poster ? (
          <VideoSlideTransition
            {...transition}
            poster={poster}
            onFinish={onTransitionEnd}
          />
        ) : null}
      </div>
      <div className={styles.videoCaption} data-split-caption={Boolean(context) || undefined} data-story-caption={context !== undefined || undefined}>
        {context && <strong className={styles.videoTitle}>{context}</strong>}
        {context === undefined && <span>Ao vivo</span>}
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
