import type { SideRockVenue } from '../../../Content/venuesContent'
import sectionStyles from '../SummaryVenues.module.css'

export function VenueCard({ venue }: { venue: SideRockVenue }) {
  return (
    <article
      aria-label={venue.name || 'Espaço para casa ou evento'}
      data-empty={!venue.name || undefined}
    >
      <div className={sectionStyles.venueImage}>
        {venue.image ? (
          <img src={venue.image} alt={venue.name} loading="lazy" />
        ) : (
          <span aria-hidden="true" />
        )}
      </div>
      <p className={sectionStyles.venueCity}>{venue.city || '\u00A0'}</p>
      <h3 className={sectionStyles.venueName}>{venue.name || '\u00A0'}</h3>
      <span className={sectionStyles.venueContext}>
        {venue.context || '\u00A0'}
      </span>
    </article>
  )
}
