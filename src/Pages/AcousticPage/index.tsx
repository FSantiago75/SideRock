import { useRef } from 'react'
import { FaWhatsapp } from 'react-icons/fa6'
import { useScrollbarTheme } from '../../hooks/useScrollbarTheme'
import {
  ACOUSTIC_ASSETS,
  ACOUSTIC_CONTENT,
  ACOUSTIC_LINKS,
  ACOUSTIC_SCROLLBAR,
} from './acousticContent'
import { AcousticFooter } from './Components/AcousticFooter'
import { AcousticHeader } from './Components/AcousticHeader'
import { AcousticRepertoireRail } from './Components/AcousticRepertoireRail'
import styles from './AcousticPage.module.css'
import { useAcousticAmbientMotion } from './useAcousticAmbientMotion'
import { useAcousticDocumentMeta } from './useAcousticDocumentMeta'
import { useAcousticReveal } from './useAcousticReveal'
import { useSmoothDocumentScroll } from './useSmoothDocumentScroll'

function ResonanceMotif({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 320 320"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <circle
        cx="160"
        cy="160"
        r="146"
        stroke="currentColor"
        strokeWidth="0.8"
        opacity="0.35"
      />
      <circle
        cx="160"
        cy="160"
        r="112"
        stroke="currentColor"
        strokeWidth="0.8"
        opacity="0.4"
      />
      <circle
        cx="160"
        cy="160"
        r="78"
        stroke="currentColor"
        strokeWidth="0.9"
        opacity="0.45"
      />
      <circle
        cx="160"
        cy="160"
        r="44"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.55"
      />
      <circle cx="160" cy="160" r="12" fill="currentColor" opacity="0.5" />
      <path
        d="M34 160h252M160 34v252"
        stroke="currentColor"
        strokeWidth="0.6"
        opacity="0.22"
      />
      <path
        d="M58 92c34 18 68 18 102 0M58 228c34-18 68-18 102 0"
        stroke="currentColor"
        strokeWidth="0.7"
        opacity="0.28"
      />
    </svg>
  )
}

