import { FaInstagram, FaWhatsapp } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import { DeveloperCredit } from '../../../../Components/DeveloperCredit'
import { OZZBORN_CONTENT, OZZBORN_LINKS } from '../ozzbornContent'
import styles from '../OzzbornPage.module.css'

export function OzzbornFooter() {
  const { footer, brand, brandSubtitle, location } = OZZBORN_CONTENT

  return (
    <footer className={styles.footer}>
      <div className={styles.footerInner}>
        <div className={styles.footerBrand}>
          <p className={styles.footerName}>{brand}</p>
          <span className={styles.footerFillet} aria-hidden="true" />
          <p className={styles.footerMeta}>
            {brandSubtitle}
            <span aria-hidden="true"> · </span>
            {location}
          </p>
        </div>

        <div className={styles.footerLinks}>
          <Link className={styles.footerCatalog} to={OZZBORN_LINKS.catalog}>
            {footer.catalogLabel}
          </Link>
          <a
            className={styles.footerSocial}
            href={OZZBORN_LINKS.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram aria-hidden />
            <span>{footer.instagramLabel}</span>
          </a>
          <a
            className={styles.footerSocial}
            href={OZZBORN_LINKS.whatsappUrl}
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
