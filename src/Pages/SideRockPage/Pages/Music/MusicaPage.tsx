import { SectionPlaceholder } from '../../Components/Placeholder/SectionPlaceholder'
import { SideRockNavbar } from '../../Components/NavBar/SideRockNavbar'
import { SIDE_ROCK_SECTION_LABELS } from '../../sectionConstants'
import styles from './MusicaPage.module.css'
import bg from '../../../../SiderockAssets/Bgs2/BGMusica.png'

export function MusicaPage() {
  return (
    <div className={styles.shell}>
      <main className={styles.main}>
        <div className={styles.bgStack}>
          <img className={styles.bgImg} src={bg} alt="" />
          <div className={styles.fgLayer}>
            <div className={styles.inner}>
              <SectionPlaceholder title={SIDE_ROCK_SECTION_LABELS.musica} />
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
