import n2Logo from '../../assets/n2.png'
import styles from './styles.module.css'

const N2_SITE_URL = 'https://n2codeworks.com.br/'

export function DeveloperCredit() {
  return (
    <a
      className={styles.credit}
      href={N2_SITE_URL}
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src={n2Logo} alt="" />
      Desenvolvido por N2 CodeWorks
    </a>
  )
}
