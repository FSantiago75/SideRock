import type { CSSProperties } from 'react'
import styles from './OzzbornSummaryPage.module.css'

type OzzbornBandHeroVisualProps = {
  src: string
  alt: string
  focalPoint?: string
  scale?: number
  mode?: 'framed' | 'cutout'
}

type VisualStyle = CSSProperties & {
  '--band-photo-position': string
  '--band-photo-scale': number
}

export function OzzbornBandHeroVisual({
  src,
  alt,
  focalPoint = '50% 50%',
  scale = 1,
  mode = 'framed',
}: OzzbornBandHeroVisualProps) {
  const style: VisualStyle = {
    '--band-photo-position': focalPoint,
    '--band-photo-scale': scale,
  }

  return (
    <figure className={styles.bandVisual} data-photo-mode={mode} style={style}>
      <span className={styles.bandHalo} aria-hidden />
      <span className={styles.bandOrbit} aria-hidden />
      <img src={src} alt={alt} />
      <figcaption>
        <span>Tributo completo</span>
        <strong>Ozzborn</strong>
      </figcaption>
    </figure>
  )
}
