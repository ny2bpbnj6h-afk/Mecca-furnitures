function ProductStars({ stars, halfStar }) {
  return (
    <>
      {Array.from({ length: 5 }, (_, i) => {
        if (i < stars) {
          return (
            <span key={i} className="material-symbols-outlined filled-icon text-[16px]">
              star
            </span>
          )
        }
        if (halfStar && i === stars) {
          return (
            <span key={i} className="material-symbols-outlined text-[16px]">
              star_half
            </span>
          )
        }
        return (
          <span key={i} className="material-symbols-outlined text-[16px]">
            star
          </span>
        )
      })}
    </>
  )
}

export default ProductStars
