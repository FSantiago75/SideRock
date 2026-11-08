import styles from './RepertoirePage.module.css'

export function RepertoireTrackSample({
  tracks,
}: {
  tracks: readonly string[]
}) {
  return (
    <div className={styles.trackSample}>
      <ul
        className={styles.trackSampleList}
        aria-label="Algumas músicas do show"
      >
        {tracks.map((track) => (
          <li key={track}>{track}</li>
        ))}
      </ul>
    </div>
  )
}
