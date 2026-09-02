import { useEffect, type CSSProperties } from 'react'
import { FaWhatsapp } from 'react-icons/fa6'
import { HiArrowRight } from 'react-icons/hi2'
import { Link } from 'react-router-dom'
import { ScrollReveal } from '../../../../Components/ScrollReveal/ScrollReveal'
import atmosphere from '../../../../assets/ozzborn/ozzbornSummaryAtmosphere.png'
import logo from '../../../../assets/ozzborn/ozzbornLogoTransparent.png'
import { SideRockSectionPage } from '../../../SideRockPage/Components/SectionPage/SideRockSectionPage'
import { OzzbornNavbar } from '../../Components/NavBar/OzzbornNavbar'
import { OZZBORN_SCROLLBAR, ozzbornPath } from '../../sectionConstants'
import { OzzbornBandHeroVisual } from './OzzbornBandHeroVisual'
import { OzzbornBookingSection } from './OzzbornBookingSection'
import { OZZBORN_BOOKING } from './ozzbornBookingContent'
import { OZZBORN_SUMMARY_CONTENT } from './ozzbornSummaryContent'
import styles from './OzzbornSummaryPage.module.css'

const summaryFacts = [
  { value: '3h', label: 'de apresentação' },
  { value: '4', label: 'integrantes' },
  { value: 'Ozzy + Sabbath', label: 'duas eras no palco' },
] as const

type SummaryPageStyle = CSSProperties & {
  '--summary-hero-image': string
}

export function OzzbornSummaryPage() {
  const { heroPhoto, repertoire, story } = OZZBORN_SUMMARY_CONTENT
  const pageStyle: SummaryPageStyle = {
    '--summary-hero-image': `url(${atmosphere})`,
  }

  useEffect(() => {
    document.title = 'Ozzborn — Tributo a Ozzy Osbourne em Jundiaí'
  }, [])

  return (
    <SideRockSectionPage
      layout="flow"
      navbar={<OzzbornNavbar />}
      accent="#7c3aed"
      accentHot="#c4b5fd"
      scrollbarTheme={OZZBORN_SCROLLBAR}
    >
      <article className={styles.page} style={pageStyle}>
        <section className={styles.hero} aria-labelledby="ozzborn-title">
          <div className={styles.heroCopy}>
            <ScrollReveal from="up">
              <p className={styles.kicker}>Tributo a Ozzy Osbourne · Jundiaí</p>
            </ScrollReveal>
            <ScrollReveal delayMs={70} from="up">
              <h1 id="ozzborn-title" className={styles.heroTitle}>
                <img className={styles.heroLogo} src={logo} alt="Ozzborn — Ozzy Tribute" />
                <span className={styles.heroDescriptor}>
                  <span>Fidelidade musical.</span>
                  <span>Impacto ao vivo.</span>
                </span>
              </h1>
            </ScrollReveal>
            <ScrollReveal delayMs={120} from="up">
              <p className={styles.heroLead}>
                Um tributo construído com respeito aos timbres, arranjos e atmosferas que marcaram Ozzy Osbourne e Black Sabbath.
              </p>
            </ScrollReveal>
            <ScrollReveal delayMs={160} from="up">
              <div className={styles.heroActions}>
                <a className={styles.primaryAction} href={OZZBORN_BOOKING.whatsappUrl} target="_blank" rel="noopener noreferrer">
                  <FaWhatsapp aria-hidden />
                  Consultar data e orçamento
                </a>
                <Link className={styles.secondaryAction} to={ozzbornPath('repertorio')}>
                  Ver repertório
                  <HiArrowRight aria-hidden />
                </Link>
              </div>
            </ScrollReveal>
            <ScrollReveal delayMs={200} from="none">
              <p className={styles.heroContact}>Atendimento direto com <strong>Vanessa</strong> · Manager</p>
            </ScrollReveal>
            <ScrollReveal delayMs={220} from="up">
              <dl className={styles.heroFacts}>
                {summaryFacts.map(({ value, label }) => (
                  <div key={label}><dt>{value}</dt><dd>{label}</dd></div>
                ))}
              </dl>
            </ScrollReveal>
          </div>

          <ScrollReveal className={styles.heroVisual} from="scale" delayMs={90}>
            <OzzbornBandHeroVisual {...heroPhoto} />
          </ScrollReveal>
        </section>

        <section className={styles.story} aria-labelledby="ozzborn-summary-title">
          <ScrollReveal className={styles.storyHeading} from="left">
            <p className={styles.sectionIndex}>{story.index}</p>
            <h2 id="ozzborn-summary-title">{story.title}</h2>
          </ScrollReveal>
          <ScrollReveal className={styles.storyBody} from="right" delayMs={80}>
            {story.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </ScrollReveal>
          <ScrollReveal className={styles.promise} delayMs={120}>
            <span>{story.promise.eyebrow}</span>
            <strong>{story.promise.copy}</strong>
          </ScrollReveal>
        </section>

        <OzzbornBookingSection />

        <section className={styles.repertoire} aria-label="Momentos do repertório Ozzborn">
          <div className={styles.repertoireTrack} tabIndex={0} aria-label="Deslize para explorar momentos do repertório">
            {repertoire.map((title) => <span key={title}>{title}</span>)}
          </div>
        </section>
      </article>
    </SideRockSectionPage>
  )
}
