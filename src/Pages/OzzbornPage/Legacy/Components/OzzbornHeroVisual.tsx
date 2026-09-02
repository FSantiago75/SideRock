import { OZZBORN_ASSETS } from '../ozzbornContent'
import styles from '../OzzbornPage.module.css'

function CrownMotif({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 240 56"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M18 42 48 10l28 22 44-28 44 28 28-22 30 32"
        stroke="currentColor"
        strokeWidth="1.15"
        strokeLinejoin="round"
      />
      <path d="M28 42h184" stroke="currentColor" strokeWidth="1.4" />
      <path
        d="M120 8l4 10h10l-8 6 3 10-9-6-9 6 3-10-8-6h10z"
        fill="currentColor"
        opacity="0.85"
      />
    </svg>
  )
}

function PortalArch({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 400 620"
      fill="none"
      aria-hidden="true"
      focusable="false"
      preserveAspectRatio="none"
    >
      <path
        d="M28 612V196C28 78 122 22 200 22s172 56 172 174v416"
        stroke="currentColor"
        strokeWidth="1.15"
      />
      <path
        d="M42 612V200C42 92 128 36 200 36s158 56 158 164v412"
        stroke="currentColor"
        strokeWidth="0.7"
        opacity="0.45"
      />
    </svg>
  )
}

export function OzzbornHeroVisual() {
  const { formationNeutral } = OZZBORN_ASSETS

  return (
    <div className={styles.heroVisual} data-reveal="image" data-reveal-delay="2">
      <div className={styles.heroBeams} aria-hidden="true" />
      <div className={styles.heroHalo} aria-hidden="true" />
      <CrownMotif className={styles.heroCrown} />
      <div className={styles.heroPortal}>
        <PortalArch className={styles.heroPortalArch} />
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
      </div>
      <div className={styles.heroMist} aria-hidden="true" />
      <div className={styles.heroStrings} aria-hidden="true" />
    </div>
  )
}
