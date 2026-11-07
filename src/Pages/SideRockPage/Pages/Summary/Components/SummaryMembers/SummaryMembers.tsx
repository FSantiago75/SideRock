import sectionStyles from './SummaryMembers.module.css'
import { ScrollReveal } from '../../../../../../Components/ScrollReveal/ScrollReveal'
import { Link } from 'react-router-dom'
import { HiArrowRight } from 'react-icons/hi2'
import { SIDE_ROCK_MEMBERS } from '../../../Members/membersContent'
import { sideRockPath } from '../../../../sectionConstants'
import layout from '../../Styles/SummaryLayout.module.css'

export function SummaryMembers() {
  return (
    <section
      id="formacao"
      className={`${layout.section} ${sectionStyles.membersSection}`}
      aria-labelledby="members-title"
    >
      <p className={layout.eyebrow}>03 / Integrantes</p>
      <ScrollReveal className={sectionStyles.membersTeaser}>
        <div className={sectionStyles.teaserCopy}>
          <h2 id="members-title">Quem dá voz e peso à Side Rock.</h2>
          <p>
            Explore a formação interativa e conheça o papel de cada músico no
            show.
          </p>
          <Link className={layout.textLink} to={sideRockPath('integrantes')}>
            Explorar os integrantes <HiArrowRight aria-hidden />
          </Link>
        </div>
        <div className={sectionStyles.teaserLineup}>
          <ul aria-label="Formação da Side Rock">
            {SIDE_ROCK_MEMBERS.map(({ id, name, instrument, Icon }) => (
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
