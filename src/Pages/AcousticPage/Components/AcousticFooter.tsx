import { FaInstagram, FaWhatsapp } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import { DeveloperCredit } from '../../../Components/DeveloperCredit'
import {
  ACOUSTIC_CONTENT,
  ACOUSTIC_LINKS,
} from '../acousticContent'
import styles from '../AcousticPage.module.css'

export function AcousticFooter() {
  const { footer } = ACOUSTIC_CONTENT

  return (
    <footer className={styles.footer}>
      <div className={styles.footerInner}>
        <Link className={styles.footerCatalog} to={ACOUSTIC_LINKS.catalog}>
          {footer.catalogLabel}
        </Link>

        <div className={styles.footerLinks}>
          <a
            className={styles.footerSocial}
            href={ACOUSTIC_LINKS.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram aria-hidden />
            <span>{footer.instagramLabel}</span>
          </a>
          <a
            className={styles.footerSocial}
            href={ACOUSTIC_LINKS.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp aria-hidden />
            <span>{footer.whatsappLabel}</span>
          </a>
        </div>
      </div>

      <DeveloperCredit />
    </footer>
  )
}
