import { ScrollReveal } from '../../../../Components/ScrollReveal/ScrollReveal'
import type { BandReference } from './repertoireContent'
import styles from './RepertoirePage.module.css'

type BandLogoGridProps = {
  bands: readonly BandReference[]
  movementTitle: string
}

export function BandLogoGrid({ bands, movementTitle }: BandLogoGridProps) {
  return (
    <ul
      className={styles.bandGrid}
      aria-label={`Referências de ${movementTitle}`}
      data-band-count={bands.length}
    >
      {bands.map((band, index) => (
        <li key={band.name} className={styles.bandItem}>
          <ScrollReveal
            className={styles.bandReveal}
            from="scale"
            delayMs={100 + index * 55}
          >
            <div className={styles.bandLogo} data-logo-scale={band.logoScale}>
              <img
                src={band.logo}
                alt={band.name}
                loading="eager"
                decoding="async"
              />
            </div>
          </ScrollReveal>
        </li>
      ))}
    </ul>
  )
}
