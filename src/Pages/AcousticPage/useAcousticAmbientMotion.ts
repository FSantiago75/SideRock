import { useEffect, type RefObject } from 'react'

type UseAcousticAmbientMotionOptions = {
  rootRef: RefObject<HTMLElement | null>
  heroSelector?: string
}

function syncAmbientState(
  root: HTMLElement,
  hero: HTMLElement | null,
  prefersReducedMotion: boolean,
) {
  if (prefersReducedMotion || document.visibilityState === 'hidden' || !hero) {
    root.setAttribute('data-ambient-active', 'false')
    return
  }

  const rect = hero.getBoundingClientRect()
  const viewportHeight =
    window.innerHeight || document.documentElement.clientHeight
  const isVisible = rect.bottom > 0 && rect.top < viewportHeight

  root.setAttribute('data-ambient-active', isVisible ? 'true' : 'false')
}

export function useAcousticAmbientMotion({
  rootRef,
  heroSelector = '[data-ambient-hero]',
}: UseAcousticAmbientMotionOptions) {
  useEffect(() => {
    const root = rootRef.current
    if (!root) {
      return
    }

    const reducedMotionQuery = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    )
    const hero = root.querySelector<HTMLElement>(heroSelector)

    const update = () => {
      syncAmbientState(root, hero, reducedMotionQuery.matches)
    }

    update()

    const heroObserver = hero
      ? new IntersectionObserver(
          () => {
            update()
          },
          {
            threshold: 0,
            rootMargin: '0px 0px 0px 0px',
          },
        )
      : null

    heroObserver?.observe(hero as HTMLElement)

    const handleVisibilityChange = () => {
      update()
    }

    reducedMotionQuery.addEventListener('change', update)
    document.addEventListener('visibilitychange', handleVisibilityChange)

    return () => {
      heroObserver?.disconnect()
      reducedMotionQuery.removeEventListener('change', update)
      document.removeEventListener('visibilitychange', handleVisibilityChange)
      root.removeAttribute('data-ambient-active')
    }
  }, [heroSelector, rootRef])
}
