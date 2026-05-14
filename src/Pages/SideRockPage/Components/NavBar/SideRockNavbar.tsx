import { FaInstagram, FaFacebook, FaYoutube, FaSpotify } from 'react-icons/fa'
import {
  SIDE_ROCK_SECTION_ORDER,
} from '../../sectionConstants'
import styles from './SideRockNavbar.module.css'
import { Tabs } from './Components/Tabs/Tabs'
import { SocialIcon } from './Components/SocialIcon/SocialIcon'

const SOCIAL_LINKS = [
  {
    href: 'https://facebook.com/sua-pagina',
    label: 'Facebook',
    Icon: FaFacebook,
  },
  {
    href: 'https://instagram.com/bandasiderock',
    label: 'Instagram',
    Icon: FaInstagram,
  },
  {
    href: 'https://youtube.com/seu-canal',
    label: 'YouTube',
    Icon: FaYoutube,
  },
  {
    href: 'https://open.spotify.com/artist/sua-conta',
    label: 'Spotify',
    Icon: FaSpotify,
  },
] as const

export function SideRockNavbar() {
  return (
    <nav className={styles.root} aria-label="Side Rock">
      <div className={styles.logoSlot} aria-hidden />

      <div className={styles.tabsRegion}>
        <div className={styles.tabsScroll}>
          {SIDE_ROCK_SECTION_ORDER.map((id, index) => (
              <Tabs key={id} id={id} index={index} />
          ))}
        </div>
      </div>

      <div className={styles.social}>
        {SOCIAL_LINKS.map(({ href, label, Icon }) => (
          <SocialIcon
            key={label}
            Icon={Icon}
            label={label}
            href={href}
          />
        ))}
      </div>
    </nav>
  )
}
