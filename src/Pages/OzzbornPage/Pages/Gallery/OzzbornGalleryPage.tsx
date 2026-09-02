import { useState } from 'react'
import background from '../../../../assets/ozzborn/ozzbornGalleryAtmosphere.png'
import { ScrollReveal } from '../../../../Components/ScrollReveal/ScrollReveal'
import { SectionIntro } from '../../../../Components/SectionIntro/SectionIntro'
import { SideRockSectionPage } from '../../../SideRockPage/Components/SectionPage/SideRockSectionPage'
import { OzzbornNavbar } from '../../Components/NavBar/OzzbornNavbar'
import { OZZBORN_SCROLLBAR } from '../../sectionConstants'
import { OzzbornGalleryAlbumSection } from './OzzbornGalleryAlbumSection'
import { OzzbornGalleryLightbox } from './OzzbornGalleryLightbox'
import {
  formatOzzbornRecordCount,
  getOzzbornPhotoById,
  OZZBORN_GALLERY_COPY,
  OZZBORN_GALLERY_PHOTOS,
} from './ozzbornGalleryContent'
import styles from './OzzbornGalleryPage.module.css'

export function OzzbornGalleryPage() {
  const [activePhotoId, setActivePhotoId] = useState<string | null>(null)
  const activePhoto = activePhotoId
    ? getOzzbornPhotoById(activePhotoId, OZZBORN_GALLERY_PHOTOS)
    : undefined

  return (
    <SideRockSectionPage
      layout="flow"
      navbar={<OzzbornNavbar />}
      accent="#7c3aed"
      accentHot="#c4b5fd"
      scrollbarTheme={OZZBORN_SCROLLBAR}
      background={background}
      backgroundGrayscale="0%"
      backgroundPosition="center top"
      backgroundOverlay="
        radial-gradient(ellipse at 14% 42%, rgba(124, 58, 237, 0.1), transparent 38%),
        linear-gradient(180deg, rgba(5, 5, 5, 0.38) 0%, rgba(5, 5, 5, 0.72) 48%, #050505 100%)
      "
    >
      <article className={styles.page}>
        <SectionIntro
          eyebrow={OZZBORN_GALLERY_COPY.eyebrow}
          title={OZZBORN_GALLERY_COPY.title}
          lead={OZZBORN_GALLERY_COPY.lead}
        >
          <ScrollReveal delayMs={160} from="none">
            <p className={styles.count}>
              {formatOzzbornRecordCount(OZZBORN_GALLERY_PHOTOS.length)}
            </p>
          </ScrollReveal>
        </SectionIntro>

        <ScrollReveal delayMs={180} from="none">
          <div className={styles.divider} aria-hidden />
        </ScrollReveal>

        {OZZBORN_GALLERY_PHOTOS.length === 0 ? (
          <ScrollReveal from="up">
            <section className={styles.empty} aria-labelledby="ozzborn-gallery-empty-title">
              <h2 id="ozzborn-gallery-empty-title">
                {OZZBORN_GALLERY_COPY.emptyTitle}
              </h2>
              <p>{OZZBORN_GALLERY_COPY.emptyBody}</p>
            </section>
          </ScrollReveal>
        ) : (
          <OzzbornGalleryAlbumSection
            photos={OZZBORN_GALLERY_PHOTOS}
            onOpen={setActivePhotoId}
          />
        )}
      </article>

      {activePhoto ? (
        <OzzbornGalleryLightbox
          photos={OZZBORN_GALLERY_PHOTOS}
          activePhotoId={activePhoto.id}
          onClose={() => setActivePhotoId(null)}
          onNavigate={setActivePhotoId}
        />
      ) : null}
    </SideRockSectionPage>
  )
}
