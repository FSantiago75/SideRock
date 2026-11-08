import { GuitarElectric } from 'lucide-react'
import type { IconBaseProps } from 'react-icons'

export function ElectricGuitarIcon(props: IconBaseProps) {
  return (
    <GuitarElectric
      size={props.size ?? '1em'}
      color={props.color}
      className={props.className}
      style={props.style}
      strokeWidth={2.2}
      aria-hidden
    />
  )
}
