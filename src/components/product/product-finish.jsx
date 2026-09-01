function ProductFinish({ colors, selected, onSelect }) {
  return (
    <div className="border-t border-outline-variant pt-6">
      <h3 className="mb-3 font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant">
        Finish
      </h3>
      <div className="flex gap-3">
        {colors.map((color) => (
          <button
            key={color}
            type="button"
            onClick={() => onSelect(color)}
            aria-label={`Select finish ${color}`}
            className={`h-8 w-8 rounded-full border-2 transition-all duration-200 ${
              selected === color
                ? 'border-primary ring-2 ring-primary ring-offset-2'
                : 'border-outline-variant hover:border-primary/50'
            }`}
            style={{ backgroundColor: color }}
          />
        ))}
      </div>
    </div>
  )
}

export default ProductFinish
