const heroImage =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuCZ5OdoW5KF8JGEp1ishq2W3mFK-e2KnAXLPmJZcpUDJEX4SIetcjmx6AJOuhZtS5bgR8kbyUCKY_5cUUx4R00BdgQ6LKDm7Lz6AkzI8iMWv-NCx45-A59-uFP-L9BtYBPSZMkQcG1nVdW9Q64E2zrYxN8BzqNbxJv1b8UAu2u1cxQwuvKN1kS40FnH5g0DsraO2OAPevRB3OORRcq4EsOvogc9zxg2Gvpf_BdDEpC_qwp1Vmqmpdy2=s1920'

function AboutHero() {
  return (
    <section className="relative flex h-[70vh] min-h-[600px] w-full items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="A high-end woodworking studio with raw slabs of walnut and oak bathed in morning light"
          className="h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-primary/20 mix-blend-multiply" />
      </div>
      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center gap-6 px-margin-mobile text-center md:px-margin-desktop">
        <span className="rounded-full border border-on-primary/20 bg-primary/30 px-4 py-2 font-label-sm text-label-sm uppercase tracking-widest text-on-primary backdrop-blur-sm">
          Our Heritage
        </span>
        <h1 className="font-display-lg-mobile text-display-lg-mobile text-on-primary drop-shadow-lg md:font-display-lg md:text-display-lg">
          Crafting Permanence in a Fleeting World
        </h1>
        <p className="mt-4 max-w-2xl font-body-lg text-body-lg font-light text-on-primary/90 drop-shadow-md">
          Since 1984, Mecca Furnitures has been defined by an unwavering
          dedication to architectural form, tactile materiality, and the quiet
          luxury of bespoke craftsmanship.
        </p>
      </div>
    </section>
  )
}

export default AboutHero
