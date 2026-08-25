import type { SyntheticEvent } from 'react'
import { FaInstagram, FaWhatsapp } from 'react-icons/fa6'
import { HiArrowUpRight } from 'react-icons/hi2'
import { SIDE_ROCK_BOOKING } from './bookingContent'
import styles from './BookingSection.module.css'

function pauseOtherVideos(event: SyntheticEvent<HTMLVideoElement>) {
  const current = event.currentTarget
  const row = current.closest('[data-video-row]')
  if (!row) return

  row.querySelectorAll('video').forEach((video) => {
    if (video !== current) video.pause()
  })
}

export function BookingSection() {
  const booking = SIDE_ROCK_BOOKING

  return (
    <section
      id="contratacao"
      className={styles.section}
      aria-labelledby="booking-title"
    >
      <div className={styles.layout}>
        <div className={styles.intro}>
          <p className={styles.eyebrow}>Contratação</p>
          <h2 id="booking-title">Do primeiro contato ao palco.</h2>
          <p className={styles.lead}>
            Conte a data, a cidade e o perfil do evento. A Side Rock retorna com
            disponibilidade, formato e próximos passos de forma objetiva.
          </p>

          <div className={styles.actions}>
            <a
              className={styles.primaryAction}
              href={booking.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp aria-hidden />
              Consultar data e orçamento
            </a>
            <a
              className={styles.secondaryAction}
              href={booking.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram aria-hidden />
              Ver apresentações
              <HiArrowUpRight aria-hidden />
            </a>
          </div>

          <div className={styles.manager}>
            <span>Atendimento comercial</span>
            <strong>{booking.manager} · Manager</strong>
            <small>{booking.location}</small>
          </div>
        </div>

        <div className={styles.proof}>
          <div className={styles.videoRow} data-video-row>
            {booking.videos.map((video) => (
              <div className={styles.videoCard} key={video.src}>
                <div className={styles.videoFrame}>
                  <video
                    controls
                    playsInline
                    preload="metadata"
                    aria-label={video.title}
                    onPlay={pauseOtherVideos}
                  >
                    <source src={video.src} type="video/mp4" />
                  </video>
                </div>
                <div className={styles.videoCaption}>
                  <span>Ao vivo</span>
                  {'href' in video ? (
                    <a
                      href={video.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {video.title}
                    </a>
                  ) : (
                    <strong>{video.title}</strong>
                  )}
                </div>
              </div>
            ))}
          </div>

          <ol className={styles.steps}>
            {booking.cards.map(({ eyebrow, title, copy }, index) => (
              <li className={styles.step} key={title}>
                <span className={styles.stepNumber}>
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div>
                  <p>{eyebrow}</p>
                  <h3>{title}</h3>
                  <span>{copy}</span>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>

      <p className={styles.legal}>
        {booking.company} · {booking.document} · {booking.location}
      </p>
    </section>
  )
}
