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
}: SectionIntroProps) {
  const rootClassName = joinClassNames(styles.root, className)

  if (!reveal) {
    return (
      <header className={rootClassName}>
        <p className={styles.eyebrow}>{eyebrow}</p>
        <h1 id={titleId}>{title}</h1>
        <p className={styles.lead}>{lead}</p>
        {children}
      </header>
    )
  }

  return (
    <header className={rootClassName}>
      <ScrollReveal from="up">
        <p className={styles.eyebrow}>{eyebrow}</p>
      </ScrollReveal>
      <ScrollReveal delayMs={titleDelayMs} from="up">
        <h1 id={titleId}>{title}</h1>
      </ScrollReveal>
      <ScrollReveal delayMs={leadDelayMs} from="up">
        <p className={styles.lead}>{lead}</p>
      </ScrollReveal>
      {children}
    </header>
  )
}
