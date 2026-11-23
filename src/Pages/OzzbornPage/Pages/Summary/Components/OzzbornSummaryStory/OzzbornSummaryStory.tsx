import { OZZBORN_SUMMARY_CONTENT } from '../../Content/ozzbornSummaryContent'
import { ScrollReveal } from '../../../../../../Components/ScrollReveal/ScrollReveal'
import layout from '../../Styles/SummaryLayout.module.css'
import sectionStyles from './OzzbornSummaryStory.module.css'

export function OzzbornSummaryStory() {
  return (
    <section
      id="banda"
      tabIndex={-1}
      className={layout.section}
      aria-labelledby="band-title"
    >
      <p className={layout.eyebrow}>01 / O tributo</p>
      <div className={sectionStyles.storyLayout}>
        <ScrollReveal from="up">
          <h2 id="band-title">{OZZBORN_SUMMARY_CONTENT.story.title}</h2>
        </ScrollReveal>
        <ScrollReveal from="up" delayMs={140} className={layout.copy}>
          <p>{OZZBORN_SUMMARY_CONTENT.story.copy}</p>
        </ScrollReveal>
      </div>
    </section>
  )
}
