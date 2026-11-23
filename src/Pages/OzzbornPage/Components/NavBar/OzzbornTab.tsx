import { NavLink } from 'react-router-dom'
import { useSectionNavigation } from '../../../../hooks/useSectionNavigation'
import { ozzbornSectionLoaders } from '../../sectionLoaders'
import { OZZBORN_SECTION_LABELS, ozzbornPath, type OzzbornSectionId } from '../../sectionConstants'
import styles from '../../../SideRockPage/Components/NavBar/Components/Tabs/Tabs.module.css'

export function OzzbornTab({ id }: { id: OzzbornSectionId }) {
  const path = ozzbornPath(id)
  const navigation = useSectionNavigation(path, ozzbornSectionLoaders[id])
  return (
    <NavLink to={path} {...navigation} end
      className={({ isActive }) => `${styles.tab} ${isActive ? styles.tabActive : ''}`}>
      <span className={styles.tabLabel}>{OZZBORN_SECTION_LABELS[id]}</span>
      <span className={styles.activeLine} aria-hidden />
    </NavLink>
  )
}
