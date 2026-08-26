import { useEffect, useRef, useState } from 'react'
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
  const sentinelRef = useRef<HTMLDivElement>(null)
  const activeSection = useAcousticActiveSection()

  useEffect(() => {
    const sentinel = sentinelRef.current
    if (!sentinel) {
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsScrolled(!entry.isIntersecting)
      },
      {
        threshold: 0,
      },
    )

    observer.observe(sentinel)

    return () => {
      observer.disconnect()
    }
  }, [])

  return (
    <>
      <div
        ref={sentinelRef}
        className={styles.headerScrollSentinel}
        aria-hidden="true"
      />
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

                  return (
                    <li key={item.id} className={styles.navItem}>
                      {index > 0 ? (
                        <span
                          className={styles.navSeparator}
                          aria-hidden="true"
                        >
                          ◆
                        </span>
                      ) : null}
                      <a
                        className={styles.navLink}
                        href={`#${item.id}`}
                        data-active={isActive ? 'true' : 'false'}
                        aria-current={isActive ? 'location' : undefined}
                      >
                        {item.label}
                        <span
                          className={styles.navActiveLine}
                          aria-hidden="true"
                        />
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
              {ACOUSTIC_CONTENT.headerCta}
            </a>
          </div>
        </div>
      </header>
    </>
  )
}
