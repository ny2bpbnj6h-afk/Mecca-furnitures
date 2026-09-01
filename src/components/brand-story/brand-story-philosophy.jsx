import { timberImage } from './brand-story-data.js'

function BrandStoryPhilosophy() {
  return (
    <section className="w-full bg-surface-container-low py-section-gap">
      <div className="mx-auto max-w-container-max px-margin-mobile md:px-margin-desktop">
        <div className="grid grid-cols-1 items-stretch gap-0 overflow-hidden md:grid-cols-2">
          <div className="relative min-h-[400px] overflow-hidden">
            <img src={timberImage} alt="Sustainably harvested timber" className="h-full w-full object-cover object-center" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-primary/20 to-transparent" />
            <div className="absolute bottom-0 left-0 p-8">
              <h3 className="font-headline-md text-headline-md text-on-primary">Responsibly Harvested Timber</h3>
            </div>
          </div>
          <div className="flex flex-col justify-center gap-6 p-8 md:p-12 lg:p-16">
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary">Our Philosophy</span>
            <h2 className="font-headline-lg text-headline-lg text-primary">The Art of Less, Done Right</h2>
            <div className="h-1 w-12 bg-secondary" />
            <p className="font-body-md text-body-md leading-relaxed text-on-surface-variant">
              We operate at the intersection of minimalist restraint and tactile
              richness. Our design process begins not with what to add, but with
              what to remove. Every unnecessary line is stripped away until only
              the essential remains — something beautiful, functional, and enduring.
            </p>
            <p className="font-body-md text-body-md leading-relaxed text-on-surface-variant">
              This discipline extends to our materials. We source exclusively from
              FSC-certified forests, use vegetable-tanned leathers that age
              gracefully, and finish every surface with non-toxic, water-based
              coatings. Our workshops recycle wood shavings into biofuel. True
              luxury, we believe, must be sustainable.
            </p>
            <p className="font-body-md text-body-md leading-relaxed text-on-surface-variant">
              The result is furniture that doesn&rsquo;t shout for attention but
              commands it quietly. Pieces that feel inevitable — as if they could
              never have been designed any other way. That is the Mecca standard,
              and we will never lower it.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BrandStoryPhilosophy
