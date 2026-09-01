const inputClass =
  'w-full border-b border-outline bg-transparent px-2 py-1 text-body-md transition-colors focus:border-secondary focus:outline-none'

function FilterPrice({ priceRange, onChange }) {
  return (
    <div className="mb-8 border-t border-outline-variant pt-6">
      <h3 className="mb-4 flex cursor-pointer items-center justify-between font-headline-md text-body-lg font-semibold text-primary">
        Price
        <span className="material-symbols-outlined text-[20px]">remove</span>
      </h3>
      <div className="flex items-center gap-2">
        <span className="text-on-surface-variant">$</span>
        <input
          aria-label="Minimum Price"
          type="number"
          placeholder="Min"
          value={priceRange.min}
          onChange={(e) => onChange({ ...priceRange, min: e.target.value })}
          className={inputClass}
        />
        <span className="text-on-surface-variant">-</span>
        <span className="text-on-surface-variant">$</span>
        <input
          aria-label="Maximum Price"
          type="number"
          placeholder="Max"
          value={priceRange.max}
          onChange={(e) => onChange({ ...priceRange, max: e.target.value })}
          className={inputClass}
        />
      </div>
    </div>
  )
}

export default FilterPrice
