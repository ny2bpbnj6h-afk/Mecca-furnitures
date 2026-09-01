import { Link } from 'react-router'

function CategoriesHeader() {
  return (
    <section className="relative w-full overflow-hidden border-b border-surface-variant bg-surface-container-low">
      <div className="relative z-10 mx-auto max-w-container-max px-margin-mobile py-16 md:px-margin-desktop md:py-24">
        <nav aria-label="Breadcrumb" className="mb-4 text-sm">
          <ol className="inline-flex items-center space-x-1 font-label-sm text-on-surface-variant md:space-x-3">
            <li className="inline-flex items-center">
              <Link to="/" className="transition-colors hover:text-primary">
                Home
              </Link>
            </li>
            <li>
              <div className="flex items-center">
                <span className="material-symbols-outlined mx-1 text-[16px]">
                  chevron_right
                </span>
                <span className="font-semibold text-primary">Categories</span>
              </div>
            </li>
          </ol>
        </nav>
        <h1 className="mb-4 font-display-lg-mobile text-display-lg-mobile text-primary md:font-display-lg md:text-display-lg">
          Shop by Category
        </h1>
        <p className="max-w-2xl font-body-lg text-body-lg text-on-surface-variant">
          Browse our collections by room and style, from statement seating to
          sculptural lighting, and find the pieces that anchor your home.
        </p>
      </div>
    </section>
  )
}

export default CategoriesHeader
