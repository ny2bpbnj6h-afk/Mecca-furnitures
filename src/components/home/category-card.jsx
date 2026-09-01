import { Link } from 'react-router'

function CategoryCard({ category }) {
  return (
    <Link
      to="/shop"
      className={`group relative overflow-hidden rounded-xl shadow-[0_20px_40px_-10px_rgba(115,92,0,0.04)] ${category.cardClass}`}
    >
      <div
        role="img"
        aria-label={category.alt}
        className="img-hover-scale h-full w-full bg-cover bg-center"
        style={{ backgroundImage: `url(${category.image})` }}
      />
      <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent opacity-80" />
      <div className={`absolute bottom-0 left-0 ${category.contentClass}`}>
        <h3 className="mb-2 font-headline-md text-headline-md text-white">
          {category.name}
        </h3>
        {category.explore && (
          <span className="inline-flex items-center font-label-sm text-label-sm uppercase tracking-widest text-white/90 transition-colors group-hover:text-secondary-fixed">
            Explore
            <span className="material-symbols-outlined ml-2 text-sm">
              arrow_forward
            </span>
          </span>
        )}
      </div>
    </Link>
  )
}

export default CategoryCard
