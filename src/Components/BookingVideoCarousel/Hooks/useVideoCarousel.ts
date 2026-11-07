import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type SyntheticEvent,
} from 'react'
import { useMediaQuery } from '../../../hooks/useMediaQuery'
import { VIEWPORT_MOBILE_MAX_PX } from '../../../utils/viewport'

const AUTO_ADVANCE_MS = 4500
const RESUME_AFTER_INTERACTION_MS = 1800
const SLIDE_DURATION_MS = 520

export function useVideoCarousel(count: number) {
  const isMobile = useMediaQuery(`(max-width: ${VIEWPORT_MOBILE_MAX_PX}px)`)
  const reducedMotion = useMediaQuery('(prefers-reduced-motion: reduce)')
  const rowRef = useRef<HTMLDivElement>(null)
  const resumeTimerRef = useRef<number | null>(null)
  const slideFrameRef = useRef<number | null>(null)
  const activeIndexRef = useRef(0)
  const [activeIndex, setActiveIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const [isInteracting, setIsInteracting] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)

  const goTo = useCallback(
    (index: number) => {
      const row = rowRef.current
      const slide = row?.children.item(index) as HTMLElement | null
      if (!row || !slide) return

      if (slideFrameRef.current !== null) {
        window.cancelAnimationFrame(slideFrameRef.current)
      }

      if (reducedMotion) {
        row.scrollLeft = slide.offsetLeft - row.offsetLeft
        activeIndexRef.current = index
        setActiveIndex(index)
        return
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
    },
    [reducedMotion],
  )

  useEffect(() => {
    if (
      count < 2 ||
      !isMobile ||
      reducedMotion ||
      isHovered ||
      isInteracting ||
      isPlaying
    ) {
      return
    }

    const interval = window.setInterval(() => {
      const nextIndex = (activeIndexRef.current + 1) % count
      goTo(nextIndex)
    }, AUTO_ADVANCE_MS)

    return () => window.clearInterval(interval)
  }, [
    goTo,
    isHovered,
    isInteracting,
    isPlaying,
    count,
    isMobile,
    reducedMotion,
  ])

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
    if (!row || !row.children.length) return

    const slides = Array.from(row.children) as HTMLElement[]
    const closestIndex = slides.reduce((closest, slide, index) => {
      const currentDistance = Math.abs(
        slide.offsetLeft - row.offsetLeft - row.scrollLeft,
      )
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

  return {
    rowRef,
    activeIndex,
    goTo,
    setIsHovered,
    pauseForInteraction,
    resumeAfterInteraction,
    handleScroll,
    handlePlay,
    handlePlaybackStop,
  }
}
