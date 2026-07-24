import { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState(() => {
        try {
            const localData = localStorage.getItem('ecommerce_cart');
            return localData ? JSON.parse(localData) : [];
        } catch {
            return [];
        }
    });

    useEffect(() => {
        try {
            localStorage.setItem('ecommerce_cart', JSON.stringify(cart));
        } catch (e) {
            console.error('Failed to save cart to localStorage', e);
        }
    }, [cart]);

    const addtoCart = (product) => {
        setCart((prevCart) => {
            const existingItem = prevCart.find(
                (item) => item.id === product.id && item.size === product.size
            );
            if (existingItem) {
                return prevCart.map((item) =>
                    item.id === product.id && item.size === product.size
                        ? { ...item, quantity: item.quantity + (product.quantity || 1) }
                        : item
                );
            } else {
                return [...prevCart, { ...product, quantity: product.quantity || 1 }];
            }
        });
    };

    const removetoCart = (id, size) => {
        setCart((prevCart) => prevCart.filter((item) => !(item.id === id && item.size === size)));
    };

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
                    ? { ...item, quantity: item.quantity - 1 }
                    : item
            ).filter((item) => item.quantity > 0)
        );
    };

    const clearCart = () => {
        setCart([]);
    };

    const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);

    const totalPrice = cart.reduce((sum, item) => {
        const numericPrice = typeof item.price === 'number' 
            ? item.price 
            : Number(String(item.price).replace(/[^0-9.]/g, ''));
        return sum + numericPrice * item.quantity;
    }, 0);

    return (
        <CartContext.Provider value={{ 
            cart, 
            addtoCart, 
            removetoCart, 
            increaseQuantity, 
            decreaseQuantity, 
            clearCart,
            totalCount,
            totalPrice
        }}>
            {children}
        </CartContext.Provider>
    );
};