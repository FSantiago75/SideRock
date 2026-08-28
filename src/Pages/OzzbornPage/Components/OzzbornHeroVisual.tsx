import { OZZBORN_ASSETS } from '../ozzbornContent'
import styles from '../OzzbornPage.module.css'

function WingMotif({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 800 420"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M400 48c-42 54-118 92-214 118-62 17-122 40-158 78 48-8 98-6 146 10 58 20 108 52 142 94 8-56 34-104 84-146Z"
        stroke="currentColor"
        strokeWidth="1.2"
        opacity="0.55"
      />
      <path
        d="M400 48c42 54 118 92 214 118 62 17 122 40 158 78-48-8-98-6-146 10-58 20-108 52-142 94-8-56-34-104-84-146Z"
        stroke="currentColor"
        strokeWidth="1.2"
        opacity="0.55"
      />
      <path
        d="M400 70c-36 46-98 78-178 98-48 12-94 30-124 58 34-4 70-2 104 10 48 16 90 44 118 80 6-46 28-86 80-122Z"
        stroke="currentColor"
        strokeWidth="0.8"
        opacity="0.35"
      />
      <path
        d="M400 70c36 46 98 78 178 98 48 12 94 30 124 58-34-4-70-2-104 10-48 16-90 44-118 80-6-46-28-86-80-122Z"
        stroke="currentColor"
        strokeWidth="0.8"
        opacity="0.35"
      />
      <path
        d="M372 40h56l-28 56-28-56Z"
        fill="currentColor"
        opacity="0.45"
      />
    </svg>
  )
}

export function OzzbornHeroVisual() {
  const { formationNeutral } = OZZBORN_ASSETS

  return (
    <div className={styles.heroVisual} data-reveal="image" data-reveal-delay="2">
      <div className={styles.heroHalo} aria-hidden="true" />
      <WingMotif className={styles.heroWings} />
      <div className={styles.heroFrame}>
        <div className={styles.heroImageStage}>
          <img
            className={styles.heroImage}
            src={formationNeutral.src}
            alt={formationNeutral.alt}
            width={formationNeutral.width}
            height={formationNeutral.height}
            decoding="async"
            loading="eager"
            fetchPriority="high"
          />
        </div>
      </div>
      <div className={styles.heroMist} aria-hidden="true" />
      <div className={styles.heroSilverLines} aria-hidden="true" />
    </div>
  )
}
