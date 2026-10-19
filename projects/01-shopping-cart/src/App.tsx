import Header from './components/Header'
import Product from './components/Product'

function App() {

  return (
    <>
      <Header />
      <Product name='Laptop' precio='2.800.000 cop' img='/products/laptop.webp' />
      <Product name='Audífonos' precio='2.800.000 cop' img='/products/audifonos.webp' />
      <Product name='Audífonos' precio='2.800.000 cop' img='/products/smartphone.webp' />
      <Product name='Audífonos' precio='2.800.000 cop' img='/products/smartwatch.webp' />
      <Product name='Audífonos' precio='2.800.000 cop' img='/products/teclado.webp' />
    </>
  )
}

export default App
