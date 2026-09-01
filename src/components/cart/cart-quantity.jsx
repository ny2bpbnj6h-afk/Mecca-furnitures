function CartQuantity({ value, onChange }) {
  return (
    <div className="flex items-center border-b border-outline-variant pb-1">
      <button
        type="button"
        aria-label="Decrease quantity"
        onClick={() => onChange(value - 1)}
        className="px-2 text-on-surface-variant hover:text-primary"
      >
        <span className="material-symbols-outlined text-sm">remove</span>
      </button>
      <span className="mx-4 font-body-md text-body-md text-primary">{value}</span>
      <button
        type="button"
        aria-label="Increase quantity"
        onClick={() => onChange(value + 1)}
        className="px-2 text-on-surface-variant hover:text-primary"
      >
        <span className="material-symbols-outlined text-sm">add</span>
      </button>
    </div>
  )
}

export default CartQuantity
