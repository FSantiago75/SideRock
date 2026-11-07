export type EventAddress = {
  cep: string
  street: string
  number: string
  complement: string
  neighborhood: string
  city: string
  state: string
}

export type BookingInquiry = {
  name: string
  venue: string
  eventType: string
  date: string
  address: EventAddress
}

export type AddressMode = 'cep' | 'manual'
export type AddressIssue = { field: 'cep' | 'city' | 'state'; message: string }
export type EventFieldsValues = Omit<BookingInquiry, 'address'>
