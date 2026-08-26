import {
  useEffect,
  useId,
  useRef,
  type KeyboardEvent as ReactKeyboardEvent,
  type PointerEvent as ReactPointerEvent,
} from 'react'
import { createPortal } from 'react-dom'
import {
  FiChevronLeft,
  FiChevronRight,
  FiX,
} from 'react-icons/fi'
import type { GalleryPhoto } from './galleryContent'
import { getAdjacentPhotoId } from './galleryContent'
import styles from './GalleryLightbox.module.css'

type GalleryLightboxProps = {
  photos: readonly GalleryPhoto[]
  activePhotoId: string
  onClose: () => void
  onNavigate: (photoId: string) => void
}

const SWIPE_THRESHOLD_PX = 48
const FOCUSABLE_SELECTOR =
  'button:not([disabled]), [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'

function preload(src: string) {
  const image = new Image()
  image.src = src
}

function restoreOpenerFocus(photoId: string) {
  const trigger = document.querySelector<HTMLButtonElement>(
    `[data-photo-id="${CSS.escape(photoId)}"]`,
  )
  trigger?.focus()
}

function lockPageScroll() {
  const main = document.querySelector('main')
  if (!main) return () => undefined

  const previousOverflow = main.style.overflow
  const previousTop = main.scrollTop
  main.style.overflow = 'hidden'

  return () => {
    main.style.overflow = previousOverflow
    main.scrollTop = previousTop
  }
}

export function GalleryLightbox({
  photos,
  activePhotoId,
  onClose,
  onNavigate,
}: GalleryLightboxProps) {
  const dialogRef = useRef<HTMLDivElement>(null)
  const closeButtonRef = useRef<HTMLButtonElement>(null)
  const pointerStart = useRef<{ x: number; y: number } | null>(null)
  const activeIdRef = useRef(activePhotoId)
  const titleId = useId()
  const photo = photos.find((item) => item.id === activePhotoId) ?? photos[0]
  const currentIndex = Math.max(
    0,
    photos.findIndex((item) => item.id === photo?.id),
  )
  const total = photos.length
  const previousId = getAdjacentPhotoId(photos, activePhotoId, -1)
  const nextId = getAdjacentPhotoId(photos, activePhotoId, 1)
  const canNavigate = total > 1 && previousId && nextId

  useEffect(() => {
    const restoreScroll = lockPageScroll()
    closeButtonRef.current?.focus()

    return () => {
      restoreScroll()
      restoreOpenerFocus(activeIdRef.current)
    }
  }, [])

  useEffect(() => {
    activeIdRef.current = activePhotoId
  }, [activePhotoId])

  useEffect(() => {
    if (!photo) return

    const previousPhoto = photos.find((item) => item.id === previousId)
    const nextPhoto = photos.find((item) => item.id === nextId)
    if (previousPhoto) preload(previousPhoto.src)
    if (nextPhoto && nextPhoto.src !== previousPhoto?.src) preload(nextPhoto.src)
  }, [nextId, photo, photos, previousId])

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        event.preventDefault()
        onClose()
        return
      }

      if (event.key === 'ArrowLeft' && previousId) {
        event.preventDefault()
        onNavigate(previousId)
        return
      }

      if (event.key === 'ArrowRight' && nextId) {
        event.preventDefault()
        onNavigate(nextId)
      }
    }

    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [nextId, onClose, onNavigate, previousId])

  function trapFocus(event: ReactKeyboardEvent<HTMLDivElement>) {
    if (event.key !== 'Tab' || !dialogRef.current) return

    const focusable = [
      ...dialogRef.current.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR),
    ]
    if (focusable.length === 0) return

    const first = focusable[0]
    const last = focusable[focusable.length - 1]
    if (!first || !last) return

    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault()
      last.focus()
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault()
      first.focus()
    }
  }

  function onPointerDown(event: ReactPointerEvent<HTMLDivElement>) {
    if (event.pointerType === 'mouse' && event.button !== 0) return
    pointerStart.current = { x: event.clientX, y: event.clientY }
  }

  function onPointerUp(event: ReactPointerEvent<HTMLDivElement>) {
    const start = pointerStart.current
    pointerStart.current = null
    if (!start || !canNavigate || !previousId || !nextId) return

    const deltaX = event.clientX - start.x
    const deltaY = event.clientY - start.y
    if (Math.abs(deltaX) < SWIPE_THRESHOLD_PX) return
    if (Math.abs(deltaX) < Math.abs(deltaY)) return

    onNavigate(deltaX > 0 ? previousId : nextId)
  }

  if (!photo || typeof document === 'undefined') return null

  const counter = `${String(currentIndex + 1).padStart(2, '0')} / ${String(total).padStart(2, '0')}`

  return createPortal(
    <div className={styles.root} onKeyDown={trapFocus}>
      <button
        type="button"
        className={styles.backdrop}
        aria-label="Fechar visualizador"
        onClick={onClose}
      />

      <div
        ref={dialogRef}
        className={styles.dialog}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
      >
        <header className={styles.topBar}>
          <p id={titleId}>
            Galeria
            <span aria-hidden> / </span>
            {photo.albumLabel}
          </p>
          <p className={styles.counter} aria-live="polite">
            {counter}
          </p>
          <button
            ref={closeButtonRef}
            type="button"
            className={styles.iconButton}
            aria-label="Fechar"
            onClick={onClose}
          >
            <FiX aria-hidden />
          </button>
        </header>

        <div
          className={styles.stage}
          onPointerDown={onPointerDown}
          onPointerUp={onPointerUp}
          onPointerCancel={() => {
            pointerStart.current = null
          }}
        >
          {canNavigate && previousId ? (
            <button
              type="button"
              className={`${styles.iconButton} ${styles.prev}`}
              aria-label="Fotografia anterior"
              onClick={() => onNavigate(previousId)}
            >
              <FiChevronLeft aria-hidden />
            </button>
          ) : null}

          <figure className={styles.figure}>
            <img src={photo.src} alt={photo.alt} />
            <figcaption>
              {photo.label}
              <span aria-hidden> — </span>
              {photo.albumLabel}
            </figcaption>
          </figure>

          {canNavigate && nextId ? (
            <button
              type="button"
              className={`${styles.iconButton} ${styles.next}`}
              aria-label="Fotografia seguinte"
              onClick={() => onNavigate(nextId)}
            >
              <FiChevronRight aria-hidden />
            </button>
          ) : null}
        </div>
      </div>
    </div>,
    document.body,
  )
}
