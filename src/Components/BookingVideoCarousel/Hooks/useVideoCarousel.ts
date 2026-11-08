import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type SyntheticEvent,
  type TouchEvent,
} from 'react'
import { useMediaQuery } from '../../../hooks/useMediaQuery'
import { VIEWPORT_MOBILE_MAX_PX } from '../../../utils/viewport'

const AUTO_ADVANCE_MS = 4500
const RESUME_AFTER_INTERACTION_MS = 1800
const SWIPE_MIN_DISTANCE_PX = 48
const NATIVE_CONTROLS_HEIGHT_PX = 64

export function useVideoCarousel(count: number) {
  const isMobile = useMediaQuery(`(max-width: ${VIEWPORT_MOBILE_MAX_PX}px)`)
  const reducedMotion = useMediaQuery('(prefers-reduced-motion: reduce)')
  const rowRef = useRef<HTMLDivElement>(null)
  const resumeTimerRef = useRef<number | null>(null)
  const touchStartRef = useRef<{ x: number; y: number } | null>(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const [isInteracting, setIsInteracting] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const [transition, setTransition] = useState<{
    from: number
    direction: 'next' | 'previous'
  } | null>(null)

  const goTo = useCallback(
    (index: number) => {
      if (!count) return
      const nextIndex = (index + count) % count
      if (nextIndex === activeIndex) return
      setTransition(
        isMobile && !reducedMotion
          ? {
              from: activeIndex,
              direction: index > activeIndex ? 'next' : 'previous',
            }
          : null,
      )
      rowRef.current
        ?.querySelectorAll('video')
        .forEach((video) => video.pause())
      setIsPlaying(false)
      setActiveIndex(nextIndex)
    },
    [activeIndex, count, isMobile, reducedMotion],
  )

  useEffect(() => {
    if (
      count < 2 ||
      !isMobile ||
      reducedMotion ||
      isHovered ||
      isInteracting ||
      isPlaying
    )
      return
    const interval = window.setInterval(
      () => goTo(activeIndex + 1),
      AUTO_ADVANCE_MS,
    )
    return () => window.clearInterval(interval)
  }, [
    activeIndex,
    count,
    goTo,
    isMobile,
    reducedMotion,
    isHovered,
    isInteracting,
    isPlaying,
  ])

  useEffect(
    () => () => {
      if (resumeTimerRef.current !== null)
        window.clearTimeout(resumeTimerRef.current)
    },
    [],
  )

  function pauseForInteraction() {
    if (resumeTimerRef.current !== null)
      window.clearTimeout(resumeTimerRef.current)
    setIsInteracting(true)
  }

  function resumeAfterInteraction() {
    if (resumeTimerRef.current !== null)
      window.clearTimeout(resumeTimerRef.current)
    resumeTimerRef.current = window.setTimeout(() => {
      setIsInteracting(false)
      resumeTimerRef.current = null
    }, RESUME_AFTER_INTERACTION_MS)
  }

  function handleTouchStart(event: TouchEvent<HTMLDivElement>) {
    pauseForInteraction()
    touchStartRef.current = null
    if (!isMobile || event.touches.length !== 1) return
    const touch = event.touches[0]
    const video = (event.target as Element).closest('video')
    // Seeking in the native control bar must not change presentations.
    if (
      video &&
      touch.clientY >=
        video.getBoundingClientRect().bottom - NATIVE_CONTROLS_HEIGHT_PX
    )
      return
    touchStartRef.current = { x: touch.clientX, y: touch.clientY }
  }

  function handleTouchEnd(event: TouchEvent<HTMLDivElement>) {
    resumeAfterInteraction()
    const start = touchStartRef.current
    touchStartRef.current = null
    const end = event.changedTouches[0]
    if (!start || !end) return
    const dx = end.clientX - start.x
    const dy = end.clientY - start.y
    if (Math.abs(dx) >= SWIPE_MIN_DISTANCE_PX && Math.abs(dx) > Math.abs(dy)) {
      goTo(activeIndex + (dx < 0 ? 1 : -1))
    }
  }

  function handleTouchCancel() {
    touchStartRef.current = null
    resumeAfterInteraction()
  }

  function handlePlay(event: SyntheticEvent<HTMLVideoElement>) {
    const current = event.currentTarget
    rowRef.current?.querySelectorAll('video').forEach((video) => {
      if (video !== current) video.pause()
    })
    setIsPlaying(true)
  }

  function handlePlaybackStop() {
    const playing = Array.from(
      rowRef.current?.querySelectorAll('video') ?? [],
    ).some((video) => !video.paused && !video.ended)
    setIsPlaying(playing)
  }

  return {
    rowRef,
    activeIndex,
    transition,
    finishTransition: () => setTransition(null),
    isMobile,
    goTo,
    setIsHovered,
    pauseForInteraction,
    resumeAfterInteraction,
    handleTouchStart,
    handleTouchEnd,
    handleTouchCancel,
    handlePlay,
    handlePlaybackStop,
  }
}
