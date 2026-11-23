import type { MouseEvent } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const pageExits = new WeakMap<HTMLElement, Animation>()

export function useSectionNavigation(path: string, load: () => Promise<unknown>) {
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const preload = () => {
    if (pathname !== path) void load().catch(() => undefined)
  }

  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    if (
      event.defaultPrevented || event.button !== 0 || event.metaKey ||
      event.ctrlKey || event.shiftKey || event.altKey || pathname === path ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) return

    const page = event.currentTarget.closest('main')
      ?.querySelector<HTMLElement>('[data-side-rock-entrance]')
    if (!page?.animate) return

    event.preventDefault()
    preload()
    pageExits.get(page)?.cancel()
    const exit = page.animate(
      [{ opacity: getComputedStyle(page).opacity }, { opacity: 0.12 }],
      { duration: 140, easing: 'ease-in', fill: 'forwards' },
    )
    pageExits.set(page, exit)
    void exit.finished.then(() => {
      if (page.isConnected && pageExits.get(page) === exit) {
        void navigate(path)
        window.setTimeout(() => exit.cancel(), 250)
      }
    }, () => undefined)
  }

  return { onClick: handleClick, onPointerEnter: preload, onFocus: preload }
}
