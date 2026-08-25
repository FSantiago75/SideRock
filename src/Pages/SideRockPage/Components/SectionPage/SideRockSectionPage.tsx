import type { CSSProperties, ReactNode } from 'react'
import { SideRockNavbar } from '../NavBar/SideRockNavbar'
import styles from './SideRockSectionPage.module.css'

type SideRockSectionPageProps = {
  background: string
  backgroundAspectRatio?: string
  backgroundGrayscale?: string
  children?: ReactNode
}

type SideRockSectionStyle = CSSProperties & {
  '--side-rock-art-ratio': string
  '--side-rock-bg-grayscale': string
}

export function SideRockSectionPage({
  background,
  backgroundAspectRatio = '1536 / 1024',
  backgroundGrayscale = '20%',
  children,
}: SideRockSectionPageProps) {
  const style: SideRockSectionStyle = {
    '--side-rock-art-ratio': backgroundAspectRatio,
    '--side-rock-bg-grayscale': backgroundGrayscale,
  }

  return (
    <div className={styles.shell} style={style}>
      <main className={styles.main}>
        <div className={styles.bgStack}>
          <img className={styles.bgImg} src={background} alt="" />
          <div className={styles.fgLayer}>
            <div className={styles.inner}>{children}</div>
          </div>
        </div>
        <div className={styles.navOverlay}>
          <SideRockNavbar />
        </div>
      </main>
    </div>
  )
}
