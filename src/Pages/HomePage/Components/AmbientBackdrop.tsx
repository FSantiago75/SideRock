import type { CSSProperties } from 'react'
import {
  HOME_EXPERIENCES,
  type ActiveHomeExperienceId,
} from '../homeExperiences'
import styles from '../styles.module.css'

type AmbientBackdropProps = {
  activeExperience: ActiveHomeExperienceId
}

type AmbientLightStyle = CSSProperties & {
  '--ambient-accent': string
}

export function AmbientBackdrop({ activeExperience }: AmbientBackdropProps) {
  return (
    <div className={styles.backdrop} aria-hidden>
      <div className={styles.texture} />
      <div className={styles.ambientLights}>
        <span
          className={styles.ambientLight}
          data-experience="neutral"
          data-visible={activeExperience === null}
        />
        {HOME_EXPERIENCES.map((experience) => {
          const style: AmbientLightStyle = {
            '--ambient-accent': experience.theme.accent,
          }

          return (
            <span
              key={experience.id}
              className={`${styles.ambientLight} ${styles.ambientLightIdentity}`}
              data-visible={experience.id === activeExperience}
              style={style}
            />
          )
        })}
      </div>
    </div>
  )
}
