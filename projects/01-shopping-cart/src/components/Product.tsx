type ProductProps = {
    name: string
    precio: string
    img: string
}

function Product({ name, precio, img }: ProductProps) {
    return (
        <div>
            <div>
                <img src={img} alt={img} />
                <div>
                    <div>
                        <p>{name}</p>
                        <p>{precio}</p>
                    </div>
                    <button>Añadir al carrito</button>
                </div>
            </div>
        </div>
    );
}

export default Product