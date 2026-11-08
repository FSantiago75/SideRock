import { RepertoireAtmosphere } from './Components/RepertoireAtmosphere'
import { useRepertoireRotation } from './Hooks/useRepertoireRotation'
import { REPERTOIRE_ATMOSPHERES as atmospheres } from '../../Content/repertoireContent'
import sectionStyles from './SummaryRepertoire.module.css'
import { ScrollReveal } from '../../../../../../Components/ScrollReveal/ScrollReveal'
import { Tabs } from 'radix-ui'
import { Link } from 'react-router-dom'
import { HiArrowRight } from 'react-icons/hi2'
import { sideRockPath } from '../../../../sectionConstants'
import layout from '../../Styles/SummaryLayout.module.css'

export function SummaryRepertoire({ index }: { index: string }) {
  const { active, setActive, previewRef, setHovered, setFocused } =
    useRepertoireRotation()
  return (
    <section
      id="repertorio"
      tabIndex={-1}
      className={layout.section}
      aria-labelledby="repertoire-title"
    >
      <p className={layout.eyebrow}>{index} / Repertório</p>
      <ScrollReveal className={layout.sectionHeading}>
        <div>
          <h2 id="repertoire-title">Refrões, intensidade e peso.</h2>
          <p>
            Três vertentes que dão identidade ao show. Escolha uma para conhecer
            o clima.
          </p>
        </div>
      </ScrollReveal>
      <Tabs.Root
        ref={previewRef}
        value={active}
        onValueChange={setActive}
        className={sectionStyles.repertoirePreview}
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
          className={sectionStyles.atmosphereTabs}
          aria-label="Atmosferas do repertório"
        >
          {atmospheres.map((item) => (
            <Tabs.Trigger key={item.id} value={item.id}>
              {item.label}
            </Tabs.Trigger>
          ))}
        </Tabs.List>
        <div className={sectionStyles.atmospherePanels}>
          {atmospheres.map((item) => (
            <RepertoireAtmosphere key={item.id} item={item} active={active} />
          ))}
        </div>
      </Tabs.Root>
      <div className={sectionStyles.repertoireExplore}>
        <p>
          Isso é só uma amostra. Conheça os outros artistas e as referências que
          completam o show.
        </p>
        <Link className={layout.textLink} to={sideRockPath('repertorio')}>
          Explorar o repertório <HiArrowRight aria-hidden />
        </Link>
      </div>
    </section>
  )
}
