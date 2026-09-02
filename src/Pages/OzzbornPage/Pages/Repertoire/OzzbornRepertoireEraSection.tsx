import { ScrollReveal } from '../../../../Components/ScrollReveal/ScrollReveal'
import type { OzzbornRepertoireEra } from './ozzbornRepertoireContent'
import { OzzbornRepertoireAlbumGrid } from './OzzbornRepertoireAlbumCard'
import styles from './OzzbornRepertoirePage.module.css'

type OzzbornRepertoireEraSectionProps = {
  era: OzzbornRepertoireEra
  index: number
}

export function OzzbornRepertoireEraSection({
  era,
  index,
}: OzzbornRepertoireEraSectionProps) {
  return (
    <section
      id={era.id}
      className={styles.era}
      data-tone={era.tone}
      aria-labelledby={`${era.id}-title`}
    >
      <div className={styles.eraAtmosphere} aria-hidden />
      <div className={styles.eraNumber} aria-hidden>0{index + 1}</div>

      <div className={styles.eraInner}>
        <div className={styles.eraCopy}>
          <ScrollReveal className={styles.eraMeta} from="left">
            <p>
              Era {index + 1}
              <span aria-hidden> · </span>
              {era.period}
            </p>
          </ScrollReveal>

          <ScrollReveal delayMs={45} from="left">
            <h2 id={`${era.id}-title`} className={styles.eraTitle}>
              {era.title}
            </h2>
          </ScrollReveal>

          <ScrollReveal delayMs={75} from="left">
            <p className={styles.eraNarrative}>{era.narrative}</p>
          </ScrollReveal>

          <ScrollReveal delayMs={105} from="left">
            <p className={styles.eraRole}>
              <span>No palco</span>
              {era.showRole.slice(0, 2).join(' · ')}
            </p>
          </ScrollReveal>
        </div>

        <OzzbornRepertoireAlbumGrid albums={era.albums} era={era} />
      </div>
    </section>
  )
}
