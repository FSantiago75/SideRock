import styles from '../styles.module.css'

export function CatalogFooter() {
  return (
    <footer className={styles.catalogFooter}>
      <span className={styles.footerLine} aria-hidden />
      <p>Três experiências. Uma só estrutura</p>
      <span className={styles.footerLine} aria-hidden />
    </footer>
  )
}
