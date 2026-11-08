import { useEffect, useRef, useState } from 'react'
import { useMediaQuery } from '../../../../../../../hooks/useMediaQuery'
import { VIEWPORT_MOBILE_MAX_PX } from '../../../../../../../utils/viewport'
import { OZZBORN_SUMMARY_CHAPTERS as atmospheres } from '../../../Content/ozzbornDiscographyPreview'

const ROTATION_INTERVAL_MS = 6000

export function useDiscographyPreview() {
  const isMobile = useMediaQuery(`(max-width: ${VIEWPORT_MOBILE_MAX_PX}px)`)
  const reducedMotion = useMediaQuery('(prefers-reduced-motion: reduce)')
  const [active, setActive] = useState('origens')
  const [hovered, setHovered] = useState(false)
  const [focused, setFocused] = useState(false)
  const previewRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const preview = previewRef.current
    if (!preview || !isMobile || reducedMotion || hovered || focused) return

    let visible = false
    const observer = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting && entry.intersectionRatio >= 0.35
      },
      { root: preview.closest('main'), threshold: 0.35 },
    )
    observer.observe(preview)
    const timer = window.setInterval(() => {
      if (!visible || document.hidden) return
      setActive((current) => {
        const index = atmospheres.findIndex((item) => item.id === current)
        return atmospheres[(index + 1) % atmospheres.length].id
      })
    }, ROTATION_INTERVAL_MS)

    return () => {
      observer.disconnect()
      window.clearInterval(timer)
    }
  }, [hovered, focused, isMobile, reducedMotion])

  return { active, setActive, previewRef, setHovered, setFocused }
}
