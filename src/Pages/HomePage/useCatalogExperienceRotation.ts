import { useEffect, useRef, useState, type Dispatch, type SetStateAction } from 'react'
import { VIEWPORT_MOBILE_MAX_PX } from '../../utils/viewport'
import { HOME_EXPERIENCES, type HomeExperienceId } from './homeExperiences'

const ROTATION_INTERVAL_MS = 5000
const TOUCH_CATALOG_QUERY = '(hover: none), (pointer: coarse)'
const NARROW_CATALOG_QUERY = `(max-width: ${VIEWPORT_MOBILE_MAX_PX}px)`

type UseCatalogExperienceRotationParams = {
  onChange: Dispatch<SetStateAction<HomeExperienceId | null>>
}

function getFirstExperienceId(): HomeExperienceId {
  return HOME_EXPERIENCES[0].id
}

function getNextExperienceId(
  currentId: HomeExperienceId | null,
): HomeExperienceId {
  const currentIndex = HOME_EXPERIENCES.findIndex(
    (experience) => experience.id === currentId,
  )
  const nextIndex =
    currentIndex < 0 ? 0 : (currentIndex + 1) % HOME_EXPERIENCES.length

  return HOME_EXPERIENCES[nextIndex].id
}

function shouldRotateCatalog(): boolean {
  if (typeof window === 'undefined') {
    return false
  }

  return (
    window.matchMedia(TOUCH_CATALOG_QUERY).matches ||
    window.matchMedia(NARROW_CATALOG_QUERY).matches
  )
}

export function getInitialCatalogExperience(): HomeExperienceId | null {
  if (!shouldRotateCatalog()) {
    return null
  }

  return getFirstExperienceId()
}

export function useCatalogExperienceRotation({
  onChange,
}: UseCatalogExperienceRotationParams) {
  const wasRotatingRef = useRef(shouldRotateCatalog())
  const [isAutomaticRotation, setIsAutomaticRotation] = useState(
    shouldRotateCatalog,
  )
  const [isPaused, setIsPaused] = useState(false)
  const [isPageVisible, setIsPageVisible] = useState(
    () => document.visibilityState === 'visible',
  )

  useEffect(() => {
    const touchQuery = window.matchMedia(TOUCH_CATALOG_QUERY)
    const narrowQuery = window.matchMedia(NARROW_CATALOG_QUERY)

    const syncRotationMode = () => {
      const shouldRotate = shouldRotateCatalog()
      const wasRotating = wasRotatingRef.current

      wasRotatingRef.current = shouldRotate
      setIsAutomaticRotation(shouldRotate)

      if (!shouldRotate) {
        if (wasRotating) {
          onChange(null)
        }

        return
      }

      onChange((current) => current ?? getFirstExperienceId())
    }

    syncRotationMode()
    touchQuery.addEventListener('change', syncRotationMode)
    narrowQuery.addEventListener('change', syncRotationMode)

    return () => {
      touchQuery.removeEventListener('change', syncRotationMode)
      narrowQuery.removeEventListener('change', syncRotationMode)
    }
  }, [onChange])

  useEffect(() => {
    const syncVisibility = () => {
      setIsPageVisible(document.visibilityState === 'visible')
    }

    document.addEventListener('visibilitychange', syncVisibility)

    return () => {
      document.removeEventListener('visibilitychange', syncVisibility)
    }
  }, [])

  useEffect(() => {
    if (!isPaused) {
      return
    }

    const resumeRotation = () => setIsPaused(false)

    window.addEventListener('pointerup', resumeRotation)
    window.addEventListener('pointercancel', resumeRotation)

    return () => {
      window.removeEventListener('pointerup', resumeRotation)
      window.removeEventListener('pointercancel', resumeRotation)
    }
  }, [isPaused])

  useEffect(() => {
    if (!isAutomaticRotation || isPaused || !isPageVisible) {
      return
    }

    const intervalId = window.setInterval(() => {
      onChange((current) => getNextExperienceId(current))
    }, ROTATION_INTERVAL_MS)

    return () => {
      window.clearInterval(intervalId)
    }
  }, [isAutomaticRotation, isPageVisible, isPaused, onChange])

  return {
    isAutomaticRotation,
    pauseRotation: () => setIsPaused(true),
  }
}
