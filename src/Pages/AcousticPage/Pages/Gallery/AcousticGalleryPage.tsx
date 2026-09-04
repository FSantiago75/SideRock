import { useEffect, useState } from 'react'
import galleryBackground from '../../../../assets/acoustic/acousticGalleryAtmosphereV2.png'
import { ScrollReveal } from '../../../../Components/ScrollReveal/ScrollReveal'
import { SectionIntro } from '../../../../Components/SectionIntro/SectionIntro'
import { SideRockSectionPage } from '../../../SideRockPage/Components/SectionPage/SideRockSectionPage'
import { GalleryAlbumSection } from '../../../SideRockPage/Pages/Gallery/GalleryAlbumSection'
import { GalleryLightbox } from '../../../SideRockPage/Pages/Gallery/GalleryLightbox'
import {
  formatRecordCount,
  GALLERY_PHOTOS,
  getPhotoById,
} from '../../../SideRockPage/Pages/Gallery/galleryContent'
import galleryStyles from '../../../SideRockPage/Pages/Gallery/GalleryPage.module.css'
import { AcousticNavbar } from '../../Components/NavBar/AcousticNavbar'
import { ACOUSTIC_SCROLLBAR } from '../../sectionConstants'
import styles from './AcousticGalleryPage.module.css'

const photos = GALLERY_PHOTOS.map((photo) => ({
  ...photo,
  alt: `Side Rock Acústico — ${photo.albumLabel} — ${photo.label}`,
}))

export function AcousticGalleryPage() {
  const [activePhotoId, setActivePhotoId] = useState<string | null>(null)
  const activePhoto = activePhotoId ? getPhotoById(activePhotoId, photos) : undefined

  useEffect(() => {
    document.title = 'Galeria — Side Rock Acústico'
  }, [])

  return (
    <SideRockSectionPage
      layout="flow"
      navbar={<AcousticNavbar />}
      accent="#d97706"
      accentHot="#fbbf24"
      scrollbarTheme={ACOUSTIC_SCROLLBAR}
      background={galleryBackground}
      backgroundGrayscale="0%"
      backgroundPosition="center top"
      backgroundOverlay="
        radial-gradient(ellipse at 82% 18%, rgba(217, 119, 6, 0.13), transparent 34%),
        linear-gradient(180deg, rgba(5, 5, 5, 0.3) 0%, rgba(5, 5, 5, 0.74) 50%, #050505 100%)
      "
    >
      <article className={`${galleryStyles.page} ${styles.page}`}>
        <SectionIntro
          eyebrow="Arquivo acústico"
          title="Galeria"
          lead="Proximidade, celebração e música ao vivo em registros reais."
        >
          <ScrollReveal delayMs={160} from="none">
            <p className={galleryStyles.count}>{formatRecordCount(photos.length)}</p>
          </ScrollReveal>
        </SectionIntro>

        <ScrollReveal delayMs={180} from="none">
          <div className={galleryStyles.divider} aria-hidden />
        </ScrollReveal>

        <GalleryAlbumSection photos={photos} onOpen={setActivePhotoId} />
      </article>

      {activePhoto ? (
        <GalleryLightbox
          photos={photos}
          activePhotoId={activePhoto.id}
          onClose={() => setActivePhotoId(null)}
          onNavigate={setActivePhotoId}
        />
      ) : null}
    </SideRockSectionPage>
  )
}
