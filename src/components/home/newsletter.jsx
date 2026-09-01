function Newsletter() {
  return (
    <section className="bg-surface-container py-section-gap">
      <div className="mx-auto max-w-3xl px-margin-mobile text-center">
        <h2 className="mb-4 font-headline-lg text-headline-lg text-on-background">
          Bring More Beauty Home
        </h2>
        <p className="mb-8 font-body-md text-body-md text-on-surface-variant">
          Subscribe to our newsletter for early access to new collections,
          exclusive events, and interior design inspiration.
        </p>
        <form
          className="mx-auto flex max-w-lg flex-col gap-4 sm:flex-row"
          onSubmit={(event) => event.preventDefault()}
        >
          <input
            type="email"
            placeholder="Your email address"
            className="flex-1 border-0 border-b border-outline bg-transparent px-0 py-3 font-body-md text-body-md text-on-background placeholder:text-on-surface-variant/50 focus:border-secondary focus:outline-none focus:ring-0"
          />
          <button
            type="submit"
            className="whitespace-nowrap rounded bg-primary px-8 py-3 font-label-sm text-label-sm uppercase tracking-widest text-on-primary transition-colors duration-300 hover:bg-tertiary"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  )
}

export default Newsletter
