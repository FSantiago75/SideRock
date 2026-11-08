import { FaWhatsapp } from 'react-icons/fa6'
import { HiArrowRight } from 'react-icons/hi2'
import { ScrollReveal } from '../../../../../../Components/ScrollReveal/ScrollReveal'
import logo from '../../../../../../assets/ozzborn/branding/ozzbornLogoTransparent.png'
import { OzzbornBandHeroVisual } from './Components/OzzbornBandHeroVisual'
import { OZZBORN_BOOKING } from '../../Content/ozzbornBookingContent'
import { OZZBORN_SUMMARY_CONTENT } from '../../Content/ozzbornSummaryContent'
import styles from '../../OzzbornSummaryPage.module.css'

const summaryFacts = [
  { value: '3h', label: 'de apresentação' },
  { value: '4', label: 'músicos no palco' },
  { value: 'Ozzy + Sabbath', label: 'duas eras no repertório' },
] as const

export function OzzbornSummaryHero({ onExplore }: { onExplore: () => void }) {
  const { heroPhoto } = OZZBORN_SUMMARY_CONTENT
  return (
    <section className={styles.hero} aria-labelledby="ozzborn-title">
      <div className={styles.heroCopy}>
        <ScrollReveal from="up">
          <p className={styles.kicker}>Tributo a Ozzy Osbourne · Jundiaí/SP</p>
        </ScrollReveal>
        <ScrollReveal delayMs={70} from="up">
          <h1 id="ozzborn-title" className={styles.heroTitle}>
            <img
              className={styles.heroLogo}
              src={logo}
              alt="Ozzborn — Ozzy Tribute"
            />
            <span className={styles.heroDescriptor}>
              <span>Fidelidade musical.</span>
              <span>Impacto ao vivo.</span>
            </span>
          </h1>
        </ScrollReveal>
        <ScrollReveal delayMs={120} from="up">
          <p className={styles.heroLead}>
            Um tributo construído com respeito aos timbres, aos arranjos e às
            atmosferas que marcaram a trajetória de Ozzy Osbourne, dos primeiros
            anos com o Black Sabbath aos grandes momentos da carreira solo.
          </p>
        </ScrollReveal>
        <ScrollReveal delayMs={160} from="up">
          <div className={styles.heroActions}>
            <a
              className={styles.primaryAction}
              href={OZZBORN_BOOKING.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp aria-hidden />
              Consultar disponibilidade
            </a>
            <button
              type="button"
              className={styles.secondaryAction}
              onClick={onExplore}
            >
              Conheça o show
              <HiArrowRight aria-hidden />
            </button>
          </div>
        </ScrollReveal>
        <ScrollReveal delayMs={200} from="none">
          <p className={styles.heroContact}>
            Fale diretamente com <strong>Vanessa</strong> · Manager
          </p>
        </ScrollReveal>
        <ScrollReveal delayMs={220} from="up">
          <dl className={styles.heroFacts}>
            {summaryFacts.map(({ value, label }) => (
              <div key={label}>
                <dt>{value}</dt>
                <dd>{label}</dd>
              </div>
            ))}
          </dl>
        </ScrollReveal>
      </div>

      <ScrollReveal className={styles.heroVisual} from="scale" delayMs={90}>
        <OzzbornBandHeroVisual {...heroPhoto} />
      </ScrollReveal>
    </section>
  )
}
