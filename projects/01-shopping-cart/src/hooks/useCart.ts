import { useState } from "react"
import type { CartItem } from "../type/CartItem"
import products from '../data/products.json'
import { toast } from "react-toastify"

export function useCart() {

    const initialState = () => {
        const cart = localStorage.getItem('cart')
        return cart ? JSON.parse(cart) : []
    }

    const [carItems, setCarItems] = useState<CartItem[]>(initialState)

    const addItemToCart = (id: number) => {
        // si el item ya existe en cart no lo agrego
        if (carItems.some((item) => item.id === id)) return

        const item = products.find((product) => product.id === id)
        if (!item) return

        const newItem: CartItem = { ...item, quantity: 1 };
        const updatedCart = [...carItems, newItem];
        setCarItems(updatedCart)
        localStorage.setItem('cart', JSON.stringify(updatedCart))
    }

    const removeItemFromCart = (id: number) => {
        const newCartItems = carItems.filter((item) => item.id !== id)
        setCarItems(newCartItems)
        localStorage.setItem('cart', JSON.stringify(newCartItems))
        toast.success('Producto eliminado correctamente')
    }

    const clearCart = () => {
        setCarItems([])
        localStorage.removeItem('cart')
        toast.success('Carrito vaciado correctamente')
    }

    const increaseQuantity = (id: number) => {
        const items = carItems.map((item) => {
            if (item.id === id) {
                return { ...item, quantity: item.quantity + 1 }
            }
            return item
        })
        setCarItems(items)
        localStorage.setItem('cart', JSON.stringify(items))
    }
    const decreaseQuantity = (id: number) => {
        const items = carItems.map((item) => {
            if (item.id === id && item.quantity > 1) {
                return { ...item, quantity: item.quantity - 1 }
            }
            return item
        })
        setCarItems(items)
        localStorage.setItem('cart', JSON.stringify(items))
    }

    return { carItems, addItemToCart, removeItemFromCart, clearCart, increaseQuantity, decreaseQuantity }
}