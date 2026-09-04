import type { CSSProperties } from 'react'
import styles from '../../../SideRockPage/Pages/Summary/SummaryPage.module.css'
import type { AcousticFormatId } from './acousticSummaryContent'

type Props = {
  format: AcousticFormatId
  duoSrc: string
  trioSrc: string
}

type PhotoStyle = CSSProperties & {
  '--band-photo-position': string
  '--band-photo-scale': number
}

export function AcousticBandHeroVisual({ format, duoSrc, trioSrc }: Props) {
  const duoStyle: PhotoStyle = { '--band-photo-position': '50% 52%', '--band-photo-scale': 1.3 }
  const trioStyle: PhotoStyle = { '--band-photo-position': '50% 48%', '--band-photo-scale': 1.08 }
  const duoClassName = `${styles.bandPhotoCrossfade} ${format === 'duo' ? styles.bandPhotoActive : styles.bandPhotoInactive}`
  const trioClassName = `${styles.bandPhotoCrossfade} ${format === 'trio' ? styles.bandPhotoActive : styles.bandPhotoInactive}`

  return (
    <figure className={styles.bandVisual} data-photo-mode="cutout">
      <span className={styles.bandHalo} aria-hidden />
      <span className={styles.bandOrbit} aria-hidden />
      <img className={duoClassName} style={duoStyle} src={duoSrc} alt="Formação Duo do Side Rock Acústico" />
      <img className={trioClassName} style={trioStyle} src={trioSrc} alt="Formação Trio do Side Rock Acústico" />
      <figcaption>
        <span>Formação {format}</span>
        <strong>Side Rock Acústico</strong>
      </figcaption>
    </figure>
  )
}
