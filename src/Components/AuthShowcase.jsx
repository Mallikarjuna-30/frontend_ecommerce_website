import React from 'react';
import { Link } from 'react-router-dom';
import { 
    FaStore, 
    FaStar, 
    FaTruckFast, 
    FaShieldHalved, 
    FaArrowLeft, 
    FaBagShopping,
    FaCheck
} from 'react-icons/fa6';
import { HiSparkles } from 'react-icons/hi2';

const AuthShowcase = ({ title, subtitle }) => {
    return (
        <div className="relative hidden lg:flex flex-col justify-between w-1/2 p-10 bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white rounded-l-3xl overflow-hidden shadow-2xl">
            {/* Ambient Background Blur Elements */}
            <div className="absolute -top-20 -left-20 w-80 h-80 bg-indigo-600/30 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-violet-600/30 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute top-1/2 left-1/3 w-60 h-60 bg-blue-500/20 rounded-full blur-2xl pointer-events-none"></div>

            {/* Top Navigation & Logo */}
            <div className="relative z-10 flex items-center justify-between">
                <Link to="/" className="flex items-center gap-2 text-xl font-bold tracking-wide group">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-500 to-violet-500 flex items-center justify-center shadow-lg shadow-indigo-500/30 group-hover:scale-105 transition-transform duration-300">
                        <FaBagShopping className="text-white text-lg" />
                    </div>
                    <span className="bg-gradient-to-r from-white via-slate-100 to-slate-300 bg-clip-text text-transparent text-2xl font-extrabold">
                        Ecommerce
                    </span>
                </Link>

                <Link 
                    to="/" 
                    className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-slate-300 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full border border-white/10 transition-all duration-300 hover:text-white"
                >
                    <FaArrowLeft className="text-xs" />
                    Back to Store
                </Link>
            </div>

            {/* Central Hero Content */}
            <div className="relative z-10 my-auto py-8">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-indigo-300 text-xs font-semibold tracking-wide mb-6 backdrop-blur-md">
                    <HiSparkles className="text-amber-400 text-sm animate-pulse" />
                    <span>Next-Gen Shopping Experience</span>
                </div>

                <h1 className="text-4xl xl:text-5xl font-black leading-tight tracking-tight text-white mb-4">
                    {title || "Welcome to Your Favorite Shopping Destination"}
                </h1>
                
                <p className="text-slate-300 text-base xl:text-lg leading-relaxed max-w-md mb-8">
                    {subtitle || "Join thousands of satisfied shoppers. Unlock exclusive deals, personalized recommendations, and instant checkout."}
                </p>

                {/* Store Features Grid */}
                <div className="grid grid-cols-1 gap-4 mb-8">
                    <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 transition-all duration-300">
                        <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-lg flex-shrink-0">
                            <FaTruckFast />
                        </div>
                        <div>
                            <h4 className="text-sm font-semibold text-white">Free Express Shipping</h4>
                            <p className="text-xs text-slate-400">On all orders over ₹499 with live tracking</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 transition-all duration-300">
                        <div className="w-10 h-10 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center text-lg flex-shrink-0">
                            <FaShieldHalved />
                        </div>
                        <div>
                            <h4 className="text-sm font-semibold text-white">100% Secure Checkout</h4>
                            <p className="text-xs text-slate-400">Bank-grade encryption & hassle-free returns</p>
                        </div>
                    </div>
                </div>

                {/* Floating Testimonial Card */}
                <div className="relative p-4 rounded-2xl bg-gradient-to-r from-white/10 to-white/5 border border-white/15 backdrop-blur-xl shadow-xl">
                    <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-1 text-amber-400 text-xs">
                            <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                        </div>
                        <span className="text-[11px] font-medium text-indigo-300 bg-indigo-500/20 px-2 py-0.5 rounded-md border border-indigo-500/30">
                            Verified Review
                        </span>
                    </div>
                    <p className="text-xs text-slate-200 italic mb-3">
                        "The quality of clothing and speed of delivery exceeded all my expectations. My go-to store!"
                    </p>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-pink-500 to-rose-400 flex items-center justify-center text-white text-xs font-bold">
                                SR
                            </div>
                            <div>
                                <h5 className="text-xs font-semibold text-white">Sophia Reynolds</h5>
                                <p className="text-[10px] text-slate-400">Fashion Enthusiast</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-1 text-[11px] text-emerald-400 font-medium">
                            <FaCheck className="text-[9px]" /> 50k+ Happy Shoppers
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer Trust Indicator */}
            <div className="relative z-10 flex items-center justify-between pt-6 border-t border-white/10 text-xs text-slate-400">
                <span>© {new Date().getFullYear()} Ecommerce Inc.</span>
                <div className="flex gap-4">
                    <span className="hover:text-slate-200 cursor-pointer">Privacy</span>
                    <span className="hover:text-slate-200 cursor-pointer">Terms</span>
                    <span className="hover:text-slate-200 cursor-pointer">Support</span>
                </div>
            </div>
        </div>
    );
};

export default AuthShowcase;
