import { useState } from 'react'
import Car from './components/Car'
import Header from './components/Header'
import Product from './components/Product'
import products from './data/products.json'

function App() {
  const [isCarOpen, setIsCarOpen] = useState<boolean>(false)

  return (
    <>
      <Header setIsCarOpen={setIsCarOpen} />
      <Car isCarOpen={isCarOpen} setIsCarOpen={setIsCarOpen} />

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
