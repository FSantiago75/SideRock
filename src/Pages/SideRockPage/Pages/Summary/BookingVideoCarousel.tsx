import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type SyntheticEvent,
} from 'react'
import { VIEWPORT_MOBILE_MAX_PX } from '../../../../utils/viewport'
import { BookingVideo } from './BookingVideo'
import styles from './BookingSection.module.css'

type BookingVideoItem = {
  src: string
  poster: string
  title: string
  href: string
}

type BookingVideoCarouselProps = {
  videos: readonly BookingVideoItem[]
}

const AUTO_ADVANCE_MS = 4500
const RESUME_AFTER_INTERACTION_MS = 1800
const SLIDE_DURATION_MS = 520

export function BookingVideoCarousel({ videos }: BookingVideoCarouselProps) {
  const rowRef = useRef<HTMLDivElement>(null)
  const resumeTimerRef = useRef<number | null>(null)
  const slideFrameRef = useRef<number | null>(null)
  const activeIndexRef = useRef(0)
  const [activeIndex, setActiveIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const [isInteracting, setIsInteracting] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)

  const goTo = useCallback((index: number) => {
    const row = rowRef.current
    const slide = row?.children.item(index) as HTMLElement | null
    if (!row || !slide) return

    if (slideFrameRef.current !== null) {
      window.cancelAnimationFrame(slideFrameRef.current)
    }

    const startLeft = row.scrollLeft
    const targetLeft = slide.offsetLeft - row.offsetLeft
    const distance = targetLeft - startLeft
    const startedAt = performance.now()
    row.dataset.animating = 'true'

    const animate = (time: number) => {
      const progress = Math.min((time - startedAt) / SLIDE_DURATION_MS, 1)
      const easedProgress = 1 - Math.pow(1 - progress, 3)
      row.scrollLeft = startLeft + distance * easedProgress

      if (progress < 1) {
        slideFrameRef.current = window.requestAnimationFrame(animate)
      } else {
        slideFrameRef.current = null
        delete row.dataset.animating
      }
    }

    slideFrameRef.current = window.requestAnimationFrame(animate)
    activeIndexRef.current = index
    setActiveIndex(index)
  }, [])

  useEffect(() => {
    if (videos.length < 2 || isHovered || isInteracting || isPlaying) {
      return
    }

    const mobileQuery = window.matchMedia(
      `(max-width: ${VIEWPORT_MOBILE_MAX_PX}px)`,
    )
    if (!mobileQuery.matches) return

    const interval = window.setInterval(() => {
      const nextIndex = (activeIndexRef.current + 1) % videos.length
      goTo(nextIndex)
    }, AUTO_ADVANCE_MS)

    return () => window.clearInterval(interval)
  }, [goTo, isHovered, isInteracting, isPlaying, videos.length])

  useEffect(
    () => () => {
      if (resumeTimerRef.current !== null) {
        window.clearTimeout(resumeTimerRef.current)
      }
      if (slideFrameRef.current !== null) {
        window.cancelAnimationFrame(slideFrameRef.current)
      }
    },
    [],
  )

  const handleScroll = () => {
    const row = rowRef.current
    if (!row) return

    const slides = Array.from(row.children) as HTMLElement[]
    const closestIndex = slides.reduce((closest, slide, index) => {
      const currentDistance = Math.abs(slide.offsetLeft - row.offsetLeft - row.scrollLeft)
      const closestSlide = slides[closest]
      const closestDistance = Math.abs(
        closestSlide.offsetLeft - row.offsetLeft - row.scrollLeft,
      )
      return currentDistance < closestDistance ? index : closest
    }, 0)
    activeIndexRef.current = closestIndex
    setActiveIndex(closestIndex)
  }

  const pauseForInteraction = () => {
    if (slideFrameRef.current !== null) {
      window.cancelAnimationFrame(slideFrameRef.current)
      slideFrameRef.current = null
    }
    if (rowRef.current) delete rowRef.current.dataset.animating
    if (resumeTimerRef.current !== null) {
      window.clearTimeout(resumeTimerRef.current)
    }
    setIsInteracting(true)
  }

  const resumeAfterInteraction = () => {
    if (resumeTimerRef.current !== null) {
      window.clearTimeout(resumeTimerRef.current)
    }
    resumeTimerRef.current = window.setTimeout(() => {
      setIsInteracting(false)
      resumeTimerRef.current = null
    }, RESUME_AFTER_INTERACTION_MS)
  }

  const handlePlay = (event: SyntheticEvent<HTMLVideoElement>) => {
    const current = event.currentTarget
    rowRef.current?.querySelectorAll('video').forEach((video) => {
      if (video !== current) video.pause()
    })
    setIsPlaying(true)
  }

  const handlePlaybackStop = () => {
    const hasPlayingVideo = Array.from(
      rowRef.current?.querySelectorAll('video') ?? [],
    ).some((video) => !video.paused && !video.ended)
    setIsPlaying(hasPlayingVideo)
  }

  return (
    <div className={styles.videoCarousel}>
      <div
        ref={rowRef}
        className={styles.videoRow}
        data-video-row
        role="region"
        aria-label="Apresentações ao vivo. Deslize para o próximo vídeo."
        onPointerEnter={(event) => {
          if (event.pointerType === 'mouse') setIsHovered(true)
        }}
        onPointerLeave={(event) => {
          if (event.pointerType === 'mouse') setIsHovered(false)
        }}
        onPointerDown={pauseForInteraction}
        onPointerUp={resumeAfterInteraction}
        onPointerCancel={resumeAfterInteraction}
        onScroll={handleScroll}
      >
        {videos.map((video) => (
          <BookingVideo
            key={video.src}
            {...video}
            onPlay={handlePlay}
            onPause={handlePlaybackStop}
            onEnded={handlePlaybackStop}
          />
        ))}
      </div>

      {videos.length > 1 ? (
        <div className={styles.videoPagination} aria-label="Selecionar apresentação">
          <span>Mais apresentações</span>
          <div>
            {videos.map((video, index) => (
              <button
                key={video.src}
                type="button"
                className={index === activeIndex ? styles.videoDotActive : undefined}
                onClick={() => goTo(index)}
                aria-label={`Ver vídeo ${index + 1}: ${video.title}`}
                aria-current={index === activeIndex ? 'true' : undefined}
              />
            ))}
          </div>
        </div>
      ) : null}
    </div>
  )
}
