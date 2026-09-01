import { Link } from 'react-router'
import CartBadge from '../cart/cart-badge.jsx'

const iconButtonClass =
  'text-primary transition-all duration-300 hover:scale-105 hover:text-secondary active:scale-95'

function HeaderActions() {
  return (
    <div className="flex items-center gap-4">
      <Link to="/cart" aria-label="Wishlist" className={iconButtonClass}>
        <span className="material-symbols-outlined">favorite</span>
      </Link>
      <Link to="/contact" aria-label="Account" className={iconButtonClass}>
        <span className="material-symbols-outlined">person</span>
      </Link>
      <Link
        to="/cart"
        aria-label="Shopping cart"
        className={`relative ${iconButtonClass}`}
      >
        <span className="material-symbols-outlined">shopping_cart</span>
        <CartBadge />
      </Link>
    </div>
  )
}

export default HeaderActions
