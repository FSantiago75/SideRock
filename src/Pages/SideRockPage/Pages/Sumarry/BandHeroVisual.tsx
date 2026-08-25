import type { CSSProperties } from 'react'
import styles from './ResumoPage.module.css'

type BandHeroVisualProps = {
  src: string
  alt: string
  focalPoint?: string
  scale?: number
  mode?: 'framed' | 'cutout'
}

type BandHeroVisualStyle = CSSProperties & {
  '--band-photo-position': string
  '--band-photo-scale': number
}

export function BandHeroVisual({
  src,
  alt,
  focalPoint = '50% 50%',
  scale = 1,
  mode = 'framed',
}: BandHeroVisualProps) {
  const style: BandHeroVisualStyle = {
    '--band-photo-position': focalPoint,
    '--band-photo-scale': scale,
  }

  return (
    <figure className={styles.bandVisual} data-photo-mode={mode} style={style}>
      <span className={styles.bandHalo} aria-hidden />
      <span className={styles.bandOrbit} aria-hidden />
      <img src={src} alt={alt} />
      <figcaption>
        <span>Formação completa</span>
        <strong>Side Rock</strong>
      </figcaption>
    </figure>
  )
}
