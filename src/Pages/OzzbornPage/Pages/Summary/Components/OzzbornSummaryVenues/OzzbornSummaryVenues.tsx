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
          <h2 id="venues-title">Por onde já passamos.</h2>
          <p>Casas e eventos que receberam a Ozzborn.</p>
        </div>
      </ScrollReveal>
      <div
        className={sectionStyles.venues}
        tabIndex={0}
        aria-label="Casas e eventos"
      >
        {OZZBORN_VENUES.map((venue) => (
          <VenueCard key={venue.id} venue={venue} />
        ))}
      </div>
      <ScrollReveal>
        <PrivateEventsCard
          title="Sua paixão por Ozzy dá o tom da festa."
          description="Aniversários e festas particulares também têm espaço para a Ozzborn. O peso e a atmosfera de um show de Ozzy, recriados com cuidado para celebrar junto de quem compartilha essa paixão."
        />
      </ScrollReveal>
    </section>
  )
}
