import { SideRockSectionPage } from '../SideRockPage/Components/SectionPage/SideRockSectionPage'
import { AcousticNavbar } from './Components/NavBar/AcousticNavbar'
import { ACOUSTIC_SCROLLBAR } from './sectionConstants'

export function AcousticShellPage() {
  return (
    <SideRockSectionPage
      layout="flow"
      navbar={<AcousticNavbar />}
      accent="#d97706"
      accentHot="#fbbf24"
      scrollbarTheme={ACOUSTIC_SCROLLBAR}
    />
  )
}
