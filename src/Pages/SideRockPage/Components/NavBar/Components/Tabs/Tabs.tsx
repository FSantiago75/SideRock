import type { MouseEvent } from 'react'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import { sideRockSectionLoaders } from '../../../../sectionLoaders'
import {
  SIDE_ROCK_SECTION_LABELS,
  sideRockPath,
  type SideRockSectionId,
} from '../../../../sectionConstants'
import styles from './Tabs.module.css'

type TabsProps = {
  id: SideRockSectionId
  index: number
}

const pageExits = new WeakMap<HTMLElement, Animation>()

export function Tabs({ id, index }: TabsProps) {
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const path = sideRockPath(id)
  const preload = () => {
    if (pathname !== path) void sideRockSectionLoaders[id]().catch(() => undefined)
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

  return (
    <>
      {index > 0 ? (
        <span className={styles.separator} aria-hidden>
          ●
        </span>
      ) : null}
      <NavLink
        to={path}
        onClick={handleClick}
        onPointerEnter={preload}
        onFocus={preload}
        end
        className={({ isActive }) =>
          `${styles.tab} ${isActive ? styles.tabActive : ''}`
        }
      >
        <span className={styles.tabLabel}>
          {SIDE_ROCK_SECTION_LABELS[id]}
        </span>
        <span className={styles.activeLine} aria-hidden />
      </NavLink>
    </>
  )
}
