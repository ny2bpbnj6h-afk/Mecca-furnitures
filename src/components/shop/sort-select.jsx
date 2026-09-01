function SortSelect({ options, value, onChange }) {
  return (
    <div className="relative">
      <select
        aria-label="Sort By"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="cursor-pointer appearance-none rounded-none border-b border-outline bg-transparent py-1 pr-8 font-body-md text-primary focus:border-secondary focus:outline-none"
      >
        {options.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </select>
      <span className="material-symbols-outlined pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 text-on-surface-variant">
        arrow_drop_down
      </span>
    </div>
  )
}

export default SortSelect
