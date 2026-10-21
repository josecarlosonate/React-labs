import { Minus, Plus, ShoppingCart, Trash2, X } from "lucide-react"
import type { CartItem } from "../type/CartItem"

type CarProps = {
    isCarOpen: boolean
    setIsCarOpen: (value: boolean) => void
    carItems: CartItem[]
    removeItemFromCart: (value: number) => void
    clearCart: () => void
    decreaseQuantity: (value: number) => void
    increaseQuantity: (value: number) => void
}

function Car({
    isCarOpen,
    setIsCarOpen,
    carItems,
    removeItemFromCart,
    clearCart,
    increaseQuantity,
    decreaseQuantity }: CarProps) {

    const isEmpty = () => carItems.length == 0
    const total = () => carItems.reduce((sum, item) => sum + (item.price * item.quantity), 0)

    return (
        <>
            {isCarOpen &&
                (
                    <div className="cart-panel">
                        <button className="close-btn" onClick={() => setIsCarOpen(false)}>
                            <X size={18} />
                        </button>
                        {isEmpty()
                            ? <div className="cart-empty">
                                <div className="cart-empty-icon">
                                    <ShoppingCart size={32} />
                                </div>

                                <h3>Tu carrito está vacío</h3>
                                <p>
                                    Explora nuestros productos y agrega los que más te gusten.
                                </p>
                            </div>
                            : <div>
                                <div className="cart-header">
                                    <h2>Mi carrito</h2>
                                    <div className="cart-header-right">
                                        <span className="products-badge">
                                            {carItems.length} {carItems.length > 1 ? 'Productos' : 'Producto'}
                                        </span>
                                    </div>
                                </div>

                                {/* Lista de Productos */}
                                <div className="cart-items">
                                    {carItems.map((item) => (
                                        <div key={item.id} className="cart-item">
                                            <div className="cart-item-image">
                                                <img src={item.image} alt={item.name} />
                                            </div>
                                            <div className="cart-item-details">
                                                <div className="cart-item-info">
                                                    <p>{item.name}</p>
                                                    <p>{item.price.toLocaleString('es-ES')} COP</p>
                                                </div>
                                                <div className="cart-item-quantity">
                                                    <button onClick={() => decreaseQuantity(item.id)}><Minus size={16} /></button>
                                                    <p>{item.quantity}</p>
                                                    <button onClick={() => increaseQuantity(item.id)}><Plus size={16} /></button>
                                                </div>
                                            </div>
                                            <div>
                                                <button className="cart-item-remove" onClick={() => removeItemFromCart(item.id)}>
                                                    <Trash2 size={18} />
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className="cart-footer">
                                    <span>Total</span>
                                    <p>{total().toLocaleString('es-ES')} COP</p>
                                </div>

                                <div>
                                    <button className="cart-clear-btn" onClick={clearCart}>vaciar carrito</button>
                                </div>
                            </div>
                        }

                    </div>
                )
            }
        </>

    )
}

export default Car