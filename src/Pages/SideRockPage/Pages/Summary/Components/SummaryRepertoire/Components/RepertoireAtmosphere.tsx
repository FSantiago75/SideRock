import { Tabs } from 'radix-ui'
import type { REPERTOIRE_ATMOSPHERES } from '../../../Content/repertoireContent'
import sectionStyles from '../SummaryRepertoire.module.css'

type Atmosphere = (typeof REPERTOIRE_ATMOSPHERES)[number]

export function RepertoireAtmosphere({
  item,
  active,
}: {
  item: Atmosphere
  active: string
}) {
  return (
    <Tabs.Content
      value={item.id}
      forceMount
      inert={active !== item.id}
      aria-hidden={active !== item.id}
      tabIndex={active === item.id ? 0 : -1}
      className={sectionStyles.atmospherePanel}
      data-tone={item.id}
    >
      <figure className={sectionStyles.referenceArt}>
        <img
          src={item.logo}
          alt={item.artist}
          loading="eager"
          decoding="async"
        />
        <figcaption>Uma das referências · {item.artist}</figcaption>
      </figure>
      <div className={sectionStyles.atmosphereCopy}>
        <p className={sectionStyles.atmosphereMood}>{item.accent}</p>
        <h3>{item.title}</h3>
        <p>{item.copy}</p>
      </div>
    </Tabs.Content>
  )
}
