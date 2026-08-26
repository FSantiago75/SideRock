import { useState } from 'react'
import background from '../../../../SiderockAssets/Bgs2/BGGaleria.png'
import { ScrollReveal } from '../../../../Components/ScrollReveal/ScrollReveal'
import { SideRockSectionPage } from '../../Components/SectionPage/SideRockSectionPage'
import { GalleryAlbumSection } from './GalleryAlbumSection'
import { GalleryLightbox } from './GalleryLightbox'
import {
  formatRecordCount,
  GALLERY_COPY,
  GALLERY_PHOTOS,
  getPhotoById,
} from './galleryContent'
import styles from './GaleriaPage.module.css'

export function GaleriaPage() {
  const [activePhotoId, setActivePhotoId] = useState<string | null>(null)
  const activePhoto = activePhotoId
    ? getPhotoById(activePhotoId, GALLERY_PHOTOS)
    : undefined

  return (
    <SideRockSectionPage
      layout="flow"
      background={background}
      backgroundGrayscale="70%"
      backgroundOverlay="
        radial-gradient(ellipse at 50% 18%, rgba(5, 5, 5, 0.12), rgba(5, 5, 5, 0.78) 58%),
        radial-gradient(ellipse at 88% 6%, rgba(211, 47, 53, 0.12), transparent 36%),
        linear-gradient(180deg, rgba(5, 5, 5, 0.42) 0%, rgba(5, 5, 5, 0.78) 46%, #050505 100%)
      "
    >
      <article className={styles.page}>
        <header className={styles.intro}>
          <ScrollReveal from="up">
            <p className={styles.eyebrow}>{GALLERY_COPY.eyebrow}</p>
          </ScrollReveal>

          <ScrollReveal delayMs={70} from="up">
            <h1>{GALLERY_COPY.title}</h1>
          </ScrollReveal>

          <ScrollReveal delayMs={120} from="up">
            <p className={styles.introLead}>{GALLERY_COPY.lead}</p>
          </ScrollReveal>

          <ScrollReveal delayMs={160} from="none">
            <p className={styles.count}>
              {formatRecordCount(GALLERY_PHOTOS.length)}
            </p>
          </ScrollReveal>
        </header>

        <ScrollReveal delayMs={180} from="none">
          <div className={styles.divider} aria-hidden />
        </ScrollReveal>

        {GALLERY_PHOTOS.length === 0 ? (
          <ScrollReveal from="up">
            <section className={styles.empty} aria-labelledby="gallery-empty-title">
              <h2 id="gallery-empty-title">{GALLERY_COPY.emptyTitle}</h2>
              <p>{GALLERY_COPY.emptyBody}</p>
            </section>
          </ScrollReveal>
        ) : (
          <GalleryAlbumSection photos={GALLERY_PHOTOS} onOpen={setActivePhotoId} />
        )}
      </article>

      {activePhoto ? (
        <GalleryLightbox
          photos={GALLERY_PHOTOS}
          activePhotoId={activePhoto.id}
          onClose={() => setActivePhotoId(null)}
          onNavigate={setActivePhotoId}
        />
      ) : null}
    </SideRockSectionPage>
  )
}
