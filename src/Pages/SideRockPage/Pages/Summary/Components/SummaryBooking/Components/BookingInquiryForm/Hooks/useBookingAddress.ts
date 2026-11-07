import { useEffect, useRef, useState } from 'react'
import { EMPTY_ADDRESS } from '../bookingOptions'
import type {
  AddressMode,
  AddressIssue,
  EventAddress,
} from '../bookingInquiry.types'
import { lookupAddressByCep } from '../Services/cepLookup'
import { validateOptionalAddress } from '../Utils/addressValidation'

export function useBookingAddress() {
  const [address, setAddress] = useState<EventAddress>({ ...EMPTY_ADDRESS })
  const [mode, setMode] = useState<AddressMode>('cep')
  const [resolvedCep, setResolvedCep] = useState('')
  const [issue, setIssue] = useState<AddressIssue | null>(null)
  const [lookupFailed, setLookupFailed] = useState(false)
  const [lookupMessage, setLookupMessage] = useState('')
  const [isLookingUp, setIsLookingUp] = useState(false)
  const lookupRef = useRef<AbortController | null>(null)

  useEffect(() => () => lookupRef.current?.abort(), [])

  function cancelLookup() {
    lookupRef.current?.abort()
    lookupRef.current = null
    setIsLookingUp(false)
  }

  function clearErrors() {
    setIssue(null)
    setLookupFailed(false)
  }

  function changeMode(next: AddressMode) {
    if (next === mode) return
    cancelLookup()
    clearErrors()
    setResolvedCep('')
    setLookupMessage('')
    setMode(next)
    setAddress((current) =>
      next === 'manual' ? { ...current, cep: '' } : { ...EMPTY_ADDRESS },
    )
  }

  function updateAddress(field: keyof EventAddress, value: string) {
    clearErrors()
    if (field === 'cep') {
      cancelLookup()
      setResolvedCep('')
      setLookupMessage('')
      const digits = value.replace(/\D/g, '').slice(0, 8)
      const cep =
        digits.length > 5 ? digits.slice(0, 5) + '-' + digits.slice(5) : digits
      setAddress({ ...EMPTY_ADDRESS, cep })
      return
    }
    const editingLookup =
      mode === 'cep' &&
      ['street', 'neighborhood', 'city', 'state'].includes(field)
    if (editingLookup) {
      cancelLookup()
      setMode('manual')
      setResolvedCep('')
      setLookupMessage('')
    }
    setAddress((current) => ({
      ...current,
      ...(editingLookup ? { cep: '' } : {}),
      [field]: value,
    }))
  }

  async function findAddress() {
    cancelLookup()
    clearErrors()
    if (address.cep.replace(/\D/g, '').length !== 8) {
      setLookupFailed(true)
      setLookupMessage('Digite os 8 números do CEP.')
      return
    }
    const controller = new AbortController()
    lookupRef.current = controller
    setIsLookingUp(true)
    setLookupMessage('Buscando endereço…')
    const timeout = window.setTimeout(() => controller.abort(), 8000)
    try {
      const result = await lookupAddressByCep(address.cep, controller.signal)
      if (lookupRef.current !== controller) return
      setAddress(result)
      setResolvedCep(result.cep)
      setLookupMessage(
        'Endereço encontrado. Complete o número e os detalhes do local, se souber.',
      )
    } catch (error) {
      if (lookupRef.current !== controller) return
      setLookupFailed(true)
      setLookupMessage(
        controller.signal.aborted
          ? 'A consulta demorou. Tente novamente ou digite o endereço manualmente.'
          : error instanceof Error
            ? error.message
            : 'Não foi possível consultar. Use o endereço manual.',
      )
    } finally {
      window.clearTimeout(timeout)
      if (lookupRef.current === controller) {
        lookupRef.current = null
        setIsLookingUp(false)
      }
    }
  }

  function validateAddress() {
    const next = validateOptionalAddress(address, mode, resolvedCep)
    setIssue(next)
    return next
  }

  return {
    address,
    mode,
    issue,
    isLookingUp,
    hasAddress: mode === 'manual' || !!resolvedCep,
    cepError: issue?.field === 'cep' || lookupFailed,
    cepMessage: issue?.field === 'cep' ? issue.message : lookupMessage,
    changeMode,
    updateAddress,
    findAddress,
    validateAddress,
  }
}

export type BookingAddressState = ReturnType<typeof useBookingAddress>
