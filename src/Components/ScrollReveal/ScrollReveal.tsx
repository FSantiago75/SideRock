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
  ready?: boolean
  respectClipping?: boolean
}

type RevealStyle = CSSProperties & {
  '--reveal-delay': string
}

type RevealState = 'idle' | 'ready' | 'in'

const REVEAL_RATIO = 0.1

function getScrollRoot(node: Element): Element | null {
  return node.closest('main')
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
  ready = true,
  respectClipping = false,
}: ScrollRevealProps) {
  const nodeRef = useRef<HTMLDivElement>(null)
  const [state, setState] = useState<RevealState>(getInitialRevealState)

  useEffect(() => {
    const node = nodeRef.current
    if (!node || !ready) return
    if (typeof IntersectionObserver === 'undefined') {
      const frame = window.requestAnimationFrame(() => setState('in'))
      return () => window.cancelAnimationFrame(frame)
    }

    const target = node
    const root = getScrollRoot(target)
    const rootHeight = root?.clientHeight ?? document.documentElement.clientHeight

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry) return
        const visible = entry.isIntersecting && entry.intersectionRatio >= REVEAL_RATIO
        const above = entry.rootBounds && entry.boundingClientRect.bottom <= entry.rootBounds.top
        if (!visible && (respectClipping || !above)) return
        observer.disconnect()
        setState('in')
      },
      {
        root,
        threshold: REVEAL_RATIO,
        rootMargin: `0px 0px -${rootHeight * 0.06}px 0px`,
      },
    )

    observer.observe(target)
    return () => observer.disconnect()
  }, [ready, respectClipping])

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
