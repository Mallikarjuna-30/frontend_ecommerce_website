import React, { useContext } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { CartContext } from '../Context/CartContext';
import { FaBagShopping, FaCartShopping, FaUser } from 'react-icons/fa6';

const Navbar = () => {
    const { totalCount } = useContext(CartContext);
    const navigate = useNavigate();
    const location = useLocation();

    const handleProductsClick = (e) => {
        e.preventDefault();
        if (location.pathname === '/') {
            const productsEl = document.getElementById('products');
            if (productsEl) {
                productsEl.scrollIntoView({ behavior: 'smooth' });
                return;
            }
        }
        navigate('/products');
    };

    return (
        <header className="sticky top-0 z-40 w-full bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-xs">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
                {/* Brand Logo */}
                <Link to="/" className="flex items-center gap-2 group">
                    <div className="w-9 h-9 rounded-xl bg-black flex items-center justify-center text-white group-hover:scale-105 transition-transform">
                        <FaBagShopping className="text-sm" />
                    </div>
                    <span className="text-xl font-bold text-gray-900 tracking-tight">Ecommerce</span>
                </Link>

                {/* Navigation Links */}
                <nav className="flex items-center gap-6 text-sm font-medium text-gray-600">
                    <Link 
                        to="/" 
                        className={`hover:text-black transition-colors ${location.pathname === '/' ? 'text-black font-semibold' : ''}`}
                    >
                        Home
                    </Link>
                    
                    <a 
                        href="#products" 
                        onClick={handleProductsClick} 
                        className={`hover:text-black transition-colors ${location.pathname === '/products' ? 'text-black font-semibold' : ''}`}
                    >
                        Products
                    </a>

                    <Link 
                        to="/cart" 
                        className="relative flex items-center gap-1.5 hover:text-black transition-colors"
                    >
                        <FaCartShopping className="text-base text-gray-700" />
                        <span>Cart</span>
                        {totalCount > 0 && (
                            <span className="ml-0.5 px-1.5 py-0.2 text-[11px] font-bold bg-black text-white rounded-full">
                                {totalCount}
                            </span>
                        )}
                    </Link>

                    <Link 
                        to="/login" 
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-gray-200 hover:bg-gray-50 text-gray-800 text-xs font-semibold transition-colors"
                    >
                        <FaUser className="text-xs text-gray-600" />
                        <span>Login</span>
                    </Link>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;