import { useLayoutEffect, type RefObject } from 'react'

const REVEAL_SELECTOR = '[data-reveal]'

type UseAcousticRevealOptions = {
  rootRef: RefObject<HTMLElement | null>
}

function isRoughlyInView(node: HTMLElement) {
  const rect = node.getBoundingClientRect()
  const viewportHeight = window.innerHeight || document.documentElement.clientHeight
  const bottomInset = viewportHeight * 0.1
  const visibleHeight =
    Math.min(rect.bottom, viewportHeight - bottomInset) - Math.max(rect.top, 0)

  if (visibleHeight <= 0 || rect.height <= 0) {
    return false
  }

  return visibleHeight / rect.height >= 0.12
}

export function useAcousticReveal({ rootRef }: UseAcousticRevealOptions) {
  useLayoutEffect(() => {
    const root = rootRef.current
    if (!root) {
      return
    }

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches

    const nodes = Array.from(
      root.querySelectorAll<HTMLElement>(REVEAL_SELECTOR),
    )

    root.setAttribute('data-reveal-ready', 'true')

    if (prefersReducedMotion) {
      for (const node of nodes) {
        node.setAttribute('data-revealed', 'true')
      }

      return () => {
        root.removeAttribute('data-reveal-ready')
        for (const node of nodes) {
          node.removeAttribute('data-revealed')
        }
      }
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) {
            continue
          }

          const target = entry.target as HTMLElement
          target.setAttribute('data-revealed', 'true')
          observer.unobserve(target)
        }
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -10% 0px',
      },
    )

    let frame = 0
    frame = requestAnimationFrame(() => {
      for (const node of nodes) {
        if (isRoughlyInView(node)) {
          node.setAttribute('data-revealed', 'true')
          continue
        }

        observer.observe(node)
      }
    })

    return () => {
      cancelAnimationFrame(frame)
      observer.disconnect()
      root.removeAttribute('data-reveal-ready')
      for (const node of nodes) {
        node.removeAttribute('data-revealed')
      }
    }
  }, [rootRef])
}
