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
      <ScrollReveal className={sectionStyles.storyLayout}>
        <h2 id="band-title">{SIDE_ROCK_SUMMARY_CONTENT.story.title}</h2>
        <div className={layout.copy}>
          <p>{SIDE_ROCK_SUMMARY_CONTENT.story.copy}</p>
        </div>
      </ScrollReveal>
    </section>
  )
}
