import { SIDE_ROCK_SUMMARY_CONTENT } from '../../Content/summaryContent'
import { ScrollReveal } from '../../../../../../Components/ScrollReveal/ScrollReveal'
import layout from '../../Styles/SummaryLayout.module.css'
import styles from '../../SummaryPage.module.css'
import { SIDE_ROCK_BOOKING } from '../../Content/bookingContent'
import { BookingAction } from '../BookingAction/BookingAction'
import { HiArrowRight } from 'react-icons/hi2'
import { Link } from 'react-router-dom'
import { sideRockPath } from '../../../../sectionConstants'
import bookingStyles from '../../BookingSection.module.css'
import { BookingVideoCarousel } from '../../../../../../Components/BookingVideoCarousel/BookingVideoCarousel'
import sectionStyles from './SummaryLive.module.css'

export function SummaryLive() {
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
            <h2 id="live-title">{SIDE_ROCK_SUMMARY_CONTENT.live.title}</h2>
            <p className={sectionStyles.liveLead}>
              {SIDE_ROCK_SUMMARY_CONTENT.live.copy}
            </p>
            <div className={sectionStyles.liveActions}>
              <BookingAction />
              <Link
                className={styles.secondaryAction}
                to={sideRockPath('galeria')}
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
            videos={SIDE_ROCK_BOOKING.videos}
            variant="story"
            autoAdvance={false}
            nativeSwipe
          />
        </ScrollReveal>
      </div>
    </section>
  )
}
