import type { Products } from "../type/Products"

type ProductProps = {
    product: Products
    addItemToCart: (value: number) => void
}

function Product({ product, addItemToCart }: ProductProps) {
    const { id, name, price, image } = product

    return (
        <div className="product-card">
            <div>
                <img className="product-card__image" src={image} alt={name} />
                <div className="product-card__content">
                    <div>
                        <h3 className="product-card__name">{name}</h3>
                        <p className="product-card__price">{price}</p>
                    </div>
                    <button type="button" className="product-card__button" onClick={() => addItemToCart(id)}>
                        Añadir al carrito
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Product