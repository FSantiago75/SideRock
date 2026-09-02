import { NavLink } from 'react-router-dom'
import { FaInstagram, FaWhatsapp } from 'react-icons/fa6'
import { SocialIcon } from '../../../SideRockPage/Components/NavBar/Components/SocialIcon/SocialIcon'
import sharedStyles from '../../../SideRockPage/Components/NavBar/SideRockNavbar.module.css'
import tabStyles from '../../../SideRockPage/Components/NavBar/Components/Tabs/Tabs.module.css'
import {
  OZZBORN_SECTION_LABELS,
  OZZBORN_SECTION_ORDER,
  ozzbornPath,
} from '../../sectionConstants'
import styles from './OzzbornNavbar.module.css'

const socialLinks = [
  {
    href: 'https://www.instagram.com/ozzborntributo',
    label: 'Instagram do Ozzborn',
    Icon: FaInstagram,
  },
  {
    href: 'https://wa.me/5511971632992',
    label: 'WhatsApp para contratar o Ozzborn',
    Icon: FaWhatsapp,
  },
] as const

export function OzzbornNavbar() {
  return (
    <nav className={`${sharedStyles.root} ${styles.theme}`} aria-label="Ozzborn">
      <NavLink className={sharedStyles.mobileBrand} to={ozzbornPath('resumo')}>
        Ozzborn
      </NavLink>

      <div className={sharedStyles.tabsScroll}>
        <div className={sharedStyles.tabsTrack}>
          {OZZBORN_SECTION_ORDER.map((id, index) => (
            <div key={id} className={styles.tabItem}>
              {index > 0 ? (
                <span className={tabStyles.separator} aria-hidden="true">●</span>
              ) : null}
              <NavLink
                className={({ isActive }) =>
                  `${tabStyles.tab} ${isActive ? tabStyles.tabActive : ''}`
                }
                to={ozzbornPath(id)}
                end
              >
                <span className={tabStyles.tabLabel}>
                  {OZZBORN_SECTION_LABELS[id]}
                </span>
                <span className={tabStyles.activeLine} aria-hidden="true" />
              </NavLink>
            </div>
          ))}
        </div>
      </div>

      <div className={sharedStyles.social}>
        {socialLinks.map(({ href, label, Icon }, index) => (
          <SocialIcon
            key={label}
            Icon={Icon}
            label={label}
            href={href}
            chaseIndex={index}
          />
        ))}
      </div>
    </nav>
  )
}
