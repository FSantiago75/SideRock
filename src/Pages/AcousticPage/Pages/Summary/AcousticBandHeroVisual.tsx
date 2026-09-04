import type { CSSProperties } from 'react'
import styles from '../../../SideRockPage/Pages/Summary/SummaryPage.module.css'
import type { AcousticFormatId } from './acousticSummaryContent'

type Props = {
  format: AcousticFormatId
  src: string
  alt: string
}

type VisualStyle = CSSProperties & {
  '--band-photo-position': string
  '--band-photo-scale': number
}

export function AcousticBandHeroVisual({ format, src, alt }: Props) {
  const style: VisualStyle = {
    '--band-photo-position': format === 'duo' ? '50% 52%' : '50% 48%',
    '--band-photo-scale': format === 'duo' ? 1.16 : 1.08,
  }

  return (
    <figure className={styles.bandVisual} data-photo-mode="cutout" style={style}>
      <span className={styles.bandHalo} aria-hidden />
      <span className={styles.bandOrbit} aria-hidden />
      <img key={format} src={src} alt={alt} />
      <figcaption>
        <span>Formação {format}</span>
        <strong>Side Rock Acústico</strong>
      </figcaption>
    </figure>
  )
}
