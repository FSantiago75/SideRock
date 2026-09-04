import { useEffect, type CSSProperties } from 'react'
import { FaWhatsapp } from 'react-icons/fa6'
import { HiArrowRight } from 'react-icons/hi2'
import { Link } from 'react-router-dom'
import { ScrollReveal } from '../../../../Components/ScrollReveal/ScrollReveal'
import { SectionIntro } from '../../../../Components/SectionIntro/SectionIntro'
import background from '../../../../assets/acoustic/acousticSummaryAtmosphere.png'
import { SideRockSectionPage } from '../../../SideRockPage/Components/SectionPage/SideRockSectionPage'
import sharedStyles from '../../../SideRockPage/Pages/Repertoire/RepertoirePage.module.css'
import { RepertoireMovement } from '../../../SideRockPage/Pages/Repertoire/RepertoireMovement'
import { AcousticNavbar } from '../../Components/NavBar/AcousticNavbar'
import { ACOUSTIC_SCROLLBAR, acousticPath } from '../../sectionConstants'
import styles from './AcousticRepertoirePage.module.css'
import {
  ACOUSTIC_REPERTOIRE_BOOKING_URL,
  ACOUSTIC_REPERTOIRE_CLOSING,
  ACOUSTIC_REPERTOIRE_INTRO,
  ACOUSTIC_REPERTOIRE_MOVEMENTS,
} from './acousticRepertoireContent'

export function AcousticRepertoirePage() {
  useEffect(() => {
    document.title = 'Repertório — Side Rock Acústico'
  }, [])

  return (
    <SideRockSectionPage
      layout="flow"
      navbar={<AcousticNavbar />}
      accent="#d97706"
      accentHot="#fbbf24"
      scrollbarTheme={ACOUSTIC_SCROLLBAR}
    >
      <article
        className={`${sharedStyles.page} ${styles.page}`}
        style={{ '--repertoire-background': `url(${background})` } as CSSProperties}
      >
        <SectionIntro
          eyebrow={ACOUSTIC_REPERTOIRE_INTRO.eyebrow}
          title={ACOUSTIC_REPERTOIRE_INTRO.title}
          lead={ACOUSTIC_REPERTOIRE_INTRO.lead}
          titleDelayMs={45}
          leadDelayMs={110}
        />

        <div className={sharedStyles.movements}>
          {ACOUSTIC_REPERTOIRE_MOVEMENTS.map((movement) => (
            <RepertoireMovement key={movement.id} movement={movement} />
          ))}
        </div>

        <section className={sharedStyles.closing} aria-labelledby="acoustic-repertoire-closing-title">
          <ScrollReveal from="up">
            <p className={sharedStyles.closingEyebrow}>{ACOUSTIC_REPERTOIRE_CLOSING.eyebrow}</p>
            <h2 id="acoustic-repertoire-closing-title">{ACOUSTIC_REPERTOIRE_CLOSING.title}</h2>
            <p>{ACOUSTIC_REPERTOIRE_CLOSING.body}</p>
            <div className={sharedStyles.closingActions}>
              <a className={sharedStyles.primaryAction} href={ACOUSTIC_REPERTOIRE_BOOKING_URL} target="_blank" rel="noopener noreferrer">
                <FaWhatsapp aria-hidden />
                Consultar data e orçamento
              </a>
              <Link className={sharedStyles.secondaryAction} to={acousticPath('galeria')}>
                Ver apresentações
                <HiArrowRight aria-hidden />
              </Link>
            </div>
          </ScrollReveal>
        </section>
      </article>
    </SideRockSectionPage>
  )
}
