import { FaInstagram, FaWhatsapp } from 'react-icons/fa6'
import { HiArrowUpRight } from 'react-icons/hi2'
import { CompanyLegalBar } from '../../../../Components/CompanyLegalBar/CompanyLegalBar'
import { ScrollReveal } from '../../../../Components/ScrollReveal/ScrollReveal'
import { BookingVideoCarousel } from '../../../SideRockPage/Pages/Summary/BookingVideoCarousel'
import styles from '../../../SideRockPage/Pages/Summary/BookingSection.module.css'
import type { AcousticFormatId } from './acousticSummaryContent'
import { getAcousticBooking } from './acousticBookingContent'

export function AcousticBookingSection({ format }: { format: AcousticFormatId }) {
  const booking = getAcousticBooking(format)

  return (
    <section id="contratacao" className={styles.section} aria-labelledby="acoustic-booking-title">
      <div className={styles.layout}>
        <div className={styles.intro}>
          <ScrollReveal from="left">
            <p className={styles.eyebrow}>{booking.intro.eyebrow}</p>
            <h2 id="acoustic-booking-title">{booking.intro.title}</h2>
            <p className={styles.lead}>{booking.intro.lead}</p>
            <div className={styles.actions}>
              <a className={styles.primaryAction} href={booking.whatsappUrl} target="_blank" rel="noopener noreferrer"><FaWhatsapp aria-hidden />{booking.intro.primaryAction}</a>
              <a className={styles.secondaryAction} href={booking.instagramUrl} target="_blank" rel="noopener noreferrer"><FaInstagram aria-hidden />{booking.intro.secondaryAction}<HiArrowUpRight aria-hidden /></a>
            </div>
            <div className={styles.manager}><span>{booking.intro.managerLabel}</span><strong>{booking.manager} · Manager</strong><small>{booking.location}</small></div>
          </ScrollReveal>
        </div>
        <div className={styles.proof}>
          <ScrollReveal from="right" delayMs={80}><BookingVideoCarousel videos={booking.videos} /></ScrollReveal>
          <ol className={styles.steps}>
            {booking.cards.map(({ eyebrow, title, copy }, index) => <li key={title}><ScrollReveal className={styles.step} delayMs={Math.min(index * 70, 140)}><span className={styles.stepNumber}>{String(index + 1).padStart(2, '0')}</span><div><p>{eyebrow}</p><h3>{title}</h3><span>{copy}</span></div></ScrollReveal></li>)}
          </ol>
        </div>
      </div>
      <ScrollReveal className={styles.closing}><p>{booking.closing.copy}</p><a className={styles.primaryAction} href={booking.whatsappUrl} target="_blank" rel="noopener noreferrer"><FaWhatsapp aria-hidden />{booking.closing.action}</a></ScrollReveal>
      <CompanyLegalBar location={booking.location} className={styles.legalBar} textClassName={styles.legal} />
    </section>
  )
}
