import { SideRockNavbar } from '../../Components/NavBar/SideRockNavbar'
import styles from './IntegrantesPage.module.css'
import bg from '../../../../SiderockAssets/Backgrounds/BGIntegrantes.png'

export function IntegrantesPage() {
  return (
    <div className={styles.shell}>
      <main className={styles.main}>
        <div className={styles.bgStack}>
          <img className={styles.bgImg} src={bg} alt="" />
          <div className={styles.fgLayer}>
            <div className={styles.inner}>
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
