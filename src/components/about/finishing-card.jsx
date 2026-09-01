function FinishingCard() {
  return (
    <div className="flex flex-col justify-between border border-outline-variant/50 bg-surface p-8">
      <div>
        <span className="material-symbols-outlined mb-4 block text-3xl text-secondary">
          eco
        </span>
        <h3 className="mb-3 font-headline-md text-headline-md text-primary">
          Zero-Waste Finishing
        </h3>
        <p className="font-body-md text-body-md text-on-surface-variant">
          Our ateliers utilize non-toxic, water-based finishes and actively
          recycle wood shavings into biofuel, minimizing our footprint.
        </p>
      </div>
      <a
        href="#"
        className="group flex w-fit items-center gap-2 font-label-sm text-label-sm uppercase tracking-widest text-primary transition-colors hover:text-secondary"
      >
        Our Impact Report
        <span className="material-symbols-outlined text-sm transition-transform group-hover:translate-x-1">
          arrow_forward
        </span>
      </a>
    </div>
  )
}

export default FinishingCard
