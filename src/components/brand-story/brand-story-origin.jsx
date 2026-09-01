import { craftImage } from './brand-story-data.js'

function BrandStoryOrigin() {
  return (
    <section className="mx-auto w-full max-w-container-max px-margin-mobile py-section-gap md:px-margin-desktop">
      <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-16">
        <div className="flex flex-col gap-6">
          <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary">Est. 1984</span>
          <h2 className="font-headline-lg text-headline-lg text-primary">Born From a Single Conviction</h2>
          <div className="h-1 w-12 bg-secondary" />
          <p className="font-body-lg text-body-lg leading-relaxed text-on-surface-variant">
            In a modest workshop in the heart of Virginia, a young cabinetmaker
            named Elias Mecca made a quiet promise to himself: he would never
            build anything he wouldn&rsquo;t be proud to leave behind. That
            promise became a practice. That practice became a philosophy. And
            that philosophy became Mecca Furnitures.
          </p>
          <p className="font-body-md text-body-md leading-relaxed text-on-surface-variant">
            What began as one man&rsquo;s devotion to honest joinery and beautiful
            timber has grown into an atelier of over forty master craftspeople,
            each sharing the same refusal to compromise. We still hand-select
            every slab. We still cut every joint by hand. And we still believe
            that the finest furniture is the kind that makes you stop, touch the
            grain, and feel something timeless.
          </p>
        </div>
        <div className="relative overflow-hidden">
          <div className="aspect-[4/5] w-full overflow-hidden bg-surface-container shadow-[0_40px_80px_-20px_rgba(115,92,0,0.08)]">
            <img src={craftImage} alt="Master artisan sanding a bespoke wooden chair" className="h-full w-full object-cover object-center" loading="eager" />
          </div>
          <div className="absolute -bottom-6 -left-6 hidden w-44 bg-secondary-container p-6 shadow-lg md:block">
            <p className="font-headline-md text-headline-md text-on-secondary-container leading-tight">
              &ldquo;Simplicity is the ultimate sophistication.&rdquo;
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BrandStoryOrigin
