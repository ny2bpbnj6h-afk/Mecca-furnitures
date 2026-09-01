import { Link } from 'react-router'

function CategoryCard({ category }) {
  return (
    <Link
      to={`/shop?category=${encodeURIComponent(category.name)}`}
      className="group relative block aspect-[4/5] overflow-hidden rounded-xl bg-surface-container-low"
    >
      <img
        src={category.image}
        alt={category.alt}
        loading="lazy"
        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-linear-to-t from-primary/70 via-primary/10 to-transparent" />
      <div className="absolute bottom-0 left-0 flex w-full flex-col gap-1 p-6">
        <h3 className="font-headline-md text-headline-md text-on-primary">
          {category.name}
        </h3>
        <span className="inline-flex items-center gap-1 font-label-sm text-label-sm uppercase tracking-widest text-on-primary/80 transition-colors group-hover:text-secondary-fixed">
          {category.count} items
          <span className="material-symbols-outlined text-sm transition-transform group-hover:translate-x-1">
            arrow_forward
          </span>
        </span>
      </div>
    </Link>
  )
}

export default CategoryCard
