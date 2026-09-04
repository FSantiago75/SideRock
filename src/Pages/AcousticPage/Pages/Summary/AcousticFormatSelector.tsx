import {
  ACOUSTIC_FORMATS,
  ACOUSTIC_FORMAT_ORDER,
  type AcousticFormatId,
} from './acousticSummaryContent'
import styles from './AcousticSummaryPage.module.css'

type Props = {
  activeFormat: AcousticFormatId
  onChange: (format: AcousticFormatId) => void
}

export function AcousticFormatSelector({ activeFormat, onChange }: Props) {
  return (
    <div className={styles.formatSelector} role="radiogroup" aria-label="Escolha a formação do Side Rock Acústico">
      <div className={styles.formatSelectorLabel} aria-hidden="true">
        <span>Escolha o formato</span>
        <i />
      </div>
      <div className={styles.formatOptions}>
      {ACOUSTIC_FORMAT_ORDER.map((formatId) => {
        const format = ACOUSTIC_FORMATS[formatId]
        const isActive = activeFormat === formatId
        const musicianCount = format.facts[0].value

        return (
          <button
            key={formatId}
            type="button"
            className={isActive ? styles.formatOptionActive : styles.formatOption}
            role="radio"
            aria-checked={isActive}
            onClick={() => onChange(formatId)}
          >
            <span className={styles.formatMarker} aria-hidden="true" />
            <span className={styles.formatCopy}>
              <strong>{format.label}</strong>
              <small>{format.cue}</small>
            </span>
            <span className={styles.formatCount} aria-hidden="true">
              <b>0{musicianCount}</b>
              <small>músicos</small>
            </span>
          </button>
        )
      })}
      </div>
    </div>
  )
}
