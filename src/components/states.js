import { useState } from 'react';

function Cart({ cart, updateCart}) {
    const monsteraPrice = 8
    const [isOpen, setIsOpen] = useState(false)

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
                <h3>Total: {monsteraPrice * cart}€</h3>
            </div>
) : (
        <button onClick={() => setIsOpen(true)}>Open Cart</button>
    )
}

export {Cart};