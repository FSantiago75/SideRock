import { useLayoutEffect, useRef, useState, type PointerEvent } from 'react'
import {
  FaBolt,
  FaChevronLeft,
  FaChevronRight,
  FaLayerGroup,
  FaLock,
  FaUnlockAlt,
} from 'react-icons/fa'
import styles from './IntegrantesPage.module.css'
import {
  formatMemberIndex,
  SIDE_ROCK_MEMBERS,
  type SideRockMember,
} from './membersContent'
import { MEMBER_CARD_ENTER_MS, MEMBER_CARD_EXIT_MS } from './membersMotion'

type MemberDetailsProps = {
  member: SideRockMember
  currentIndex: number
  isAutomaticMode: boolean
  isLocked: boolean
  onLock: () => void
  onNext: () => void
  onPrevious: () => void
  onUnlock: () => void
}

type DisplayedMember = {
  member: SideRockMember
  currentIndex: number
}

type SwapPhase = 'idle' | 'exit' | 'enter'

const SWIPE_DISTANCE_PX = 52

function getSwapDirection(fromIndex: number, toIndex: number, length: number): 1 | -1 {
  if (fromIndex === toIndex) return 1
  const forward = (toIndex - fromIndex + length) % length
  return forward <= length / 2 ? 1 : -1
}

function swapClass(phase: SwapPhase, enterClass: string, exitClass: string) {
  if (phase === 'enter') return enterClass
  if (phase === 'exit') return exitClass
  return undefined
}

function MemberCardBody({
  member,
  headingId,
}: {
  member: SideRockMember
  headingId?: string
}) {
  const { Icon } = member

  return (
    <>
      <div className={styles.memberHeading}>
        <span className={styles.instrumentIcon} aria-hidden>
          <Icon />
        </span>
        <div>
          <h2 id={headingId}>{member.name}</h2>
          <p>{member.role}</p>
        </div>
      </div>

      <p className={styles.signature}>{member.signature}</p>
      <p className={styles.description}>{member.description}</p>

      <dl className={styles.memberFacts}>
        <div>
          <span className={styles.factIcon} aria-hidden>
            <Icon />
          </span>
          <span>
            <dt>Instrumento</dt>
            <dd>{member.instrument}</dd>
          </span>
        </div>
        <div>
          <span className={styles.factIcon} aria-hidden>
            <FaLayerGroup />
          </span>
          <span>
            <dt>No show</dt>
            <dd>{member.contribution}</dd>
          </span>
        </div>
        <div>
          <span className={styles.factIcon} aria-hidden>
            <FaBolt />
          </span>
          <span>
            <dt>Presença</dt>
            <dd>{member.presence}</dd>
          </span>
        </div>
      </dl>
    </>
  )
}

export function MemberDetails({
  member,
  currentIndex,
  isAutomaticMode,
  isLocked,
  onLock,
  onNext,
  onPrevious,
  onUnlock,
}: MemberDetailsProps) {
  const pointerStartX = useRef<number | null>(null)
  const displayedRef = useRef<DisplayedMember>({ member, currentIndex })
  const [displayed, setDisplayed] = useState<DisplayedMember>({ member, currentIndex })
  const [phase, setPhase] = useState<SwapPhase>('idle')
  const [direction, setDirection] = useState<1 | -1>(1)

  useLayoutEffect(() => {
    if (member.id === displayedRef.current.member.id) return

    const fromIndex = displayedRef.current.currentIndex
    setDirection(getSwapDirection(fromIndex, currentIndex, SIDE_ROCK_MEMBERS.length))
    setPhase('exit')

    let enterTimer = 0
    const exitTimer = window.setTimeout(() => {
      const next = { member, currentIndex }
      displayedRef.current = next
      setDisplayed(next)
      setPhase('enter')
      enterTimer = window.setTimeout(() => setPhase('idle'), MEMBER_CARD_ENTER_MS)
    }, MEMBER_CARD_EXIT_MS)

    return () => {
      window.clearTimeout(exitTimer)
      window.clearTimeout(enterTimer)
    }
  }, [member, currentIndex])

  const handlePointerDown = (event: PointerEvent<HTMLElement>) => {
    if ((event.target as HTMLElement).closest('button')) return
    pointerStartX.current = event.clientX
  }

  const handlePointerUp = (event: PointerEvent<HTMLElement>) => {
    if (pointerStartX.current === null) return
    const distance = event.clientX - pointerStartX.current
    pointerStartX.current = null

    if (Math.abs(distance) < SWIPE_DISTANCE_PX) return
    if (distance < 0) onNext()
    else onPrevious()
  }

  const contentClass = swapClass(phase, styles.detailsContentEnter, styles.detailsContentExit)
  const indexClass = swapClass(phase, styles.detailsIndexEnter, styles.detailsIndexExit)
  const watermarkClass = swapClass(phase, styles.watermarkEnter, styles.watermarkExit)

  return (
    <section
      className={styles.details}
      data-auto={isAutomaticMode && !isLocked}
      data-locked={isLocked}
      data-swap={phase}
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
      aria-labelledby="active-member-name"
    >
      <span
        key={`${displayed.member.id}-watermark`}
        className={`${styles.detailsWatermark} ${watermarkClass ?? ''}`}
        aria-hidden
      >
        {String(displayed.currentIndex + 1).padStart(2, '0')}
      </span>

      <div className={styles.detailsTopline}>
        <span className={styles.detailsIndexViewport}>
          <span key={displayed.member.id} className={indexClass}>
            Integrante {formatMemberIndex(displayed.currentIndex)}
          </span>
        </span>
        <button
          className={styles.lockButton}
          type="button"
          onClick={isLocked ? onUnlock : onLock}
          aria-label={isLocked ? 'Liberar seleção' : 'Fixar integrante atual'}
        >
          {isLocked ? <FaLock aria-hidden /> : <FaUnlockAlt aria-hidden />}
          {isLocked ? 'Liberar' : 'Fixar'}
        </button>
      </div>

      <div className={styles.detailsStage} data-dir={direction}>
        <div
          key={displayed.member.id}
          className={`${styles.detailsContent} ${contentClass ?? ''}`}
          aria-live={isAutomaticMode && !isLocked ? 'off' : 'polite'}
        >
          <MemberCardBody member={displayed.member} headingId="active-member-name" />
        </div>
      </div>

      <div className={styles.detailsFooter}>
        <div className={styles.rotationTrack} aria-hidden>
          <span key={member.id} />
        </div>
        <div className={styles.arrowControls}>
          <button type="button" onClick={onPrevious} aria-label="Integrante anterior">
            <FaChevronLeft aria-hidden />
          </button>
          <button type="button" onClick={onNext} aria-label="Próximo integrante">
            <FaChevronRight aria-hidden />
          </button>
        </div>
      </div>
    </section>
  )
}
