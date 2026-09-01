import FilterCheckboxList from './filter-checkbox-list.jsx'
import FilterPrice from './filter-price.jsx'
import { useShop } from './shop-context.js'

function ShopFilters() {
  const {
    allCategories,
    allMaterials,
    selectedCategories,
    selectedMaterials,
    priceRange,
    toggleCategory,
    toggleMaterial,
    setPriceRange,
  } = useShop()

  return (
    <aside className="no-scrollbar sticky top-32 hidden max-h-[calc(100vh-120px)] w-64 flex-shrink-0 self-start overflow-y-auto pb-12 pr-4 md:block">
      <h2 className="mb-8 border-b border-outline-variant pb-2 font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant">
        Refine By
      </h2>
      <FilterCheckboxList
        title="Category"
        items={allCategories}
        selected={selectedCategories}
        onToggle={toggleCategory}
      />
      <FilterPrice
        priceRange={priceRange}
        onChange={setPriceRange}
      />
      <FilterCheckboxList
        title="Material"
        items={allMaterials}
        selected={selectedMaterials}
        onToggle={toggleMaterial}
      />
      <button
        type="button"
        className="w-full border border-primary py-3 font-label-sm text-label-sm uppercase tracking-widest text-primary transition-colors duration-300 hover:bg-primary hover:text-on-primary"
      >
        Apply Filters
      </button>
    </aside>
  )
}

export default ShopFilters
