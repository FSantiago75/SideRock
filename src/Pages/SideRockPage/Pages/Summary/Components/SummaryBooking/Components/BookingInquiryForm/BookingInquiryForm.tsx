import { useRef, useState, type FormEvent } from 'react'
import { FaWhatsapp } from 'react-icons/fa6'
import { SIDE_ROCK_WHATSAPP_BASE } from '../../../../../../bookingContact'
import styles from '../../../../SummaryPage.module.css'
import layout from './BookingInquiryForm.module.css'
import type { EventFieldsValues } from './bookingInquiry.types'
import { buildBookingMessage } from './Utils/bookingMessage'
import { useBookingAddress } from './Hooks/useBookingAddress'
import { EventFields } from './Components/EventFields/EventFields'
import { AddressFields } from './Components/AddressFields/AddressFields'

export function BookingInquiryForm() {
  const [values, setValues] = useState<EventFieldsValues>({
    name: '',
    venue: '',
    eventType: '',
    date: '',
  })
  const [typeError, setTypeError] = useState(false)
  const address = useBookingAddress()
  const detailsRef = useRef<HTMLDetailsElement>(null)

  function update(field: keyof EventFieldsValues, value: string) {
    if (field === 'eventType') {
      setTypeError(false)
      setValues((current) => ({ ...current, eventType: value, venue: '' }))
    } else setValues((current) => ({ ...current, [field]: value }))
  }

  function validateEvent(event: FormEvent<HTMLFormElement>) {
    let focusId = ''
    if (!values.eventType) {
      setTypeError(true)
      focusId = 'booking-type'
    } else {
      const issue = address.validateAddress()
      if (issue) {
        if (detailsRef.current) detailsRef.current.open = true
        focusId = 'booking-' + issue.field
      }
    }
    if (focusId) {
      event.preventDefault()
      event.currentTarget.querySelector<HTMLElement>(`#${focusId}`)?.focus()
    }
  }

  return (
    <form
      className={layout.inquiryForm}
      action={SIDE_ROCK_WHATSAPP_BASE}
      method="get"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Consultar orçamento da Side Rock"
      onSubmit={validateEvent}
    >
      <input
        type="hidden"
        name="text"
        value={buildBookingMessage({ ...values, address: address.address })}
      />
      <EventFields values={values} typeError={typeError} onChange={update} />
      <AddressFields controller={address} detailsRef={detailsRef} />
      <button
        className={styles.primaryAction}
        type="submit"
        disabled={address.isLookingUp}
      >
        <FaWhatsapp aria-hidden />
        Continuar no WhatsApp
      </button>
      <p className={layout.formHint}>
        Envie uma consulta simples ou acrescente os detalhes que quiser. Você
        confere e envia a mensagem no WhatsApp.
      </p>
    </form>
  )
}
