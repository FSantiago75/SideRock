import styles from './RouteFallback.module.css'

export function RouteFallback() {
  return (
    <div
      className={styles.fallback}
      role="status"
      aria-busy="true"
      aria-live="polite"
      aria-label="Carregando página"
    />
  )
}
