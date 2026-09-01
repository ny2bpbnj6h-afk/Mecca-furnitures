import { Link } from 'react-router'
import { useCart } from '../../components/cart/cart-context.js'
import CartHeader from '../../components/cart/cart-header.jsx'
import CartItems from '../../components/cart/cart-items.jsx'
import CartSummary from '../../components/cart/cart-summary.jsx'

function Cart() {
  const { items } = useCart()
  return (
    <div className="mx-auto w-full max-w-container-max px-margin-mobile py-section-gap md:px-margin-desktop">
      <CartHeader />
      {items.length === 0 ? (
        <div className="flex flex-col items-center gap-6 py-16 text-center">
          <p className="font-body-lg text-body-lg text-on-surface-variant">
            Your cart is empty.
          </p>
          <Link
            to="/shop"
            className="rounded bg-primary px-8 py-4 font-label-sm text-label-sm uppercase tracking-widest text-on-primary transition-colors duration-300 hover:bg-tertiary"
          >
            Browse the Collection
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-gutter lg:grid-cols-12">
          <CartItems />
          <CartSummary />
        </div>
      )}
    </div>
  )
}

export default Cart
