import styles from './SectionPlaceholder.module.css'

type Props = {
  title: string
}

export function SectionPlaceholder({ title }: Props) {
  return (
    <div className={styles.placeholder}>
      <span className={styles.srOnly}>Secção {title} — conteúdo em breve.</span>
      <span aria-hidden>{title}</span>
      <span aria-hidden> · em breve</span>
    </div>
  )
}
