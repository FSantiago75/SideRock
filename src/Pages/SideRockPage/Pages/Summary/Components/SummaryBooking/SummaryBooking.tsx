import { ScrollReveal } from '../../../../../../Components/ScrollReveal/ScrollReveal'
import layout from '../../Styles/SummaryLayout.module.css'
import { SIDE_ROCK_BOOKING } from '../../Content/bookingContent'
import { HiArrowRight } from 'react-icons/hi2'
import { BookingInquiryForm } from '../../../../../../Components/BookingInquiryForm/BookingInquiryForm'
import sectionStyles from './SummaryBooking.module.css'

export function SummaryBooking({ index }: { index: string }) {
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
            <h2 id="booking-title">Leve a Side Rock ao seu palco.</h2>
            <p className={layout.copy}>
              Conte um pouco sobre seu evento e leve sua consulta pronta para o
              WhatsApp. Vanessa conversa com você sobre disponibilidade e
              orçamento.
            </p>
            <a
              className={layout.textLink}
              href={SIDE_ROCK_BOOKING.whatsappUrl}
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
            projectName="Side Rock"
            manager={SIDE_ROCK_BOOKING.manager}
            whatsappUrl={SIDE_ROCK_BOOKING.whatsappUrl}
          />
        </ScrollReveal>
      </div>
    </section>
  )
}
