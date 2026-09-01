import { useCart } from './cart-context.js'

function CartRemove({ itemId }) {
  const { removeItem } = useCart()
  return (
    <button
      type="button"
      aria-label="Remove item"
      onClick={() => removeItem(itemId)}
      className="smooth-transition rounded-full p-2 text-outline-variant hover:bg-error-container hover:text-error"
    >
      <span className="material-symbols-outlined">close</span>
    </button>
  )
}

export default CartRemove
