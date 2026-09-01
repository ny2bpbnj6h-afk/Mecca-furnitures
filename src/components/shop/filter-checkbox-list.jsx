function FilterCheckboxList({ title, items, selected, onToggle }) {
  return (
    <div className="mb-8">
      <h3 className="mb-4 font-headline-md text-body-lg font-semibold text-primary">
        {title}
      </h3>
      <ul className="space-y-3 font-body-md text-on-surface-variant">
        {items.map((label) => (
          <li key={label}>
            <label className="group flex cursor-pointer items-center gap-3">
              <input
                type="checkbox"
                checked={selected.includes(label)}
                onChange={() => onToggle(label)}
                className="custom-checkbox"
              />
              <span className="transition-colors group-hover:text-primary">
                {label}
              </span>
            </label>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default FilterCheckboxList
