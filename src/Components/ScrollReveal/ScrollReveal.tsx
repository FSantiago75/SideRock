import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from 'react'
import styles from './ScrollReveal.module.css'

type RevealFrom = 'up' | 'left' | 'right' | 'scale' | 'none'

type ScrollRevealProps = {
  children: ReactNode
  className?: string
  delayMs?: number
  from?: RevealFrom
}

type RevealStyle = CSSProperties & {
  '--reveal-delay': string
}

type RevealState = 'idle' | 'ready' | 'in'

const REVEAL_RATIO = 0.1
const ROOT_MARGIN_BOTTOM = 0.06

function getScrollRoot(node: Element): Element | null {
  return node.closest('main')
}

function shouldRevealNode(node: Element, root: Element | null): boolean {
  const rootRect = (root ?? node.ownerDocument.documentElement).getBoundingClientRect()
  const viewTop = rootRect.top
  const viewBottom = rootRect.bottom - rootRect.height * ROOT_MARGIN_BOTTOM
  const rect = node.getBoundingClientRect()

  if (rect.bottom <= viewTop) return true

  const overlap = Math.min(rect.bottom, viewBottom) - Math.max(rect.top, viewTop)
  if (overlap <= 0) return false
  return overlap / Math.max(rect.height, 1) >= REVEAL_RATIO
}

function getInitialRevealState(): RevealState {
  if (typeof window === 'undefined') return 'idle'
  return 'ready'
}

export function ScrollReveal({
  children,
  className,
  delayMs = 0,
  from = 'up',
}: ScrollRevealProps) {
  const nodeRef = useRef<HTMLDivElement>(null)
  const [state, setState] = useState<RevealState>(getInitialRevealState)

  useEffect(() => {
    const node = nodeRef.current
    if (!node) return
    if (typeof IntersectionObserver === 'undefined') {
      const frame = window.requestAnimationFrame(() => setState('in'))
      return () => window.cancelAnimationFrame(frame)
    }

    const target = node
    const root = getScrollRoot(target)
    let frame = 0

    const observer = new IntersectionObserver(
      () => {
        revealIfVisible()
      },
      {
        root,
        threshold: REVEAL_RATIO,
        rootMargin: '0px 0px -6% 0px',
      },
    )

    function cleanup() {
      window.cancelAnimationFrame(frame)
      observer.disconnect()
      root?.removeEventListener('scroll', revealIfVisible)
    }

    function revealIfVisible() {
      if (!shouldRevealNode(target, root)) return
      cleanup()
      setState('in')
    }

    frame = window.requestAnimationFrame(() => {
      observer.observe(target)
      root?.addEventListener('scroll', revealIfVisible, { passive: true })
      revealIfVisible()
    })

    return cleanup
  }, [])

  const style: RevealStyle = {
    '--reveal-delay': `${delayMs}ms`,
  }

  return (
    <div
      ref={nodeRef}
      className={className ? `${styles.root} ${className}` : styles.root}
      data-from={from}
      data-reveal={state}
      style={style}
    >
      {children}
    </div>
  )
}
