import { useState } from 'react'
import Car from './components/Car'
import Header from './components/Header'
import { ToastContainer } from 'react-toastify';
import Product from './components/Product';
import products from './data/products.json'
import { useCart } from './hooks/useCart';

function App() {
  const [isCarOpen, setIsCarOpen] = useState<boolean>(false)
  const { carItems, addItemToCart, removeItemFromCart, clearCart, increaseQuantity, decreaseQuantity } = useCart()

  return (
    <>
      <ToastContainer position="top-right" autoClose={2000} />
      <Header setIsCarOpen={setIsCarOpen} />
      <Car
        isCarOpen={isCarOpen}
        setIsCarOpen={setIsCarOpen}
        carItems={carItems}
        removeItemFromCart={removeItemFromCart}
        clearCart={clearCart}
        increaseQuantity={increaseQuantity}
        decreaseQuantity={decreaseQuantity} />

      <main className="products-grid">
        {products.map((product) => <Product key={product.id} product={product} addItemToCart={addItemToCart} />)}
      </main>

    </>
  )
}

export default App
