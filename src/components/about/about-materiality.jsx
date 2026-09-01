import TimberCard from './timber-card.jsx'
import LeatherCard from './leather-card.jsx'
import FinishingCard from './finishing-card.jsx'
import LongevityCard from './longevity-card.jsx'

function AboutMateriality() {
  return (
    <section className="w-full border-y border-outline-variant/30 bg-surface-container-low py-section-gap">
      <div className="mx-auto max-w-container-max px-margin-mobile md:px-margin-desktop">
        <div className="mx-auto mb-16 flex max-w-2xl flex-col items-center gap-4 text-center">
          <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary">
            Sourced with Reverence
          </span>
          <h2 className="font-headline-lg text-headline-lg text-primary">
            Tactile Materiality
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant">
            Our commitment to sustainable luxury begins with the profound
            respect we hold for the raw materials we shape.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:auto-rows-[400px] md:grid-cols-3">
          <TimberCard />
          <LeatherCard />
          <FinishingCard />
          <LongevityCard />
        </div>
      </div>
    </section>
  )
}

export default AboutMateriality
