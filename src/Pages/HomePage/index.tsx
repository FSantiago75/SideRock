import { useCallback, useState, type CSSProperties, type FocusEvent } from 'react'
import { AmbientBackdrop } from './Components/AmbientBackdrop'
import { CatalogFooter } from './Components/CatalogFooter'
import { CatalogIntro } from './Components/CatalogIntro'
import { ExperienceCard } from './Components/ExperienceCard'
import {
  getCatalogTheme,
  HOME_EXPERIENCES,
  type ActiveHomeExperienceId,
  type HomeExperience,
} from './homeExperiences'
import styles from './styles.module.css'
import {
  getInitialCatalogExperience,
  useCatalogExperienceRotation,
} from './useCatalogExperienceRotation'
import { useCatalogScrollbarTheme } from './useCatalogScrollbarTheme'

type CatalogStyle = CSSProperties & {
  '--catalog-accent': string
}

export const HomePage = () => {
  const [activeExperience, setActiveExperience] =
    useState<ActiveHomeExperienceId>(getInitialCatalogExperience)
  const catalogTheme = getCatalogTheme(activeExperience)
  const catalogStyle: CatalogStyle = {
    '--catalog-accent': catalogTheme.accent,
  }

  const { isAutomaticRotation, pauseRotation } = useCatalogExperienceRotation({
    onChange: setActiveExperience,
  })

  useCatalogScrollbarTheme(catalogTheme.scrollbar)

  const activateExperience = useCallback((experience: HomeExperience) => {
    setActiveExperience(experience.id)
  }, [])

  const restoreNeutralExperience = () => {
    if (!isAutomaticRotation) {
      setActiveExperience(null)
    }
  }

  const handleExperienceListBlur = (event: FocusEvent<HTMLElement>) => {
    const nextFocus = event.relatedTarget

    if (
      nextFocus instanceof Node &&
      event.currentTarget.contains(nextFocus)
    ) {
      return
    }

    restoreNeutralExperience()
  }

  return (
    <main className={styles.catalog} style={catalogStyle}>
      <AmbientBackdrop activeExperience={activeExperience} />
      <CatalogIntro />

      <section
        className={styles.experienceList}
        aria-label="Nossas experiências"
        onPointerDown={pauseRotation}
        onPointerLeave={restoreNeutralExperience}
        onBlur={handleExperienceListBlur}
      >
        {HOME_EXPERIENCES.map((experience) => (
          <ExperienceCard
            key={experience.id}
            experience={experience}
            isActive={activeExperience === experience.id}
            enableHover={!isAutomaticRotation}
            onActivate={activateExperience}
          />
        ))}
      </section>

      <CatalogFooter />
    </main>
  )
}
