import React from 'react';
import { Link } from 'react-router-dom';
import { FaSquareGithub, FaSquareInstagram, FaSquareXTwitter, FaSquareFacebook, FaBagShopping } from 'react-icons/fa6';

const Footer = () => {
    return (
        <footer className="w-full bg-gray-900 text-white mt-16 pt-12 pb-8 border-t border-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 border-b border-gray-800">
                    {/* Brand Col */}
                    <div className="space-y-3">
                        <Link to="/" className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-lg bg-white text-black flex items-center justify-center font-bold">
                                <FaBagShopping className="text-sm" />
                            </div>
                            <span className="text-xl font-bold tracking-tight text-white">Ecommerce</span>
                        </Link>
                        <p className="text-xs text-gray-400 leading-relaxed">
                            Discover the latest clothing trends with unbeatable prices and express delivery.
                        </p>
                    </div>

                    {/* Links 1 */}
                    <div>
                        <h4 className="text-xs font-bold uppercase tracking-wider text-gray-300 mb-3">Shop</h4>
                        <ul className="space-y-2 text-xs text-gray-400">
                            <li><Link to="/products" className="hover:text-white transition-colors">T-Shirts</Link></li>
                            <li><Link to="/products" className="hover:text-white transition-colors">Casual Shirts</Link></li>
                            <li><Link to="/products" className="hover:text-white transition-colors">Formal Collection</Link></li>
                            <li><Link to="/products" className="hover:text-white transition-colors">New Arrivals</Link></li>
                        </ul>
                    </div>

                    {/* Links 2 */}
                    <div>
                        <h4 className="text-xs font-bold uppercase tracking-wider text-gray-300 mb-3">Customer Support</h4>
                        <ul className="space-y-2 text-xs text-gray-400">
                            <li><Link to="/cart" className="hover:text-white transition-colors">View Cart</Link></li>
                            <li><Link to="/checkout" className="hover:text-white transition-colors">Checkout</Link></li>
                            <li><Link to="/login" className="hover:text-white transition-colors">My Account</Link></li>
                            <li><a href="#" onClick={(e) => e.preventDefault()} className="hover:text-white transition-colors">Shipping & Returns</a></li>
                        </ul>
                    </div>

                    {/* Socials */}
                    <div>
                        <h4 className="text-xs font-bold uppercase tracking-wider text-gray-300 mb-3">Follow Us</h4>
                        <div className="flex gap-4 text-xl text-gray-400">
                            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                                <FaSquareInstagram />
                            </a>
                            <a href="https://x.com/Mallikarjuna_30" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                                <FaSquareXTwitter />
                            </a>
                            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                                <FaSquareFacebook />
                            </a>
                            <a href="https://github.com/Mallikarjuna-30" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                                <FaSquareGithub />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-4">
                    <p>© {new Date().getFullYear()} Ecommerce Store. All rights reserved.</p>
                    <div className="flex gap-6">
                        <a href="#" onClick={(e) => e.preventDefault()} className="hover:text-gray-400">Privacy Policy</a>
                        <a href="#" onClick={(e) => e.preventDefault()} className="hover:text-gray-400">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;