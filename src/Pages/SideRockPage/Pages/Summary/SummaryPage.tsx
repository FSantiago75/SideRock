import { useRef, type CSSProperties } from 'react'
import { CompanyLegalBar } from '../../../../Components/CompanyLegalBar/CompanyLegalBar'
import bg from '../../../../assets/sideRock/backgrounds/sideRockSummaryAtmosphereV2.png'
import { SideRockSectionPage } from '../../Components/SectionPage/SideRockSectionPage'
import { SIDE_ROCK_BOOKING } from './Content/bookingContent'
import { SIDE_ROCK_VENUES } from './Content/venuesContent'
import styles from './SummaryPage.module.css'
import bookingStyles from './BookingSection.module.css'
import layout from './Styles/SummaryLayout.module.css'
import { SummaryHero } from './Components/SummaryHero/SummaryHero'
import { SummaryStory } from './Components/SummaryStory/SummaryStory'
import { SummaryLive } from './Components/SummaryLive/SummaryLive'
import { SummaryMembers } from './Components/SummaryMembers/SummaryMembers'
import { SummaryVenues } from './Components/SummaryVenues/SummaryVenues'
import { SummaryRepertoire } from './Components/SummaryRepertoire/SummaryRepertoire'
import { SummaryBooking } from './Components/SummaryBooking/SummaryBooking'
import { SummaryFooter } from './Components/SummaryFooter/SummaryFooter'

export function SummaryPage() {
  const articleRef = useRef<HTMLElement>(null)
  const pageStyle = { '--summary-hero-image': `url(${bg})` } as CSSProperties

  function goTo(id: string) {
    const target = articleRef.current?.querySelector<HTMLElement>(`#${id}`)
    target?.scrollIntoView({
      behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches
        ? 'instant'
        : 'smooth',
      block: 'start',
    })
    target?.focus({ preventScroll: true })
  }

  return (
    <SideRockSectionPage layout="flow">
      <article
        ref={articleRef}
        className={`${styles.page} ${layout.journey}`}
        style={pageStyle}
      >
        <SummaryHero onExplore={() => goTo('ao-vivo')} />

        <SummaryStory />

        <SummaryLive />

        <SummaryMembers />

        {SIDE_ROCK_VENUES.length > 0 && <SummaryVenues />}

        <SummaryRepertoire index={SIDE_ROCK_VENUES.length ? '05' : '04'} />

        <SummaryBooking index={SIDE_ROCK_VENUES.length ? '06' : '05'} />
        <CompanyLegalBar
          location={SIDE_ROCK_BOOKING.location}
          className={bookingStyles.legalBar}
          textClassName={bookingStyles.legal}
        />
        <SummaryFooter />
      </article>
    </SideRockSectionPage>
  )
}
