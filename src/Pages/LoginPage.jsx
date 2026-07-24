import React from 'react';
import { Link } from 'react-router-dom';
import LoginDetails from '../Components/LoginDetails';

const LoginPage = () => {
    return (
        <div className="min-h-screen w-full bg-gray-50 flex flex-col items-center justify-center p-4">
            {/* Top Brand Link */}
            <div className="mb-6">
                <Link to="/" className="text-2xl font-bold text-gray-900 hover:opacity-80 transition-opacity">
                    Ecommerce
                </Link>
            </div>

            {/* Auth Card Container */}
            <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                <LoginDetails />
            </div>

            {/* Back to store bottom link */}
            <div className="mt-6">
                <Link to="/" className="text-xs text-gray-500 hover:text-gray-900 transition-colors">
                    ← Back to store
                </Link>
            </div>
        </div>
    );
};

export default LoginPage;