import { useSearchParams } from 'react-router'
import ShopHeader from '../../components/shop/shop-header.jsx'
import ShopMain from '../../components/shop/shop-main.jsx'

function Shop() {
  const [searchParams] = useSearchParams()
  const initialCategory = searchParams.get('category') || null

  return (
    <>
      <ShopHeader />
      <ShopMain initialCategory={initialCategory} />
    </>
  )
}

export default Shop
