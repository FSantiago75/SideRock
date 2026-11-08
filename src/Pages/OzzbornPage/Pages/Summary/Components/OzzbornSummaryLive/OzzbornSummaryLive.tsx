import { OZZBORN_SUMMARY_CONTENT } from '../../Content/ozzbornSummaryContent'
import { ScrollReveal } from '../../../../../../Components/ScrollReveal/ScrollReveal'
import layout from '../../Styles/SummaryLayout.module.css'
import styles from '../../OzzbornSummaryPage.module.css'
import { OZZBORN_BOOKING } from '../../Content/ozzbornBookingContent'
import { OzzbornBookingAction } from '../OzzbornBookingAction/OzzbornBookingAction'
import { HiArrowRight } from 'react-icons/hi2'
import { Link } from 'react-router-dom'
import { ozzbornPath } from '../../../../sectionConstants'
import bookingStyles from '../../Styles/OzzbornSummaryDetails.module.css'
import { BookingVideoCarousel } from '../../../../../../Components/BookingVideoCarousel/BookingVideoCarousel'
import sectionStyles from './OzzbornSummaryLive.module.css'

export function OzzbornSummaryLive() {
  return (
    <section
      id="ao-vivo"
      tabIndex={-1}
      className={`${layout.section} ${sectionStyles.liveSection}`}
      aria-labelledby="live-title"
    >
      <div className={sectionStyles.liveLayout}>
        <div className={sectionStyles.liveIntro}>
          <ScrollReveal>
            <p className={layout.eyebrow}>02 / Ao vivo</p>
            <h2 id="live-title">{OZZBORN_SUMMARY_CONTENT.live.title}</h2>
            <p className={sectionStyles.liveLead}>
              {OZZBORN_SUMMARY_CONTENT.live.copy}
            </p>
            <div className={sectionStyles.liveActions}>
              <OzzbornBookingAction />
              <Link
                className={styles.secondaryAction}
                to={ozzbornPath('galeria')}
              >
                Explorar a galeria <HiArrowRight aria-hidden />
              </Link>
            </div>
            <div className={bookingStyles.manager}>
              <span>Atendimento direto</span>
              <strong>Vanessa · Manager</strong>
              <small>Jundiaí / SP</small>
            </div>
            <p className={sectionStyles.liveGuide}>
              Continue a rolagem para conhecer as apresentações.
            </p>
          </ScrollReveal>
        </div>
        <ScrollReveal className={sectionStyles.liveProof}>
          <BookingVideoCarousel
            videos={OZZBORN_BOOKING.videos}
            variant="story"
          />
        </ScrollReveal>
      </div>
    </section>
  )
}
