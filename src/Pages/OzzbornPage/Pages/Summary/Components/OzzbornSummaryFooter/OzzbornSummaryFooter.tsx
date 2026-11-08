import styles from '../../OzzbornSummaryPage.module.css'
import { OZZBORN_SUMMARY_CONTENT } from '../../Content/ozzbornSummaryContent'

export function OzzbornSummaryFooter() {
  return (
    <section
      className={styles.repertoire}
      aria-label="Referências do repertório"
    >
      <div
        className={styles.repertoireTrack}
        tabIndex={0}
        aria-label="Deslize para explorar as referências do repertório"
      >
        {OZZBORN_SUMMARY_CONTENT.repertoire.map((artist) => (
          <span key={artist}>{artist}</span>
        ))}
      </div>
    </section>
  )
}
