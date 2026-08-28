import { useEffect } from 'react'
import { OZZBORN_PAGE_META } from '../ozzbornContent'

export function useOzzbornDocumentMeta() {
  useEffect(() => {
    const previousTitle = document.title
    const descriptionElement = document.querySelector(
      'meta[name="description"]',
    )
    const previousDescription =
      descriptionElement?.getAttribute('content') ?? null
    const existingCanonical = document.querySelector(
      'link[rel="canonical"]',
    ) as HTMLLinkElement | null
    const previousCanonical = existingCanonical?.href ?? null

    let canonicalElement = existingCanonical
    if (!canonicalElement) {
      canonicalElement = document.createElement('link')
      canonicalElement.rel = 'canonical'
      document.head.appendChild(canonicalElement)
    }

    document.title = OZZBORN_PAGE_META.title
    canonicalElement.href = `${window.location.origin}/ozzborn`

    if (descriptionElement) {
      descriptionElement.setAttribute('content', OZZBORN_PAGE_META.description)
    }

    return () => {
      document.title = previousTitle

      if (descriptionElement && previousDescription !== null) {
        descriptionElement.setAttribute('content', previousDescription)
      }

      if (existingCanonical) {
        existingCanonical.href = previousCanonical ?? ''
      } else if (canonicalElement.parentNode) {
        canonicalElement.parentNode.removeChild(canonicalElement)
      }
    }
  }, [])
}
