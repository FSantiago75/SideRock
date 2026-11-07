import { BRAZIL_STATES, EMPTY_ADDRESS } from '../bookingOptions'
import type { EventAddress } from '../bookingInquiry.types'

export async function lookupAddressByCep(
  value: string,
  signal?: AbortSignal,
): Promise<EventAddress> {
  const cep = value.replace(/\D/g, '')
  if (cep.length !== 8) throw new Error('Digite os 8 números do CEP.')
  const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`, {
    signal,
    referrerPolicy: 'no-referrer',
  })
  if (!response.ok)
    throw new Error(
      'Não foi possível consultar. Tente novamente ou use o endereço manual.',
    )
  const result = await response.json()
  if (
    result.erro ||
    typeof result.localidade !== 'string' ||
    !result.localidade.trim() ||
    !BRAZIL_STATES.includes(result.uf)
  )
    throw new Error('CEP não encontrado. Confira ou use o endereço manual.')
  return {
    ...EMPTY_ADDRESS,
    cep: cep.slice(0, 5) + '-' + cep.slice(5),
    street: typeof result.logradouro === 'string' ? result.logradouro : '',
    neighborhood: typeof result.bairro === 'string' ? result.bairro : '',
    city: result.localidade,
    state: result.uf,
  }
}
