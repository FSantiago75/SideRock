import { useState } from 'react'
import { HiOutlineChevronDown, HiOutlineFolder } from 'react-icons/hi2'
import background from '../../../../assets/ozzborn/backgrounds/ozzbornGalleryAtmosphere.png'
import { OzzbornNavbar } from '../../Components/NavBar/OzzbornNavbar'
import { OZZBORN_SCROLLBAR } from '../../sectionConstants'
import { ScrollReveal } from '../../../../Components/ScrollReveal/ScrollReveal'
import { SectionIntro } from '../../../../Components/SectionIntro/SectionIntro'
import { SideRockSectionPage } from '../../../SideRockPage/Components/SectionPage/SideRockSectionPage'
import { OzzbornGalleryAlbumSection } from './OzzbornGalleryAlbumSection'
import { OzzbornGalleryLightbox } from './OzzbornGalleryLightbox'
import {
  formatOzzbornRecordCount,
  OZZBORN_GALLERY_ALBUMS,
  OZZBORN_GALLERY_COPY,
  OZZBORN_GALLERY_PHOTOS,
  getOzzbornPhotoById,
} from './ozzbornGalleryContent'
import styles from './OzzbornGalleryPage.module.css'

export function OzzbornGalleryPage() {
  const [closedAlbumIds, setClosedAlbumIds] = useState<readonly string[]>([])
  const [activePhotoId, setActivePhotoId] = useState<string | null>(null)
  const activePhoto = activePhotoId
    ? getOzzbornPhotoById(activePhotoId, OZZBORN_GALLERY_PHOTOS)
    : undefined
  const activeAlbum = OZZBORN_GALLERY_ALBUMS.find((album) => album.id === activePhoto?.albumId)

  return (
    <SideRockSectionPage
      animateEntrance
      navbar={<OzzbornNavbar />}
      accent="#7c3aed"
      accentHot="#c4b5fd"
      scrollbarTheme={OZZBORN_SCROLLBAR}
      layout="flow"
      background={background}
      viewportSizedBackground
      backgroundGrayscale="0%"
      backgroundPosition="center top"
      backgroundOverlay="
        radial-gradient(ellipse at 14% 42%, rgba(124, 58, 237, 0.1), transparent 38%),
        linear-gradient(180deg, rgba(5, 5, 5, 0.38) 0%, rgba(5, 5, 5, 0.72) 48%, #050505 100%)
      "
    >
      <article className={styles.page}>
        <SectionIntro
          titleMotion="rise"
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

        {OZZBORN_GALLERY_ALBUMS.length === 0 && (
          <p>{OZZBORN_GALLERY_COPY.emptyBody}</p>
        )}
        <div className={styles.folders}>
          {OZZBORN_GALLERY_ALBUMS.map((album, index) => (
            <section
              key={album.id}
              className={styles.folder}
              data-open={!closedAlbumIds.includes(album.id)}
            >
              <button
                type="button"
                className={styles.folderHeader}
                aria-expanded={!closedAlbumIds.includes(album.id)}
                aria-controls={`gallery-folder-${index}`}
                onClick={() =>
                  setClosedAlbumIds((current) => current.includes(album.id)
                    ? current.filter((id) => id !== album.id)
                    : [...current, album.id])
                }
              >
                <HiOutlineFolder className={styles.folderIcon} aria-hidden />
                <span className={styles.folderName}>{album.label}</span>
                <span className={styles.count}>{formatOzzbornRecordCount(album.photos.length)}</span>
                <HiOutlineChevronDown className={styles.folderChevron} aria-hidden />
              </button>
              <div
                id={`gallery-folder-${index}`}
                className={styles.folderPanel}
                inert={closedAlbumIds.includes(album.id)}
              >
                <div className={styles.folderClip}>
                  <div className={styles.folderBody}>
                    {album.photos.length ? (
                      <OzzbornGalleryAlbumSection photos={album.photos} onOpen={setActivePhotoId} />
                    ) : (
                      <p className={styles.folderEmpty}>Ainda não há fotos nesta pasta</p>
                    )}
                  </div>
                </div>
              </div>
            </section>
          ))}
        </div>
      </article>

      {activePhoto && activeAlbum ? (
        <OzzbornGalleryLightbox
          photos={activeAlbum.photos}
          activePhotoId={activePhoto.id}
          onClose={() => setActivePhotoId(null)}
          onNavigate={setActivePhotoId}
        />
      ) : null}
    </SideRockSectionPage>
  )
}
