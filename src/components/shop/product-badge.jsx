function ProductBadge({ badge }) {
  if (!badge) return null
  const isNew = badge === 'New'
  return (
    <div className="absolute left-3 top-3">
      <span
        className={`px-2 py-1 font-label-sm text-[10px] uppercase tracking-widest ${
          isNew
            ? 'bg-surface/90 text-primary backdrop-blur-sm'
            : 'bg-primary text-on-primary'
        }`}
      >
        {badge}
      </span>
    </div>
  )
}

export default ProductBadge
