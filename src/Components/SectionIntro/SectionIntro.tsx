import type { ReactNode } from 'react'
import { ScrollReveal } from '../ScrollReveal/ScrollReveal'
import styles from './SectionIntro.module.css'

type SectionIntroProps = {
  eyebrow: string
  title: string
  lead: ReactNode
  titleId?: string
  className?: string
  children?: ReactNode
  reveal?: boolean
  titleDelayMs?: number
  leadDelayMs?: number
  titleMotion?: 'rise' | 'wipe'
}

function joinClassNames(...classNames: Array<string | undefined>) {
  return classNames.filter(Boolean).join(' ')
}

export function SectionIntro({
  eyebrow,
  title,
  lead,
  titleId,
  className,
  children,
  reveal = true,
  titleDelayMs = 70,
  leadDelayMs = 120,
  titleMotion,
}: SectionIntroProps) {
  const rootClassName = joinClassNames(styles.root, className)

  if (!reveal) {
    return (
      <header className={rootClassName}>
        <p className={styles.eyebrow}>{eyebrow}</p>
        <h1 id={titleId}>{title}</h1>
        <span className={`${styles.titleLine} ${styles.titleLineStatic}`} aria-hidden="true" />
        <p className={styles.lead}>{lead}</p>
        {children}
      </header>
    )
  }

  return (
    <header className={rootClassName} data-title-motion={titleMotion}>
      <ScrollReveal from="up">
        <p className={styles.eyebrow}>{eyebrow}</p>
      </ScrollReveal>
      <ScrollReveal delayMs={titleDelayMs} from="up">
        <h1 id={titleId}>{title}</h1>
        <span className={styles.titleLine} aria-hidden="true" />
      </ScrollReveal>
      <ScrollReveal delayMs={leadDelayMs} from="up">
        <p className={styles.lead}>{lead}</p>
      </ScrollReveal>
      {children}
    </header>
  )
}
