import { useEffect, type CSSProperties } from 'react'
import { FaWhatsapp } from 'react-icons/fa6'
import { HiArrowRight } from 'react-icons/hi2'
import { Link } from 'react-router-dom'
import { ScrollReveal } from '../../../../Components/ScrollReveal/ScrollReveal'
import atmosphere from '../../../../assets/ozzborn/backgrounds/ozzbornRepertoireJourney.png'
import { SideRockSectionPage } from '../../../SideRockPage/Components/SectionPage/SideRockSectionPage'
import { OzzbornNavbar } from '../../Components/NavBar/OzzbornNavbar'
import { OZZBORN_SCROLLBAR, ozzbornPath } from '../../sectionConstants'
import { OZZBORN_BOOKING } from '../Summary/ozzbornBookingContent'
import { OzzbornRepertoireEraSection } from './OzzbornRepertoireEraSection'
import {
  OZZBORN_REPERTOIRE_CLOSING,
  OZZBORN_REPERTOIRE_ERAS,
  OZZBORN_REPERTOIRE_INTRO,
  OZZBORN_REPERTOIRE_JOURNEY,
} from './ozzbornRepertoireContent'
import styles from './OzzbornRepertoirePage.module.css'

type RepertoirePageStyle = CSSProperties & {
  '--repertoire-background': string
}

export function OzzbornRepertoirePage() {
  const pageStyle: RepertoirePageStyle = {
    '--repertoire-background': `url(${atmosphere})`,
  }

  useEffect(() => {
    document.title = 'Ozzborn — Repertório'
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
        <header className={styles.intro}>
          <div className={styles.introCopy}>
            <ScrollReveal from="up">
              <p className={styles.introEyebrow}>{OZZBORN_REPERTOIRE_INTRO.eyebrow}</p>
            </ScrollReveal>
            <ScrollReveal delayMs={55} from="up">
              <h1>
                {OZZBORN_REPERTOIRE_INTRO.titleLead}
                <span>{OZZBORN_REPERTOIRE_INTRO.titleAccent}</span>
              </h1>
            </ScrollReveal>
            <ScrollReveal delayMs={110} from="up">
              <p className={styles.introLead}>{OZZBORN_REPERTOIRE_INTRO.lead}</p>
            </ScrollReveal>
          </div>

          <ScrollReveal className={styles.introJourney} delayMs={150} from="right">
            <p className={styles.journeyLabel}>{OZZBORN_REPERTOIRE_JOURNEY.label}</p>
            <div className={styles.journeyRange}>
              <strong>{OZZBORN_REPERTOIRE_JOURNEY.startYear}</strong>
              <span className={styles.journeyLine} aria-hidden />
              <strong>{OZZBORN_REPERTOIRE_JOURNEY.endYear}</strong>
            </div>
            <p>
              <span>{OZZBORN_REPERTOIRE_JOURNEY.origin}</span>
              <span aria-hidden>→</span>
              <span>{OZZBORN_REPERTOIRE_JOURNEY.destination}</span>
            </p>
          </ScrollReveal>

        </header>

        <div className={styles.timeline}>
          {OZZBORN_REPERTOIRE_ERAS.map((era, index) => (
            <OzzbornRepertoireEraSection
              key={era.id}
              era={era}
              index={index}
            />
          ))}
        </div>

        <section
          className={styles.closing}
          aria-labelledby="ozzborn-repertoire-closing-title"
        >
          <ScrollReveal from="up">
            <p className={styles.closingEyebrow}>
              {OZZBORN_REPERTOIRE_CLOSING.eyebrow}
            </p>
            <h2 id="ozzborn-repertoire-closing-title">
              {OZZBORN_REPERTOIRE_CLOSING.title}
            </h2>
            <p>{OZZBORN_REPERTOIRE_CLOSING.body}</p>
            <div className={styles.closingActions}>
              <a
                className={styles.primaryAction}
                href={OZZBORN_BOOKING.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp aria-hidden />
                {OZZBORN_REPERTOIRE_CLOSING.primaryAction}
              </a>
              <Link
                className={styles.secondaryAction}
                to={ozzbornPath('galeria')}
              >
                {OZZBORN_REPERTOIRE_CLOSING.secondaryAction}
                <HiArrowRight aria-hidden />
              </Link>
            </div>
          </ScrollReveal>
        </section>
      </article>
    </SideRockSectionPage>
  )
}
