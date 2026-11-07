import type { EventAddress } from './bookingInquiry.types'

export const EMPTY_ADDRESS: EventAddress = {
  cep: '',
  street: '',
  number: '',
  complement: '',
  neighborhood: '',
  city: '',
  state: '',
}
export const BRAZIL_STATES = [
  'AC',
  'AL',
  'AP',
  'AM',
  'BA',
  'CE',
  'DF',
  'ES',
  'GO',
  'MA',
  'MT',
  'MS',
  'MG',
  'PA',
  'PB',
  'PR',
  'PE',
  'PI',
  'RJ',
  'RN',
  'RS',
  'RO',
  'RR',
  'SC',
  'SP',
  'SE',
  'TO',
] as const

export const EVENT_TYPES = [
  'Casa de show / bar',
  'Festa particular',
  'Festival',
  'Evento corporativo',
  'Outro evento',
] as const
