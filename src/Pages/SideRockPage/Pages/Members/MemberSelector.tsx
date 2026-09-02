import { useEffect, useRef } from 'react'
import styles from './MembersPage.module.css'
import { SIDE_ROCK_MEMBERS, type MemberId } from './membersContent'

type MemberSelectorProps = {
  activeId: MemberId
  isLocked: boolean
  onHover: (id: MemberId | null) => void
  onSelect: (id: MemberId) => void
}

export function MemberSelector({
  activeId,
  isLocked,
  onHover,
  onSelect,
}: MemberSelectorProps) {
  const selectorRef = useRef<HTMLElement>(null)
  const activeButtonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const selector = selectorRef.current
    const activeButton = activeButtonRef.current

    if (!selector || !activeButton || selector.scrollWidth <= selector.clientWidth) {
      return
    }

    const targetLeft =
      activeButton.offsetLeft - (selector.clientWidth - activeButton.clientWidth) / 2
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    selector.scrollTo({
      left: targetLeft,
      behavior: reduceMotion ? 'auto' : 'smooth',
    })
  }, [activeId])

  return (
    <nav
      ref={selectorRef}
      className={styles.memberSelector}
      aria-label="Selecionar integrante"
    >
      {SIDE_ROCK_MEMBERS.map((member, index) => {
        const isActive = member.id === activeId
        const { Icon } = member

        return (
          <button
            key={member.id}
            ref={isActive ? activeButtonRef : undefined}
            type="button"
            className={isActive ? styles.memberButtonActive : undefined}
            data-active={isActive}
            onPointerEnter={() => onHover(member.id)}
            onClick={() => onSelect(member.id)}
            aria-current={isActive ? 'true' : undefined}
            aria-pressed={isLocked && isActive}
          >
            <span className={styles.memberNumber}>
              {String(index + 1).padStart(2, '0')}
            </span>
            <Icon aria-hidden />
            <span>
              <strong>{member.name}</strong>
              <small>{member.role}</small>
            </span>
          </button>
        )
      })}
    </nav>
  )
}
