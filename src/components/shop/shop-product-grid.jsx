import ShopProductCard from './shop-product-card.jsx'
import { useShop } from './shop-context.js'

function ShopProductGrid() {
  const { filteredProducts } = useShop()

  if (filteredProducts.length === 0) {
    return (
      <div className="py-24 text-center">
        <p className="font-headline-lg text-headline-lg text-primary mb-4">
          No products found
        </p>
        <p className="font-body-md text-on-surface-variant">
          Try adjusting your filters to find what you're looking for.
        </p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
      {filteredProducts.map((product) => (
        <ShopProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}

export default ShopProductGrid
