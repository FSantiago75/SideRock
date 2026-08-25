import type { CSSProperties, ReactNode } from 'react'
import { useScrollbarTheme } from '../../../../hooks/useScrollbarTheme'
import { SIDE_ROCK_SCROLLBAR } from '../../sectionConstants'
import { SideRockNavbar } from '../NavBar/SideRockNavbar'
import styles from './SideRockSectionPage.module.css'

type SideRockSectionPageProps = {
  background?: string
  backgroundAspectRatio?: string
  backgroundGrayscale?: string
  backgroundOverlay?: string
  layout?: 'artboard' | 'flow'
  children?: ReactNode
}

type SideRockSectionStyle = CSSProperties & {
  '--side-rock-art-ratio': string
  '--side-rock-bg-grayscale': string
  '--side-rock-bg-overlay': string
}

export function SideRockSectionPage({
  background,
  backgroundAspectRatio = '1536 / 1024',
  backgroundGrayscale = '20%',
  backgroundOverlay = 'transparent',
  layout = 'artboard',
  children,
}: SideRockSectionPageProps) {
  useScrollbarTheme(SIDE_ROCK_SCROLLBAR)

  const style: SideRockSectionStyle = {
    '--side-rock-art-ratio': backgroundAspectRatio,
    '--side-rock-bg-grayscale': backgroundGrayscale,
    '--side-rock-bg-overlay': backgroundOverlay,
  }

  return (
    <div className={styles.shell} data-app-scroll="inner" style={style}>
      <main className={styles.main}>
        <div className={styles.navOverlay}>
          <SideRockNavbar />
        </div>
        <div className={styles.bgStack} data-layout={layout}>
          {background ? (
            <img className={styles.bgImg} src={background} alt="" />
          ) : null}
          <div className={styles.fgLayer}>
            <div className={styles.inner}>{children}</div>
          </div>
        </div>
      </main>
    </div>
  )
}
