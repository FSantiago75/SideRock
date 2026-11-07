import { useState } from 'react'
import { Popover } from 'radix-ui'
import { DayPicker } from '@daypicker/react'
import { ptBR } from '@daypicker/react/locale'
import { HiCalendarDays } from 'react-icons/hi2'
import '@daypicker/react/style.css'
import form from '../../../../BookingInquiryForm.module.css'
import layout from './BookingDatePicker.module.css'

export function BookingDatePicker({
  value,
  onChange,
}: {
  value: string
  onChange: (value: string) => void
}) {
  const [open, setOpen] = useState(false)
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  const parts = value.split('-').map(Number)
  const selected = value
    ? new Date(parts[0], parts[1] - 1, parts[2])
    : undefined
  function selectDate(date: Date | undefined) {
    if (!date) return
    onChange(
      `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`,
    )
    setOpen(false)
  }
  return (
    <div className={form.formControl}>
      <label id="booking-date-label" htmlFor="booking-date">
        Data <span>(opcional)</span>
      </label>
      <Popover.Root open={open} onOpenChange={setOpen}>
        <Popover.Trigger
          id="booking-date"
          className={layout.dateTrigger}
          aria-labelledby="booking-date-label booking-date-value"
          aria-describedby="booking-date-help"
        >
          <span id="booking-date-value" data-placeholder={!value || undefined}>
            {selected
              ? selected.toLocaleDateString('pt-BR')
              : 'Selecionar data'}
          </span>
          <HiCalendarDays aria-hidden />
        </Popover.Trigger>
        <Popover.Portal>
          <Popover.Content
            className={layout.calendarContent}
            sideOffset={8}
            collisionPadding={12}
            align="start"
            aria-label="Escolher a data do evento"
          >
            <DayPicker
              mode="single"
              locale={ptBR}
              selected={selected}
              onSelect={selectDate}
              defaultMonth={selected ?? today}
              startMonth={new Date(today.getFullYear(), today.getMonth(), 1)}
              disabled={{ before: today }}
              autoFocus
              showOutsideDays
            />
            <button
              type="button"
              className={layout.clearDate}
              onClick={() => {
                onChange('')
                setOpen(false)
              }}
            >
              Ainda não defini a data
            </button>
          </Popover.Content>
        </Popover.Portal>
      </Popover.Root>
      <small id="booking-date-help">
        Se ainda não definiu, pode deixar em branco.
      </small>
    </div>
  )
}
