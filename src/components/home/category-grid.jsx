import categories from './categories-data.js'
import CategoryCard from './category-card.jsx'

function CategoryGrid() {
  return (
    <section className="mx-auto max-w-container-max px-margin-mobile py-section-gap md:px-margin-desktop">
      <div className="mb-16 text-center">
        <h2 className="mb-4 font-headline-lg text-headline-lg text-on-background">
          Shop by Category
        </h2>
        <p className="mx-auto max-w-2xl font-body-md text-body-md text-on-surface-variant">
          Explore our range of meticulously crafted pieces for every room.
        </p>
      </div>

      <div className="grid auto-rows-[250px] grid-cols-1 gap-gutter md:auto-rows-[300px] md:grid-cols-4">
        {categories.map((category) => (
          <CategoryCard key={category.name} category={category} />
        ))}
      </div>
    </section>
  )
}

export default CategoryGrid
