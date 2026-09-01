import { useState } from 'react'

function ProductGallery({ images, alt, selectedColor, colorFilters }) {
  const [active, setActive] = useState(0)
  const filter = colorFilters?.[selectedColor] ?? ''
  return (
    <div className="flex flex-col gap-4">
      <div className="aspect-[4/5] w-full overflow-hidden rounded-lg bg-surface-container-low">
        <img
          src={images[active]}
          alt={alt}
          className="h-full w-full object-cover transition-all duration-500"
          style={filter ? { filter } : undefined}
        />
      </div>
      <div className="flex gap-3">
        {images.map((image, index) => (
          <button
            key={image}
            type="button"
            onClick={() => setActive(index)}
            className={`h-20 w-20 overflow-hidden rounded-md border-2 ${
              index === active ? 'border-primary' : 'border-transparent'
            }`}
          >
            <img
              src={image}
              alt={`${alt} - view ${index + 1}`}
              className="h-full w-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  )
}

export default ProductGallery
