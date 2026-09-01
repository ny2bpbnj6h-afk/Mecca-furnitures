import { createContext, useContext } from 'react'

const ShopContext = createContext(null)

export function useShop() {
  const ctx = useContext(ShopContext)
  if (!ctx) throw new Error('useShop must be used within ShopProvider')
  return ctx
}

export default ShopContext
