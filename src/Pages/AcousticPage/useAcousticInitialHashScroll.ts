import { useLayoutEffect } from 'react'

function readLocationHashId() {
  const raw = window.location.hash
  if (!raw || raw === '#') {
    return null
  }

  const withoutHash = raw.slice(1)

  try {
    return decodeURIComponent(withoutHash)
  } catch {
    return withoutHash
  }
}

/**
 * Resolves deep links after React.lazy mounts AcousticPage.
 * The browser may try to scroll to the hash before the section exists;
 * this re-applies an instant scroll once the DOM is ready.
 */
export function useAcousticInitialHashScroll() {
  useLayoutEffect(() => {
    const id = readLocationHashId()
    if (!id) {
      return
    }

    const target = document.getElementById(id)
    if (!target) {
      return
    }

    const root = document.documentElement
    const previousBehavior = root.style.scrollBehavior
    root.style.scrollBehavior = 'auto'
    target.scrollIntoView({ block: 'start', behavior: 'auto' })
    root.style.scrollBehavior = previousBehavior
  }, [])
}
