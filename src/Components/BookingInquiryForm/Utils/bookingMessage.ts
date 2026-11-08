import type { BookingInquiry } from '../bookingInquiry.types'

export function buildBookingMessage(
  inquiry: BookingInquiry,
  projectName: string,
  manager: string,
): string {
  const { address } = inquiry
  const name = inquiry.name.trim()
  const venue = inquiry.venue.trim()
  const dateParts = inquiry.date.split('-')
  const date = /^\d{4}-\d{2}-\d{2}$/.test(inquiry.date)
    ? `${dateParts[2]}/${dateParts[1]}/${dateParts[0]}`
    : ''
  const descriptions: Record<string, string> = {
    'Casa de show / bar': 'Gostaria de levar a banda para um show',
    'Festa particular': 'Estou organizando uma festa particular',
    Festival: venue
      ? `Estamos organizando o festival “${venue}”`
      : 'Estamos organizando um festival',
    'Evento corporativo': 'Estamos organizando um evento corporativo',
    'Outro evento': 'Estou organizando um evento',
  }
  const city = [address.city.trim(), address.state.trim()]
    .filter(Boolean)
    .join('/')
  const street = address.street.trim()
  const neighborhood = address.neighborhood.trim()
  const location = street
    ? `O endereço é ${street}${address.number.trim() ? `, ${address.number.trim()}` : ''}${address.complement.trim() ? ` (${address.complement.trim()})` : ''}${neighborhood ? `, bairro ${neighborhood}` : ''}${city ? `, em ${city}` : ''}${address.cep ? `, CEP ${address.cep}` : ''}.`
    : city
      ? `O evento será em ${city}${neighborhood ? `, no bairro ${neighborhood}` : ''}${address.cep ? `, CEP ${address.cep}` : ''}.`
      : ''
  return [
    `Olá, ${manager}! ${name ? `Meu nome é ${name}. ` : ''}Gostaria de consultar a disponibilidade e o orçamento da ${projectName}.`,
    `${descriptions[inquiry.eventType] || 'Estou organizando um evento'}${venue && inquiry.eventType !== 'Festival' ? ` no local “${venue}”` : ''}${date ? `, no dia ${date}` : ', com data ainda a definir'}.`,
    location,
    'Você pode me informar as condições para contratação?',
  ]
    .filter(Boolean)
    .join('\n\n')
}
