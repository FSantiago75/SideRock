import { ScrollReveal } from '../../../../../../Components/ScrollReveal/ScrollReveal'
import styles from '../../SummaryPage.module.css'
import { BookingAction } from '../BookingAction/BookingAction'
import { BandHeroVisual } from './Components/BandHeroVisual/BandHeroVisual'
import { SIDE_ROCK_SUMMARY_CONTENT } from '../../Content/summaryContent'
import { HiArrowRight } from 'react-icons/hi2'

export function SummaryHero({ onExplore }: { onExplore: () => void }) {
  return (
    <section className={styles.hero} aria-labelledby="side-rock-title">
      <div className={styles.heroCopy}>
        <ScrollReveal from="up">
          <p className={styles.kicker}>
            Classic rock · Hard rock · Heavy metal
          </p>
        </ScrollReveal>
        <ScrollReveal delayMs={70} from="up">
          <h1 id="side-rock-title" className={styles.heroTitle}>
            <span className={styles.heroBrand}>Side Rock</span>
            <span className={styles.heroDescriptor}>
              <span>Rock internacional</span>
              <span>Energia ao vivo.</span>
            </span>
          </h1>
        </ScrollReveal>
        <ScrollReveal delayMs={120} from="up">
          <p className={styles.heroLead}>
            Do hard rock ao grunge e ao metal. Quatro músicos, clássicos do rock
            internacional e a interpretação vocal de Marcelo à frente do show.
          </p>
        </ScrollReveal>
        <div className={styles.heroActions}>
          <BookingAction />
          <button className={styles.secondaryAction} onClick={onExplore}>
            Conheça o show <HiArrowRight aria-hidden />
          </button>
        </div>
        <p className={styles.heroContact}>
          Fale diretamente com <strong>Vanessa</strong> · Manager
        </p>
        <dl className={styles.heroFacts}>
          {[
            { value: '4', label: 'músicos no palco' },
            { value: '2h30', label: 'de apresentação' },
            { value: 'Jundiaí', label: 'e região' },
          ].map(({ value, label }) => (
            <div key={label}>
              <dt className={value === '2h30' ? styles.duration : undefined}>{value}</dt>
              <dd>{label}</dd>
            </div>
          ))}
        </dl>
      </div>
      <div className={styles.heroVisual}>
        <BandHeroVisual {...SIDE_ROCK_SUMMARY_CONTENT.heroPhoto} />
      </div>
    </section>
  )
}
