import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react'
import { useMediaQuery } from '../../../hooks/useMediaQuery'
import styles from '../AcousticPage.module.css'

type AcousticRepertoireRailProps = {
  categories: readonly string[]
  categoriesLabel: string
}

const START_EPSILON = 1
const END_EPSILON = 1
const CAROUSEL_MEDIA_QUERY = '(min-width: 769px)'

export function AcousticRepertoireRail({
  categories,
  categoriesLabel,
}: AcousticRepertoireRailProps) {
  const trackRef = useRef<HTMLUListElement>(null)
  const isCarousel = useMediaQuery(CAROUSEL_MEDIA_QUERY)
  const [canScrollPrev, setCanScrollPrev] = useState(false)
  const [canScrollNext, setCanScrollNext] = useState(false)

  const readScrollState = useCallback(() => {
    const track = trackRef.current
    if (!track || !isCarousel) {
      return { canPrev: false, canNext: false }
    }

    const maxScrollLeft = Math.max(0, track.scrollWidth - track.clientWidth)
    const scrollLeft = track.scrollLeft

    return {
      canPrev: scrollLeft > START_EPSILON,
      canNext:
        maxScrollLeft > END_EPSILON &&
        scrollLeft < maxScrollLeft - END_EPSILON,
    }
  }, [isCarousel])

  const applyScrollState = useCallback(() => {
    const { canPrev, canNext } = readScrollState()
    setCanScrollPrev(canPrev)
    setCanScrollNext(canNext)
  }, [readScrollState])

  useLayoutEffect(() => {
    const track = trackRef.current
    if (!track || !isCarousel) {
      return
    }

    track.scrollLeft = 0
  }, [categories, isCarousel])

  useEffect(() => {
    if (!isCarousel) {
      const frame = requestAnimationFrame(() => {
        setCanScrollPrev(false)
        setCanScrollNext(false)
      })

      return () => {
        cancelAnimationFrame(frame)
      }
    }

    const track = trackRef.current
    if (!track) {
      return
    }

    const syncScrollState = () => {
      applyScrollState()
    }

    const frame = requestAnimationFrame(syncScrollState)

    track.addEventListener('scroll', syncScrollState, { passive: true })
    window.addEventListener('resize', syncScrollState)

    const resizeObserver = new ResizeObserver(syncScrollState)
    resizeObserver.observe(track)

    return () => {
      cancelAnimationFrame(frame)
      track.removeEventListener('scroll', syncScrollState)
      window.removeEventListener('resize', syncScrollState)
      resizeObserver.disconnect()
    }
  }, [applyScrollState, categories, isCarousel])

  const scrollByDirection = (direction: -1 | 1) => {
    const track = trackRef.current
    if (!track || !isCarousel) {
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
    <div
      className={styles.repertoireCategories}
      data-repertoire-mode={isCarousel ? 'carousel' : 'wrap'}
    >
      <p className={styles.repertoireCategoriesLabel}>{categoriesLabel}</p>

      <div className={styles.repertoireShell}>
        {isCarousel ? (
          <button
            type="button"
            className={styles.repertoireControl}
            aria-label="Categorias anteriores"
            disabled={!canScrollPrev}
            onClick={() => scrollByDirection(-1)}
          >
            <span aria-hidden="true">‹</span>
          </button>
        ) : null}

        <div className={styles.repertoireRail}>
          <ul
            ref={trackRef}
            className={styles.repertoireTrack}
            tabIndex={isCarousel ? 0 : undefined}
            aria-label={categoriesLabel}
          >
            {categories.map((category) => (
              <li
                key={category}
                className={styles.repertoireItem}
                tabIndex={isCarousel ? 0 : undefined}
              >
                {category}
              </li>
            ))}
          </ul>
        </div>

        {isCarousel ? (
          <button
            type="button"
            className={styles.repertoireControl}
            aria-label="Próximas categorias"
            disabled={!canScrollNext}
            onClick={() => scrollByDirection(1)}
          >
            <span aria-hidden="true">›</span>
          </button>
        ) : null}
      </div>
    </div>
  )
}
