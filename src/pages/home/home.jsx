import Hero from '../../components/home/hero.jsx'
import CategoryGrid from '../../components/home/category-grid.jsx'
import FeaturedCollection from '../../components/home/featured-collection.jsx'
import Editorial from '../../components/home/editorial.jsx'
import Newsletter from '../../components/home/newsletter.jsx'

function Home() {
  return (
    <>
      <Hero />
      <CategoryGrid />
      <FeaturedCollection />
      <Editorial />
      <Newsletter />
    </>
  )
}

export default Home
