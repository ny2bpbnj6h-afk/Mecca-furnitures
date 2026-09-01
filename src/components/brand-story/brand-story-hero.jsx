import { heroImage } from './brand-story-data.js'

function BrandStoryHero() {
  return (
    <section className="relative flex h-[70vh] min-h-[500px] w-full items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Mecca Furnitures woodworking studio bathed in warm morning light"
          className="h-full w-full object-cover object-center"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/30 via-primary/10 to-primary/40" />
      </div>
      <div className="relative z-10 mx-auto max-w-3xl px-margin-mobile text-center md:px-margin-desktop">
        <span className="mb-6 inline-block rounded-full border border-on-primary/20 bg-primary/30 px-4 py-2 font-label-sm text-label-sm uppercase tracking-widest text-on-primary backdrop-blur-sm">
          Our Story
        </span>
        <h1 className="font-display-lg-mobile text-display-lg-mobile text-on-primary drop-shadow-lg md:font-display-lg md:text-display-lg">
          Where Craft Becomes Legacy
        </h1>
        <p className="mx-auto mt-6 max-w-xl font-body-lg text-body-lg font-light text-on-primary/90 drop-shadow-md">
          A four-decade journey from a single workshop bench to the homes of
          those who believe furniture should outlast the generations that
          surround it.
        </p>
      </div>
    </section>
  )
}

export default BrandStoryHero
