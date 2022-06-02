import { useState, useEffect } from 'react';

function Cart({ cart, updateCart}) {
    const monsteraPrice = 8
    const [isOpen, setIsOpen] = useState(false)
    let total = monsteraPrice * cart
    useEffect(() => {
        document.title = `JH: ${total}€ Purchases`
    }, [total])

    return isOpen ? (
        <div className="jhjh">
            <button onClick={() => setIsOpen(false)}>Close</button>
            <h2>Cart</h2>
            <div>
                Monstera: {monsteraPrice}€
                <button onClick={() => updateCart(cart + 1)}>
                    Add
                </button>
                </div>
                <h3>Total: {total}€</h3>
            </div>
) : (
        <button onClick={() => setIsOpen(true)}>Open Cart</button>
    )
}

export {Cart};