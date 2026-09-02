import { useCallback, useEffect, useRef, useState } from 'react'
import { VIEWPORT_MOBILE_MAX_PX } from '../../../../utils/viewport'
import {
  OZZBORN_MEMBERS,
  type OzzbornMemberId,
} from './ozzbornMembersContent'

const ROTATION_INTERVAL_MS = 8000
const TOUCH_QUERY = '(hover: none), (pointer: coarse)'
const MOBILE_QUERY = `(max-width: ${VIEWPORT_MOBILE_MAX_PX}px)`

function shouldAutoRotate() {
  if (typeof window === 'undefined') return false

  return (
    window.matchMedia(TOUCH_QUERY).matches ||
    window.matchMedia(MOBILE_QUERY).matches
  )
}

function getAdjacentMember(id: OzzbornMemberId, direction: 1 | -1): OzzbornMemberId {
  const currentIndex = OZZBORN_MEMBERS.findIndex((member) => member.id === id)
  const nextIndex =
    (currentIndex + direction + OZZBORN_MEMBERS.length) %
    OZZBORN_MEMBERS.length

  return OZZBORN_MEMBERS[nextIndex].id
}

export function useOzzbornMemberSpotlight() {
  const firstMemberId = OZZBORN_MEMBERS[0].id
  const activeIdRef = useRef<OzzbornMemberId>(firstMemberId)
  const [activeId, setActiveId] = useState<OzzbornMemberId>(firstMemberId)
  const [lockedId, setLockedId] = useState<OzzbornMemberId | null>(null)
  const [isAutomaticMode, setIsAutomaticMode] = useState(shouldAutoRotate)
  const [isPageVisible, setIsPageVisible] = useState(
    () => typeof document === 'undefined' || document.visibilityState === 'visible',
  )

  const activate = useCallback((id: OzzbornMemberId) => {
    if (id === activeIdRef.current) return
    activeIdRef.current = id
    setActiveId(id)
  }, [])

  useEffect(() => {
    const touchQuery = window.matchMedia(TOUCH_QUERY)
    const mobileQuery = window.matchMedia(MOBILE_QUERY)
    const syncMode = () => setIsAutomaticMode(shouldAutoRotate())

    syncMode()
    touchQuery.addEventListener('change', syncMode)
    mobileQuery.addEventListener('change', syncMode)

    return () => {
      touchQuery.removeEventListener('change', syncMode)
      mobileQuery.removeEventListener('change', syncMode)
    }
  }, [])

  useEffect(() => {
    const syncVisibility = () => {
      setIsPageVisible(document.visibilityState === 'visible')
    }

    document.addEventListener('visibilitychange', syncVisibility)
    return () => document.removeEventListener('visibilitychange', syncVisibility)
  }, [])

  useEffect(() => {
    if (!isAutomaticMode || lockedId || !isPageVisible) return

    const interval = window.setInterval(() => {
      activate(getAdjacentMember(activeIdRef.current, 1))
    }, ROTATION_INTERVAL_MS)

    return () => window.clearInterval(interval)
  }, [activate, isAutomaticMode, isPageVisible, lockedId])

  const hover = useCallback(
    (id: OzzbornMemberId | null) => {
      if (!id || isAutomaticMode || lockedId) return
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

  const lockActive = useCallback(() => {
    setLockedId(activeIdRef.current)
  }, [])

  const unlock = useCallback(() => {
    setLockedId(null)
  }, [])

  const step = useCallback((direction: 1 | -1) => {
    const nextId = getAdjacentMember(activeIdRef.current, direction)
    activeIdRef.current = nextId
    setActiveId(nextId)
    setLockedId(nextId)
  }, [])

  return {
    activeId,
    hover,
    isAutomaticMode,
    isLocked: lockedId !== null,
    lockActive,
    next: () => step(1),
    previous: () => step(-1),
    select,
    unlock,
  }
}
