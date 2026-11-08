import { useContext } from 'react'
import { BookingThemeContext } from '../../BookingThemeContext'
import { Select } from 'radix-ui'
import { HiCheck, HiChevronDown, HiChevronUp } from 'react-icons/hi2'
import form from '../../BookingInquiryForm.module.css'
import layout from './ThemedSelect.module.css'

type SelectProps = {
  id: string
  label: string
  options: readonly string[]
  value: string
  onChange: (value: string) => void
  error?: boolean
  required?: boolean
  placeholder?: string
}
export function ThemedSelect({
  id,
  label,
  options,
  value,
  onChange,
  error,
  placeholder = 'Selecione uma opção',
  required = true,
}: SelectProps) {
  const theme = useContext(BookingThemeContext)
  return (
    <div className={form.formControl}>
      <label id={`${id}-label`} htmlFor={id}>
        {label}
      </label>
      <Select.Root value={value} onValueChange={onChange}>
        <Select.Trigger
          id={id}
          className={layout.selectTrigger}
          aria-labelledby={`${id}-label`}
          aria-required={required || undefined}
          aria-invalid={error || undefined}
          aria-describedby={error ? `${id}-error` : undefined}
        >
          <Select.Value placeholder={placeholder} />
          <Select.Icon>
            <HiChevronDown aria-hidden />
          </Select.Icon>
        </Select.Trigger>
        <Select.Portal>
          <Select.Content
            style={theme}
            className={layout.selectMenu}
            position="popper"
            sideOffset={6}
            collisionPadding={12}
          >
            <Select.ScrollUpButton className={layout.selectScroll}>
              <HiChevronUp aria-hidden />
            </Select.ScrollUpButton>
            <Select.Viewport className={layout.selectViewport}>
              {options.map((option) => (
                <Select.Item
                  key={option}
                  value={option}
                  className={layout.selectOption}
                >
                  <Select.ItemText>{option}</Select.ItemText>
                  <Select.ItemIndicator>
                    <HiCheck aria-hidden />
                  </Select.ItemIndicator>
                </Select.Item>
              ))}
            </Select.Viewport>
            <Select.ScrollDownButton className={layout.selectScroll}>
              <HiChevronDown aria-hidden />
            </Select.ScrollDownButton>
          </Select.Content>
        </Select.Portal>
      </Select.Root>
      {error && (
        <small id={`${id}-error`} className={form.formError}>
          Selecione uma opção.
        </small>
      )}
    </div>
  )
}
