import { VenueCard } from './Components/VenueCard'
import { PrivateEventsCard } from '../../../../../../Components/PrivateEventsCard/PrivateEventsCard'
import { ScrollReveal } from '../../../../../../Components/ScrollReveal/ScrollReveal'
import layout from '../../Styles/SummaryLayout.module.css'
import { SIDE_ROCK_VENUES } from '../../Content/venuesContent'
import sectionStyles from './SummaryVenues.module.css'

export function SummaryVenues() {
  return (
    <section
      id="palcos"
      tabIndex={-1}
      className={layout.section}
      aria-labelledby="venues-title"
    >
      <p className={layout.eyebrow}>04 / Palcos</p>
      <ScrollReveal className={layout.sectionHeading}>
        <div>
          <h2 id="venues-title">Por onde já passamos.</h2>
          <p>Casas e eventos que receberam a Side Rock.</p>
        </div>
      </ScrollReveal>
      <div
        className={sectionStyles.venues}
        tabIndex={0}
        aria-label="Casas e eventos"
      >
        {SIDE_ROCK_VENUES.map((venue) => (
          <VenueCard key={venue.id} venue={venue} />
        ))}
      </div>
      <ScrollReveal>
        <PrivateEventsCard
          title="O palco também pode ser a sua festa."
          description="Dos aniversários às festas particulares, a Side Rock já levou seu show para quem faz do rock parte da própria história. A mesma entrega dos palcos, perto de você e dos seus convidados."
        />
      </ScrollReveal>
    </section>
  )
}
