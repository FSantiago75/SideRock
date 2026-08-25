import { NavLink } from 'react-router-dom'
import {
  SIDE_ROCK_SECTION_LABELS,
  sideRockPath,
  type SideRockSectionId,
} from '../../../../sectionConstants'
import styles from './Tabs.module.css'

type TabsProps = {
  id: SideRockSectionId
  index: number
}

export function Tabs({ id, index }: TabsProps) {
  return (
    <>
      {index > 0 ? (
        <span className={styles.separator} aria-hidden>
          ●
        </span>
      ) : null}
      <NavLink
        to={sideRockPath(id)}
        end
        className={({ isActive }) =>
          `${styles.tab} ${isActive ? styles.tabActive : ''}`
        }
      >
        <span className={styles.tabLabel}>
          {SIDE_ROCK_SECTION_LABELS[id]}
        </span>
        <span className={styles.activeLine} aria-hidden />
      </NavLink>
    </>
  )
}
