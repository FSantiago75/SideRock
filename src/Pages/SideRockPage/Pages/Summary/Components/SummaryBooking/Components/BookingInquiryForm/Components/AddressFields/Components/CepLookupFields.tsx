import type { BookingAddressState } from '../../../Hooks/useBookingAddress'
import layout from '../../../BookingInquiryForm.module.css'

export function CepLookupFields({
  controller,
}: {
  controller: BookingAddressState
}) {
  const {
    address,
    updateAddress,
    findAddress,
    isLookingUp,
    cepMessage,
    cepError,
  } = controller
  return (
    <div className={layout.cepPanel}>
      <label htmlFor="booking-cep">
        CEP do local
        <div className={layout.cepControls}>
          <input
            id="booking-cep"
            onKeyDown={(event) => {
              if (event.key === 'Enter') event.preventDefault()
            }}
            inputMode="numeric"
            autoComplete="off"
            maxLength={9}
            placeholder="00000-000"
            aria-invalid={cepError || undefined}
            aria-describedby="cep-status"
            value={address.cep}
            onChange={(event) => updateAddress('cep', event.target.value)}
          />
          <button type="button" onClick={findAddress} disabled={isLookingUp}>
            {isLookingUp ? 'Buscando…' : 'Buscar endereço'}
          </button>
        </div>
      </label>
      <small
        id="cep-status"
        role="status"
        className={cepError ? layout.formError : undefined}
      >
        {cepMessage ||
          'Não sabe o CEP? Escolha “Digitar endereço”. Consulta pelo ViaCEP.'}
      </small>
    </div>
  )
}
