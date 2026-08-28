import { useEffect, useRef, useState } from 'react'
import { FaInstagram, FaWhatsapp } from 'react-icons/fa6'
import {
  OZZBORN_CONTENT,
  OZZBORN_LINKS,
  OZZBORN_NAV,
} from '../ozzbornContent'
import styles from '../OzzbornPage.module.css'
import { useOzzbornActiveSection } from '../hooks/useOzzbornActiveSection'

export function OzzbornHeader() {
  const [isScrolled, setIsScrolled] = useState(false)
  const sentinelRef = useRef<HTMLDivElement>(null)
  const activeSection = useOzzbornActiveSection()

  useEffect(() => {
    const sentinel = sentinelRef.current
    if (!sentinel) {
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsScrolled(!entry.isIntersecting)
      },
      { threshold: 0 },
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
            <span className={styles.brandMark}>{OZZBORN_CONTENT.brand}</span>
          </a>

          <nav className={styles.nav} aria-label="Seções da página">
            <div className={styles.navScroll}>
              <ul className={styles.navList}>
                {OZZBORN_NAV.map((item) => {
                  const isActive = activeSection === item.id

                  return (
                    <li key={item.id} className={styles.navItem}>
                      <a
                        className={styles.navLink}
                        href={`#${item.id}`}
                        data-active={isActive ? 'true' : 'false'}
                        aria-current={isActive ? 'location' : undefined}
                      >
                        {item.label}
                      </a>
                    </li>
                  )
                })}
              </ul>
            </div>
          </nav>

          <div className={styles.headerActions}>
            <a
              className={styles.socialLink}
              href={OZZBORN_LINKS.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram do OzzBorn"
            >
              <FaInstagram aria-hidden />
            </a>
            <a
              className={styles.socialLink}
              href={OZZBORN_LINKS.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp para consultar data"
            >
              <FaWhatsapp aria-hidden />
            </a>
            <a
              className={styles.headerCta}
              href={OZZBORN_LINKS.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {OZZBORN_CONTENT.headerCta}
            </a>
          </div>
        </div>
      </header>
    </>
  )
}
