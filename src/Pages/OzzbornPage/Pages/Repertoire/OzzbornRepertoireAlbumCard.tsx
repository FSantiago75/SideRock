import type { OzzbornRepertoireAlbum } from './ozzbornRepertoireContent'
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
        <h3 className={styles.albumTitle}>{album.title}</h3>
      </div>
    </article>
  )
}
