import type { RefObject } from 'react'
import { HiChevronDown } from 'react-icons/hi2'
import type { BookingAddressState } from '../../Hooks/useBookingAddress'
import { AddressInputs } from './Components/AddressInputs'
import { CepLookupFields } from './Components/CepLookupFields'
import layout from '../../BookingInquiryForm.module.css'

type Props = {
  controller: BookingAddressState
  detailsRef: RefObject<HTMLDetailsElement | null>
}

export function AddressFields({ controller, detailsRef }: Props) {
  const { mode, changeMode, issue, hasAddress } = controller
  return (
    <details ref={detailsRef} className={layout.formAccordion}>
      <summary>
        <span>
          <strong>Endereço do evento</strong>
          <small>Opcional · CEP ou endereço manual</small>
        </span>
        <HiChevronDown aria-hidden />
      </summary>
      <div className={layout.accordionBody}>
        {issue?.field === 'city' && (
          <p
            id="booking-address-error"
            className={layout.formError}
            role="alert"
          >
            {issue.message}
          </p>
        )}
        <div
          className={layout.addressModes}
          role="group"
          aria-label="Como preencher o endereço"
        >
          <button
            type="button"
            aria-pressed={mode === 'cep'}
            onClick={() => changeMode('cep')}
          >
            Buscar pelo CEP
          </button>
          <button
            type="button"
            aria-pressed={mode === 'manual'}
            onClick={() => changeMode('manual')}
          >
            Digitar endereço
          </button>
        </div>
        {mode === 'cep' && <CepLookupFields controller={controller} />}
        {hasAddress && <AddressInputs controller={controller} />}
      </div>
    </details>
  )
}
