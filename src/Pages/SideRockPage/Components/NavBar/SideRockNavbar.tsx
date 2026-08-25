import { Link } from 'react-router-dom'
import { SIDE_ROCK_SECTION_ORDER, sideRockPath } from '../../sectionConstants'
import { Tabs } from './Components/Tabs/Tabs'
import { SocialIcon } from './Components/SocialIcon/SocialIcon'
import { SIDE_ROCK_SOCIAL_LINKS } from './socialLinks'
import styles from './SideRockNavbar.module.css'

export function SideRockNavbar() {
  return (
    <nav className={styles.root} aria-label="Side Rock">
      <Link className={styles.mobileBrand} to={sideRockPath('resumo')}>
        Side Rock
      </Link>

      <div className={styles.tabsScroll}>
        <div className={styles.tabsTrack}>
          {SIDE_ROCK_SECTION_ORDER.map((id, index) => (
            <Tabs key={id} id={id} index={index} />
          ))}
        </div>
      </div>

      <div className={styles.social}>
        {SIDE_ROCK_SOCIAL_LINKS.map(({ href, label, Icon }, index) => (
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
