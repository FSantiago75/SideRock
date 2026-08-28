import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type RefObject,
} from 'react'
import { VIEWPORT_MOBILE_MAX_PX } from '../../../utils/viewport'
import {
  getOzzbornMemberById,
  OZZBORN_MEMBERS,
  type OzzbornMemberId,
} from '../ozzbornContent'

const ROTATION_INTERVAL_MS = 7500
const TOUCH_QUERY = '(hover: none), (pointer: coarse)'
const MOBILE_QUERY = `(max-width: ${VIEWPORT_MOBILE_MAX_PX}px)`
const REDUCED_MOTION_QUERY = '(prefers-reduced-motion: reduce)'

function shouldAutoRotate() {
  if (typeof window === 'undefined') {
    return false
  }

  if (window.matchMedia(REDUCED_MOTION_QUERY).matches) {
    return false
  }

  return (
    window.matchMedia(TOUCH_QUERY).matches ||
    window.matchMedia(MOBILE_QUERY).matches
  )
}

function getAdjacentMember(
  id: OzzbornMemberId,
  direction: 1 | -1,
): OzzbornMemberId {
  const currentIndex = OZZBORN_MEMBERS.findIndex((member) => member.id === id)
  const nextIndex =
    (currentIndex + direction + OZZBORN_MEMBERS.length) % OZZBORN_MEMBERS.length

  return OZZBORN_MEMBERS[nextIndex].id
}

type UseOzzbornFormationSpotlightOptions = {
  rootRef: RefObject<HTMLElement | null>
}

export function useOzzbornFormationSpotlight({
  rootRef,
}: UseOzzbornFormationSpotlightOptions) {
  const firstMemberId = OZZBORN_MEMBERS[0].id
  const activeIdRef = useRef<OzzbornMemberId>(firstMemberId)
  const [activeId, setActiveId] = useState<OzzbornMemberId>(firstMemberId)
  const [lockedId, setLockedId] = useState<OzzbornMemberId | null>(null)
  const [isAutomaticMode, setIsAutomaticMode] = useState(shouldAutoRotate)
  const [isPageVisible, setIsPageVisible] = useState(
    () =>
      typeof document === 'undefined' || document.visibilityState === 'visible',
  )
  const [isSectionVisible, setIsSectionVisible] = useState(false)

  const activate = useCallback((id: OzzbornMemberId) => {
    if (id === activeIdRef.current) {
      return
    }

    activeIdRef.current = id
    setActiveId(id)
  }, [])

  useEffect(() => {
    const touchQuery = window.matchMedia(TOUCH_QUERY)
    const mobileQuery = window.matchMedia(MOBILE_QUERY)
    const reducedMotionQuery = window.matchMedia(REDUCED_MOTION_QUERY)

    const syncMode = () => {
      setIsAutomaticMode(shouldAutoRotate())
    }

    syncMode()
    touchQuery.addEventListener('change', syncMode)
    mobileQuery.addEventListener('change', syncMode)
    reducedMotionQuery.addEventListener('change', syncMode)

    return () => {
      touchQuery.removeEventListener('change', syncMode)
      mobileQuery.removeEventListener('change', syncMode)
      reducedMotionQuery.removeEventListener('change', syncMode)
    }
  }, [])

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
    const root = rootRef.current
    if (!root) {
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsSectionVisible(entry.isIntersecting && entry.intersectionRatio >= 0.25)
      },
      {
        threshold: [0, 0.25, 0.5],
        rootMargin: '0px',
      },
    )

    observer.observe(root)

    return () => {
      observer.disconnect()
    }
  }, [rootRef])

  useEffect(() => {
    if (
      !isAutomaticMode ||
      lockedId ||
      !isPageVisible ||
      !isSectionVisible
    ) {
      return
    }

    const interval = window.setInterval(() => {
      activate(getAdjacentMember(activeIdRef.current, 1))
    }, ROTATION_INTERVAL_MS)

    return () => {
      window.clearInterval(interval)
    }
  }, [
    activate,
    isAutomaticMode,
    isPageVisible,
    isSectionVisible,
    lockedId,
  ])

  const hover = useCallback(
    (id: OzzbornMemberId | null) => {
      if (!id || isAutomaticMode || lockedId) {
        return
      }

      activate(id)
    },
    [activate, isAutomaticMode, lockedId],
  )

  const select = useCallback(
    (id: OzzbornMemberId) => {
      activate(id)
      setLockedId((currentId) => (currentId === id ? null : id))
    },
    [activate],
  )

  const activateFromKeyboard = useCallback(
    (id: OzzbornMemberId) => {
      activate(id)
      setLockedId((currentId) => (currentId ? id : currentId))
    },
    [activate],
  )

  const step = useCallback((direction: 1 | -1) => {
    const nextId = getAdjacentMember(activeIdRef.current, direction)
    activeIdRef.current = nextId
    setActiveId(nextId)
    setLockedId(nextId)
  }, [])

  return {
    activeId,
    activeMember: getOzzbornMemberById(activeId),
    hover,
    isAutomaticMode,
    isLocked: lockedId !== null,
    next: () => step(1),
    previous: () => step(-1),
    select,
    activateFromKeyboard,
  }
}
