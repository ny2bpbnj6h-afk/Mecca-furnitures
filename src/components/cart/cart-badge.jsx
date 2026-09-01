import { useCart } from './cart-context.js'

function CartBadge() {
  const { itemCount } = useCart()
  if (itemCount === 0) return null
  return (
    <span className="absolute -right-2 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-secondary font-bold text-[10px] text-on-secondary">
      {itemCount}
    </span>
  )
}

export default CartBadge
