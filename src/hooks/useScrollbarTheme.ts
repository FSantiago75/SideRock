import { useEffect } from 'react'

export type ScrollbarTheme = {
  start: string
  end: string
  hoverStart: string
  hoverEnd: string
}

const SCROLLBAR_CUSTOM_PROPERTIES = {
  start: '--scrollbar-thumb-start',
  end: '--scrollbar-thumb-end',
  hoverStart: '--scrollbar-thumb-hover-start',
  hoverEnd: '--scrollbar-thumb-hover-end',
} as const

export function useScrollbarTheme(scrollbar: ScrollbarTheme) {
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
