function ImageCard({ image, alt, overlayClass, contentClass, className = '', children }) {
  return (
    <div
      className={`group relative min-h-[300px] overflow-hidden bg-surface md:min-h-0 ${className}`}
    >
      <img
        src={image}
        alt={alt}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div className={`absolute inset-0 ${overlayClass}`} />
      <div className={`absolute ${contentClass}`}>{children}</div>
    </div>
  )
}

export default ImageCard
