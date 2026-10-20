import { useState } from 'react'
import Car from './components/Car'
import Header from './components/Header'
import Product from './components/Product'
import products from './data/products.json'
import type { Products } from './type/Products'

function App() {
  const [isCarOpen, setIsCarOpen] = useState<boolean>(false)
  const [carItems, setCarItems] = useState<Products[]>([])

  const addItemToCart = (id: number) => {
    // si el item ya existe en cart no lo agrego
    if (carItems.some((item) => item.id === id)) return

    const item = products.find((product) => product.id === id)
    if (!item) return
    const newItem = [...carItems, item]
    setCarItems(newItem)
  }

  return (
    <>
      <Header setIsCarOpen={setIsCarOpen} />
      <Car isCarOpen={isCarOpen} setIsCarOpen={setIsCarOpen} carItems={carItems} />

      <main className="products-grid">
        {products.map((product) => <Product key={product.id} product={product} addItemToCart={addItemToCart} />)}
      </main>

    </>
  )
}

export default App
