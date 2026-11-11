import { useState } from 'react'
import { HiOutlineChevronDown, HiOutlineFolder } from 'react-icons/hi2'
import background from '../../../../assets/sideRock/backgrounds/sideRockStandardBackground.png'
import { ScrollReveal } from '../../../../Components/ScrollReveal/ScrollReveal'
import { SectionIntro } from '../../../../Components/SectionIntro/SectionIntro'
import { SideRockSectionPage } from '../../Components/SectionPage/SideRockSectionPage'
import { GalleryAlbumSection } from './GalleryAlbumSection'
import { GalleryLightbox } from './GalleryLightbox'
import {
  formatRecordCount,
  GALLERY_ALBUMS,
  GALLERY_COPY,
  GALLERY_PHOTOS,
  getPhotoById,
} from './galleryContent'
import styles from './GalleryPage.module.css'

const initialAlbumId = GALLERY_ALBUMS.find((album) => album.photos.length)?.id

export function GalleryPage() {
  const [openAlbumId, setOpenAlbumId] = useState(initialAlbumId)
  const [activePhotoId, setActivePhotoId] = useState<string | null>(null)
  const activePhoto = activePhotoId
    ? getPhotoById(activePhotoId, GALLERY_PHOTOS)
    : undefined
  const activeAlbum = GALLERY_ALBUMS.find((album) => album.id === activePhoto?.albumId)

  return (
    <SideRockSectionPage
      layout="flow"
      background={background}
      viewportSizedBackground
      backgroundGrayscale="0%"
      backgroundPosition="left center"
      backgroundOverlay="
        radial-gradient(ellipse at 14% 42%, rgba(211, 47, 53, 0.1), transparent 38%),
        linear-gradient(180deg, rgba(5, 5, 5, 0.38) 0%, rgba(5, 5, 5, 0.72) 48%, #050505 100%)
      "
    >
      <article className={styles.page}>
        <SectionIntro
          eyebrow={GALLERY_COPY.eyebrow}
          title={GALLERY_COPY.title}
          lead={GALLERY_COPY.lead}
        >
          <ScrollReveal delayMs={160} from="none">
            <p className={styles.count}>
              {formatRecordCount(GALLERY_PHOTOS.length)}
            </p>
          </ScrollReveal>
        </SectionIntro>

        <ScrollReveal delayMs={180} from="none">
          <div className={styles.divider} aria-hidden />
        </ScrollReveal>

        <div className={styles.folders}>
          {GALLERY_ALBUMS.map((album, index) => (
            <section
              key={album.id}
              className={styles.folder}
              data-open={album.id === openAlbumId}
            >
              <button
                type="button"
                className={styles.folderHeader}
                aria-expanded={album.id === openAlbumId}
                aria-controls={`gallery-folder-${index}`}
                onClick={() =>
                  setOpenAlbumId((current) => current === album.id ? undefined : album.id)
                }
              >
                <HiOutlineFolder className={styles.folderIcon} aria-hidden />
                <span className={styles.folderName}>{album.label}</span>
                <span className={styles.count}>{formatRecordCount(album.photos.length)}</span>
                <HiOutlineChevronDown className={styles.folderChevron} aria-hidden />
              </button>
              <div
                id={`gallery-folder-${index}`}
                className={styles.folderPanel}
                inert={album.id !== openAlbumId}
              >
                <div className={styles.folderClip}>
                  <div className={styles.folderBody}>
                    {album.photos.length ? (
                      <GalleryAlbumSection photos={album.photos} onOpen={setActivePhotoId} />
                    ) : (
                      <p className={styles.folderEmpty}>Ainda não há fotos nesta pasta.</p>
                    )}
                  </div>
                </div>
              </div>
            </section>
          ))}
        </div>
      </article>

      {activePhoto && activeAlbum ? (
        <GalleryLightbox
          photos={activeAlbum.photos}
          activePhotoId={activePhoto.id}
          onClose={() => setActivePhotoId(null)}
          onNavigate={setActivePhotoId}
        />
      ) : null}
    </SideRockSectionPage>
  )
}
