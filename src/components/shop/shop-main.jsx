import MobileFilterBar from './mobile-filter-bar.jsx'
import ShopFilters from './shop-filters.jsx'
import DesktopToolbar from './desktop-toolbar.jsx'
import ShopProductGrid from './shop-product-grid.jsx'
import { ShopProvider } from './shop-provider.jsx'
import shopProducts from './shop-products-data.js'

function ShopMain({ initialCategory }) {
  return (
    <ShopProvider products={shopProducts} initialCategory={initialCategory}>
      <div className="mx-auto flex w-full max-w-container-max flex-col gap-8 px-margin-mobile py-12 md:flex-row md:px-margin-desktop lg:gap-16">
        <MobileFilterBar />
        <ShopFilters />
        <div className="w-full flex-1">
          <DesktopToolbar />
          <ShopProductGrid />
        </div>
      </div>
    </ShopProvider>
  )
}

export default ShopMain
