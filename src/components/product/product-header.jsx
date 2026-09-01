import { Link } from 'react-router'

function ProductHeader({ product }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-8 flex flex-wrap items-center gap-2 text-sm">
      <Link to="/" className="font-body-md text-surface-tint transition-colors hover:text-secondary">
        Home
      </Link>
      {product.breadcrumb.map((item) => (
        <span key={item} className="flex items-center gap-2">
          <span className="material-symbols-outlined text-sm text-surface-tint">
            chevron_right
          </span>
          <Link to="/categories" className="font-body-md text-surface-tint transition-colors hover:text-secondary">
            {item}
          </Link>
        </span>
      ))}
      <span className="flex items-center gap-2">
        <span className="material-symbols-outlined text-sm text-surface-tint">
          chevron_right
        </span>
        <span className="font-body-md font-medium text-on-background">
          {product.name}
        </span>
      </span>
    </nav>
  )
}

export default ProductHeader
