import type { CSSProperties } from 'react'
import { MembersImage } from '../../../../Components/MembersImage'
import { SectionIntro } from '../../../../Components/SectionIntro/SectionIntro'
import background from '../../../../assets/ozzborn/ozzbornMembersAtmosphere.png'
import { SideRockSectionPage } from '../../../SideRockPage/Components/SectionPage/SideRockSectionPage'
import { OzzbornNavbar } from '../../Components/NavBar/OzzbornNavbar'
import { OZZBORN_SCROLLBAR } from '../../sectionConstants'
import { OzzbornMemberDetails } from './OzzbornMemberDetails'
import { OzzbornMemberSelector } from './OzzbornMemberSelector'
import {
  getOzzbornMemberById,
  OZZBORN_MEMBERS,
  OZZBORN_MEMBERS_COPY,
} from './ozzbornMembersContent'
import {
  MEMBER_CARD_ENTER_MS,
  MEMBER_CARD_EXIT_MS,
  MEMBER_OUTLINE_MS,
  MEMBER_SELECTOR_MS,
} from './ozzbornMembersMotion'
import styles from './OzzbornMembersPage.module.css'
import { useOzzbornMemberSpotlight } from './useOzzbornMemberSpotlight'

type MembersPageStyle = CSSProperties & {
  '--members-background': string
  '--member-outline-duration': string
  '--member-card-exit': string
  '--member-card-enter': string
  '--member-selector-duration': string
}

export function OzzbornMembersPage() {
  const spotlight = useOzzbornMemberSpotlight()
  const member = getOzzbornMemberById(spotlight.activeId)
  const currentIndex = OZZBORN_MEMBERS.findIndex(
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
    <SideRockSectionPage
      layout="flow"
      navbar={<OzzbornNavbar />}
      accent="#7c3aed"
      accentHot="#c4b5fd"
      scrollbarTheme={OZZBORN_SCROLLBAR}
    >
      <article className={styles.page} style={pageStyle}>
        <SectionIntro
          eyebrow={OZZBORN_MEMBERS_COPY.eyebrow}
          title={OZZBORN_MEMBERS_COPY.title}
          reveal={false}
          lead={
            <>
              <span className={styles.desktopGuide}>
                {OZZBORN_MEMBERS_COPY.desktopGuide}
              </span>
              <span className={styles.mobileGuide}>
                {OZZBORN_MEMBERS_COPY.mobileGuide}
              </span>
            </>
          }
        />

        <div className={styles.experience}>
          <div className={styles.portrait}>
            <MembersImage
              className={styles.photoStack}
              activeId={spotlight.activeId}
              onHover={spotlight.hover}
              onSelect={(id) => id && spotlight.select(id)}
              alt="Adriano, Toddynho, Marcelo e Victor, integrantes do Ozzborn"
            />
          </div>

          <OzzbornMemberDetails
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

        <OzzbornMemberSelector
          activeId={spotlight.activeId}
          isLocked={spotlight.isLocked}
          onHover={spotlight.hover}
          onSelect={spotlight.select}
        />
      </article>
    </SideRockSectionPage>
  )
}
