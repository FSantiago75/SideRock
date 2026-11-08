import type { EventFieldsValues } from '../../bookingInquiry.types'
import { BookingDatePicker } from './Components/BookingDatePicker/BookingDatePicker'
import { EventTypeSelect } from './Components/EventTypeSelect/EventTypeSelect'
import layout from '../../BookingInquiryForm.module.css'

type Props = {
  values: EventFieldsValues
  typeError: boolean
  onChange: (field: keyof EventFieldsValues, value: string) => void
}

export function EventFields({ values, typeError, onChange }: Props) {
  const showVenue = [
    'Casa de show / bar',
    'Festival',
    'Evento corporativo',
  ].includes(values.eventType)
  return (
    <fieldset className={layout.formGroup}>
      <legend>Sobre o evento</legend>
      <div className={layout.formFields}>
        <label htmlFor="booking-name">
          Seu nome <span> (opcional)</span>
          <input
            id="booking-name"
            autoComplete="name"
            maxLength={100}
            placeholder="Como podemos chamar você?"
            value={values.name}
            onChange={(event) => onChange('name', event.target.value)}
          />
        </label>
        <EventTypeSelect
          value={values.eventType}
          onChange={(value) => onChange('eventType', value)}
          error={typeError}
        />
        {showVenue && (
          <label htmlFor="booking-venue">
            {values.eventType === 'Casa de show / bar'
              ? 'Nome do estabelecimento'
              : values.eventType === 'Festival'
                ? 'Nome do festival'
                : 'Empresa ou local do evento'}
            {values.eventType !== 'Casa de show / bar' && (
              <span> (opcional)</span>
            )}
            <input
              id="booking-venue"
              required={values.eventType === 'Casa de show / bar'}
              maxLength={140}
              placeholder={
                values.eventType === 'Festival'
                  ? 'Qual é o festival?'
                  : 'Nome da casa, empresa ou espaço'
              }
              value={values.venue}
              onChange={(event) => onChange('venue', event.target.value)}
            />
          </label>
        )}
        <BookingDatePicker
          value={values.date}
          onChange={(value) => onChange('date', value)}
        />
      </div>
    </fieldset>
  )
}
