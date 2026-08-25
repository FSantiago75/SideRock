import { useEffect } from 'react'
import type { CatalogScrollbarTheme } from './homeExperiences'

const SCROLLBAR_CUSTOM_PROPERTIES = {
  start: '--scrollbar-thumb-start',
  end: '--scrollbar-thumb-end',
  hoverStart: '--scrollbar-thumb-hover-start',
  hoverEnd: '--scrollbar-thumb-hover-end',
} as const

export function useCatalogScrollbarTheme(scrollbar: CatalogScrollbarTheme) {
  useEffect(() => {
    const root = document.documentElement

    root.style.setProperty(SCROLLBAR_CUSTOM_PROPERTIES.start, scrollbar.start)
    root.style.setProperty(SCROLLBAR_CUSTOM_PROPERTIES.end, scrollbar.end)
    root.style.setProperty(
      SCROLLBAR_CUSTOM_PROPERTIES.hoverStart,
      scrollbar.hoverStart,
    )
    root.style.setProperty(
      SCROLLBAR_CUSTOM_PROPERTIES.hoverEnd,
      scrollbar.hoverEnd,
    )

    return () => {
      root.style.removeProperty(SCROLLBAR_CUSTOM_PROPERTIES.start)
      root.style.removeProperty(SCROLLBAR_CUSTOM_PROPERTIES.end)
      root.style.removeProperty(SCROLLBAR_CUSTOM_PROPERTIES.hoverStart)
      root.style.removeProperty(SCROLLBAR_CUSTOM_PROPERTIES.hoverEnd)
    }
  }, [
    scrollbar.end,
    scrollbar.hoverEnd,
    scrollbar.hoverStart,
    scrollbar.start,
  ])
}
