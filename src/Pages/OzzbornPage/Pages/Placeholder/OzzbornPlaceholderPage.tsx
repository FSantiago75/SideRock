import { ScrollReveal } from '../../../../Components/ScrollReveal/ScrollReveal'
import { SideRockSectionPage } from '../../../SideRockPage/Components/SectionPage/SideRockSectionPage'
import { OzzbornNavbar } from '../../Components/NavBar/OzzbornNavbar'
import {
  OZZBORN_SCROLLBAR,
  OZZBORN_SECTION_LABELS,
  type OzzbornSectionId,
} from '../../sectionConstants'
import styles from './OzzbornPlaceholderPage.module.css'

type OzzbornPlaceholderPageProps = {
  section: Exclude<OzzbornSectionId, 'resumo'>
}

export function OzzbornPlaceholderPage({ section }: OzzbornPlaceholderPageProps) {
  const label = OZZBORN_SECTION_LABELS[section]

  return (
    <SideRockSectionPage
      layout="flow"
      navbar={<OzzbornNavbar />}
      accent="#7c3aed"
      accentHot="#c4b5fd"
      scrollbarTheme={OZZBORN_SCROLLBAR}
    >
      <section className={styles.page} aria-labelledby="ozzborn-placeholder-title">
        <ScrollReveal className={styles.content} from="up">
          <p className={styles.eyebrow}>Ozzborn · próxima etapa</p>
          <h1 id="ozzborn-placeholder-title">{label}</h1>
          <p>Esta área foi preservada para construirmos com cuidado, página por página, a partir do novo molde do Ozzborn.</p>
        </ScrollReveal>
      </section>
    </SideRockSectionPage>
  )
}
