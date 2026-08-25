import type { CSSProperties } from 'react'
import { FaWhatsapp } from 'react-icons/fa6'
import { HiArrowRight } from 'react-icons/hi2'
import { Link } from 'react-router-dom'
import bg from '../../../../assets/side-rock-summary-atmosphere-v2.png'
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
  const { heroPhoto, repertoire } = SIDE_ROCK_SUMMARY_CONTENT
  const pageStyle: SummaryPageStyle = {
    '--summary-hero-image': `url(${bg})`,
  }

  return (
    <SideRockSectionPage layout="flow">
      <article className={styles.page} style={pageStyle}>
        <section className={styles.hero} aria-labelledby="side-rock-title">
          <div className={styles.heroCopy}>
            <p className={styles.kicker}>
              Classic rock · Hard rock · Heavy metal
            </p>

            <h1 id="side-rock-title" className={styles.heroTitle}>
              <span className={styles.heroBrand}>Side Rock</span>
              <span className={styles.heroDescriptor}>
                <span>Rock internacional</span>
                <span>ao vivo.</span>
              </span>
            </h1>

            <p className={styles.heroLead}>
              Uma banda de covers com músicas de diferentes décadas e vertentes
              do rock, apresentada por quatro músicos em formato completo.
            </p>

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
              <Link className={styles.secondaryAction} to={sideRockPath('musica')}>
                Ver repertório
                <HiArrowRight aria-hidden />
              </Link>
            </div>

            <p className={styles.heroContact}>
              Atendimento direto com <strong>Vanessa</strong> · Manager
            </p>

            <dl className={styles.heroFacts}>
              {summaryFacts.map(({ value, label }) => (
                <div key={label}>
                  <dt>{value}</dt>
                  <dd>{label}</dd>
                </div>
              ))}
            </dl>
          </div>

          <BandHeroVisual {...heroPhoto} />
        </section>

        <section className={styles.story} aria-labelledby="summary-title">
          <div className={styles.storyHeading}>
            <p className={styles.sectionIndex}>Sobre a Side Rock</p>
            <h2 id="summary-title">Mais de cinco anos de estrada.</h2>
          </div>

          <div className={styles.storyBody}>
            <p>
              A Side Rock é uma banda de covers formada por Toddynho, Adriano,
              Victor e Marcelo. Há mais de cinco anos, reúne referências do classic
              rock, hard rock e heavy metal em uma apresentação de banda completa.
            </p>
            <p>
              O repertório passa por diferentes décadas e vertentes sem se limitar
              a um único nicho. A proposta combina músicas reconhecidas, execução
              consistente e uma identidade visual própria para atender diferentes
              formatos de evento.
            </p>
          </div>

          <aside className={styles.promise}>
            <span>Aplicações</span>
            <strong>
              Casas de show, eventos particulares, festivais e programações
              culturais.
            </strong>
          </aside>
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
