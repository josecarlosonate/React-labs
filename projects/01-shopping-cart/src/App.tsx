import { useState } from 'react'
import Car from './components/Car'
import Header from './components/Header'
import Product from './components/Product'
import products from './data/products.json'
import type { Products } from './type/Products'

function App() {
  const [isCarOpen, setIsCarOpen] = useState<boolean>(false)
  const [carItems, setCarItems] = useState<Products[]>([])

  return (
    <>
      <Header setIsCarOpen={setIsCarOpen} />
      <Car isCarOpen={isCarOpen} setIsCarOpen={setIsCarOpen} carItems={carItems} />

      <main className="products-grid">
        {products.map((product) => (
          <Product
            key={product.id}
            name={product.name}
            precio={product.price}
            img={product.image}
            id={product.id} />
        ))}
      </main>

    </>
  )
}

export default App
