import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa6';
import googleImg from '../Images/google.png';

const SignUpDetails = () => {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/');
    };

    return (
        <div className="w-full flex flex-col items-center">
            {/* Header */}
            <div className="text-center mb-6">
                <h1 className="text-2xl font-bold text-gray-900">Create an Account</h1>
                <p className="text-sm text-gray-500 mt-1">Join us to get started with your shopping</p>
            </div>

            {/* Social Option */}
            <div className="w-full mb-5">
                <button
                    type="button"
                    onClick={() => navigate('/')}
                    className="w-full py-2.5 px-4 flex items-center justify-center gap-3 border border-gray-300 hover:bg-gray-50 rounded-xl text-sm font-medium text-gray-700 transition-colors cursor-pointer"
                >
                    <img src={googleImg} alt="Google" className="w-5 h-5" />
                    <span>Continue with Google</span>
                </button>
            </div>

            <div className="relative w-full flex items-center justify-center mb-5">
                <div className="w-full border-t border-gray-200"></div>
                <span className="absolute bg-white px-3 text-xs text-gray-400 font-medium">OR</span>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="w-full space-y-4">
                <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">Full Name</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="John Doe"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 text-sm text-gray-900 focus:ring-2 focus:ring-black focus:border-black outline-none transition-all"
                        required
                    />
                </div>

                <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">Email Address</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="name@example.com"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 text-sm text-gray-900 focus:ring-2 focus:ring-black focus:border-black outline-none transition-all"
                        required
                    />
                </div>

                <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">Password</label>
                    <div className="relative">
                        <input
                            type={showPassword ? 'text' : 'password'}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="••••••••"
                            className="w-full px-3.5 py-2.5 pr-10 rounded-xl border border-gray-300 text-sm text-gray-900 focus:ring-2 focus:ring-black focus:border-black outline-none transition-all"
                            required
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600 cursor-pointer"
                        >
                            {showPassword ? <FaEyeSlash className="text-sm" /> : <FaEye className="text-sm" />}
                        </button>
                    </div>
                </div>

                <button
                    type="submit"
                    className="w-full py-2.5 px-4 bg-black hover:bg-gray-800 text-white rounded-xl text-sm font-semibold shadow-sm transition-colors cursor-pointer mt-2"
                >
                    Create Account
                </button>
            </form>

            {/* Switch link */}
            <div className="mt-6 text-center text-sm text-gray-600">
                Already have an account?{' '}
                <Link to="/login" className="text-blue-600 font-semibold hover:underline">
                    Login
                </Link>
            </div>
        </div>
    );
};

export default SignUpDetails;