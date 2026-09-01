import type { CSSProperties } from 'react'
import { MembersImage } from '../../../../Components/MembersImage'
import background from '../../../../assets/sideRock/sideRockMembersAtmosphereV2.png'
import { SideRockSectionPage } from '../../Components/SectionPage/SideRockSectionPage'
import styles from './IntegrantesPage.module.css'
import { MemberDetails } from './MemberDetails'
import { MemberSelector } from './MemberSelector'
import {
  getMemberById,
  SIDE_ROCK_MEMBERS,
  SIDE_ROCK_MEMBERS_COPY,
} from './membersContent'
import {
  MEMBER_CARD_ENTER_MS,
  MEMBER_CARD_EXIT_MS,
  MEMBER_OUTLINE_MS,
  MEMBER_SELECTOR_MS,
} from './membersMotion'
import { useMemberSpotlight } from './useMemberSpotlight'

type MembersPageStyle = CSSProperties & {
  '--members-background': string
  '--member-outline-duration': string
  '--member-card-exit': string
  '--member-card-enter': string
  '--member-selector-duration': string
}

export function IntegrantesPage() {
  const spotlight = useMemberSpotlight()
  const member = getMemberById(spotlight.activeId)
  const currentIndex = SIDE_ROCK_MEMBERS.findIndex(
    (item) => item.id === spotlight.activeId,
  )
  const pageStyle: MembersPageStyle = {
    '--members-background': `url(${background})`,
    '--member-outline-duration': `${MEMBER_OUTLINE_MS}ms`,
    '--member-card-exit': `${MEMBER_CARD_EXIT_MS}ms`,
    '--member-card-enter': `${MEMBER_CARD_ENTER_MS}ms`,
    '--member-selector-duration': `${MEMBER_SELECTOR_MS}ms`,
  }

  return (
    <SideRockSectionPage layout="flow">
      <article className={styles.page} style={pageStyle}>
        <header className={styles.intro}>
          <p className={styles.eyebrow}>{SIDE_ROCK_MEMBERS_COPY.eyebrow}</p>
          <h1>{SIDE_ROCK_MEMBERS_COPY.title}</h1>
          <p className={styles.introLead}>
            <span className={styles.desktopGuide}>
              {SIDE_ROCK_MEMBERS_COPY.desktopGuide}
            </span>
            <span className={styles.mobileGuide}>
              {SIDE_ROCK_MEMBERS_COPY.mobileGuide}
            </span>
          </p>
        </header>

        <div className={styles.experience}>
          <div className={styles.portrait}>
            <MembersImage
              className={styles.photoStack}
              activeId={spotlight.activeId}
              onHover={spotlight.hover}
              onSelect={(id) => id && spotlight.select(id)}
              alt="Adriano, Toddynho, Marcelo e Victor, integrantes da Side Rock"
            />
          </div>

          <MemberDetails
            member={member}
            currentIndex={currentIndex}
            isAutomaticMode={spotlight.isAutomaticMode}
            isLocked={spotlight.isLocked}
            onLock={spotlight.lockActive}
            onNext={spotlight.next}
            onPrevious={spotlight.previous}
            onUnlock={spotlight.unlock}
          />
        </div>

        <MemberSelector
          activeId={spotlight.activeId}
          isLocked={spotlight.isLocked}
          onHover={spotlight.hover}
          onSelect={spotlight.select}
        />
      </article>
    </SideRockSectionPage>
  )
}