export const AcousticPage = () => {
  const pageRef = useRef<HTMLDivElement>(null)

  useScrollbarTheme(ACOUSTIC_SCROLLBAR)
  useAcousticDocumentMeta()
  useSmoothDocumentScroll()
  useAcousticReveal({ rootRef: pageRef })
  useAcousticAmbientMotion({ rootRef: pageRef })

  const {
    hero,
    format,
    artists,
    applications,
    repertoire,
    media,
    process,
    booking,
  } = ACOUSTIC_CONTENT

  return (
    <div className={styles.page} id="topo" ref={pageRef}>
      <AcousticHeader />
      <div className={styles.headerSpacer} aria-hidden="true" />

      <main>
        <section
          className={styles.hero}
          aria-labelledby="acoustic-title"
          data-ambient-hero
        >
          <div className={styles.heroResonance} aria-hidden="true">
            <ResonanceMotif className={styles.resonanceSvg} />
            <div className={styles.stringLines} />
          </div>

          <div
            className={styles.heroMedia}
            data-reveal="image"
            data-reveal-delay="0"
          >
            <picture>
              <img
                className={styles.heroImage}
                src={ACOUSTIC_ASSETS.hero.src}
                srcSet={ACOUSTIC_ASSETS.hero.srcSet}
                sizes={ACOUSTIC_ASSETS.hero.sizes}
                alt={ACOUSTIC_ASSETS.hero.alt}
                width={ACOUSTIC_ASSETS.hero.width}
                height={ACOUSTIC_ASSETS.hero.height}
                decoding="async"
                loading="eager"
                fetchPriority="high"
              />
            </picture>
            <div className={styles.heroWash} aria-hidden="true" />
          </div>

          <div className={styles.heroCopy}>
            <p
              className={styles.kicker}
              data-reveal="rise"
              data-reveal-delay="1"
            >
              {hero.kicker}
            </p>
            <h1
              id="acoustic-title"
              className={styles.heroTitle}
              data-reveal="rise"
              data-reveal-delay="2"
            >
              {hero.title}
            </h1>
            <p
              className={styles.heroHeadline}
              data-reveal="rise"
              data-reveal-delay="3"
            >
              {hero.headline}
            </p>
            <p
              className={styles.heroLead}
              data-reveal="rise"
              data-reveal-delay="4"
            >
              {hero.description}
            </p>

            <div
              className={styles.heroActions}
              data-reveal="rise"
              data-reveal-delay="5"
            >
              <a
                className={styles.primaryAction}
                href={ACOUSTIC_LINKS.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp aria-hidden />
                {hero.primaryCta}
              </a>
              <a className={styles.secondaryAction} href="#formato">
                {hero.secondaryCta}
              </a>
            </div>

            <dl
              className={styles.heroFacts}
              data-reveal="fade"
              data-reveal-delay="6"
            >
              {hero.facts.map((fact) => (
                <div key={fact.term} className={styles.heroFact}>
                  <dt>{fact.term}</dt>
                  <dd>{fact.description}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <div
          className={styles.sectionDivider}
          data-reveal="line"
          aria-hidden="true"
        >
          <span className={styles.sectionDividerGem} />
        </div>

        <section
          className={styles.format}
          id="formato"
          aria-labelledby="format-title"
        >
          <div
            className={styles.sectionIntro}
            data-reveal="rise"
            data-reveal-delay="0"
          >
            <p className={styles.sectionIndex}>{format.kicker}</p>
            <h2 id="format-title" className={styles.sectionTitle}>
              {format.title}
            </h2>
          </div>

          <div className={styles.formatLayout}>
            <figure
              className={styles.detailFigure}
              data-reveal="image"
              data-reveal-delay="1"
            >
              <img
                className={styles.detailImage}
                src={ACOUSTIC_ASSETS.detail.src}
                alt={ACOUSTIC_ASSETS.detail.alt}
                width={ACOUSTIC_ASSETS.detail.width}
                height={ACOUSTIC_ASSETS.detail.height}
                decoding="async"
                loading="lazy"
              />
            </figure>

            <div className={styles.formatCopy}>
              <p
                className={styles.bodyLead}
                data-reveal="rise"
                data-reveal-delay="2"
              >
                {format.lead}
              </p>
              <p
                className={styles.bodyText}
                data-reveal="rise"
                data-reveal-delay="3"
              >
                {format.body}
              </p>

              <ul className={styles.differentials}>
                {format.differentials.map((item, index) => (
                  <li
                    key={item.title}
                    className={styles.differential}
                    tabIndex={0}
                    data-reveal="rise"
                    data-reveal-delay={String(4 + index)}
                  >
                    <span className={styles.differentialIndex} aria-hidden="true">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <div>
                      <h3 className={styles.differentialTitle}>{item.title}</h3>
                      <p className={styles.differentialCopy}>{item.copy}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <div
          className={`${styles.sectionDivider} ${styles.sectionBridge}`}
          data-reveal="line"
          aria-hidden="true"
        >
          <span className={styles.sectionDividerGem} />
        </div>

        <section
          className={`${styles.artists} ${styles.deferredSection}`}
          aria-labelledby="artists-title"
        >
          <div className={styles.artistsResonance} aria-hidden="true">
            <ResonanceMotif className={styles.artistsResonanceSvg} />
          </div>

          <div
            className={styles.artistsCopy}
            data-reveal="rise"
            data-reveal-delay="0"
          >
            <p className={styles.sectionIndex}>{artists.kicker}</p>
            <h2 id="artists-title" className={styles.artistsTitle}>
              {artists.title}
            </h2>
            {artists.paragraphs.map((paragraph) => (
              <p key={paragraph} className={styles.bodyText}>
                {paragraph}
              </p>
            ))}
          </div>

          <div
            className={styles.artistsSignature}
            tabIndex={0}
            role="group"
            aria-label="Victor e Marcelo"
            data-reveal="fade"
            data-reveal-delay="1"
          >
            <span className={styles.artistsStrings} aria-hidden="true">
              <span />
              <span />
              <span />
              <span />
            </span>
            <span className={styles.artistsName} data-from="left">
              Victor
            </span>
            <span className={styles.artistsPlus}>+</span>
            <span className={styles.artistsName} data-from="right">
              Marcelo
            </span>
          </div>
        </section>

        <div
          className={styles.sectionDivider}
          data-reveal="line"
          aria-hidden="true"
        >
          <span className={styles.sectionDividerGem} />
        </div>

        <section
          className={`${styles.applications} ${styles.deferredSection}`}
          id="experiencia"
          aria-labelledby="applications-title"
        >
          <div
            className={styles.applicationsIntro}
            data-reveal="rise"
            data-reveal-delay="0"
          >
            <p className={styles.sectionIndex}>{applications.kicker}</p>
            <h2 id="applications-title" className={styles.sectionTitle}>
              {applications.title}
            </h2>
          </div>

          <ul className={styles.applicationsList}>
            {applications.items.map((item, index) => (
              <li
                key={item.label}
                className={styles.applicationsItem}
                data-reveal="rise"
                data-reveal-delay={String(Math.min(index + 1, 5))}
              >
                <a
                  className={styles.applicationsLink}
                  href={item.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${item.label} — ${applications.actionLabel} (abre em nova janela)`}
                >
                  <span className={styles.applicationsCopy}>
                    <span className={styles.applicationsLabel}>{item.label}</span>
                    <span className={styles.applicationsDescription}>
                      {item.description}
                    </span>
                  </span>
                  <span className={styles.applicationsAction}>
                    <FaWhatsapp aria-hidden />
                    {applications.actionLabel}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </section>

        <section
          className={styles.repertoire}
          id="repertorio"
          aria-labelledby="repertoire-title"
        >
          <div
            className={styles.repertoireIntro}
            data-reveal="rise"
            data-reveal-delay="0"
          >
            <p className={styles.sectionIndex}>{repertoire.kicker}</p>
            <h2 id="repertoire-title" className={styles.sectionTitle}>
              {repertoire.title}
            </h2>
            <p className={styles.bodyText}>{repertoire.body}</p>
          </div>

          <div data-reveal="fade" data-reveal-delay="1">
            <AcousticRepertoireRail
              categories={repertoire.categories}
              categoriesLabel={repertoire.categoriesLabel}
            />
          </div>
        </section>

        <section
          className={`${styles.media} ${styles.deferredSection}`}
          aria-labelledby="media-title"
        >
          {media.videoUrl ? (
            <button
              type="button"
              className={styles.mediaFrame}
              data-reveal="image"
              data-has-video="true"
              aria-label="Reproduzir vídeo oficial"
            >
              <img
                className={styles.mediaPoster}
                src={ACOUSTIC_ASSETS.ambient.src}
                alt=""
                width={ACOUSTIC_ASSETS.ambient.width}
                height={ACOUSTIC_ASSETS.ambient.height}
                aria-hidden="true"
                decoding="async"
                loading="lazy"
              />
              <div className={styles.mediaOverlay}>
                <span className={styles.mediaPlay} aria-hidden="true" />
                <p id="media-title" className={styles.mediaLabel}>
                  {media.label}
                </p>
              </div>
            </button>
          ) : (
            <div
              className={styles.mediaFrame}
              data-reveal="image"
              data-has-video="false"
            >
              {/*
                Quando media.videoUrl existir, o bloco acima vira o controle acessível.
              */}
              <img
                className={styles.mediaPoster}
                src={ACOUSTIC_ASSETS.ambient.src}
                alt=""
                width={ACOUSTIC_ASSETS.ambient.width}
                height={ACOUSTIC_ASSETS.ambient.height}
                aria-hidden="true"
                decoding="async"
                loading="lazy"
              />
              <div className={styles.mediaOverlay}>
                <span className={styles.mediaMotif} aria-hidden="true">
                  <svg viewBox="0 0 64 32" fill="none" focusable="false">
                    <path
                      d="M4 16c3-6 6-6 9 0s6 6 9 0 6-6 9 0 6 6 9 0 6-6 9 0"
                      stroke="currentColor"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                    />
                    <path
                      d="M8 16c2.2-3.8 4.4-3.8 6.6 0s4.4 3.8 6.6 0 4.4-3.8 6.6 0 4.4 3.8 6.6 0 4.4-3.8 6.6 0"
                      stroke="currentColor"
                      strokeWidth="1"
                      opacity="0.55"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
                <p id="media-title" className={styles.mediaLabel}>
                  {media.label}
                </p>
                <p className={styles.mediaCaption}>{media.caption}</p>
              </div>
              <div className={styles.mediaSheen} aria-hidden="true" />
            </div>
          )}
        </section>

        <section
          className={`${styles.process} ${styles.deferredSection}`}
          id="como-contratar"
          aria-labelledby="process-title"
        >
          <div
            className={styles.processIntro}
            data-reveal="rise"
            data-reveal-delay="0"
          >
            <p className={styles.sectionIndex}>{process.kicker}</p>
            <h2 id="process-title" className={styles.sectionTitle}>
              {process.title}
            </h2>
          </div>

          <ol className={styles.processSteps}>
            {process.steps.map((step, index) => (
              <li
                key={step.index}
                className={styles.processStep}
                data-reveal="rise"
                data-reveal-delay={String(index + 1)}
              >
                <span className={styles.processIndex} aria-hidden="true">
                  {step.index}
                </span>
                <div className={styles.processCopy}>
                  <h3 className={styles.processStepTitle}>{step.title}</h3>
                  <p className={styles.processStepText}>{step.copy}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section
          className={`${styles.booking} ${styles.deferredSection}`}
          id="contratacao"
          aria-labelledby="booking-title"
        >
          <div
            className={styles.bookingResonance}
            aria-hidden="true"
            data-reveal="fade"
            data-reveal-delay="0"
          >
            <ResonanceMotif className={styles.bookingResonanceSvg} />
            <div className={styles.bookingStrings} />
          </div>

          <p
            className={styles.bookingKicker}
            data-reveal="rise"
            data-reveal-delay="1"
          >
            {booking.kicker}
          </p>
          <h2
            id="booking-title"
            className={styles.bookingTitle}
            data-reveal="rise"
            data-reveal-delay="2"
          >
            {booking.title}
          </h2>
          <p
            className={styles.bookingBody}
            data-reveal="rise"
            data-reveal-delay="3"
          >
            {booking.body}
          </p>

          <a
            className={styles.bookingCta}
            href={ACOUSTIC_LINKS.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            data-reveal="rise"
            data-reveal-delay="4"
          >
            <FaWhatsapp aria-hidden />
            {booking.cta}
          </a>

          <p
            className={styles.bookingNote}
            data-reveal="fade"
            data-reveal-delay="5"
          >
            {booking.note}
          </p>
        </section>
      </main>

      <AcousticFooter />
    </div>
  )
}
