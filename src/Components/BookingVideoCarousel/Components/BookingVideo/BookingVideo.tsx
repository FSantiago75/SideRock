import { useRef, useState, type SyntheticEvent } from 'react'
import { FaPlay } from 'react-icons/fa6'
import styles from '../../BookingVideoCarousel.module.css'

type BookingVideoProps = {
  src: string
  poster: string
  title: string
  href: string
  onPlay: (event: SyntheticEvent<HTMLVideoElement>) => void
  onPause: () => void
  onEnded: () => void
}

export function BookingVideo({
  src,
  poster,
  title,
  href,
  onPlay,
  onPause,
  onEnded,
}: BookingVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isStarting, setIsStarting] = useState(false)
  const [playError, setPlayError] = useState('')

  async function startPlayback() {
    const video = videoRef.current
    if (!video) return
    setIsStarting(true)
    setPlayError('')
    try {
      await video.play()
    } catch {
      setPlayError(
        'Não foi possível iniciar o vídeo. Toque no play para tentar novamente.',
      )
    } finally {
      setIsStarting(false)
    }
  }
  return (
    <article className={styles.videoCard}>
      <div className={styles.videoFrame}>
        <video
          ref={videoRef}
          controls
          playsInline
          preload="none"
          poster={poster}
          width={1080}
          height={1920}
          aria-label={title}
          onPlay={(event) => {
            setIsPlaying(true)
            setPlayError('')
            onPlay(event)
          }}
          onPause={() => {
            setIsPlaying(false)
            onPause()
          }}
          onEnded={() => {
            setIsPlaying(false)
            onEnded()
          }}
        >
          <source src={src} type="video/mp4" />
        </video>
        {!isPlaying && (
          <button
            type="button"
            className={styles.mobilePlay}
            aria-label={
              isStarting ? `Carregando ${title}` : `Reproduzir ${title}`
            }
            disabled={isStarting}
            onClick={startPlayback}
          >
            <FaPlay aria-hidden />
          </button>
        )}
        {playError && (
          <p className={styles.mobilePlayError} role="alert">
            {playError}
          </p>
        )}
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
