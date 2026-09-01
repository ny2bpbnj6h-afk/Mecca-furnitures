import { useState } from 'react'
import { useCart } from '../cart/cart-context.js'

function ProductActions({ product }) {
  const { addItem } = useCart()
  const [liked, setLiked] = useState(false)
  const addToCart = () =>
    addItem({
      id: product.name,
      name: product.name,
      price: parseFloat(product.price.replace(/[$,]/g, '')),
      image: product.image,
      alt: product.alt,
    })
  return (
    <>
      <button
        type="button"
        onClick={() => setLiked(!liked)}
        aria-label={liked ? `Remove ${product.name} from favorites` : `Add ${product.name} to favorites`}
        className={`absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full shadow-sm backdrop-blur transition-colors ${liked ? 'bg-primary text-on-primary' : 'bg-surface-container-lowest/80 text-on-surface hover:bg-surface-container-lowest hover:text-secondary'}`}
      >
        <span className={`material-symbols-outlined text-[20px] ${liked ? 'filled-icon' : ''}`}>{liked ? 'favorite' : 'favorite_border'}</span>
      </button>
      <div className="absolute bottom-4 left-4 right-4 translate-y-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
        <button
          type="button"
          onClick={addToCart}
          className="w-full rounded bg-primary py-3 font-label-sm text-label-sm uppercase tracking-widest text-on-primary hover:bg-tertiary"
        >
          Add to Cart
        </button>
      </div>
    </>
  )
}

export default ProductActions
