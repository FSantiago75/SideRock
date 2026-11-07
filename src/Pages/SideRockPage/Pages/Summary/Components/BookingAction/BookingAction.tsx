import { FaWhatsapp } from 'react-icons/fa6'
import styles from '../../SummaryPage.module.css'
import { SIDE_ROCK_BOOKING } from '../../Content/bookingContent'

export function BookingAction() {
  return (
    <a
      className={styles.primaryAction}
      href={SIDE_ROCK_BOOKING.whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaWhatsapp aria-hidden />
      Consultar data e orçamento
    </a>
  )
}
