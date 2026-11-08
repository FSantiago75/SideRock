import { FaWhatsapp } from 'react-icons/fa6'
import styles from '../../OzzbornSummaryPage.module.css'
import { OZZBORN_BOOKING } from '../../Content/ozzbornBookingContent'

export function OzzbornBookingAction() {
  return (
    <a
      className={styles.primaryAction}
      href={OZZBORN_BOOKING.whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaWhatsapp aria-hidden />
      Consultar data e orçamento
    </a>
  )
}
