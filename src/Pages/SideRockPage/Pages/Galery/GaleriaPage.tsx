import { SectionPlaceholder } from '../../Components/Placeholder/SectionPlaceholder'
import { SideRockSectionPage } from '../../Components/SectionPage/SideRockSectionPage'
import { SIDE_ROCK_SECTION_LABELS } from '../../sectionConstants'
import bg from '../../../../SiderockAssets/Bgs2/BGGaleria.png'

export function GaleriaPage() {
  return (
    <SideRockSectionPage background={bg} backgroundGrayscale="50%">
      <SectionPlaceholder title={SIDE_ROCK_SECTION_LABELS.galeria} />
    </SideRockSectionPage>
  )
}
