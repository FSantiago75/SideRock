import { useRef } from 'react'
import { FaWhatsapp } from 'react-icons/fa6'
import { useScrollbarTheme } from '../../../hooks/useScrollbarTheme'
import { OzzbornFooter } from './Components/OzzbornFooter'
import { OzzbornFormation } from './Components/OzzbornFormation'
import { OzzbornHeader } from './Components/OzzbornHeader'
import { OzzbornHeroVisual } from './Components/OzzbornHeroVisual'
import { OzzbornMedia } from './Components/OzzbornMedia'
import { useOzzbornDocumentMeta } from './hooks/useOzzbornDocumentMeta'
import { useOzzbornInitialHashScroll } from './hooks/useOzzbornInitialHashScroll'
import { useOzzbornReveal } from './hooks/useOzzbornReveal'
import { useOzzbornSmoothScroll } from './hooks/useOzzbornSmoothScroll'
import {
  OZZBORN_ASSETS,
  OZZBORN_CONTENT,
  OZZBORN_LINKS,
  OZZBORN_SCROLLBAR,
} from './ozzbornContent'
import styles from './OzzbornPage.module.css'

export const OzzbornPage = () => {
  const pageRef = useRef<HTMLDivElement>(null)

  useScrollbarTheme(OZZBORN_SCROLLBAR)
  useOzzbornDocumentMeta()
  useOzzbornSmoothScroll()
  useOzzbornInitialHashScroll()
  useOzzbornReveal({ rootRef: pageRef })

  const {
    hero,
    manifesto,
    experience,
    repertoire,
    formation,
    media,
    applications,
    process,
    booking,
  } = OZZBORN_CONTENT

  return (
    <div className={styles.page} id="topo" ref={pageRef}>
      <OzzbornHeader />
      <div className={styles.headerSpacer} aria-hidden="true" />

      <main>
        <section className={styles.hero} aria-labelledby="ozzborn-title">
          <div className={styles.heroAtmosphere} aria-hidden="true" />

          <div className={styles.heroCopy}>
            <p
              className={styles.kicker}
              data-reveal="rise"
              data-reveal-delay="0"
            >
              {hero.kicker}
            </p>
            <p
              className={styles.heroSignature}
              data-reveal="fade"
              data-reveal-delay="1"
            >
              {hero.signature}
            </p>
            <h1
              id="ozzborn-title"
              className={styles.heroTitle}
              data-reveal="rise"
              data-reveal-delay="1"
            >
              {hero.title}
            </h1>
            <p
              className={styles.heroHeadline}
              data-reveal="rise"
              data-reveal-delay="2"
            >
              {hero.headline}
            </p>
            <p
              className={styles.heroLead}
              data-reveal="rise"
              data-reveal-delay="3"
            >
              {hero.description}
            </p>

            <div
              className={styles.heroActions}
              data-reveal="rise"
              data-reveal-delay="4"
            >
              <a
                className={styles.primaryAction}
                href={OZZBORN_LINKS.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp aria-hidden />
                {hero.primaryCta}
              </a>
              <a className={styles.secondaryAction} href="#tributo">
                {hero.secondaryCta}
              </a>
            </div>

            <p
              className={styles.heroNote}
              data-reveal="fade"
              data-reveal-delay="5"
            >
              {hero.note}
            </p>
          </div>

          <OzzbornHeroVisual />

          <dl
            className={styles.heroFacts}
            data-reveal="fade"
            data-reveal-delay="5"
          >
            {hero.facts.map((fact) => (
              <div key={fact.term} className={styles.heroFact}>
                <dt>{fact.term}</dt>
                <dd>{fact.description}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section
          className={styles.manifesto}
          id="tributo"
          aria-labelledby="manifesto-title"
        >
          <p className={styles.manifestoSeal} aria-hidden="true">
            I
          </p>
          <div className={styles.manifestoRail} aria-hidden="true" />
          <div className={styles.manifestoFragment} aria-hidden="true" />
          <div
            className={styles.manifestoIntro}
            data-reveal="rise"
            data-reveal-delay="0"
          >
            <p className={styles.sectionIndex}>{manifesto.kicker}</p>
            <h2 id="manifesto-title" className={styles.sectionTitle}>
              {manifesto.title}
            </h2>
          </div>
          <div className={styles.manifestoBody}>
            <p
              className={styles.bodyLead}
              data-reveal="rise"
              data-reveal-delay="1"
            >
              {manifesto.body}
            </p>
            <blockquote
              className={styles.manifestoHighlight}
              data-reveal="rise"
              data-reveal-delay="2"
            >
              {manifesto.highlight}
            </blockquote>
          </div>
        </section>

        <section
          className={styles.experience}
          id="experiencia"
          aria-labelledby="experience-title"
        >
          <span className={styles.sectionOrnament} aria-hidden="true" />
          <div
            className={styles.sectionIntro}
            data-reveal="rise"
            data-reveal-delay="0"
          >
            <p className={styles.sectionIndex}>{experience.kicker}</p>
            <h2 id="experience-title" className={styles.sectionTitle}>
              {experience.title}
            </h2>
          </div>

          <ol className={styles.experienceList}>
            {experience.points.map((point, index) => (
              <li
                key={point.title}
                className={styles.experienceItem}
                data-act={point.index}
                data-reveal="rise"
                data-reveal-delay={String(Math.min(index + 1, 4))}
              >
                <span className={styles.experienceIndex} aria-hidden="true">
                  {point.index}
                </span>
                <div>
                  <h3 className={styles.experienceTitle}>{point.title}</h3>
                  <p className={styles.experienceCopy}>{point.copy}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section
          className={styles.repertoire}
          aria-labelledby="repertoire-title"
        >
          <div
            className={styles.sectionIntro}
            data-reveal="rise"
            data-reveal-delay="0"
          >
            <p className={styles.sectionIndex}>{repertoire.kicker}</p>
            <h2 id="repertoire-title" className={styles.sectionTitle}>
              {repertoire.title}
            </h2>
            <p className={styles.bodyText}>{repertoire.body}</p>
          </div>

          <ul className={styles.repertoirePillars}>
            {repertoire.pillars.map((pillar, index) => (
              <li
                key={pillar.title}
                className={styles.repertoirePillar}
                data-movement={String(index + 1)}
                data-reveal="rise"
                data-reveal-delay={String(Math.min(index + 1, 4))}
              >
                <span className={styles.repertoireIndex} aria-hidden="true">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className={styles.repertoirePillarTitle}>{pillar.title}</h3>
                <p className={styles.repertoirePillarCopy}>{pillar.copy}</p>
              </li>
            ))}
          </ul>
        </section>

        <section
          className={styles.formation}
          id="formacao"
          aria-labelledby="formation-title"
        >
          <div
            className={styles.sectionIntro}
            data-reveal="rise"
            data-reveal-delay="0"
          >
            <p className={styles.sectionIndex}>{formation.kicker}</p>
            <h2 id="formation-title" className={styles.sectionTitle}>
              {formation.title}
            </h2>
            <p className={styles.bodyText}>{formation.body}</p>
          </div>

          <OzzbornFormation />
        </section>

        <section
          className={styles.media}
          id="midia"
          aria-labelledby="media-title"
        >
          <div
            className={styles.sectionIntro}
            data-reveal="rise"
            data-reveal-delay="0"
          >
            <p className={styles.sectionIndex}>{media.kicker}</p>
            <h2 id="media-title" className={styles.sectionTitle}>
              {media.title}
            </h2>
            <p className={styles.bodyText}>{media.body}</p>
          </div>

          <OzzbornMedia />
        </section>

        <section
          className={styles.applications}
          aria-labelledby="applications-title"
        >
          <div
            className={styles.sectionIntro}
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
          className={styles.process}
          id="contratacao"
          aria-labelledby="process-title"
        >
          <div
            className={styles.sectionIntro}
            data-reveal="rise"
            data-reveal-delay="0"
          >
            <p className={styles.sectionIndex}>{process.kicker}</p>
            <h2 id="process-title" className={styles.sectionTitle}>
              {process.title}
            </h2>
            <p className={styles.bodyText}>{process.body}</p>
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
                <div>
                  <h3 className={styles.processStepTitle}>{step.title}</h3>
                  <p className={styles.processStepText}>{step.copy}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section
          className={styles.booking}
          aria-labelledby="booking-title"
        >
          <div className={styles.bookingGlow} aria-hidden="true" />
          <img
            className={styles.bookingCrest}
            src={OZZBORN_ASSETS.crest.src}
            width={OZZBORN_ASSETS.crest.width}
            height={OZZBORN_ASSETS.crest.height}
            alt=""
            loading="lazy"
            decoding="async"
          />

          <p
            className={styles.bookingKicker}
            data-reveal="rise"
            data-reveal-delay="0"
          >
            {booking.kicker}
          </p>
          <h2
            id="booking-title"
            className={styles.bookingTitle}
            data-reveal="rise"
            data-reveal-delay="1"
          >
            {booking.title}
          </h2>
          <p
            className={styles.bookingBody}
            data-reveal="rise"
            data-reveal-delay="2"
          >
            {booking.body}
          </p>
          <a
            className={styles.bookingCta}
            href={OZZBORN_LINKS.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            data-reveal="rise"
            data-reveal-delay="3"
          >
            <FaWhatsapp aria-hidden />
            {booking.cta}
          </a>
          <p
            className={styles.bookingNote}
            data-reveal="fade"
            data-reveal-delay="4"
          >
            {booking.note}
          </p>
        </section>
      </main>

      <OzzbornFooter />
    </div>
  )
}
