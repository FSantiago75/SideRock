import { useEffect, useRef, type CSSProperties } from 'react'
import { CompanyLegalBar } from '../../../../Components/CompanyLegalBar/CompanyLegalBar'
import atmosphere from '../../../../assets/ozzborn/backgrounds/ozzbornSummaryAtmosphere.png'
import { SideRockSectionPage } from '../../../SideRockPage/Components/SectionPage/SideRockSectionPage'
import { OzzbornNavbar } from '../../Components/NavBar/OzzbornNavbar'
import { OZZBORN_SCROLLBAR } from '../../sectionConstants'
import { OZZBORN_BOOKING } from './Content/ozzbornBookingContent'
import { OZZBORN_VENUES } from './Content/ozzbornVenuesContent'
import styles from './OzzbornSummaryPage.module.css'
import layout from './Styles/SummaryLayout.module.css'
import details from './Styles/OzzbornSummaryDetails.module.css'
import { OzzbornSummaryHero } from './Components/OzzbornSummaryHero/OzzbornSummaryHero'
import { OzzbornSummaryStory } from './Components/OzzbornSummaryStory/OzzbornSummaryStory'
import { OzzbornSummaryLive } from './Components/OzzbornSummaryLive/OzzbornSummaryLive'
import { OzzbornSummaryMembers } from './Components/OzzbornSummaryMembers/OzzbornSummaryMembers'
import { OzzbornSummaryVenues } from './Components/OzzbornSummaryVenues/OzzbornSummaryVenues'
import { OzzbornSummaryDiscography } from './Components/OzzbornSummaryDiscography/OzzbornSummaryDiscography'
import { OzzbornSummaryBooking } from './Components/OzzbornSummaryBooking/OzzbornSummaryBooking'
import { OzzbornSummaryFooter } from './Components/OzzbornSummaryFooter/OzzbornSummaryFooter'

export function OzzbornSummaryPage() {
  const articleRef = useRef<HTMLElement>(null)
  const pageStyle = {
    '--summary-hero-image': `url(${atmosphere})`,
  } as CSSProperties
  useEffect(() => {
    document.title = 'Ozzborn — Tributo a Ozzy Osbourne em Jundiaí'
  }, [])
  function goToShow() {
    const target = articleRef.current?.querySelector<HTMLElement>('#ao-vivo')
    target?.scrollIntoView({
      behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches
        ? 'instant'
        : 'smooth',
      block: 'start',
    })
    target?.focus({ preventScroll: true })
  }
  return (
    <SideRockSectionPage
      layout="flow"
      navbar={<OzzbornNavbar />}
      accent="#7c3aed"
      accentHot="#c4b5fd"
      scrollbarTheme={OZZBORN_SCROLLBAR}
    >
      <article
        ref={articleRef}
        className={`${styles.page} ${layout.journey}`}
        style={pageStyle}
      >
        <OzzbornSummaryHero onExplore={goToShow} />
        <OzzbornSummaryStory />
        <OzzbornSummaryLive />
        <OzzbornSummaryMembers />
        {OZZBORN_VENUES.length > 0 && <OzzbornSummaryVenues />}
        <OzzbornSummaryDiscography
          index={OZZBORN_VENUES.length ? '05' : '04'}
        />
        <OzzbornSummaryBooking index={OZZBORN_VENUES.length ? '06' : '05'} />
        <CompanyLegalBar
          location={OZZBORN_BOOKING.location}
          className={details.legalBar}
          textClassName={details.legal}
        />
        <OzzbornSummaryFooter />
      </article>
    </SideRockSectionPage>
  )
}
