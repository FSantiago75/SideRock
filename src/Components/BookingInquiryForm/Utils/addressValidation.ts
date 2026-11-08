import { BRAZIL_STATES } from '../bookingOptions'
import type {
  EventAddress,
  AddressMode,
  AddressIssue,
} from '../bookingInquiry.types'

export function validateOptionalAddress(
  address: EventAddress,
  mode: AddressMode,
  resolvedCep: string,
): AddressIssue | null {
  if (!Object.values(address).some((value) => value.trim())) return null
  if (mode === 'cep' && (!resolvedCep || address.cep !== resolvedCep))
    return {
      field: 'cep',
      message: 'Conclua a busca do CEP ou apague-o para enviar sem endereço.',
    }
  if (!address.city.trim())
    return {
      field: 'city',
      message: 'Informe a cidade para completar este endereço.',
    }
  if (!BRAZIL_STATES.includes(address.state as (typeof BRAZIL_STATES)[number]))
    return {
      field: 'state',
      message: 'Selecione o estado para completar este endereço.',
    }
  return null
}
