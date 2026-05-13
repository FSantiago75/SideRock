import { Fragment } from 'react'
import { NavLink } from 'react-router-dom'
import { FaInstagram, FaFacebook, FaYoutube, FaSpotify } from 'react-icons/fa'
import {
  SIDE_ROCK_SECTION_LABELS,
  SIDE_ROCK_SECTION_ORDER,
  sideRockPath,
  type SideRockSectionId,
} from '../../sectionConstants'
import styles from './SideRockNavbar.module.css'

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
            <Fragment key={id}>
              {index > 0 ? (
                <span className={styles.separator} aria-hidden>
                  ●
                </span>
              ) : null}
              <div className={styles.tabCell}>
                <NavLink
                  to={sideRockPath(id)}
                  end
                  className={({ isActive }) =>
                    `${styles.tab} ${isActive ? styles.tabActive : ''}`
                  }
                >
                  {SIDE_ROCK_SECTION_LABELS[id as SideRockSectionId]}
                </NavLink>
                <div className={styles.activeLine} aria-hidden />
              </div>
            </Fragment>
          ))}
        </div>
      </div>

      <div className={styles.social}>
        {SOCIAL_LINKS.map(({ href, label, Icon }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
            aria-label={label}
          >
            <Icon aria-hidden />
          </a>
        ))}
      </div>
    </nav>
  )
}
