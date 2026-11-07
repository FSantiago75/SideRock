import Icon from '@mdi/react'
import { mdiMicrophoneVariant } from '@mdi/js'
import type { IconBaseProps } from 'react-icons'

export function VocalIcon({
  size = '1em',
  color,
  className,
  style,
  title,
}: IconBaseProps) {
  return (
    <Icon
      path={mdiMicrophoneVariant}
      size={size}
      color={color}
      className={className}
      style={style}
      title={title}
      aria-hidden={title ? undefined : true}
    />
  )
}
