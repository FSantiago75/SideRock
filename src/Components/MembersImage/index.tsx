import { useState } from 'react'
import MembersNull from '../../assets/MembersImages/MembersNull.png'
import { MembersHitmap } from './membersHitmap'
import { membersMap } from './membersMap'
import styles from './membersImage.module.css'

const memberKeys = ['vocal', 'guitar', 'drums', 'bass'] as const

export type MembersImageMemberId = (typeof memberKeys)[number]

function isMemberId(id: string | null): id is MembersImageMemberId {
  return id !== null && memberKeys.includes(id as MembersImageMemberId)
}

type MembersImageProps = {
  activeId?: MembersImageMemberId | null
  alt?: string
  className?: string
  onHover?: (id: MembersImageMemberId | null) => void
  onSelect?: (id: MembersImageMemberId | null) => void
}

export function MembersImage({
  activeId,
  alt = 'Integrantes da banda',
  className,
  onHover,
  onSelect,
}: MembersImageProps) {
  const [hoveredId, setHoveredId] = useState<MembersImageMemberId | null>(null)
  const [selectedId, setSelectedId] = useState<MembersImageMemberId | null>(null)
  const isControlled = activeId !== undefined
  const activeKey = isControlled ? activeId : (selectedId ?? hoveredId)

  const handleHover = (id: string | null) => {
    const memberId = isMemberId(id) ? id : null
    if (!isControlled) setHoveredId(memberId)
    onHover?.(memberId)
  }

  const handleSelect = (id: string | null) => {
    const memberId = isMemberId(id) ? id : null
    if (!isControlled) {
      setSelectedId((currentId) => (currentId === memberId ? null : memberId))
    }
    onSelect?.(memberId)
  }

  const rootClassName = className ? `${styles.root} ${className}` : `${styles.root} ${styles.standalone}`

  return (
    <figure className={rootClassName}>
      <img className={styles.base} src={MembersNull} alt={alt} />
      {memberKeys.map((key) => (
        <img
          key={key}
          className={`${styles.layer} ${activeKey === key ? styles.layerVisible : ''}`}
          src={membersMap[key]}
          alt=""
          aria-hidden
        />
      ))}
      <MembersHitmap onHover={handleHover} onSelect={handleSelect} />
    </figure>
  )
}
