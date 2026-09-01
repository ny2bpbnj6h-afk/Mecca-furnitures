import { useState, useMemo, useCallback } from 'react'

export function useShopFilters(products, initialCategory) {
  const [selectedCategories, setSelectedCategories] = useState(
    initialCategory ? [initialCategory] : [],
  )
  const [selectedMaterials, setSelectedMaterials] = useState([])
  const [priceRange, setPriceRange] = useState({ min: '', max: '' })
  const [sort, setSort] = useState('Featured')

  const toggleCategory = useCallback((label) => {
    setSelectedCategories((prev) =>
      prev.includes(label) ? prev.filter((c) => c !== label) : [...prev, label],
    )
  }, [])

  const toggleMaterial = useCallback((label) => {
    setSelectedMaterials((prev) =>
      prev.includes(label)
        ? prev.filter((m) => m !== label)
        : [...prev, label],
    )
  }, [])

  const filteredProducts = useMemo(() => {
    let result = [...products]
    if (selectedCategories.length > 0)
      result = result.filter((p) => selectedCategories.includes(p.category))
    if (selectedMaterials.length > 0)
      result = result.filter((p) => selectedMaterials.includes(p.material))
    const min = priceRange.min !== '' ? Number(priceRange.min) : 0
    const max = priceRange.max !== '' ? Number(priceRange.max) : Infinity
    if (priceRange.min !== '' || priceRange.max !== '')
      result = result.filter((p) => p.price >= min && p.price <= max)
    if (sort === 'Price: Low to High') result.sort((a, b) => a.price - b.price)
    else if (sort === 'Price: High to Low')
      result.sort((a, b) => b.price - a.price)
    return result
  }, [products, selectedCategories, selectedMaterials, priceRange, sort])

  const allCategories = useMemo(
    () => [...new Set(products.map((p) => p.category))],
    [products],
  )

  const allMaterials = useMemo(
    () => [...new Set(products.map((p) => p.material))],
    [products],
  )

  return {
    filteredProducts,
    allCategories,
    allMaterials,
    selectedCategories,
    selectedMaterials,
    priceRange,
    sort,
    toggleCategory,
    toggleMaterial,
    setPriceRange,
    setSort,
  }
}
