import { useEffect, useRef, useState, type CSSProperties } from 'react'
import { FaWhatsapp } from 'react-icons/fa6'
import { HiArrowRight } from 'react-icons/hi2'
import { Link, useSearchParams } from 'react-router-dom'
import { ScrollReveal } from '../../../../Components/ScrollReveal/ScrollReveal'
import atmosphere from '../../../../assets/acoustic/acousticSummaryAtmosphere.png'
import duoPhoto from '../../../../assets/acoustic/duo.png'
import trioPhoto from '../../../../assets/acoustic/trio.png'
import { SideRockSectionPage } from '../../../SideRockPage/Components/SectionPage/SideRockSectionPage'
import summaryStyles from '../../../SideRockPage/Pages/Summary/SummaryPage.module.css'
import { AcousticNavbar } from '../../Components/NavBar/AcousticNavbar'
import { ACOUSTIC_SCROLLBAR, acousticPath } from '../../sectionConstants'
import { AcousticBandHeroVisual } from './AcousticBandHeroVisual'
import { AcousticBookingSection } from './AcousticBookingSection'
import { AcousticFormatSelector } from './AcousticFormatSelector'
import { ACOUSTIC_FORMATS, ACOUSTIC_SUMMARY, getAcousticBookingUrl, type AcousticFormatId } from './acousticSummaryContent'
import acousticStyles from './AcousticSummaryPage.module.css'

type PageStyle = CSSProperties & { '--summary-hero-image': string }

const repertoire = [
  'Bon Jovi',
  'Pearl Jam',
  "Guns N' Roses",
  'Whitesnake',
  'Oasis',
  'Audioslave',
  'a-ha',
  'Raimundos',
  'Stone Temple Pilots',
  'Legião Urbana',
  'Capital Inicial',
  'Djavan',
] as const

export function AcousticSummaryPage() {
  const [searchParams, setSearchParams] = useSearchParams()
  const formatId: AcousticFormatId = searchParams.get('formato') === 'trio' ? 'trio' : 'duo'
  const [displayedFormatId, setDisplayedFormatId] = useState<AcousticFormatId>(formatId)
  const [formatTransition, setFormatTransition] = useState<'idle' | 'out' | 'in'>('idle')
  const displayedFormatRef = useRef<AcousticFormatId>(formatId)
  const format = ACOUSTIC_FORMATS[displayedFormatId]
  const bookingUrl = getAcousticBookingUrl(displayedFormatId)
  const pageStyle: PageStyle = { '--summary-hero-image': `url(${atmosphere})` }

  useEffect(() => { document.title = 'Side Rock Acústico — Música ao vivo para eventos' }, [])

  useEffect(() => {
    if (formatId === displayedFormatRef.current) {
      const resetFrame = window.requestAnimationFrame(() => setFormatTransition('idle'))
      return () => window.cancelAnimationFrame(resetFrame)
    }

    const startFrame = window.requestAnimationFrame(() => setFormatTransition('out'))
    const swapTimer = window.setTimeout(() => {
      displayedFormatRef.current = formatId
      setDisplayedFormatId(formatId)
      setFormatTransition('in')
    }, 720)
    const settleTimer = window.setTimeout(() => setFormatTransition('idle'), 1740)

    return () => {
      window.cancelAnimationFrame(startFrame)
      window.clearTimeout(swapTimer)
      window.clearTimeout(settleTimer)
    }
  }, [formatId])

  function selectFormat(nextFormat: AcousticFormatId) {
    const next = new URLSearchParams(searchParams)
    next.set('formato', nextFormat)
    setSearchParams(next, { replace: true })
  }

  return (
    <SideRockSectionPage layout="flow" navbar={<AcousticNavbar />} accent="#d97706" accentHot="#fbbf24" scrollbarTheme={ACOUSTIC_SCROLLBAR}>
      <article className={`${summaryStyles.page} ${acousticStyles.page}`} style={pageStyle}>
        <section className={summaryStyles.hero} aria-labelledby="acoustic-title">
          <div className={summaryStyles.heroCopy}>
            <ScrollReveal from="up"><p className={summaryStyles.kicker}>Side Rock · formato compacto · música para celebrar</p></ScrollReveal>
            <ScrollReveal delayMs={45} from="up"><AcousticFormatSelector activeFormat={formatId} onChange={selectFormat} /></ScrollReveal>
            <div className={acousticStyles.formatContent} data-transition={formatTransition}>
              <ScrollReveal delayMs={70} from="up">
                <h1 id="acoustic-title" className={`${summaryStyles.heroTitle} ${acousticStyles.heroTitle}`}>
                  <span className={summaryStyles.heroBrand}>Side Rock</span>
                  <span className={summaryStyles.heroDescriptor}><span>Acústico {format.label}.</span><span>{format.statement}</span></span>
                </h1>
              </ScrollReveal>
              <ScrollReveal delayMs={120} from="up"><p className={summaryStyles.heroLead}>{format.lead}</p></ScrollReveal>
              <ScrollReveal delayMs={160} from="up"><div className={summaryStyles.heroActions}><a className={summaryStyles.primaryAction} href={bookingUrl} target="_blank" rel="noopener noreferrer"><FaWhatsapp aria-hidden />Consultar data e orçamento</a><Link className={summaryStyles.secondaryAction} to={acousticPath('repertorio')}>Ver repertório<HiArrowRight aria-hidden /></Link></div></ScrollReveal>
              <ScrollReveal delayMs={200} from="none"><p className={summaryStyles.heroContact}>Atendimento direto com <strong>Vanessa</strong> · Manager</p></ScrollReveal>
              <ScrollReveal delayMs={220} from="up"><dl className={summaryStyles.heroFacts}>{format.facts.map(({ value, label }) => <div key={label}><dt>{value}</dt><dd>{label}</dd></div>)}</dl></ScrollReveal>
            </div>
          </div>
          <ScrollReveal className={`${summaryStyles.heroVisual} ${acousticStyles.formatVisual}`} from="scale" delayMs={90}><div data-transition={formatTransition}><AcousticBandHeroVisual format={displayedFormatId} duoSrc={duoPhoto} trioSrc={trioPhoto} /></div></ScrollReveal>
        </section>

        <section className={summaryStyles.story} aria-labelledby="acoustic-story-title">
          <ScrollReveal className={summaryStyles.storyHeading} from="left"><p className={summaryStyles.sectionIndex}>{ACOUSTIC_SUMMARY.story.eyebrow}</p><h2 id="acoustic-story-title">{ACOUSTIC_SUMMARY.story.title}</h2></ScrollReveal>
          <ScrollReveal className={summaryStyles.storyBody} from="right" delayMs={80}>{ACOUSTIC_SUMMARY.story.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</ScrollReveal>
          <ScrollReveal className={`${summaryStyles.promise} ${acousticStyles.promise}`} delayMs={120}><div className={acousticStyles.formatDetail} data-transition={formatTransition}><span>Formato selecionado</span><strong>{format.formation}. {format.detail}</strong></div></ScrollReveal>
        </section>

        <AcousticBookingSection format={displayedFormatId} />

        <section className={summaryStyles.repertoire} aria-label="Universos do repertório acústico"><div className={summaryStyles.repertoireTrack} tabIndex={0} aria-label="Deslize para explorar o repertório acústico">{repertoire.map((item) => <span key={item}>{item}</span>)}</div></section>
      </article>
    </SideRockSectionPage>
  )
}
