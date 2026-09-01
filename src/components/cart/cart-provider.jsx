import { useMemo, useState } from 'react'
import { CartContext } from './cart-context.js'
import initialItems from './cart-data.js'

function CartProvider({ children }) {
  const [items, setItems] = useState(initialItems)

  const value = useMemo(() => {
    const addItem = (product, quantity = 1) => {
      setItems((current) => {
        const existing = current.find((item) => item.id === product.id)
        if (existing) {
          return current.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + quantity }
              : item,
          )
        }
        return [...current, { ...product, quantity }]
      })
    }

    const removeItem = (id) => {
      setItems((current) => current.filter((item) => item.id !== id))
    }

    const updateQuantity = (id, quantity) => {
      if (quantity < 1) return
      setItems((current) =>
        current.map((item) =>
          item.id === id ? { ...item, quantity } : item,
        ),
      )
    }

    const clearCart = () => setItems([])

    const itemCount = items.reduce((sum, item) => sum + item.quantity, 0)
    const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0)

    return { items, addItem, removeItem, updateQuantity, clearCart, itemCount, total }
  }, [items])

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export default CartProvider
