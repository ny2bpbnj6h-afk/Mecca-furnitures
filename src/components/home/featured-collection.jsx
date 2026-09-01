import { Link } from 'react-router'
import products from './products-data.js'
import ProductCard from './product-card.jsx'

function FeaturedCollection() {
  return (
    <section className="bg-surface-container-lowest py-section-gap">
      <div className="mx-auto max-w-container-max px-margin-mobile md:px-margin-desktop">
        <div className="mb-12 flex flex-col items-end justify-between gap-6 md:flex-row">
          <div>
            <h2 className="mb-4 font-headline-lg text-headline-lg text-on-background">
              Featured Collection
            </h2>
            <p className="max-w-xl font-body-md text-body-md text-on-surface-variant">
              Curated pieces that define modern elegance.
            </p>
          </div>
          <Link
            to="/shop"
            className="inline-flex items-center border-b border-primary pb-1 font-label-sm text-label-sm uppercase tracking-widest text-primary transition-colors hover:border-secondary hover:text-secondary"
          >
            View All
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.name} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturedCollection
