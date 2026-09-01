import SortSelect from './sort-select.jsx'
import { useShop } from './shop-context.js'

const desktopSortOptions = [
  'Featured',
  'Newest Arrivals',
  'Price: Low to High',
  'Price: High to Low',
  'Best Selling',
]

function DesktopToolbar() {
  const { filteredProducts, sort, setSort } = useShop()

  return (
    <div className="mb-8 hidden items-end justify-between border-b border-surface-variant pb-4 md:flex">
      <span className="font-body-md text-on-surface-variant">
        Showing {filteredProducts.length} item{filteredProducts.length !== 1 ? 's' : ''}
      </span>
      <div className="flex items-center gap-4">
        <span className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant">
          Sort By
        </span>
        <SortSelect
          options={desktopSortOptions}
          value={sort}
          onChange={setSort}
        />
      </div>
    </div>
  )
}

export default DesktopToolbar
