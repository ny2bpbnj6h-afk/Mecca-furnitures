import { Link } from 'react-router'

function BrandStoryCTA() {
  return (
    <section className="w-full bg-surface-container py-section-gap">
      <div className="mx-auto max-w-3xl px-margin-mobile text-center">
        <h2 className="font-headline-lg text-headline-lg text-primary mb-4">
          Begin Your Journey
        </h2>
        <p className="font-body-lg text-body-lg text-on-surface-variant mb-8 max-w-xl mx-auto">
          Every Mecca piece begins with a conversation. Whether you&rsquo;re
          envisioning a single statement chair or furnishing an entire home,
          our design concierge is ready to bring your vision to life.
        </p>
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Link
            to="/shop"
            className="inline-flex items-center justify-center bg-primary px-8 py-4 font-label-sm text-label-sm uppercase tracking-widest text-on-primary transition-colors duration-300 hover:bg-tertiary"
          >
            Explore the Collection
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center border border-secondary px-8 py-4 font-label-sm text-label-sm uppercase tracking-widest text-primary transition-colors duration-300 hover:bg-secondary/5"
          >
            Speak with a Concierge
          </Link>
        </div>
      </div>
    </section>
  )
}

export default BrandStoryCTA
