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
    <div className={styles.formatSelector} role="group" aria-label="Escolha a formação do Side Rock Acústico">
      {ACOUSTIC_FORMAT_ORDER.map((formatId) => {
        const format = ACOUSTIC_FORMATS[formatId]
        const isActive = activeFormat === formatId

        return (
          <button
            key={formatId}
            type="button"
            className={isActive ? styles.formatOptionActive : styles.formatOption}
            aria-pressed={isActive}
            onClick={() => onChange(formatId)}
          >
            <strong>{format.label}</strong>
            <span>{format.cue}</span>
          </button>
        )
      })}
    </div>
  )
}
