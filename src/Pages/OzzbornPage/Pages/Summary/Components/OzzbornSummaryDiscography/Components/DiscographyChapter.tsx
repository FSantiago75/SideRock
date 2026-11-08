import { Tabs } from 'radix-ui'
import type { OzzbornSummaryChapter } from '../../../Content/ozzbornDiscographyPreview'
import styles from '../OzzbornSummaryDiscography.module.css'

type Props = { chapter: OzzbornSummaryChapter; active: string }

export function DiscographyChapter({ chapter, active }: Props) {
  const [album, backdrop] = chapter.albums
  const selected = active === chapter.id
  return (
    <Tabs.Content
      value={chapter.id}
      forceMount
      inert={!selected}
      aria-hidden={!selected}
      tabIndex={selected ? 0 : -1}
      className={styles.chapterPanel}
      data-tone={chapter.id}
    >
      <figure className={styles.albumArt}>
        <img
          data-secondary
          src={backdrop.cover}
          alt=""
          aria-hidden
          loading="eager"
          decoding="async"
        />
        <img
          src={album.cover}
          alt={album.title}
          loading="eager"
          decoding="async"
        />
        <figcaption>
          {album.title} · {album.year}
        </figcaption>
      </figure>
      <div className={styles.chapterCopy}>
        <p className={styles.chapterPeriod}>{chapter.period}</p>
        <h3>{chapter.title}</h3>
        <p>{chapter.copy}</p>
      </div>
    </Tabs.Content>
  )
}
