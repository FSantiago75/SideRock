import { useEffect } from 'react'
import { ACOUSTIC_PAGE_META } from './acousticContent'

export function useAcousticDocumentMeta() {
  useEffect(() => {
    const previousTitle = document.title
    const descriptionElement = document.querySelector(
      'meta[name="description"]',
    )
    const previousDescription =
      descriptionElement?.getAttribute('content') ?? null

    document.title = ACOUSTIC_PAGE_META.title

    if (descriptionElement) {
      descriptionElement.setAttribute(
        'content',
        ACOUSTIC_PAGE_META.description,
      )
    }

    return () => {
      document.title = previousTitle

      if (descriptionElement && previousDescription !== null) {
        descriptionElement.setAttribute('content', previousDescription)
      }
    }
  }, [])
}
