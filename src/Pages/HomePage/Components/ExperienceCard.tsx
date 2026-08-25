import type { CSSProperties, FocusEvent, PointerEvent } from 'react'
import { HiArrowUpRight } from 'react-icons/hi2'
import { Link } from 'react-router-dom'
import type { HomeExperience } from '../homeExperiences'
import styles from '../styles.module.css'

const CARD_REVEAL_BASE_DELAY_MS = 180
const CARD_REVEAL_STAGGER_MS = 95

type ExperienceCardProps = {
  experience: HomeExperience
  order: number
  isActive: boolean
  enableHover: boolean
  onActivate: (experience: HomeExperience) => void
}

type ExperienceCardStyle = CSSProperties & {
  '--card-accent': string
  '--card-reveal-delay': string
}

export function ExperienceCard({
  experience,
  order,
  isActive,
  enableHover,
  onActivate,
}: ExperienceCardProps) {
  const style: ExperienceCardStyle = {
    '--card-accent': experience.theme.accent,
    '--card-reveal-delay': `${CARD_REVEAL_BASE_DELAY_MS + order * CARD_REVEAL_STAGGER_MS}ms`,
  }

  const handlePointerEnter = (event: PointerEvent<HTMLAnchorElement>) => {
    if (!enableHover || event.pointerType !== 'mouse') {
      return
    }

    onActivate(experience)
  }

  const handleFocus = (event: FocusEvent<HTMLAnchorElement>) => {
    if (!enableHover || !event.currentTarget.matches(':focus-visible')) {
      return
    }

    onActivate(experience)
  }

  return (
    <Link
      to={experience.path}
      className={styles.experienceCard}
      data-experience={experience.id}
      data-active={isActive ? 'true' : undefined}
      onPointerEnter={handlePointerEnter}
      onFocus={handleFocus}
      aria-label={`Conhecer ${experience.name}`}
      style={style}
    >
      <span className={styles.cardGlow} aria-hidden />

      <div className={styles.cardVisual} aria-hidden>
        <span className={styles.orbit} />
        <img src={experience.image} alt="" />
      </div>

      <div className={styles.cardContent}>
        <p className={styles.cardEyebrow}>{experience.eyebrow}</p>
        <h2 className={styles.cardTitle}>{experience.name}</h2>
        <p className={styles.cardDescription}>{experience.description}</p>

        <div className={styles.cardFooter}>
          <span className={styles.idealFor}>{experience.idealFor}</span>
          <span className={styles.cardCta}>
            Conhecer
            <span className={styles.arrow} aria-hidden>
              <HiArrowUpRight />
            </span>
          </span>
        </div>
      </div>
    </Link>
  )
}
