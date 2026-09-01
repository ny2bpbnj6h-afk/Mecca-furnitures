import ShopContext from './shop-context.js'
import { useShopFilters } from './use-shop-filters.js'

export function ShopProvider({ children, products, initialCategory }) {
  const value = useShopFilters(products, initialCategory)

  return (
    <ShopContext.Provider value={value}>{children}</ShopContext.Provider>
  )
}
