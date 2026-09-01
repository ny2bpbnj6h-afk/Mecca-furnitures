import { useState } from 'react'
import { Link } from 'react-router'

function QuickActions({ productId }) {
  const [liked, setLiked] = useState(false)

  return (
    <div className="quick-action absolute bottom-4 left-0 z-10 flex w-full justify-center gap-2 px-4">
      <Link
        to={`/product/${productId}`}
        className="flex-1 bg-surface/90 py-3 text-center font-label-sm text-label-sm uppercase tracking-widest text-primary shadow-sm backdrop-blur-md transition-colors hover:bg-primary hover:text-on-primary"
      >
        Quick View
      </Link>
      <button
        type="button"
        onClick={() => setLiked(!liked)}
        aria-label={liked ? 'Remove from Wishlist' : 'Add to Wishlist'}
        className={`flex items-center justify-center p-3 shadow-sm backdrop-blur-md transition-colors ${liked ? 'bg-primary text-on-primary' : 'bg-surface/90 text-primary hover:bg-primary hover:text-on-primary'}`}
      >
        <span className={`material-symbols-outlined text-[20px] ${liked ? 'filled-icon' : ''}`}>
          {liked ? 'favorite' : 'favorite_border'}
        </span>
      </button>
    </div>
  )
}

export default QuickActions
