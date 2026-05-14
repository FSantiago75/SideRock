import { NavLink } from "react-router-dom";
import { Fragment } from "react/jsx-runtime";
import { SIDE_ROCK_SECTION_LABELS, sideRockPath, type SideRockSectionId } from "../../../../sectionConstants";
import styles from './Tabs.module.css'

export function Tabs({ id, index }: { id: SideRockSectionId, index: number }) {
  return (
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
  )
}