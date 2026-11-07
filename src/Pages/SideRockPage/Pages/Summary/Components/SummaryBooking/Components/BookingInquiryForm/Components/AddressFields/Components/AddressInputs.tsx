import { BRAZIL_STATES } from '../../../bookingOptions'
import type { BookingAddressState } from '../../../Hooks/useBookingAddress'
import { ThemedSelect } from '../../ThemedSelect/ThemedSelect'
import layout from '../../../BookingInquiryForm.module.css'

export function AddressInputs({
  controller,
}: {
  controller: BookingAddressState
}) {
  const { address, updateAddress, issue } = controller
  const stateError = issue?.field === 'state'
  return (
    <div className={layout.formFields}>
      <label htmlFor="booking-city">
        Cidade
        <input
          id="booking-city"
          aria-invalid={issue?.field === 'city' || undefined}
          aria-describedby={
            issue?.field === 'city' ? 'booking-address-error' : undefined
          }
          autoComplete="off"
          maxLength={120}
          value={address.city}
          onChange={(event) => updateAddress('city', event.target.value)}
          placeholder="Cidade do evento"
        />
      </label>
      <ThemedSelect
        id="booking-state"
        label="Estado"
        placeholder="UF"
        options={BRAZIL_STATES}
        value={address.state}
        onChange={(value) => updateAddress('state', value)}
        error={stateError}
        required={false}
      />
      <label className={layout.formWide} htmlFor="booking-street">
        Rua ou avenida <span> (opcional)</span>
        <input
          id="booking-street"
          maxLength={160}
          value={address.street}
          onChange={(event) => updateAddress('street', event.target.value)}
          placeholder="Endereço do local"
        />
      </label>
      <label htmlFor="booking-neighborhood">
        Bairro <span> (opcional)</span>
        <input
          id="booking-neighborhood"
          maxLength={120}
          value={address.neighborhood}
          onChange={(event) =>
            updateAddress('neighborhood', event.target.value)
          }
        />
      </label>
      <label htmlFor="booking-number">
        Número <span> (opcional)</span>
        <input
          id="booking-number"
          maxLength={20}
          value={address.number}
          onChange={(event) => updateAddress('number', event.target.value)}
          placeholder="Número ou s/n"
        />
      </label>
      <label className={layout.formWide} htmlFor="booking-complement">
        Complemento <span> (opcional)</span>
        <input
          id="booking-complement"
          maxLength={120}
          value={address.complement}
          onChange={(event) => updateAddress('complement', event.target.value)}
          placeholder="Salão, espaço ou ponto de referência"
        />
      </label>
    </div>
  )
}
