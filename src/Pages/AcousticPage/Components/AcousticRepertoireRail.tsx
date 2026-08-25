import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react'
import styles from '../AcousticPage.module.css'

type AcousticRepertoireRailProps = {
  categories: readonly string[]
}

const START_EPSILON = 1
const END_EPSILON = 1

export function AcousticRepertoireRail({
  categories,
}: AcousticRepertoireRailProps) {
  const trackRef = useRef<HTMLUListElement>(null)
  const [canScrollPrev, setCanScrollPrev] = useState(false)
  const [canScrollNext, setCanScrollNext] = useState(false)

  const updateScrollState = useCallback(() => {
    const track = trackRef.current
    if (!track) {
      return
    }

    const maxScrollLeft = Math.max(0, track.scrollWidth - track.clientWidth)
    const scrollLeft = track.scrollLeft

    setCanScrollPrev(scrollLeft > START_EPSILON)
    setCanScrollNext(maxScrollLeft > END_EPSILON && scrollLeft < maxScrollLeft - END_EPSILON)
  }, [])

  const resetToStart = useCallback(() => {
    const track = trackRef.current
    if (!track) {
      return
    }

    track.scrollLeft = 0
    updateScrollState()
  }, [updateScrollState])

  useLayoutEffect(() => {
    resetToStart()
  }, [resetToStart, categories])

  useEffect(() => {
    const track = trackRef.current
    if (!track) {
      return
    }

    resetToStart()

    const frame = requestAnimationFrame(() => {
      resetToStart()
    })

    track.addEventListener('scroll', updateScrollState, { passive: true })
    window.addEventListener('resize', updateScrollState)

    const resizeObserver = new ResizeObserver(() => {
      updateScrollState()
    })
    resizeObserver.observe(track)

    return () => {
      cancelAnimationFrame(frame)
      track.removeEventListener('scroll', updateScrollState)
      window.removeEventListener('resize', updateScrollState)
      resizeObserver.disconnect()
    }
  }, [resetToStart, updateScrollState])

  const scrollByDirection = (direction: -1 | 1) => {
    const track = trackRef.current
    if (!track) {
      return
    }

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches

    track.scrollBy({
      left: direction * track.clientWidth * 0.7,
      behavior: prefersReducedMotion ? 'auto' : 'smooth',
    })
  }

  return (
    <div className={styles.repertoireShell}>
      <button
        type="button"
        className={styles.repertoireControl}
        aria-label="Categorias anteriores"
        disabled={!canScrollPrev}
        onClick={() => scrollByDirection(-1)}
      >
        <span aria-hidden="true">‹</span>
      </button>

      <div className={styles.repertoireRail}>
        <ul
          ref={trackRef}
          className={styles.repertoireTrack}
          tabIndex={0}
          aria-label="Categorias do repertório"
        >
          {categories.map((category) => (
            <li key={category} className={styles.repertoireItem} tabIndex={0}>
              {category}
            </li>
          ))}
        </ul>
      </div>

      <button
        type="button"
        className={styles.repertoireControl}
        aria-label="Próximas categorias"
        disabled={!canScrollNext}
        onClick={() => scrollByDirection(1)}
      >
        <span aria-hidden="true">›</span>
      </button>
    </div>
  )
}
