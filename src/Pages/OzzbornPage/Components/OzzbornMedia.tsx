import { FaInstagram } from 'react-icons/fa6'
import { OZZBORN_ASSETS, OZZBORN_CONTENT, OZZBORN_LINKS } from '../ozzbornContent'
import styles from '../OzzbornPage.module.css'

export function OzzbornMedia() {
  const { media } = OZZBORN_CONTENT
  const hasVideo = Boolean(media.videoUrl)

  if (hasVideo) {
    return (
      <div className={styles.mediaLayout}>
        <div
          className={styles.mediaStage}
          data-reveal="image"
          data-reveal-delay="1"
          data-has-video="true"
        >
          <div className={styles.mediaBezel} aria-hidden="true" />
          <div className={styles.mediaScreen}>
            {media.videoPoster ? (
              <img
                className={styles.mediaVideoPoster}
                src={media.videoPoster}
                alt=""
                loading="lazy"
                decoding="async"
              />
            ) : null}
            <div className={styles.mediaOverlay}>
              <p className={styles.mediaPosterLabel}>{media.cardTitle}</p>
              <p className={styles.mediaPosterCaption}>{media.cardBody}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className={styles.mediaLayout}>
      <div
        className={styles.mediaCard}
        data-reveal="rise"
        data-reveal-delay="1"
        data-has-video="false"
      >
        <div className={styles.mediaCardAtmosphere} aria-hidden="true">
          <img
            className={styles.mediaCrest}
            src={OZZBORN_ASSETS.crest.src}
            width={OZZBORN_ASSETS.crest.width}
            height={OZZBORN_ASSETS.crest.height}
            alt=""
            loading="lazy"
            decoding="async"
          />
        </div>

        <div className={styles.mediaCardContent}>
          <p className={styles.mediaCardKicker}>{media.cardKicker}</p>
          <h3 className={styles.mediaCardTitle}>{media.cardTitle}</h3>
          <p className={styles.mediaCardBody}>{media.cardBody}</p>
          <a
            className={styles.mediaInstagram}
            href={OZZBORN_LINKS.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram aria-hidden />
            {media.instagramCta}
          </a>
        </div>
      </div>
    </div>
  )
}
