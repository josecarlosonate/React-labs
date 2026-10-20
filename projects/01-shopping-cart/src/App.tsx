import Car from './components/Car'
import Header from './components/Header'
import Product from './components/Product'

function App() {

  return (
    <>
      <Header />
      <Car />
      <main className="products-grid">
        <Product name='Laptop' precio='2.800.000 cop' img='/products/laptop.webp' />
        <Product name='Audífonos' precio='530.000 cop' img='/products/audifonos.webp' />
        <Product name='Smartphone' precio='1.500.000 cop' img='/products/smartphone.webp' />
        <Product name='Smartwatch' precio='2.800.000 cop' img='/products/smartwatch.webp' />
        <Product name='Teclado' precio='2.800.000 cop' img='/products/teclado.webp' />
      </main>
    </>
  )
}

export default App
