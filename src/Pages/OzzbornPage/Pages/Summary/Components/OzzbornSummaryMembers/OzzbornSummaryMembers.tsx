import sectionStyles from './OzzbornSummaryMembers.module.css'
import { ScrollReveal } from '../../../../../../Components/ScrollReveal/ScrollReveal'
import { Link } from 'react-router-dom'
import { HiArrowRight } from 'react-icons/hi2'
import { OZZBORN_MEMBERS } from '../../../Members/ozzbornMembersContent'
import { ozzbornPath } from '../../../../sectionConstants'
import layout from '../../Styles/SummaryLayout.module.css'

export function OzzbornSummaryMembers() {
  return (
    <section
      id="formacao"
      className={`${layout.section} ${sectionStyles.membersSection}`}
      aria-labelledby="members-title"
    >
      <p className={layout.eyebrow}>03 / Integrantes</p>
      <ScrollReveal className={sectionStyles.membersTeaser}>
        <div className={sectionStyles.teaserCopy}>
          <h2 id="members-title">Quem dá voz e peso à Ozzborn.</h2>
          <p>
            Explore a formação interativa e conheça o papel de cada músico no
            show.
          </p>
          <Link className={layout.textLink} to={ozzbornPath('integrantes')}>
            Explorar os integrantes <HiArrowRight aria-hidden />
          </Link>
        </div>
        <div className={sectionStyles.teaserLineup}>
          <ul aria-label="Formação da Ozzborn">
            {OZZBORN_MEMBERS.map(({ id, name, instrument, Icon }) => (
              <li key={id}>
                <Icon aria-hidden />
                <div>
                  <span>{instrument}</span>
                  <strong>{name}</strong>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </ScrollReveal>
    </section>
  )
}
