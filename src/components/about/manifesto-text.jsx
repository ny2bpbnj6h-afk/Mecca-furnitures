function ManifestoText() {
  return (
    <div className="order-2 flex flex-col gap-8 md:order-1 md:col-span-5">
      <h2 className="font-headline-lg text-headline-lg text-primary">
        The Architecture of Living
      </h2>
      <div className="h-1 w-12 bg-secondary" />
      <p className="font-body-md text-body-md leading-relaxed text-on-surface-variant">
        We believe that furniture is not merely functional; it is the silent
        architecture of our daily lives. Every curve, every joint, and every
        selected material is an intentional decision aimed at bringing warmth,
        elegance, and grounding energy into the modern home.
      </p>
      <p className="font-body-md text-body-md leading-relaxed text-on-surface-variant">
        Our approach bridges the gap between minimalist restraint and tactile
        richness. We strip away the unnecessary, leaving only what is
        essential, beautiful, and enduring. This philosophy ensures that every
        Mecca piece stands as an heirloom, transcending fleeting design trends.
      </p>
      <div className="pt-4">
        <button
          type="button"
          className="bg-primary px-8 py-4 font-label-sm text-label-sm uppercase tracking-wider text-on-primary transition-colors duration-300 hover:bg-tertiary"
        >
          Explore Our Process
        </button>
      </div>
    </div>
  )
}

export default ManifestoText
