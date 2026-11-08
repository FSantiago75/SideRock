import type { CSSProperties } from 'react'
import type { SideRockVenue } from '../../../Content/venuesContent'
import sectionStyles from '../SummaryVenues.module.css'

export function VenueCard({ venue }: { venue: SideRockVenue }) {
  return (
    <article aria-label={venue.name}>
      <div className={sectionStyles.venueImage}>
        {venue.image ? (
          <img
            src={venue.image}
            alt={venue.name}
            loading="lazy"
            data-blend={venue.imageBlend}
            style={
              {
                '--venue-logo-scale': venue.imageScale ?? 1,
                mixBlendMode: venue.imageBlend,
              } as CSSProperties
            }
          />
        ) : (
          <span aria-hidden="true" />
        )}
      </div>
      <p
        className={sectionStyles.venueCity}
        aria-hidden={!venue.city || undefined}
      >
        {venue.city || '\u00A0'}
      </p>
      <h3 className={sectionStyles.venueName}>{venue.name}</h3>
      {venue.address && (
        <p className={sectionStyles.venueAddress}>{venue.address}</p>
      )}
      {venue.context && (
        <p className={sectionStyles.venueContext}>{venue.context}</p>
      )}
    </article>
  )
}
