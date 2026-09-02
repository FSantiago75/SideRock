import { useEffect, type CSSProperties } from 'react'
import { FaWhatsapp } from 'react-icons/fa6'
import { HiArrowRight } from 'react-icons/hi2'
import { Link } from 'react-router-dom'
import { ScrollReveal } from '../../../../Components/ScrollReveal/ScrollReveal'
import atmosphere from '../../../../assets/ozzborn/ozzbornRepertoireJourney.png'
import { SideRockSectionPage } from '../../../SideRockPage/Components/SectionPage/SideRockSectionPage'
import { OzzbornNavbar } from '../../Components/NavBar/OzzbornNavbar'
import { OZZBORN_SCROLLBAR, ozzbornPath } from '../../sectionConstants'
import { OZZBORN_BOOKING } from '../Summary/ozzbornBookingContent'
import { OzzbornRepertoireEraSection } from './OzzbornRepertoireEraSection'
import {
  OZZBORN_REPERTOIRE_CLOSING,
  OZZBORN_REPERTOIRE_ERAS,
  OZZBORN_REPERTOIRE_INTRO,
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
              <p className={styles.introEyebrow}>Repertório Ozzborn</p>
            </ScrollReveal>
            <ScrollReveal delayMs={55} from="up">
              <h1>
                Cinco eras.
                <span>Um show</span>
              </h1>
            </ScrollReveal>
            <ScrollReveal delayMs={110} from="up">
              <p className={styles.introLead}>{OZZBORN_REPERTOIRE_INTRO.lead}</p>
            </ScrollReveal>
          </div>

          <ScrollReveal className={styles.introJourney} delayMs={150} from="right">
            <p className={styles.journeyLabel}>O que levamos ao palco</p>
            <div className={styles.journeyRange}>
              <strong>1970</strong>
              <span className={styles.journeyLine} aria-hidden />
              <strong>2010</strong>
            </div>
            <p>
              <span>Black Sabbath</span>
              <span aria-hidden>→</span>
              <span>Ozzy Osbourne</span>
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

        <ScrollReveal className={styles.curiosity} from="up">
          <div className={styles.curiosityMark} aria-hidden>13</div>
          <div className={styles.curiosityCopy}>
            <span>Coincidência à altura do Ozzborn</span>
            <p>
              São 13 discos no nosso recorte — o mesmo número que dá nome a
              <em> 13</em>, álbum lançado pelo Black Sabbath em 2013.
            </p>
          </div>
        </ScrollReveal>

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
                Consultar data e orçamento
              </a>
              <Link
                className={styles.secondaryAction}
                to={ozzbornPath('galeria')}
              >
                Ver galeria
                <HiArrowRight aria-hidden />
              </Link>
            </div>
          </ScrollReveal>
        </section>
      </article>
    </SideRockSectionPage>
  )
}
