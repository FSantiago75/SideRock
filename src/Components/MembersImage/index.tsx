import {
  useState,
  type ImgHTMLAttributes,
  type MouseEvent,
  type PointerEvent,
} from 'react'
import {
  memberImageIds,
  type MembersImageMemberId,
  type MembersImageSource,
} from './membersImageSources'
import styles from './membersImage.module.css'

export {
  OZZBORN_MEMBERS_IMAGE,
  SIDE_ROCK_MEMBERS_IMAGE,
  type MembersImageMemberId,
  type MembersImageSource,
} from './membersImageSources'

function isMemberId(id: string | null): id is MembersImageMemberId {
  return id !== null && memberImageIds.includes(id as MembersImageMemberId)
}

type MembersImageProps = {
  source: MembersImageSource
  activeId?: MembersImageMemberId | null
  alt?: string
  className?: string
  loading?: ImgHTMLAttributes<HTMLImageElement>['loading']
  decoding?: ImgHTMLAttributes<HTMLImageElement>['decoding']
  fetchPriority?: ImgHTMLAttributes<HTMLImageElement>['fetchPriority']
  /** When false, only the neutral base is mounted (highlight layers deferred). Default true. */
  mountHighlightLayers?: boolean
  onHover?: (id: MembersImageMemberId | null) => void
  onSelect?: (id: MembersImageMemberId | null) => void
}

export function MembersImage({
  source,
  activeId,
  alt = 'Integrantes da banda',
  className,
  loading,
  decoding = 'async',
  fetchPriority,
  mountHighlightLayers = true,
  onHover,
  onSelect,
}: MembersImageProps) {
  const [hoveredId, setHoveredId] = useState<MembersImageMemberId | null>(null)
  const [selectedId, setSelectedId] = useState<MembersImageMemberId | null>(null)
  const isControlled = activeId !== undefined
  const activeKey = isControlled ? activeId : (selectedId ?? hoveredId)

  const getMemberId = (target: EventTarget | null) => {
    if (!(target instanceof Element)) return null

    const hitmapId = target.closest<SVGPathElement>('path[data-id]')?.dataset.id
    const memberId = hitmapId ? source.hitmapIds[hitmapId] : undefined
    return memberId && isMemberId(memberId) ? memberId : null
  }

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

  const handlePointerOver = (event: PointerEvent<HTMLDivElement>) => {
    handleHover(getMemberId(event.target))
  }

  const handleClick = (event: MouseEvent<HTMLDivElement>) => {
    handleSelect(getMemberId(event.target))
  }

  const rootClassName = className
    ? `${styles.root} ${className}`
    : `${styles.root} ${styles.standalone}`

  return (
    <figure className={rootClassName}>
      <img
        className={styles.base}
        src={source.neutral}
        alt={alt}
        width={source.width}
        height={source.height}
        loading={loading}
        decoding={decoding}
        fetchPriority={fetchPriority}
      />
      {mountHighlightLayers
        ? memberImageIds.map((key) => (
            <img
              key={key}
              className={`${styles.layer} ${activeKey === key ? styles.layerVisible : ''}`}
              src={source.layers[key]}
              alt=""
              aria-hidden
              width={source.width}
              height={source.height}
              loading={loading}
              decoding={decoding}
            />
          ))
        : null}
      <div
        className={styles.Hitmap}
        onPointerOver={handlePointerOver}
        onPointerLeave={() => handleHover(null)}
        onClick={handleClick}
        aria-hidden="true"
        dangerouslySetInnerHTML={{ __html: source.hitmap }}
      />
    </figure>
  )
}
