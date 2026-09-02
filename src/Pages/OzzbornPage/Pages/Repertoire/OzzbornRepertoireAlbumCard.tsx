import { ScrollReveal } from '../../../../Components/ScrollReveal/ScrollReveal'
import type {
  OzzbornRepertoireAlbum,
  OzzbornRepertoireEra,
} from './ozzbornRepertoireContent'
import styles from './OzzbornRepertoirePage.module.css'

type OzzbornRepertoireAlbumCardProps = {
  album: OzzbornRepertoireAlbum
  priority?: boolean
}

export function OzzbornRepertoireAlbumCard({
  album,
  priority = false,
}: OzzbornRepertoireAlbumCardProps) {
  return (
    <article className={styles.albumCard}>
      <div className={styles.albumCoverFrame}>
        <img
          src={album.cover}
          alt={`Capa do álbum ${album.title} (${album.year})`}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
        />
        <div className={styles.albumYearBadge}>{album.year}</div>
      </div>
      <div className={styles.albumMeta}>
        <p className={styles.albumArtist}>{album.artist}</p>
        <h3 className={styles.albumTitle}>
          {album.title}
        </h3>
        <p className={styles.albumConcept}>{album.concept}</p>
      </div>
    </article>
  )
}

type OzzbornRepertoireAlbumGridProps = {
  albums: readonly OzzbornRepertoireAlbum[]
  era: OzzbornRepertoireEra
}

export function OzzbornRepertoireAlbumGrid({
  albums,
  era,
}: OzzbornRepertoireAlbumGridProps) {
  return (
    <ScrollReveal className={styles.albumGridReveal} delayMs={90} from="scale">
      <ul
        className={styles.albumGrid}
        aria-label={`Álbuns da era ${era.title}`}
        data-album-count={albums.length}
      >
        {albums.map((album, index) => (
          <li key={album.id} className={styles.albumItem}>
            <OzzbornRepertoireAlbumCard
              album={album}
              priority={index === 0}
            />
          </li>
        ))}
      </ul>
    </ScrollReveal>
  )
}
