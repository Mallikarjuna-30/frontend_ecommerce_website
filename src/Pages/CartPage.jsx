import React, { useContext } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { useNavigate, Link } from 'react-router-dom';
import { CartContext } from '../Context/CartContext';
import { FaTrash, FaArrowRight, FaBagShopping, FaArrowLeft } from 'react-icons/fa6';

const CartPage = () => {
    const { cart, removetoCart, increaseQuantity, decreaseQuantity, totalPrice } = useContext(CartContext);
    const navigate = useNavigate();

    const shippingFee = totalPrice >= 499 || totalPrice === 0 ? 0 : 50;
    const finalTotal = totalPrice + shippingFee;

    return (
        <div className="min-h-screen w-full bg-gray-50 flex flex-col justify-between">
            <Navbar />

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full flex-1">
                <div className="flex items-center justify-between mb-8">
                    <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Your Shopping Cart</h1>
                    <Link to="/" className="text-xs text-gray-500 hover:text-black flex items-center gap-1">
                        <FaArrowLeft className="text-[10px]" />
                        <span>Continue Shopping</span>
                    </Link>
                </div>

                {cart.length === 0 ? (
                    <div className="flex flex-col items-center justify-center py-20 bg-white rounded-2xl border border-gray-100 shadow-xs text-center p-6">
                        <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center text-gray-400 text-2xl mb-4">
                            <FaBagShopping />
                        </div>
                        <h2 className="text-xl font-bold text-gray-900 mb-2">Your Cart is Empty</h2>
                        <p className="text-sm text-gray-500 max-w-sm mb-6">
                            Looks like you haven't added any products to your cart yet. Explore our trending collection!
                        </p>
                        <button
                            onClick={() => navigate('/products')}
                            className="py-3 px-6 bg-black hover:bg-gray-800 text-white font-semibold text-sm rounded-xl shadow-md transition-colors cursor-pointer"
                        >
                            Explore Collection
                        </button>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Cart Items List */}
                        <div className="lg:col-span-2 space-y-4">
                            {cart.map((item) => {
                                const unitPrice = typeof item.price === 'number' 
                                    ? item.price 
                                    : Number(String(item.price).replace(/[^0-9.]/g, ''));
                                const itemTotal = unitPrice * item.quantity;

                                return (
                                    <div
                                        key={`${item.id}-${item.size}`}
                                        className="flex flex-col sm:flex-row items-center justify-between p-4 bg-white rounded-2xl border border-gray-100 shadow-xs gap-4"
                                    >
                                        <div className="flex items-center gap-4 w-full sm:w-auto">
                                            <img
                                                src={item.image}
                                                alt={item.name || item.title}
                                                className="w-20 h-24 object-cover rounded-xl bg-gray-100 flex-shrink-0"
                                            />
                                            <div>
                                                <h3 className="font-semibold text-base text-gray-900">
                                                    {item.name || item.title}
                                                </h3>
                                                <p className="text-xs text-gray-500 mt-1">
                                                    Size: <span className="font-bold text-gray-800">{item.size}</span>
                                                </p>
                                                <p className="text-sm font-bold text-gray-900 mt-1">
                                                    ₹{unitPrice}
                                                </p>
                                            </div>
                                        </div>

                                        {/* Quantity Controls & Remove */}
                                        <div className="flex items-center justify-between w-full sm:w-auto gap-6 border-t sm:border-t-0 pt-3 sm:pt-0 border-gray-100">
                                            <div className="flex items-center gap-2 border border-gray-200 rounded-xl p-1">
                                                <button
                                                    onClick={() => decreaseQuantity(item.id, item.size)}
                                                    className="w-7 h-7 flex items-center justify-center text-gray-600 hover:bg-gray-100 rounded-lg cursor-pointer text-sm font-bold"
                                                >
                                                    -
                                                </button>
                                                <span className="w-6 text-center font-bold text-xs">{item.quantity}</span>
                                                <button
                                                    onClick={() => increaseQuantity(item.id, item.size)}
                                                    className="w-7 h-7 flex items-center justify-center text-gray-600 hover:bg-gray-100 rounded-lg cursor-pointer text-sm font-bold"
                                                >
                                                    +
                                                </button>
                                            </div>

                                            <div className="text-right">
                                                <span className="text-base font-bold text-gray-900">₹{itemTotal}</span>
                                            </div>

                                            <button
                                                onClick={() => removetoCart(item.id, item.size)}
                                                className="p-2 text-rose-500 hover:text-rose-700 hover:bg-rose-50 rounded-lg transition-colors cursor-pointer"
                                                title="Remove item"
                                            >
                                                <FaTrash className="text-sm" />
                                            </button>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        {/* Order Summary Side Panel */}
                        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-xs h-fit space-y-4">
                            <h2 className="text-lg font-bold text-gray-900 pb-3 border-b border-gray-100">
                                Order Summary
                            </h2>

                            <div className="space-y-2.5 text-sm text-gray-600">
                                <div className="flex justify-between">
                                    <span>Subtotal</span>
                                    <span className="font-semibold text-gray-900">₹{totalPrice}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Shipping</span>
                                    <span className="font-semibold text-gray-900">
                                        {shippingFee === 0 ? (
                                            <span className="text-emerald-600 font-bold">FREE</span>
                                        ) : (
                                            `₹${shippingFee}`
                                        )}
                                    </span>
                                </div>
                                {totalPrice < 499 && (
                                    <p className="text-[11px] text-amber-600 bg-amber-50 p-2 rounded-lg">
                                        Add ₹{499 - totalPrice} more to get Free Express Shipping!
                                    </p>
                                )}
                            </div>

                            <hr className="border-gray-100 my-2" />

                            <div className="flex justify-between text-base font-bold text-gray-900">
                                <span>Total Amount</span>
                                <span>₹{finalTotal}</span>
                            </div>

                            <button
                                onClick={() => navigate('/checkout')}
                                className="w-full py-3.5 px-4 bg-black hover:bg-gray-800 text-white font-semibold text-sm rounded-xl shadow-md flex items-center justify-center gap-2 transition-colors cursor-pointer"
                            >
                                <span>Proceed to Checkout</span>
                                <FaArrowRight className="text-xs" />
                            </button>
                        </div>
                    </div>
                )}
            </main>

            <Footer />
        </div>
    );
};

export default CartPage;