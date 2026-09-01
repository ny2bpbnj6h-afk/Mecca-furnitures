import { values } from './brand-story-data.js'

function ValueCard({ icon, title, text }) {
  return (
    <div className="flex flex-col gap-4 border border-outline-variant/30 bg-surface-container-lowest p-8 transition-shadow hover:shadow-[0_20px_40px_-10px_rgba(115,92,0,0.06)]">
      <span className="material-symbols-outlined text-3xl text-secondary">
        {icon}
      </span>
      <h3 className="font-headline-md text-headline-md text-primary">
        {title}
      </h3>
      <p className="font-body-md text-body-md leading-relaxed text-on-surface-variant">
        {text}
      </p>
    </div>
  )
}

function BrandStoryValues() {
  return (
    <section className="mx-auto w-full max-w-container-max px-margin-mobile py-section-gap md:px-margin-desktop">
      <div className="mb-12 text-center">
        <span className="mb-4 inline-block font-label-sm text-label-sm uppercase tracking-widest text-secondary">
          What Guides Us
        </span>
        <h2 className="font-headline-lg text-headline-lg text-primary">
          Four Pillars of Purpose
        </h2>
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {values.map((v) => (
          <ValueCard key={v.title} {...v} />
        ))}
      </div>
    </section>
  )
}

export default BrandStoryValues
