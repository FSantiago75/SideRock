import { useEffect } from 'react'

export function useSmoothDocumentScroll() {
  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)')
    const root = document.documentElement
    const previous = root.style.scrollBehavior

    const apply = () => {
      root.style.scrollBehavior = media.matches ? previous : 'smooth'
    }

    apply()
    media.addEventListener('change', apply)

    return () => {
      media.removeEventListener('change', apply)
      root.style.scrollBehavior = previous
    }
  }, [])
}
