import type { CSSProperties } from 'react'
import { FaWhatsapp } from 'react-icons/fa6'
import { HiArrowRight } from 'react-icons/hi2'
import { Link } from 'react-router-dom'
import { ScrollReveal } from '../../../../Components/ScrollReveal/ScrollReveal'
import bg from '../../../../assets/sideRock/sideRockSummaryAtmosphereV2.png'
import { SideRockSectionPage } from '../../Components/SectionPage/SideRockSectionPage'
import { sideRockPath } from '../../sectionConstants'
import { BandHeroVisual } from './BandHeroVisual'
import { BookingSection } from './BookingSection'
import { SIDE_ROCK_BOOKING } from './bookingContent'
import styles from './ResumoPage.module.css'
import { SIDE_ROCK_SUMMARY_CONTENT } from './summaryContent'

const summaryFacts = [
  { value: '5+', label: 'anos de banda' },
  { value: '4', label: 'integrantes' },
  { value: 'Ao vivo', label: 'formação completa' },
] as const

type SummaryPageStyle = CSSProperties & {
  '--summary-hero-image': string
}

export function ResumoPage() {
  const { heroPhoto, repertoire, story } = SIDE_ROCK_SUMMARY_CONTENT
  const pageStyle: SummaryPageStyle = {
    '--summary-hero-image': `url(${bg})`,
  }

  return (
    <SideRockSectionPage layout="flow">
      <article className={styles.page} style={pageStyle}>
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
                  <span>ao vivo.</span>
                </span>
              </h1>
            </ScrollReveal>

            <ScrollReveal delayMs={120} from="up">
              <p className={styles.heroLead}>
                Uma banda de covers com músicas de diferentes décadas e vertentes
                do rock, apresentada por quatro músicos em formato completo.
              </p>
            </ScrollReveal>

            <ScrollReveal delayMs={160} from="up">
              <div className={styles.heroActions}>
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
                  to={sideRockPath('musica')}
                >
                  Ver repertório
                  <HiArrowRight aria-hidden />
                </Link>
              </div>
            </ScrollReveal>

            <ScrollReveal delayMs={200} from="none">
              <p className={styles.heroContact}>
                Atendimento direto com <strong>Vanessa</strong> · Manager
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
            <BandHeroVisual {...heroPhoto} />
          </ScrollReveal>
        </section>

        <section className={styles.story} aria-labelledby="summary-title">
          <ScrollReveal className={styles.storyHeading} from="left">
            <p className={styles.sectionIndex}>{story.index}</p>
            <h2 id="summary-title">{story.title}</h2>
          </ScrollReveal>

          <ScrollReveal className={styles.storyBody} from="right" delayMs={80}>
            {story.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </ScrollReveal>

          <ScrollReveal className={styles.promise} delayMs={120}>
            <span>{story.promise.eyebrow}</span>
            <strong>{story.promise.copy}</strong>
          </ScrollReveal>
        </section>

        <BookingSection />

        <section
          className={styles.repertoire}
          aria-label="Referências do repertório"
        >
          <div
            className={styles.repertoireTrack}
            tabIndex={0}
            aria-label="Deslize para explorar as referências do repertório"
          >
            {repertoire.map((artist) => (
              <span key={artist}>{artist}</span>
            ))}
          </div>
        </section>
      </article>
    </SideRockSectionPage>
  )
}
