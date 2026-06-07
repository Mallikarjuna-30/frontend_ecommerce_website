import { createContext, useState, useContext, useEffect } from 'react'
export const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    const addtoCart = (product) => {
        setCart((cart) => [...cart, product])
    }
    const removetoCart = (id) => {
        setCart((cart) => cart.filter((item) => item.id !== id))
    }

    return (
        <CartContext.Provider value={{ cart, addtoCart, removetoCart }}>
            {children}
        </CartContext.Provider>
    )
}

export { CartProvider }