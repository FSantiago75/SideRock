import { Tabs } from 'radix-ui'
import { Link } from 'react-router-dom'
import { HiArrowRight } from 'react-icons/hi2'
import { ScrollReveal } from '../../../../../../Components/ScrollReveal/ScrollReveal'
import { ozzbornPath } from '../../../../sectionConstants'
import { OZZBORN_SUMMARY_CHAPTERS } from '../../Content/ozzbornDiscographyPreview'
import { useDiscographyPreview } from './Hooks/useDiscographyPreview'
import { DiscographyChapter } from './Components/DiscographyChapter'
import layout from '../../Styles/SummaryLayout.module.css'
import styles from './OzzbornSummaryDiscography.module.css'

export function OzzbornSummaryDiscography({ index }: { index: string }) {
  const { active, setActive, previewRef, setHovered, setFocused } =
    useDiscographyPreview()
  return (
    <section
      id="repertorio"
      tabIndex={-1}
      className={layout.section}
      aria-labelledby="discography-title"
    >
      <p className={layout.eyebrow}>{index} / Repertório</p>
      <ScrollReveal className={layout.sectionHeading}>
        <div>
          <h2 id="discography-title">Cada fase, uma nova intensidade.</h2>
          <p>
            Uma prévia da discografia que dá vida ao tributo. Escolha um
            capítulo para conhecer o clima.
          </p>
        </div>
      </ScrollReveal>
      <Tabs.Root
        ref={previewRef}
        value={active}
        onValueChange={setActive}
        className={styles.discographyPreview}
        onPointerEnter={(event) => {
          if (event.pointerType === 'mouse') setHovered(true)
        }}
        onPointerLeave={(event) => {
          if (event.pointerType === 'mouse') setHovered(false)
        }}
        onFocusCapture={() => setFocused(true)}
        onBlurCapture={(event) => {
          if (!event.currentTarget.contains(event.relatedTarget))
            setFocused(false)
        }}
      >
        <Tabs.List
          className={styles.chapterTabs}
          aria-label="Fases da discografia"
        >
          {OZZBORN_SUMMARY_CHAPTERS.map((chapter) => (
            <Tabs.Trigger key={chapter.id} value={chapter.id}>
              {chapter.label}
            </Tabs.Trigger>
          ))}
        </Tabs.List>
        <div className={styles.chapterPanels}>
          {OZZBORN_SUMMARY_CHAPTERS.map((chapter) => (
            <DiscographyChapter
              key={chapter.id}
              chapter={chapter}
              active={active}
            />
          ))}
        </div>
      </Tabs.Root>
      <div className={styles.discographyExplore}>
        <p>
          Isso é só uma amostra. Explore as cinco eras e os álbuns que fazem
          parte do repertório da Ozzborn.
        </p>
        <Link className={layout.textLink} to={ozzbornPath('repertorio')}>
          Explorar a discografia <HiArrowRight aria-hidden />
        </Link>
      </div>
    </section>
  )
}
