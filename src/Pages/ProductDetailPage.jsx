import React, { useState, useEffect, useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import products from '../Data/products';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { CartContext } from '../Context/CartContext.jsx';
import { FaCheck, FaCartShopping, FaTruckFast, FaShieldHalved, FaRotateLeft } from 'react-icons/fa6';

const ProductDetailPage = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [selectedSize, setSelectedSize] = useState('M');
    const [quantity, setQuantity] = useState(1);
    const [addedToast, setAddedToast] = useState(false);

    const product = products.find((item) => String(item.id) === String(id)) || products[0];
    const { addtoCart } = useContext(CartContext);

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [id]);

    const relatedProducts = products.filter((item) => String(item.id) !== String(product.id));

    const handleAddToCart = () => {
        addtoCart({
            ...product,
            size: selectedSize,
            quantity: quantity
        });
        setAddedToast(true);
        setTimeout(() => setAddedToast(false), 2000);
    };

    return (
        <div className="min-h-screen w-full bg-white flex flex-col justify-between">
            <Navbar />

            {/* Notification Toast */}
            {addedToast && (
                <div className="fixed top-20 right-5 z-50 p-4 bg-black text-white rounded-xl shadow-2xl flex items-center gap-3 animate-fadeIn">
                    <div className="w-6 h-6 rounded-full bg-emerald-500 text-white flex items-center justify-center text-xs">
                        <FaCheck />
                    </div>
                    <div>
                        <h4 className="text-xs font-bold">Added to Cart!</h4>
                        <p className="text-[11px] text-gray-300">{product.name} ({selectedSize}) x {quantity}</p>
                    </div>
                </div>
            )}

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
                {/* Breadcrumb */}
                <div className="text-xs text-gray-500 mb-6 flex items-center gap-2">
                    <span onClick={() => navigate('/')} className="hover:text-black cursor-pointer">Home</span>
                    <span>/</span>
                    <span onClick={() => navigate('/products')} className="hover:text-black cursor-pointer">Products</span>
                    <span>/</span>
                    <span className="text-gray-900 font-semibold">{product.name}</span>
                </div>

                {/* Main Product Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">
                    {/* Left: Product Image */}
                    <div className="w-full aspect-4/5 rounded-2xl overflow-hidden bg-gray-100 border border-gray-100 shadow-xs">
                        <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Right: Product Details */}
                    <div className="flex flex-col justify-between">
                        <div>
                            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
                                {product.name}
                            </h1>
                            
                            <div className="flex items-center gap-3 mt-3">
                                <span className="text-3xl font-extrabold text-gray-900">{product.price}</span>
                                <span className="text-xs font-medium text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200">
                                    In Stock
                                </span>
                            </div>
                            <p className="text-xs text-gray-400 mt-1">Inclusive of all taxes & duties.</p>

                            <hr className="my-6 border-gray-100" />

                            {/* Size Selection */}
                            <div className="mb-6">
                                <label className="block text-xs font-semibold text-gray-800 uppercase tracking-wider mb-2">
                                    Select Size
                                </label>
                                <div className="flex gap-2">
                                    {['S', 'M', 'L', 'XL', 'XXL'].map((size) => (
                                        <button
                                            key={size}
                                            type="button"
                                            onClick={() => setSelectedSize(size)}
                                            className={`w-12 h-12 rounded-xl text-sm font-semibold border transition-all cursor-pointer ${
                                                selectedSize === size
                                                    ? 'border-black bg-black text-white shadow-sm'
                                                    : 'border-gray-200 bg-white text-gray-800 hover:border-gray-400'
                                            }`}
                                        >
                                            {size}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Quantity Selection */}
                            <div className="mb-6">
                                <label className="block text-xs font-semibold text-gray-800 uppercase tracking-wider mb-2">
                                    Quantity
                                </label>
                                <div className="flex items-center gap-3 w-fit border border-gray-200 rounded-xl p-1">
                                    <button
                                        onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
                                        className="w-9 h-9 flex items-center justify-center text-gray-600 hover:bg-gray-100 rounded-lg cursor-pointer text-base font-bold"
                                    >
                                        -
                                    </button>
                                    <span className="w-8 text-center font-bold text-sm">{quantity}</span>
                                    <button
                                        onClick={() => setQuantity((prev) => prev + 1)}
                                        className="w-9 h-9 flex items-center justify-center text-gray-600 hover:bg-gray-100 rounded-lg cursor-pointer text-base font-bold"
                                    >
                                        +
                                    </button>
                                </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex gap-4">
                                <button
                                    onClick={handleAddToCart}
                                    className="flex-1 py-3.5 px-6 rounded-xl bg-black hover:bg-gray-800 text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-md transition-colors cursor-pointer"
                                >
                                    <FaCartShopping />
                                    <span>Add to Cart</span>
                                </button>
                                <button
                                    onClick={() => {
                                        handleAddToCart();
                                        navigate('/checkout');
                                    }}
                                    className="px-6 py-3.5 rounded-xl border border-gray-300 hover:bg-gray-50 text-gray-900 font-semibold text-sm transition-colors cursor-pointer"
                                >
                                    Buy Now
                                </button>
                            </div>

                            {/* Product Badges */}
                            <div className="grid grid-cols-3 gap-3 mt-8 pt-6 border-t border-gray-100 text-center">
                                <div className="p-3 bg-gray-50 rounded-xl">
                                    <FaTruckFast className="mx-auto text-lg text-gray-700 mb-1" />
                                    <p className="text-[11px] font-medium text-gray-700">Free Shipping</p>
                                </div>
                                <div className="p-3 bg-gray-50 rounded-xl">
                                    <FaShieldHalved className="mx-auto text-lg text-gray-700 mb-1" />
                                    <p className="text-[11px] font-medium text-gray-700">Secure Payment</p>
                                </div>
                                <div className="p-3 bg-gray-50 rounded-xl">
                                    <FaRotateLeft className="mx-auto text-lg text-gray-700 mb-1" />
                                    <p className="text-[11px] font-medium text-gray-700">7 Days Return</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Related Products */}
                <div className="mt-16 pt-10 border-t border-gray-100">
                    <h2 className="text-xl font-bold text-gray-900 mb-6">You May Also Like</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                        {relatedProducts.slice(0, 4).map((item) => (
                            <div
                                key={item.id}
                                onClick={() => navigate(`/product/${item.id}`)}
                                className="group bg-white rounded-xl border border-gray-100 overflow-hidden cursor-pointer hover:shadow-md transition-all duration-300"
                            >
                                <div className="aspect-4/5 overflow-hidden bg-gray-100">
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                                <div className="p-3">
                                    <h3 className="font-semibold text-sm text-gray-900 group-hover:text-black line-clamp-1">
                                        {item.name}
                                    </h3>
                                    <p className="text-sm font-bold text-gray-900 mt-1">{item.price}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default ProductDetailPage;