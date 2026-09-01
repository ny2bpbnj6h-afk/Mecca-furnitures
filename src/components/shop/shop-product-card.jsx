import { Link } from 'react-router'
import QuickActions from './quick-actions.jsx'
import ColorSwatches from './color-swatches.jsx'
import ProductBadge from './product-badge.jsx'

function ShopProductCard({ product }) {
  return (
    <div className="product-card group relative flex flex-col">
      <div className="relative mb-4 aspect-[4/5] w-full overflow-hidden rounded-sm bg-surface-container-high">
        <Link to={`/product/${product.id}`}>
          <img
            src={product.image}
            alt={product.alt}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </Link>
        <ProductBadge badge={product.badge} />
        <QuickActions productId={product.id} />
      </div>
      <div className="flex flex-1 flex-col px-1">
        <div className="mb-1 flex items-start justify-between">
          <h3 className="font-headline-md text-body-lg leading-tight text-primary">
            <Link
              to={`/product/${product.id}`}
              className="transition-colors hover:text-secondary"
            >
              {product.name}
            </Link>
          </h3>
          <span className="font-body-md font-medium text-on-surface-variant">
            ${product.price.toLocaleString()}
          </span>
        </div>
        <p className="mb-3 mt-1 font-body-md text-sm text-on-surface-variant">
          {product.variant}
        </p>
        {product.colors && <ColorSwatches colors={product.colors} />}
      </div>
    </div>
  )
}

export default ShopProductCard
