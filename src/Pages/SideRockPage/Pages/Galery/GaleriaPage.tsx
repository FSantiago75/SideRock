import { SectionPlaceholder } from '../../Components/Placeholder/SectionPlaceholder'
import { SideRockNavbar } from '../../Components/NavBar/SideRockNavbar'
import { SIDE_ROCK_SECTION_LABELS } from '../../sectionConstants'
import styles from './GaleriaPage.module.css'
import bg from '../../../../SiderockAssets/Bgs2/BGGaleria.png'

export function GaleriaPage() {
  return (
    <div className={styles.shell}>
      <main className={styles.main}>
        <div className={styles.bgStack}>
          <img className={styles.bgImg} src={bg} alt="" />
          <div className={styles.fgLayer}>
            <div className={styles.inner}>
              <SectionPlaceholder title={SIDE_ROCK_SECTION_LABELS.galeria} />
            </div>
          </div>
        </div>
        <div className={styles.navOverlay}>
          <SideRockNavbar />
        </div>
      </main>
    </div>
  )
}
