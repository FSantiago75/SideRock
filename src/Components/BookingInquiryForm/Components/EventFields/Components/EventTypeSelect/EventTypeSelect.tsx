import { ThemedSelect } from '../../../ThemedSelect/ThemedSelect'
import { EVENT_TYPES } from '../../../../bookingOptions'

export function EventTypeSelect(props: {
  value: string
  onChange: (value: string) => void
  error: boolean
}) {
  return (
    <ThemedSelect
      {...props}
      id="booking-type"
      label="Tipo de evento"
      options={EVENT_TYPES}
    />
  )
}
