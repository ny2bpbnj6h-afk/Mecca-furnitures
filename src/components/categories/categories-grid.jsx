import categories from './categories-data.js'
import CategoryCard from './category-card.jsx'

function CategoriesGrid() {
  return (
    <section className="mx-auto grid max-w-container-max grid-cols-1 gap-gutter px-margin-mobile py-section-gap sm:grid-cols-2 md:px-margin-desktop lg:grid-cols-3">
      {categories.map((category) => (
        <CategoryCard key={category.name} category={category} />
      ))}
    </section>
  )
}

export default CategoriesGrid
