import { Sparkles } from 'lucide-react'
import styles from './PrivateEventsCard.module.css'

type PrivateEventsCardProps = {
  title: string
  description: string
}

export function PrivateEventsCard({ title, description }: PrivateEventsCardProps) {
  return (
    <aside className={styles.card}>
      <div className={styles.heading}>
        <span className={styles.label}>
          <Sparkles size={18} aria-hidden="true" />
          Eventos particulares
        </span>
        <h3>{title}</h3>
      </div>
      <p>{description}</p>
    </aside>
  )
}
