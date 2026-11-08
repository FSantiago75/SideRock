import { Fragment, type CSSProperties } from 'react'
import { FaWhatsapp } from 'react-icons/fa6'
import { HiArrowRight } from 'react-icons/hi2'
import { Link } from 'react-router-dom'
import { ScrollReveal } from '../../../../Components/ScrollReveal/ScrollReveal'
import { SectionIntro } from '../../../../Components/SectionIntro/SectionIntro'
import background from '../../../../assets/sideRock/backgrounds/sideRockRepertoireAtmosphere.png'
import { SideRockSectionPage } from '../../Components/SectionPage/SideRockSectionPage'
import { sideRockPath } from '../../sectionConstants'
import { SIDE_ROCK_BOOKING } from '../Summary/Content/bookingContent'
import styles from './RepertoirePage.module.css'
import { RepertoireMovement } from './RepertoireMovement'
import {
  REPERTOIRE_INTRO,
  REPERTOIRE_MOVEMENTS,
  REPERTOIRE_CLOSING,
} from './repertoireContent'

const pageStyle = {
  '--repertoire-background': `url(${background})`,
} as CSSProperties

export function RepertoirePage() {
  return (
    <SideRockSectionPage layout="flow">
      <article className={styles.page} style={pageStyle}>
        <SectionIntro
          eyebrow={REPERTOIRE_INTRO.eyebrow}
          title={REPERTOIRE_INTRO.title}
          lead={REPERTOIRE_INTRO.lead}
          titleDelayMs={45}
          leadDelayMs={110}
        />

        <div className={styles.movements}>
          {REPERTOIRE_MOVEMENTS.map((movement) => (
            <RepertoireMovement key={movement.id} movement={movement} />
          ))}
        </div>

        <section
          className={styles.closing}
          aria-labelledby="repertoire-closing-title"
        >
          <ScrollReveal from="up">
            <p className={styles.closingEyebrow}>
              {REPERTOIRE_CLOSING.eyebrow}
            </p>
            <h2 id="repertoire-closing-title">
              <span className={styles.desktopTitle}>
                {REPERTOIRE_CLOSING.titleLines.map((line, index) => (
                  <Fragment key={line}>
                    {index > 0 && ' '}
                    <span className={styles.closingLine} data-line={index}>
                      {line}
                    </span>
                  </Fragment>
                ))}
              </span>
              <span className={styles.mobileTitle}>
                {REPERTOIRE_CLOSING.mobileTitleLines.map((line, index) => (
                  <Fragment key={line}>
                    {index > 0 && ' '}
                    <span className={styles.closingLine}>{line}</span>
                  </Fragment>
                ))}
              </span>
            </h2>
            <div className={styles.closingActions}>
              <a
                className={styles.primaryAction}
                href={SIDE_ROCK_BOOKING.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp aria-hidden />
                {REPERTOIRE_CLOSING.primaryAction}
              </a>
              <Link
                className={styles.secondaryAction}
                to={sideRockPath('galeria')}
              >
                {REPERTOIRE_CLOSING.secondaryAction}
                <HiArrowRight aria-hidden />
              </Link>
            </div>
          </ScrollReveal>
        </section>
      </article>
    </SideRockSectionPage>
  )
}
