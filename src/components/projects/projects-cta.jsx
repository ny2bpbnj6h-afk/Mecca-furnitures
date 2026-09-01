import { Link } from 'react-router'

function ProjectsCta() {
  return (
    <section className="mx-auto mb-section-gap flex w-full max-w-4xl flex-col items-center rounded-3xl bg-surface-container px-margin-mobile py-24 text-center md:px-margin-desktop">
      <h3 className="mb-4 font-headline-lg text-headline-lg text-primary">
        Start Your Next Project
      </h3>
      <p className="mb-8 max-w-lg font-body-md text-body-md text-on-surface-variant">
        Partner with Mecca Furnitures to bring unparalleled craftsmanship and
        modern elegance to your next interior design endeavor.
      </p>
      <Link
        to="/contact"
        className="rounded bg-primary px-8 py-4 font-label-sm text-label-sm text-on-primary transition-colors duration-300 hover:bg-tertiary"
      >
        Contact Our Team
      </Link>
    </section>
  )
}

export default ProjectsCta
