import { createContext, useState, useContext, useEffect } from 'react'
export const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    const addtoCart = (product) => {
        setCart((prevCart) => {
            const existingItem = prevCart.find(
                (item) => item.id === product.id && item.size === product.size
            )
            if (existingItem) {
                return prevCart.map((item) => item.id === product.id && item.size === product.size ? { ...item, quantity: item.quantity + 1 } : item)
            } else {
                return [...prevCart, { ...product, quantity: 1 }]
            }
        })
    }
    const removetoCart = (id) => {
        setCart((cart) => cart.filter((item) => item.id !== id))
    }
    const increaseQuantity = (id, size) => {
        setCart((prevCart) =>
            prevCart.map((item) =>
                item.id === id && item.size === size
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            )
        );
    };

    const decreaseQuantity = (id, size) => {
        setCart((prevCart) =>
            prevCart.map((item) =>
                item.id === id && item.size === size
                    ? {
                        ...item,
                        quantity: item.quantity - 1
                    }
                    : item
            )
                .filter((item) => item.quantity > 0)
        );
    };

    return (
        <CartContext.Provider value={{ cart, addtoCart, removetoCart, increaseQuantity, decreaseQuantity }}>
            {children}
        </CartContext.Provider>
    )
}

export { CartProvider }