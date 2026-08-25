import { useEffect, useState } from 'react'
import { FaInstagram, FaWhatsapp } from 'react-icons/fa6'
import {
  ACOUSTIC_CONTENT,
  ACOUSTIC_LINKS,
  ACOUSTIC_NAV,
} from '../acousticContent'
import styles from '../AcousticPage.module.css'
import { useAcousticActiveSection } from '../useAcousticActiveSection'

export function AcousticHeader() {
  const [isScrolled, setIsScrolled] = useState(false)
  const activeSection = useAcousticActiveSection()

  useEffect(() => {
    const updateScrollState = () => {
      setIsScrolled(window.scrollY > 12)
    }

    updateScrollState()
    window.addEventListener('scroll', updateScrollState, { passive: true })

    return () => {
      window.removeEventListener('scroll', updateScrollState)
    }
  }, [])

  return (
    <header
      className={styles.header}
      data-scrolled={isScrolled ? 'true' : 'false'}
    >
      <div className={styles.headerInner}>
        <a className={styles.brand} href="#topo">
          {ACOUSTIC_CONTENT.brand}
        </a>

        <nav className={styles.nav} aria-label="Seções da página">
          <div className={styles.navScroll}>
            <ul className={styles.navList}>
              {ACOUSTIC_NAV.map((item, index) => {
                const isActive = activeSection === item.id
                const shortLabel =
                  'shortLabel' in item ? item.shortLabel : undefined

                return (
                  <li key={item.id} className={styles.navItem}>
                    {index > 0 ? (
                      <span className={styles.navSeparator} aria-hidden="true">
                        ◆
                      </span>
                    ) : null}
                    <a
                      className={styles.navLink}
                      href={`#${item.id}`}
                      data-active={isActive ? 'true' : 'false'}
                      data-has-short={shortLabel ? 'true' : undefined}
                      aria-current={isActive ? 'location' : undefined}
                    >
                      <span className={styles.navLabelFull}>{item.label}</span>
                      {shortLabel ? (
                        <span className={styles.navLabelShort}>{shortLabel}</span>
                      ) : null}
                      <span className={styles.navActiveLine} aria-hidden="true" />
                    </a>
                  </li>
                )
              })}
            </ul>
          </div>
        </nav>

        <div className={styles.headerActions}>
          <div className={styles.headerSocial}>
            <a
              className={styles.socialLink}
              href={ACOUSTIC_LINKS.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram da Side Rock"
            >
              <FaInstagram aria-hidden />
            </a>
            <a
              className={styles.socialLink}
              href={ACOUSTIC_LINKS.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp para orçamento"
            >
              <FaWhatsapp aria-hidden />
            </a>
          </div>

          <a
            className={styles.headerCta}
            href={ACOUSTIC_LINKS.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Orçamento
          </a>
        </div>
      </div>
    </header>
  )
}
