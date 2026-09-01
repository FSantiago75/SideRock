import type { CSSProperties } from 'react'
import { FaWhatsapp } from 'react-icons/fa6'
import { HiArrowRight } from 'react-icons/hi2'
import { Link } from 'react-router-dom'
import { ScrollReveal } from '../../../../Components/ScrollReveal/ScrollReveal'
import background from '../../../../assets/sideRock/sideRockRepertoireAtmosphere.png'
import { SideRockSectionPage } from '../../Components/SectionPage/SideRockSectionPage'
import { sideRockPath } from '../../sectionConstants'
import { SIDE_ROCK_BOOKING } from '../Sumarry/bookingContent'
import styles from './MusicaPage.module.css'
import { RepertoireMovement } from './RepertoireMovement'
import { REPERTOIRE_INTRO, REPERTOIRE_MOVEMENTS } from './repertoireContent'

const pageStyle = {
  '--repertoire-background': `url(${background})`,
} as CSSProperties

export function RepertorioPage() {
  return (
    <SideRockSectionPage layout="flow">
      <article className={styles.page} style={pageStyle}>
        <header className={styles.hero}>
          <ScrollReveal from="up">
            <p className={styles.heroEyebrow}>{REPERTOIRE_INTRO.eyebrow}</p>
          </ScrollReveal>
          <ScrollReveal delayMs={45} from="up">
            <h1 className={styles.heroTitle}>{REPERTOIRE_INTRO.title}</h1>
          </ScrollReveal>
          <ScrollReveal delayMs={110} from="up">
            <p className={styles.heroLead}>{REPERTOIRE_INTRO.lead}</p>
          </ScrollReveal>
        </header>

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
