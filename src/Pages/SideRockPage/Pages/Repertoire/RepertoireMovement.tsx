import { ScrollReveal } from '../../../../Components/ScrollReveal/ScrollReveal'
import { BandLogoGrid } from './BandLogoGrid'
import type { RepertoireMovement as Movement } from './repertoireContent'
import styles from './RepertoirePage.module.css'

export function RepertoireMovement({ movement }: { movement: Movement }) {
  return (
    <section
      id={movement.id}
      className={styles.movement}
      data-tone={movement.tone}
      aria-labelledby={`${movement.id}-title`}
    >
      <div className={styles.movementAtmosphere} aria-hidden />
      <div className={styles.movementInner}>
        <div className={styles.movementCopy}>
          <ScrollReveal className={styles.movementMeta} from="left">
            <p>{movement.eyebrow}</p>
          </ScrollReveal>
          <ScrollReveal delayMs={45} from="left">
            <h2
              id={`${movement.id}-title`}
              className={styles.movementTitle}
            >
              {movement.title}
            </h2>
          </ScrollReveal>
          <ScrollReveal delayMs={75} from="left">
            <p className={styles.movementBody}>{movement.body}</p>
          </ScrollReveal>
        </div>
        <BandLogoGrid bands={movement.bands} movementTitle={movement.title} />
      </div>
    </section>
  )
}
