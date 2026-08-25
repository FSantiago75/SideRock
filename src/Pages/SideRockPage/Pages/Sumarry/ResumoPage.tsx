import { SectionPlaceholder } from '../../Components/Placeholder/SectionPlaceholder'
import { SideRockSectionPage } from '../../Components/SectionPage/SideRockSectionPage'
import { SIDE_ROCK_SECTION_LABELS } from '../../sectionConstants'
import bg from '../../../../SiderockAssets/Bgs2/BGResumo.png'

export function ResumoPage() {
  return (
    <SideRockSectionPage
      background={bg}
      backgroundAspectRatio="1536 / 1026"
      backgroundGrayscale="30%"
    >
      <SectionPlaceholder title={SIDE_ROCK_SECTION_LABELS.resumo} />
    </SideRockSectionPage>
  )
}
