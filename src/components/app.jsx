import { Route, Routes } from 'react-router'
import Header from './layout/header.jsx'
import Footer from './layout/footer.jsx'
import Home from '../pages/home/home.jsx'
import Shop from '../pages/shop/shop.jsx'
import Categories from '../pages/categories/categories.jsx'
import About from '../pages/about/about.jsx'
import Projects from '../pages/projects/projects.jsx'
import Contact from '../pages/contact/contact.jsx'
import Terms from '../pages/terms/terms.jsx'
import Privacy from '../pages/privacy/privacy.jsx'
import Cart from '../pages/cart/cart.jsx'
import Product from '../pages/product/product.jsx'
import BrandStory from '../pages/brand-story/brand-story.jsx'

function App() {
  return (
    <>
      <Header />
      <main className="w-full flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/brand-story" element={<BrandStory />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
