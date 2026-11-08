import { BookingThemeContext } from './BookingThemeContext'
import { useRef, useState, type FormEvent, type CSSProperties } from 'react'
import { FaWhatsapp } from 'react-icons/fa6'
import styles from './BookingInquiryActions.module.css'
import layout from './BookingInquiryForm.module.css'
import type { EventFieldsValues } from './bookingInquiry.types'
import { buildBookingMessage } from './Utils/bookingMessage'
import { useBookingAddress } from './Hooks/useBookingAddress'
import { EventFields } from './Components/EventFields/EventFields'
import { AddressFields } from './Components/AddressFields/AddressFields'

type Props = {
  projectName: string
  manager: string
  whatsappUrl: string
  theme?: CSSProperties
}

export function BookingInquiryForm({
  projectName,
  manager,
  whatsappUrl,
  theme,
}: Props) {
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
    <BookingThemeContext value={theme}>
      <form
        style={theme}
        className={layout.inquiryForm}
        action={whatsappUrl.split('?')[0]}
        method="get"
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Consultar orçamento da ${projectName}`}
        onSubmit={validateEvent}
      >
        <input
          type="hidden"
          name="text"
          value={buildBookingMessage(
            { ...values, address: address.address },
            projectName,
            manager,
          )}
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
    </BookingThemeContext>
  )
}
