import { useEffect, useId, useRef, useState, type KeyboardEvent } from 'react'
import {
  MembersImage,
  type MembersImageMemberId,
} from '../../../Components/MembersImage'
import {
  formatOzzbornMemberIndex,
  OZZBORN_CONTENT,
  OZZBORN_FORMATION_OUTLINE_MS,
  OZZBORN_MEMBERS,
} from '../ozzbornContent'
import { useOzzbornFormationSpotlight } from '../hooks/useOzzbornFormationSpotlight'
import styles from '../OzzbornPage.module.css'

const FORMATION_GRID_COLUMNS = 2

function wrapMemberIndex(index: number, delta: number) {
  const length = OZZBORN_MEMBERS.length
  return (index + delta + length * 10) % length
}

export function OzzbornFormation() {
  const { formation } = OZZBORN_CONTENT
  const layoutRef = useRef<HTMLDivElement>(null)
  const spotlight = useOzzbornFormationSpotlight({ rootRef: layoutRef })
  const [layersReady, setLayersReady] = useState(false)
  const labelId = useId()
  const panelId = useId()
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([])
  const member = spotlight.activeMember

  useEffect(() => {
    const root = layoutRef.current
    if (!root) {
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setLayersReady(true)
        }
      },
      {
        rootMargin: '320px 0px',
        threshold: 0,
      },
    )

    observer.observe(root)

    return () => {
      observer.disconnect()
    }
  }, [])

  const activeIndex = OZZBORN_MEMBERS.findIndex(
    (item) => item.id === spotlight.activeId,
  )

  const focusTabAt = (index: number) => {
    tabRefs.current[index]?.focus()
  }

  const moveToIndex = (index: number) => {
    const nextMember = OZZBORN_MEMBERS[index]
    if (!nextMember) {
      return
    }

    spotlight.activateFromKeyboard(nextMember.id)
    focusTabAt(index)
  }

  const handleTabListKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (activeIndex < 0) {
      return
    }

    if (event.key === 'ArrowRight') {
      event.preventDefault()
      moveToIndex(wrapMemberIndex(activeIndex, 1))
      return
    }

    if (event.key === 'ArrowLeft') {
      event.preventDefault()
      moveToIndex(wrapMemberIndex(activeIndex, -1))
      return
    }

    if (event.key === 'ArrowDown') {
      event.preventDefault()
      moveToIndex(wrapMemberIndex(activeIndex, FORMATION_GRID_COLUMNS))
      return
    }

    if (event.key === 'ArrowUp') {
      event.preventDefault()
      moveToIndex(wrapMemberIndex(activeIndex, -FORMATION_GRID_COLUMNS))
      return
    }

    if (event.key === 'Home') {
      event.preventDefault()
      moveToIndex(0)
      return
    }

    if (event.key === 'End') {
      event.preventDefault()
      moveToIndex(OZZBORN_MEMBERS.length - 1)
    }
  }

  const handleImageSelect = (id: MembersImageMemberId | null) => {
    if (!id) {
      return
    }

    spotlight.select(id)
  }

  const announceProfile =
    !(spotlight.isAutomaticMode && !spotlight.isLocked)

  const selectionStateLabel = spotlight.isLocked
    ? formation.lockHint
    : spotlight.isAutomaticMode
      ? formation.autoHint
      : formation.exploreHint

  return (
    <div
      ref={layoutRef}
      className={styles.formationLayout}
      style={{
        ['--member-outline-duration' as string]: `${OZZBORN_FORMATION_OUTLINE_MS}ms`,
      }}
    >
      <div className={styles.formationRightRail}>
        <div className={styles.formationControls}>
          <p className={styles.formationGuide}>
            <span className={styles.desktopGuide}>{formation.desktopGuide}</span>
            <span className={styles.mobileGuide}>{formation.mobileGuide}</span>
          </p>

          <p className={styles.formationSelectorLabel} id={labelId}>
            Integrantes
          </p>

          <div
            className={styles.formationSelector}
            role="tablist"
            aria-labelledby={labelId}
            onKeyDown={handleTabListKeyDown}
          >
            {OZZBORN_MEMBERS.map((item, index) => {
              const selected = item.id === spotlight.activeId

              return (
                <button
                  key={item.id}
                  ref={(node) => {
                    tabRefs.current[index] = node
                  }}
                  type="button"
                  role="tab"
                  id={`ozz-member-${item.id}`}
                  className={styles.formationTab}
                  aria-selected={selected}
                  aria-controls={panelId}
                  tabIndex={selected ? 0 : -1}
                  onMouseEnter={() => spotlight.hover(item.id)}
                  onFocus={() => spotlight.hover(item.id)}
                  onClick={() => spotlight.select(item.id)}
                >
                  <span className={styles.formationTabName}>{item.name}</span>
                  <span className={styles.formationTabRole}>{item.role}</span>
                </button>
              )
            })}
          </div>

          {spotlight.isAutomaticMode ? (
            <div className={styles.formationSteppers}>
              <button
                type="button"
                className={styles.formationStep}
                onClick={spotlight.previous}
                aria-label="Integrante anterior"
              >
                Anterior
              </button>
              <button
                type="button"
                className={styles.formationStep}
                onClick={spotlight.next}
                aria-label="Próximo integrante"
              >
                Próximo
              </button>
            </div>
          ) : null}
        </div>

        <div
          className={styles.formationDetails}
          role="tabpanel"
          id={panelId}
          aria-labelledby={`ozz-member-${spotlight.activeId}`}
          aria-live={announceProfile ? 'polite' : 'off'}
        >
          <div key={member.id} className={styles.formationDetailsSwap}>
            <div className={styles.formationDetailsTopline}>
              <p className={styles.formationCounter}>
                {formation.memberCounterLabel}{' '}
                {formatOzzbornMemberIndex(Math.max(activeIndex, 0))}
              </p>
              <p
                className={styles.formationLockState}
                data-locked={spotlight.isLocked ? 'true' : 'false'}
                data-auto={
                  spotlight.isAutomaticMode && !spotlight.isLocked
                    ? 'true'
                    : 'false'
                }
              >
                {selectionStateLabel}
              </p>
            </div>

            <h3 className={styles.formationName}>{member.name}</h3>
            <p className={styles.formationRole}>{member.role}</p>
            <p className={styles.formationSignature}>{member.signature}</p>
            <p className={styles.formationDescription}>{member.description}</p>

            <dl className={styles.formationFacts}>
              <div>
                <dt>{formation.facts.instrument}</dt>
                <dd>{member.instrument}</dd>
              </div>
              <div>
                <dt>{formation.facts.contribution}</dt>
                <dd>{member.contribution}</dd>
              </div>
              <div>
                <dt>{formation.facts.presence}</dt>
                <dd>{member.presence}</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>

      <div className={styles.formationSpotlight}>
        <div className={styles.formationGlow} aria-hidden="true" />
        <div className={styles.formationPhotoWrap}>
          <MembersImage
            className={styles.formationPhotoStack}
            activeId={spotlight.activeId}
            onHover={spotlight.hover}
            onSelect={handleImageSelect}
            alt={member.imageAlt}
            loading="lazy"
            decoding="async"
            mountHighlightLayers={layersReady}
          />
        </div>
      </div>
    </div>
  )
}
