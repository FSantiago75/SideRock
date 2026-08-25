import { Link } from 'react-router-dom'
import AcousticImage from '../../assets/SideRockAcoustic.png'
import SideRockImage from '../../assets/SideRock.jpg'
import OzzbornImage from '../../assets/SideRockOzzborn.png'
import { EXPERIENCE_ROUTES } from '../../config/experiences'
import styles from './styles.module.css'

const experiences = [
  {
    id: 'acoustic',
    name: 'Acústico',
    path: EXPERIENCE_ROUTES.acoustic,
    image: AcousticImage,
  },
  {
    id: 'side-rock',
    name: 'Side Rock',
    path: EXPERIENCE_ROUTES.sideRock,
    image: SideRockImage,
  },
  {
    id: 'ozzborn',
    name: 'Ozzborn',
    path: EXPERIENCE_ROUTES.ozzborn,
    image: OzzbornImage,
  },
] as const

export const HomePage = () => {
  return (
    <main className={styles.ProjectSelector} aria-label="Experiências musicais">
      {experiences.map((experience) => (
        <Link
          key={experience.id}
          to={experience.path}
          className={styles.ProjectSelectorItem}
          data-experience={experience.id}
          aria-label={`Conhecer ${experience.name}`}
        >
          <div>
            <h2 className={styles.ItemTitle}>{experience.name}</h2>
            <div className={styles.ItemImage}>
              <img src={experience.image} alt="" />
            </div>
          </div>
        </Link>
      ))}
    </main>
  )
}
