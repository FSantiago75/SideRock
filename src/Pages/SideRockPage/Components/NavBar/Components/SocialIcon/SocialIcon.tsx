import type { IconType } from 'react-icons'
import styles from './SocialIcon.module.css'

type SocialIconProps = {
  Icon: IconType
  label: string
  href: string
  chaseIndex: number
  className?: string
}

export function SocialIcon({
  Icon,
  label,
  href,
  chaseIndex,
  className,
}: SocialIconProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className ? `${styles.link} ${className}` : styles.link}
      aria-label={label}
      data-chase-index={chaseIndex}
    >
      <Icon aria-hidden />
    </a>
  )
}
