import { useState } from 'react'
import { Link, useParams } from 'react-router'
import productDetails from '../../components/product/product-data.js'
import ProductHeader from '../../components/product/product-header.jsx'
import ProductGallery from '../../components/product/product-gallery.jsx'
import ProductInfo from '../../components/product/product-info.jsx'
import ProductDetails from '../../components/product/product-details.jsx'
import ProductRelated from '../../components/product/product-related.jsx'

function Product() {
  const { id } = useParams()
  const product = productDetails[id]
  const [selectedColor, setSelectedColor] = useState(product?.colors?.[0] ?? null)
  if (!product) {
    return (
      <div className="flex flex-col items-center gap-6 py-24 text-center">
        <p className="font-body-lg text-body-lg text-on-surface-variant">
          Product not found.
        </p>
        <Link
          to="/shop"
          className="rounded bg-primary px-8 py-4 font-label-sm text-label-sm uppercase tracking-widest text-on-primary transition-colors duration-300 hover:bg-tertiary"
        >
          Back to Shop
        </Link>
      </div>
    )
  }
  return (
    <div className="mx-auto w-full max-w-container-max px-margin-mobile py-12 md:px-margin-desktop md:py-16">
      <ProductHeader product={product} />
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
        <ProductGallery images={product.images} alt={product.name} selectedColor={selectedColor} colorFilters={product.colorFilters} />
        <ProductInfo product={product} selectedColor={selectedColor} onColorChange={setSelectedColor} />
      </div>
      <ProductDetails product={product} />
      <ProductRelated />
    </div>
  )
}

export default Product
