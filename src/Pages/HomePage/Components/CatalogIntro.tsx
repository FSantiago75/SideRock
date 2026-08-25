import { HOME_EXPERIENCES } from '../homeExperiences'
import styles from '../styles.module.css'

export function CatalogIntro() {
  const experienceCount = HOME_EXPERIENCES.length

  return (
    <header className={styles.intro}>
      <div className={styles.introMeta}>
        <span className={styles.eyebrow}>Portfólio musical</span>
        <span className={styles.experienceCount}>
          <span aria-hidden>{String(experienceCount).padStart(2, '0')}</span>
          <span className={styles.srOnly}>{experienceCount}</span> experiências
        </span>
      </div>

      <div className={styles.titleRow}>
        <h1
          className={styles.title}
          aria-label="Qual experiência o seu evento pede?"
        >
          <span className={styles.titleLine}>
            <span className={styles.titleWord}>Qual</span>{' '}
            <span className={styles.titleWord}>experiência</span>
          </span>
          <span className={`${styles.titleLine} ${styles.titleQuestion}`}>
            <span className={styles.titleWord}>O seu evento</span>{' '}
            <span className={styles.titleWord}>pede?</span>
          </span>
        </h1>
        <p className={styles.lead}>
          Escolha a atmosfera. Nós levamos repertório, presença e uma
          experiência ao vivo pensada para o seu público.
        </p>
      </div>
    </header>
  )
}
