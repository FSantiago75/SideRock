import { OZZBORN_BOOKING_THEME } from '../../Content/ozzbornTheme'
import { ScrollReveal } from '../../../../../../Components/ScrollReveal/ScrollReveal'
import layout from '../../Styles/SummaryLayout.module.css'
import { OZZBORN_BOOKING } from '../../Content/ozzbornBookingContent'
import { HiArrowRight } from 'react-icons/hi2'
import { BookingInquiryForm } from '../../../../../../Components/BookingInquiryForm/BookingInquiryForm'
import sectionStyles from './OzzbornSummaryBooking.module.css'

export function OzzbornSummaryBooking({ index }: { index: string }) {
  return (
    <section
      id="contratacao"
      tabIndex={-1}
      className={`${layout.section} ${sectionStyles.surface}`}
      aria-labelledby="booking-title"
    >
      <div className={`${sectionStyles.split} ${sectionStyles.bookingLayout}`}>
        <div className={sectionStyles.bookingIntro}>
          <ScrollReveal>
            <p className={`${layout.eyebrow} ${layout.chapterLabel}`}>
              {index} / Contratação
            </p>
            <h2 id="booking-title">Leve a Ozzborn ao seu palco.</h2>
            <p className={layout.copy}>
              Conte um pouco sobre seu evento e leve sua consulta pronta para o
              WhatsApp. Vanessa conversa com você sobre disponibilidade e
              orçamento.
            </p>
            <a
              className={layout.textLink}
              href={OZZBORN_BOOKING.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Falar direto com Vanessa <HiArrowRight aria-hidden />
            </a>
            <p className={sectionStyles.manager}>
              Atendimento direto com Vanessa · Manager
            </p>
          </ScrollReveal>
        </div>
        <ScrollReveal>
          <BookingInquiryForm
            projectName="Ozzborn"
            theme={OZZBORN_BOOKING_THEME}
            manager={OZZBORN_BOOKING.manager}
            whatsappUrl={OZZBORN_BOOKING.whatsappUrl}
          />
        </ScrollReveal>
      </div>
    </section>
  )
}
