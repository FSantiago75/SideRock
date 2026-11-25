import { VenueCard } from './Components/VenueCard'
import { PrivateEventsCard } from '../../../../../../Components/PrivateEventsCard/PrivateEventsCard'
import { ScrollReveal } from '../../../../../../Components/ScrollReveal/ScrollReveal'
import layout from '../../Styles/SummaryLayout.module.css'
import { OZZBORN_VENUES } from '../../Content/ozzbornVenuesContent'
import sectionStyles from './OzzbornSummaryVenues.module.css'

export function OzzbornSummaryVenues() {
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
          <h2 id="venues-title">Por onde já passamos</h2>
          <p>Casas e eventos que receberam a Ozzborn</p>
        </div>
      </ScrollReveal>
      <div
        className={sectionStyles.venues}
        tabIndex={0}
        aria-label="Casas e eventos"
      >
        {OZZBORN_VENUES.map((venue, index) => (
          <div className={sectionStyles.venueSlot} key={venue.id}>
            <ScrollReveal from="right" delayMs={(index % 3) * 65} respectClipping>
              <VenueCard venue={venue} />
            </ScrollReveal>
          </div>
        ))}
      </div>
      <ScrollReveal>
        <PrivateEventsCard
          title="Ozzborn também na sua festa"
          description="O tributo também pode fazer parte de aniversários e festas particulares. Consulte a data com Vanessa e conte como será o seu evento."
        />
      </ScrollReveal>
    </section>
  )
}
