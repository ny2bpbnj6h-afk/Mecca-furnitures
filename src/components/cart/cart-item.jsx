import { useCart } from './cart-context.js'
import CartQuantity from './cart-quantity.jsx'
import CartRemove from './cart-remove.jsx'

function CartItem({ item }) {
  const { updateQuantity } = useCart()
  return (
    <div className="group smooth-transition relative flex flex-col gap-6 rounded-lg bg-surface-container-lowest p-6 shadow-[0_4px_40px_rgba(23,22,21,0.04)] hover:scale-[1.01] sm:flex-row">
      <div className="relative h-48 w-full shrink-0 overflow-hidden rounded bg-surface-container sm:w-48">
        <img
          src={item.image}
          alt={item.alt}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
      </div>
      <div className="flex flex-grow flex-col justify-between">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="mb-1 font-headline-md text-headline-md text-primary">
              {item.name}
            </h3>
            <p className="mb-2 font-body-md text-body-md text-on-surface-variant">
              {item.variant}
            </p>
            <p
              className={`font-label-sm text-label-sm uppercase tracking-widest ${
                item.inStock ? 'text-secondary' : 'text-outline'
              }`}
            >
              {item.status}
            </p>
          </div>
          <CartRemove itemId={item.id} />
        </div>
        <div className="mt-4 flex items-end justify-between">
          <CartQuantity
            value={item.quantity}
            onChange={(quantity) => updateQuantity(item.id, quantity)}
          />
        </div>
      </div>
    </div>
  )
}

export default CartItem
