import { Minus, Plus, ShoppingCart, Trash2, X } from "lucide-react"

type CarProps = {
    isCarOpen: boolean
    setIsCarOpen: (value: boolean) => void
}

function Car({ isCarOpen, setIsCarOpen }: CarProps) {
    return (
        <>
            {isCarOpen &&
                (
                    <div className="cart-panel">
                        <button className="close-btn" onClick={() => setIsCarOpen(false)}>
                            <X size={18} />
                        </button>

                        {/* Carro sin productos agregados */}
                        <div className="cart-empty">
                            <div className="cart-empty-icon">
                                <ShoppingCart size={32} />
                            </div>

                            <h3>Tu carrito está vacío</h3>
                            <p>
                                Explora nuestros productos y agrega los que más te gusten.
                            </p>
                        </div>

                        <div className="cart-header">
                            <h2>Mi carrito</h2>
                            <div className="cart-header-right">
                                <span className="products-badge">3 productos</span>
                            </div>
                        </div>

                        {/* Lista de Productos */}
                        <div className="cart-items">
                            <div className="cart-item">
                                <div className="cart-item-image">
                                    <img src="" alt="" />
                                </div>
                                <div className="cart-item-details">
                                    <div className="cart-item-info">
                                        <p>Laptop</p>
                                        <p>2.800.000 COP</p>
                                    </div>
                                    <div className="cart-item-quantity">
                                        <button><Minus size={16} /></button>
                                        <p>1</p>
                                        <button><Plus size={16} /></button>
                                    </div>
                                </div>
                                <div>
                                    <button className="cart-item-remove">
                                        <Trash2 size={18} />
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="cart-footer">
                            <span>Total</span>
                            <p>3.860.000 COP</p>
                        </div>

                        <div>
                            <button className="cart-clear-btn">vaciar carrito</button>
                        </div>
                    </div>
                )
            }
        </>

    )
}

export default Car