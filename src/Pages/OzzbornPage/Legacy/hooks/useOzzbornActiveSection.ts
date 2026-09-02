import { useEffect, useState } from 'react'
import { OZZBORN_NAV, type OzzbornNavId } from '../ozzbornContent'

const SECTION_ROOT_MARGIN = '-28% 0px -48% 0px'

export function useOzzbornActiveSection() {
  const [activeId, setActiveId] = useState<OzzbornNavId | null>(null)

  useEffect(() => {
    const sections = OZZBORN_NAV.map((item) =>
      document.getElementById(item.id),
    ).filter((section): section is HTMLElement => section !== null)

    if (sections.length === 0) {
      return
    }

    const visibility = new Map<string, number>()

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          visibility.set(
            entry.target.id,
            entry.isIntersecting ? entry.intersectionRatio : 0,
          )
        }

        let nextActive: OzzbornNavId | null = null
        let highestRatio = 0

        for (const item of OZZBORN_NAV) {
          const ratio = visibility.get(item.id) ?? 0
          if (ratio > highestRatio) {
            highestRatio = ratio
            nextActive = item.id
          }
        }

        setActiveId(nextActive)
      },
      {
        root: null,
        rootMargin: SECTION_ROOT_MARGIN,
        threshold: [0, 0.15, 0.35, 0.55, 0.75],
      },
    )

    for (const section of sections) {
      observer.observe(section)
    }

    return () => {
      observer.disconnect()
      visibility.clear()
    }
  }, [])

  return activeId
}
