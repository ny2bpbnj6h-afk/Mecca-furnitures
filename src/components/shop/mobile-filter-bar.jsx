import SortSelect from './sort-select.jsx'
import { useShop } from './shop-context.js'

const mobileSortOptions = [
  'Featured',
  'Newest Arrivals',
  'Price: Low to High',
  'Price: High to Low',
]

function MobileFilterBar() {
  const { sort, setSort } = useShop()

  return (
    <div className="mb-4 flex w-full items-center justify-between border-b border-surface-variant pb-4 md:hidden">
      <button
        type="button"
        aria-label="Filter"
        className="flex items-center gap-2 rounded-sm border border-outline px-4 py-2 font-label-sm text-label-sm uppercase tracking-widest text-primary"
      >
        <span className="material-symbols-outlined text-[18px]">tune</span>
        Filters
      </button>
      <SortSelect
        options={mobileSortOptions}
        value={sort}
        onChange={setSort}
      />
    </div>
  )
}

export default MobileFilterBar
