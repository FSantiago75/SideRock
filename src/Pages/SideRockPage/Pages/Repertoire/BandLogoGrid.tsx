import { ScrollReveal } from '../../../../Components/ScrollReveal/ScrollReveal'
import type { BandReference } from './repertoireContent'
import styles from './RepertoirePage.module.css'

type BandLogoGridProps = {
  bands: readonly BandReference[]
  movementTitle: string
}

export function BandLogoGrid({ bands, movementTitle }: BandLogoGridProps) {
  return (
    <ScrollReveal className={styles.bandReveal} delayMs={90} from="scale">
      <ul
        className={styles.bandGrid}
        aria-label={`Referências de ${movementTitle}`}
        data-band-count={bands.length}
      >
        {bands.map((band) => (
          <li key={band.name} className={styles.bandItem}>
            <div className={styles.bandLogo} data-logo-scale={band.logoScale}>
              <img
                src={band.logo}
                alt={band.name}
                loading="lazy"
                decoding="async"
              />
            </div>
          </li>
        ))}
      </ul>
    </ScrollReveal>
  )
}
