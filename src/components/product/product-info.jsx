import ProductStars from '../home/product-stars.jsx'
import ProductFinish from './product-finish.jsx'
import ProductPurchase from './product-purchase.jsx'

function ProductInfo({ product, selectedColor, onColorChange }) {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <p className="mb-2 font-label-sm text-label-sm uppercase tracking-widest text-secondary">
          {product.stock}
        </p>
        <h1 className="mb-3 font-headline-lg text-headline-lg text-primary">
          {product.name}
        </h1>
        <div className="flex items-center gap-2 text-secondary">
          <ProductStars stars={5} halfStar={false} />
          <span className="font-body-md text-on-background">{product.rating}</span>
          <span className="font-body-md text-on-surface-variant">
            ({product.reviewCount} reviews)
          </span>
        </div>
      </div>
      <p className="font-body-lg text-body-lg text-on-surface-variant">
        {product.description}
      </p>
      {product.colors?.length > 0 && (
        <ProductFinish
          colors={product.colors}
          selected={selectedColor}
          onSelect={onColorChange}
        />
      )}
      <ProductPurchase product={product} selectedColor={selectedColor} />
    </div>
  )
}

export default ProductInfo
