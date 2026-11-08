import { ScrollReveal } from '../../../../Components/ScrollReveal/ScrollReveal'
import type {
  OzzbornRepertoireAlbum,
  OzzbornRepertoireEra,
} from './ozzbornRepertoireContent'
import { OzzbornRepertoireAlbumCard } from './OzzbornRepertoireAlbumCard'
import styles from './OzzbornRepertoirePage.module.css'

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
            <OzzbornRepertoireAlbumCard album={album} priority={index === 0} />
          </li>
        ))}
      </ul>
    </ScrollReveal>
  )
}
