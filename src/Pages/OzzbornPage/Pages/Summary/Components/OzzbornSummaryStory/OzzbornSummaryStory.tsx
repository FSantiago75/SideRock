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
      <ScrollReveal className={sectionStyles.storyLayout}>
        <h2 id="band-title">{OZZBORN_SUMMARY_CONTENT.story.title}</h2>
        <div className={layout.copy}>
          <p>{OZZBORN_SUMMARY_CONTENT.story.copy}</p>
        </div>
      </ScrollReveal>
    </section>
  )
}
