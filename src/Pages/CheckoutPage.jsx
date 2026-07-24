import React, { useState, useContext } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { CartContext } from '../Context/CartContext';
import { useNavigate } from 'react-router-dom';
import { FaCircleCheck, FaLock, FaTruckFast, FaCreditCard, FaMoneyBill1 } from 'react-icons/fa6';

const CheckoutPage = () => {
    const { cart, totalPrice, clearCart } = useContext(CartContext);
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        fullName: 'Alex Johnson',
        email: 'alex@example.com',
        phone: '9876543210',
        address: '123 Fashion Street, Suite 4B',
        city: 'Mumbai',
        postalCode: '400001'
    });

    const [paymentMethod, setPaymentMethod] = useState('cod');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [orderPlaced, setOrderPlaced] = useState(false);
    const [orderId, setOrderId] = useState('');

    const shippingFee = totalPrice >= 499 || totalPrice === 0 ? 0 : 50;
    const finalTotal = totalPrice + shippingFee;

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handlePlaceOrder = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        setTimeout(() => {
            setIsSubmitting(false);
            const randomId = 'ORD-' + Math.floor(100000 + Math.random() * 900000);
            setOrderId(randomId);
            setOrderPlaced(true);
            clearCart();
        }, 1200);
    };

    return (
        <div className="min-h-screen w-full bg-gray-50 flex flex-col justify-between">
            <Navbar />

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full flex-1">
                <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">Checkout</h1>

                {cart.length === 0 && !orderPlaced ? (
                    <div className="text-center py-20 bg-white rounded-2xl border border-gray-100 p-6">
                        <h2 className="text-xl font-bold text-gray-900 mb-2">Your Cart is Empty</h2>
                        <p className="text-sm text-gray-500 mb-6">Add products to your cart before proceeding to checkout.</p>
                        <button
                            onClick={() => navigate('/products')}
                            className="py-2.5 px-5 bg-black text-white rounded-xl font-semibold text-sm cursor-pointer"
                        >
                            Return to Shop
                        </button>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Shipping & Payment Details */}
                        <div className="lg:col-span-2 space-y-6">
                            {/* Shipping Address */}
                            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-xs">
                                <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                                    <FaTruckFast className="text-gray-700" />
                                    <span>Shipping Address</span>
                                </h2>
                                
                                <form id="checkout-form" onSubmit={handlePlaceOrder} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-xs font-semibold text-gray-700 mb-1">Full Name</label>
                                        <input
                                            type="text"
                                            name="fullName"
                                            value={formData.fullName}
                                            onChange={handleChange}
                                            className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm focus:ring-2 focus:ring-black outline-none"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-semibold text-gray-700 mb-1">Email Address</label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm focus:ring-2 focus:ring-black outline-none"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-semibold text-gray-700 mb-1">Phone Number</label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm focus:ring-2 focus:ring-black outline-none"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-semibold text-gray-700 mb-1">City</label>
                                        <input
                                            type="text"
                                            name="city"
                                            value={formData.city}
                                            onChange={handleChange}
                                            className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm focus:ring-2 focus:ring-black outline-none"
                                            required
                                        />
                                    </div>
                                    <div className="sm:col-span-2">
                                        <label className="block text-xs font-semibold text-gray-700 mb-1">Street Address</label>
                                        <input
                                            type="text"
                                            name="address"
                                            value={formData.address}
                                            onChange={handleChange}
                                            className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm focus:ring-2 focus:ring-black outline-none"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-semibold text-gray-700 mb-1">Postal Code</label>
                                        <input
                                            type="text"
                                            name="postalCode"
                                            value={formData.postalCode}
                                            onChange={handleChange}
                                            className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm focus:ring-2 focus:ring-black outline-none"
                                            required
                                        />
                                    </div>
                                </form>
                            </div>

                            {/* Payment Options */}
                            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-xs">
                                <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                                    <FaLock className="text-gray-700 text-sm" />
                                    <span>Payment Method</span>
                                </h2>

                                <div className="space-y-3">
                                    <label
                                        onClick={() => setPaymentMethod('cod')}
                                        className={`flex items-center justify-between p-4 rounded-xl border cursor-pointer transition-all ${
                                            paymentMethod === 'cod'
                                                ? 'border-black bg-gray-50/80 font-semibold'
                                                : 'border-gray-200 hover:bg-gray-50'
                                        }`}
                                    >
                                        <div className="flex items-center gap-3">
                                            <input
                                                type="radio"
                                                name="payment"
                                                checked={paymentMethod === 'cod'}
                                                onChange={() => setPaymentMethod('cod')}
                                                className="text-black focus:ring-black cursor-pointer"
                                            />
                                            <div className="flex items-center gap-2 text-sm text-gray-800">
                                                <FaMoneyBill1 className="text-emerald-600 text-base" />
                                                <span>Cash on Delivery (COD)</span>
                                            </div>
                                        </div>
                                        <span className="text-xs text-gray-400">Pay when delivered</span>
                                    </label>

                                    <label
                                        onClick={() => setPaymentMethod('card')}
                                        className={`flex items-center justify-between p-4 rounded-xl border cursor-pointer transition-all ${
                                            paymentMethod === 'card'
                                                ? 'border-black bg-gray-50/80 font-semibold'
                                                : 'border-gray-200 hover:bg-gray-50'
                                        }`}
                                    >
                                        <div className="flex items-center gap-3">
                                            <input
                                                type="radio"
                                                name="payment"
                                                checked={paymentMethod === 'card'}
                                                onChange={() => setPaymentMethod('card')}
                                                className="text-black focus:ring-black cursor-pointer"
                                            />
                                            <div className="flex items-center gap-2 text-sm text-gray-800">
                                                <FaCreditCard className="text-indigo-600 text-base" />
                                                <span>Credit / Debit Card / UPI</span>
                                            </div>
                                        </div>
                                        <span className="text-xs text-gray-400">Instant Payment</span>
                                    </label>
                                </div>
                            </div>
                        </div>

                        {/* Order Summary Side Panel */}
                        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-xs h-fit space-y-4">
                            <h2 className="text-lg font-bold text-gray-900 pb-3 border-b border-gray-100">
                                Summary ({cart.length} items)
                            </h2>

                            <div className="max-h-60 overflow-y-auto space-y-3 pr-1">
                                {cart.map((item) => {
                                    const unitPrice = typeof item.price === 'number' 
                                        ? item.price 
                                        : Number(String(item.price).replace(/[^0-9.]/g, ''));
                                    return (
                                        <div key={`${item.id}-${item.size}`} className="flex items-center justify-between text-xs">
                                            <div className="flex items-center gap-2">
                                                <img src={item.image} alt="" className="w-10 h-10 object-cover rounded-lg bg-gray-100" />
                                                <div>
                                                    <h4 className="font-semibold text-gray-800 line-clamp-1">{item.name || item.title}</h4>
                                                    <p className="text-gray-400">Size: {item.size} × {item.quantity}</p>
                                                </div>
                                            </div>
                                            <span className="font-bold text-gray-900">₹{unitPrice * item.quantity}</span>
                                        </div>
                                    );
                                })}
                            </div>

                            <hr className="border-gray-100" />

                            <div className="space-y-2 text-xs text-gray-600">
                                <div className="flex justify-between">
                                    <span>Subtotal</span>
                                    <span className="font-semibold text-gray-900">₹{totalPrice}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Shipping</span>
                                    <span className="font-semibold text-emerald-600">
                                        {shippingFee === 0 ? 'FREE' : `₹${shippingFee}`}
                                    </span>
                                </div>
                            </div>

                            <hr className="border-gray-100" />

                            <div className="flex justify-between text-base font-bold text-gray-900">
                                <span>Total Pay</span>
                                <span>₹{finalTotal}</span>
                            </div>

                            <button
                                type="submit"
                                form="checkout-form"
                                disabled={isSubmitting}
                                className="w-full py-3.5 bg-black hover:bg-gray-800 text-white font-semibold text-sm rounded-xl shadow-md transition-colors cursor-pointer disabled:opacity-75"
                            >
                                {isSubmitting ? 'Processing Order...' : `Place Order (₹${finalTotal})`}
                            </button>
                        </div>
                    </div>
                )}
            </main>

            {/* Order Placed Success Modal */}
            {orderPlaced && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs animate-fadeIn">
                    <div className="bg-white rounded-2xl p-8 max-w-sm w-full text-center shadow-2xl space-y-4">
                        <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto text-3xl">
                            <FaCircleCheck />
                        </div>

                        <h2 className="text-2xl font-bold text-gray-900">Order Confirmed!</h2>
                        <p className="text-xs text-gray-500">
                            Thank you for your purchase! Your order <span className="font-bold text-gray-800">{orderId}</span> has been received and is being prepared for dispatch.
                        </p>

                        <div className="p-3 bg-gray-50 rounded-xl text-xs text-gray-600 text-left space-y-1">
                            <p><strong>Deliver to:</strong> {formData.fullName}</p>
                            <p><strong>Address:</strong> {formData.address}, {formData.city}</p>
                            <p><strong>Payment:</strong> {paymentMethod === 'cod' ? 'Cash on Delivery' : 'Paid Online'}</p>
                        </div>

                        <button
                            onClick={() => navigate('/')}
                            className="w-full py-3 bg-black hover:bg-gray-800 text-white font-bold text-sm rounded-xl transition-colors cursor-pointer"
                        >
                            Back to Store
                        </button>
                    </div>
                </div>
            )}

            <Footer />
        </div>
    );
};

export default CheckoutPage;