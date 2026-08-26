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

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry) return

        const passedViewport = Boolean(
          entry.rootBounds &&
            entry.boundingClientRect.top < entry.rootBounds.top,
        )

        if (!entry.isIntersecting && !passedViewport) return
        observer.disconnect()
        setState('in')
      },
      {
        root: getScrollRoot(node),
        threshold: 0.1,
        rootMargin: '0px 0px -6% 0px',
      },
    )

    const frame = window.requestAnimationFrame(() => observer.observe(node))

    return () => {
      window.cancelAnimationFrame(frame)
      observer.disconnect()
    }
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
