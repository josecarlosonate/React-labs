type HeaderProps = {
    setIsCarOpen: (value: boolean) => void
}

function Header({ setIsCarOpen }: HeaderProps) {
    return (
        <header className="header">
            <div className="header__container">

                <a href="/" className="header__logo">
                    Shopping <span>Cart</span>
                </a>

                <button type="button" className="header__cart" onClick={() => setIsCarOpen(true)}>
                    <svg className="header__cart-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                        strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <circle cx="9" cy="21" r="1" />
                        <circle cx="20" cy="21" r="1" />
                        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                    </svg>
                    <span className="header__cart-text">Mi carrito</span>
                </button>

            </div>
        </header>
    );
}

export default Header