import styles from '../../SummaryPage.module.css'
import { SIDE_ROCK_SUMMARY_CONTENT } from '../../Content/summaryContent'

export function SummaryFooter() {
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
        {SIDE_ROCK_SUMMARY_CONTENT.repertoire.map((artist) => (
          <span key={artist}>{artist}</span>
        ))}
      </div>
    </section>
  )
}
