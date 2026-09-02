import type { CSSProperties } from 'react'
import { FaWhatsapp } from 'react-icons/fa6'
import { HiArrowRight } from 'react-icons/hi2'
import { Link } from 'react-router-dom'
import { ScrollReveal } from '../../../../Components/ScrollReveal/ScrollReveal'
import { SectionIntro } from '../../../../Components/SectionIntro/SectionIntro'
import background from '../../../../assets/sideRock/sideRockRepertoireAtmosphere.png'
import { SideRockSectionPage } from '../../Components/SectionPage/SideRockSectionPage'
import { sideRockPath } from '../../sectionConstants'
import { SIDE_ROCK_BOOKING } from '../Summary/bookingContent'
import styles from './RepertoirePage.module.css'
import { RepertoireMovement } from './RepertoireMovement'
import { REPERTOIRE_INTRO, REPERTOIRE_MOVEMENTS } from './repertoireContent'

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
            <p className={styles.closingEyebrow}>Identidade Side Rock</p>
            <h2 id="repertoire-closing-title">
              Um repertório. Muitas possibilidades.
            </h2>
            <p>
              Do clássico ao heavy, cada influência amplia as possibilidades do
              show. A Side Rock conecta diferentes linguagens em uma apresentação
              coesa, conduzida por músicos versáteis e experientes.
            </p>
            <div className={styles.closingActions}>
              <a
                className={styles.primaryAction}
                href={SIDE_ROCK_BOOKING.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp aria-hidden />
                Consultar data e orçamento
              </a>
              <Link
                className={styles.secondaryAction}
                to={sideRockPath('galeria')}
              >
                Ver a banda em ação
                <HiArrowRight aria-hidden />
              </Link>
            </div>
          </ScrollReveal>
        </section>
      </article>
    </SideRockSectionPage>
  )
}
