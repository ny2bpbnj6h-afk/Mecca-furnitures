import { useCart } from './cart-context.js'
import CartItem from './cart-item.jsx'

function CartItems() {
  const { items } = useCart()
  return (
    <div className="flex flex-col gap-8 lg:col-span-8">
      {items.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
    </div>
  )
}

export default CartItems
