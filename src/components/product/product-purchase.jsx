import { useState } from 'react'
import { useCart } from '../cart/cart-context.js'
import CartQuantity from '../cart/cart-quantity.jsx'

function ProductPurchase({ product, selectedColor }) {
  const { addItem } = useCart()
  const [quantity, setQuantity] = useState(1)
  const addToCart = () =>
    addItem(
      {
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.images[0],
        alt: product.name,
        color: selectedColor,
      },
      quantity,
    )
  return (
    <>
      <div className="flex items-center justify-between border-t border-outline-variant pt-6">
        <CartQuantity
          value={quantity}
          onChange={(next) => setQuantity(Math.max(1, next))}
        />
        <span className="font-headline-lg text-headline-lg text-primary">
          ${product.price.toLocaleString()}
        </span>
      </div>
      <button
        type="button"
        onClick={addToCart}
        className="w-full rounded bg-primary py-4 font-label-sm text-label-sm uppercase tracking-widest text-on-primary transition-colors duration-300 hover:bg-tertiary"
      >
        Add to Cart
      </button>
    </>
  )
}

export default ProductPurchase
