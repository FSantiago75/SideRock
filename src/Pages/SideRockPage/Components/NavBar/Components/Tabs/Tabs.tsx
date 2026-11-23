import { NavLink } from 'react-router-dom'
import { useSectionNavigation } from '../../../../../../hooks/useSectionNavigation'
import { sideRockSectionLoaders } from '../../../../sectionLoaders'
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
  const path = sideRockPath(id)
  const navigation = useSectionNavigation(path, sideRockSectionLoaders[id])

  return (
    <>
      {index > 0 ? (
        <span className={styles.separator} aria-hidden>
          ●
        </span>
      ) : null}
      <NavLink
        to={path}
        {...navigation}
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
