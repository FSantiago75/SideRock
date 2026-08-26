import { useCallback, useEffect, useRef, useState } from 'react'
import { VIEWPORT_MOBILE_MAX_PX } from '../../../../utils/viewport'
import { SIDE_ROCK_MEMBERS, type MemberId } from './membersContent'

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

function getAdjacentMember(id: MemberId, direction: 1 | -1): MemberId {
  const currentIndex = SIDE_ROCK_MEMBERS.findIndex((member) => member.id === id)
  const nextIndex =
    (currentIndex + direction + SIDE_ROCK_MEMBERS.length) %
    SIDE_ROCK_MEMBERS.length

  return SIDE_ROCK_MEMBERS[nextIndex].id
}

export function useMemberSpotlight() {
  const firstMemberId = SIDE_ROCK_MEMBERS[0].id
  const activeIdRef = useRef<MemberId>(firstMemberId)
  const [activeId, setActiveId] = useState<MemberId>(firstMemberId)
  const [lockedId, setLockedId] = useState<MemberId | null>(null)
  const [isAutomaticMode, setIsAutomaticMode] = useState(shouldAutoRotate)
  const [isPageVisible, setIsPageVisible] = useState(
    () => typeof document === 'undefined' || document.visibilityState === 'visible',
  )

  const activate = useCallback((id: MemberId) => {
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
    (id: MemberId | null) => {
      if (!id || isAutomaticMode || lockedId) return
      activate(id)
    },
    [activate, isAutomaticMode, lockedId],
  )

  const select = useCallback(
    (id: MemberId) => {
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
