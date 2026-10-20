import { useState } from 'react'
import Car from './components/Car'
import Header from './components/Header'
import Product from './components/Product'
import products from './data/products.json'
import type { Products } from './type/Products'
import { ToastContainer, toast } from 'react-toastify';

function App() {
  const [isCarOpen, setIsCarOpen] = useState<boolean>(false)
  const [carItems, setCarItems] = useState<Products[]>(() => {
    const cart = localStorage.getItem('cart')
    if (!cart) return []
    return JSON.parse(cart)
  })

  const addItemToCart = (id: number) => {
    // si el item ya existe en cart no lo agrego
    if (carItems.some((item) => item.id === id)) return

    const item = products.find((product) => product.id === id)
    if (!item) return

    const newItem = [...carItems, item]
    setCarItems(newItem)
    localStorage.setItem('cart', JSON.stringify(newItem))
  }

  const removeItemFromCart = (id: number) => {
    const newCartItems = carItems.filter((item) => item.id !== id)
    setCarItems(newCartItems)
    localStorage.setItem('cart', JSON.stringify(newCartItems))
    toast.success('Producto eliminado correctamente')
  }

  const clearCart = () => {
    console.log('vaciar carrito')
  }

  return (
    <>
      <ToastContainer position="top-right" autoClose={2000} />
      <Header setIsCarOpen={setIsCarOpen} />
      <Car
        isCarOpen={isCarOpen}
        setIsCarOpen={setIsCarOpen}
        carItems={carItems}
        removeItemFromCart={removeItemFromCart}
        clearCart={clearCart} />

      <main className="products-grid">
        {products.map((product) => <Product key={product.id} product={product} addItemToCart={addItemToCart} />)}
      </main>

    </>
  )
}

export default App
