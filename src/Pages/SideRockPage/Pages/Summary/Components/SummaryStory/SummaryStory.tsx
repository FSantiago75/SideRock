import { SIDE_ROCK_SUMMARY_CONTENT } from '../../Content/summaryContent'
import { ScrollReveal } from '../../../../../../Components/ScrollReveal/ScrollReveal'
import layout from '../../Styles/SummaryLayout.module.css'
import sectionStyles from './SummaryStory.module.css'

export function SummaryStory() {
  return (
    <section
      id="banda"
      tabIndex={-1}
      className={layout.section}
      aria-labelledby="band-title"
    >
      <p className={layout.eyebrow}>01 / A banda</p>
      <div className={sectionStyles.storyLayout}>
        <ScrollReveal from="up">
          <h2 id="band-title">{SIDE_ROCK_SUMMARY_CONTENT.story.title}</h2>
        </ScrollReveal>
        <ScrollReveal from="up" delayMs={140} className={layout.copy}>
          <p>{SIDE_ROCK_SUMMARY_CONTENT.story.copy}</p>
        </ScrollReveal>
      </div>
    </section>
  )
}
