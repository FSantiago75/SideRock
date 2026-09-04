import { NavLink } from 'react-router-dom'
import { FaInstagram, FaWhatsapp } from 'react-icons/fa6'
import { SocialIcon } from '../../../SideRockPage/Components/NavBar/Components/SocialIcon/SocialIcon'
import sharedStyles from '../../../SideRockPage/Components/NavBar/SideRockNavbar.module.css'
import tabStyles from '../../../SideRockPage/Components/NavBar/Components/Tabs/Tabs.module.css'
import {
  ACOUSTIC_SECTION_LABELS,
  ACOUSTIC_SECTION_ORDER,
  acousticPath,
} from '../../sectionConstants'
import styles from './AcousticNavbar.module.css'

const socialLinks = [
  {
    href: 'https://instagram.com/bandasiderock',
    label: 'Instagram da Side Rock',
    Icon: FaInstagram,
  },
  {
    href: 'https://wa.me/5511971632992',
    label: 'WhatsApp para contratar o Side Rock Acústico',
    Icon: FaWhatsapp,
  },
] as const

export function AcousticNavbar() {
  return (
    <nav className={`${sharedStyles.root} ${styles.theme}`} aria-label="Side Rock Acústico">
      <NavLink className={sharedStyles.mobileBrand} to={acousticPath('resumo')}>
        Side Rock Acústico
      </NavLink>

      <div className={sharedStyles.tabsScroll}>
        <div className={sharedStyles.tabsTrack}>
          {ACOUSTIC_SECTION_ORDER.map((id, index) => (
            <div key={id} className={styles.tabItem}>
              {index > 0 ? <span className={tabStyles.separator} aria-hidden="true">●</span> : null}
              <NavLink
                className={({ isActive }) => `${tabStyles.tab} ${isActive ? tabStyles.tabActive : ''}`}
                to={acousticPath(id)}
                end
              >
                <span className={tabStyles.tabLabel}>{ACOUSTIC_SECTION_LABELS[id]}</span>
                <span className={tabStyles.activeLine} aria-hidden="true" />
              </NavLink>
            </div>
          ))}
        </div>
      </div>

      <div className={sharedStyles.social}>
        {socialLinks.map(({ href, label, Icon }, index) => (
          <SocialIcon key={label} Icon={Icon} label={label} href={href} chaseIndex={index} />
        ))}
      </div>
    </nav>
  )
}
