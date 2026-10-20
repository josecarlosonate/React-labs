import { useState } from 'react'
import Car from './components/Car'
import Header from './components/Header'
import Product from './components/Product'

function App() {
  const [isCarOpen, setIsCarOpen] = useState<boolean>(false)

  return (
    <>
      <Header setIsCarOpen={setIsCarOpen} />
      <Car isCarOpen={isCarOpen} setIsCarOpen={setIsCarOpen} />
      <main className="products-grid">
        <Product name='Laptop' precio='2.800.000 cop' img='/products/laptop.webp' />
        <Product name='Audífonos' precio='530.000 cop' img='/products/audifonos.webp' />
        <Product name='Smartphone' precio='1.500.000 cop' img='/products/smartphone.webp' />
        <Product name='Smartwatch' precio='2.800.000 cop' img='/products/smartwatch.webp' />
        <Product name='Teclado' precio='800.000 cop' img='/products/teclado.webp' />
      </main>
    </>
  )
}

export default App
