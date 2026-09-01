import { Link } from 'react-router'
import ProductStars from './product-stars.jsx'
import ProductActions from './product-actions.jsx'

function ProductCard({ product }) {
  return (
    <div className="group flex flex-col bg-surface-container-lowest transition-transform duration-300 hover:scale-[1.02]">
      <div className="relative mb-4 aspect-[4/5] overflow-hidden rounded-lg bg-surface-container-low">
        {product.badge && (
          <div className="absolute left-4 top-4 z-10 rounded-full bg-surface-container px-3 py-1 font-label-sm text-label-sm text-on-surface">
            {product.badge}
          </div>
        )}
        <Link to={`/product/${product.id}`}>
          <img
            src={product.image}
            alt={product.alt}
            className="img-hover-scale h-full w-full object-cover"
          />
        </Link>
        <ProductActions product={product} />
      </div>
      <div className="flex flex-col gap-1 px-1">
        <div className="flex items-start justify-between">
          <h3 className="font-body-lg text-body-lg font-medium text-on-background">
            <Link
              to={`/product/${product.id}`}
              className="transition-colors hover:text-secondary"
            >
              {product.name}
            </Link>
          </h3>
          <span className="font-body-lg text-body-lg text-on-background">
            {product.price}
          </span>
        </div>
        <div className="flex items-center gap-1 text-secondary">
          <ProductStars stars={product.stars} halfStar={product.halfStar} />
          <span className="ml-1 font-body-md text-sm text-on-surface-variant">
            ({product.rating})
          </span>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
