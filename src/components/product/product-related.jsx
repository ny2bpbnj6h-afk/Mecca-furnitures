import { Link } from 'react-router'
import products from '../home/products-data.js'
import ProductCard from '../home/product-card.jsx'

function ProductRelated() {
  return (
    <section className="mt-24">
      <div className="mb-8 flex items-end justify-between gap-6">
        <h2 className="font-headline-lg text-headline-lg text-primary">
          You May Also Like
        </h2>
        <Link
          to="/shop"
          className="border-b border-primary pb-1 font-label-sm text-label-sm uppercase tracking-widest text-primary transition-colors hover:border-secondary hover:text-secondary"
        >
          View All
        </Link>
      </div>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((product) => (
          <ProductCard key={product.name} product={product} />
        ))}
      </div>
    </section>
  )
}

export default ProductRelated
