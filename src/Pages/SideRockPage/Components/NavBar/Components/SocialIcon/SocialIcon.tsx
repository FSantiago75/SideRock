import { FaFacebook, FaInstagram, FaYoutube, FaSpotify } from 'react-icons/fa'
import styles from './SocialIcon.module.css'
interface SocialIconProps {
  Icon: typeof FaFacebook | typeof FaInstagram | typeof FaYoutube | typeof FaSpotify
  label: string
  href: string
  className?: string
}

export function SocialIcon({ Icon, label, href, className }: SocialIconProps) {
  return (
    <a
    key={label}
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={`${styles.socialLink} ${className}`}
    aria-label={label}
  >
    {Icon && <Icon aria-hidden />}
  </a>
  )
}