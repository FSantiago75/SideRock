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
          <h2 id="members-title">Quem toca na Side Rock</h2>
          <p>
            Conheça a trajetória e o papel de cada um dos quatro músicos
          </p>
          <Link className={layout.textLink} to={sideRockPath('integrantes')}>
            Conhecer os integrantes <HiArrowRight aria-hidden />
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
