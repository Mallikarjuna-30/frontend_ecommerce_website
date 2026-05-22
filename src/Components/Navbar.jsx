import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='flex items-center justify-between p-5 bg-gray-800 text-white'>
            <h2 className='text-2xl font-bold'>Ecommerce</h2>
            <div className='flex gap-5 text-xl'>
                <Link to="/" className='hover:underline hover:decoration-white hover:decoration-w-2 transition-all cursor-pointer'>Home</Link>
                <Link to="/products" className='hover:underline hover:decoration-white hover:decoration-w-2 transition-all cursor-pointer'>Products</Link>
                <Link to="/cart" className='hover:underline hover:decoration-white hover:decoration-w-2 transition-all cursor-pointer'>Cart</Link>
                <Link to="/login" className='hover:underline hover:decoration-white hover:decoration-w-2 transition-all cursor-pointer'>Login</Link>
            </div>
        </div>
    )
}

export default Navbar