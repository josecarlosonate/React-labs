type ProductProps = {
    name: string
    precio: string
    img: string
}

function Product({ name, precio, img }: ProductProps) {
    return (
        <div className="product-card">
            <div>
                <img className="product-card__image" src={img} alt={name} />
                <div className="product-card__content">
                    <div>
                        <h3 className="product-card__name">{name}</h3>
                        <p className="product-card__price">{precio}</p>
                    </div>
                    <button type="button" className="product-card__button">Añadir al carrito</button>
                </div>
            </div>
        </div>
    );
}

export default Product