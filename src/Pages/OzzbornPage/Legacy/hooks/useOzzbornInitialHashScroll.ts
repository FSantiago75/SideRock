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

export function useOzzbornInitialHashScroll() {
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
