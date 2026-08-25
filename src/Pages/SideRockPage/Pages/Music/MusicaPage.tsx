import { SectionPlaceholder } from '../../Components/Placeholder/SectionPlaceholder'
import { SideRockSectionPage } from '../../Components/SectionPage/SideRockSectionPage'
import { SIDE_ROCK_SECTION_LABELS } from '../../sectionConstants'
import bg from '../../../../SiderockAssets/Bgs2/BGMusica.png'

export function MusicaPage() {
  return (
    <SideRockSectionPage background={bg}>
      <SectionPlaceholder title={SIDE_ROCK_SECTION_LABELS.musica} />
    </SideRockSectionPage>
  )
}
