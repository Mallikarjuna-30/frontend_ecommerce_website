import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='p-7'>
            <div className='flex items-center justify-between p-4 bg-transparent text-black rounded-xl'>
                <div className='flex items-center justify-between w-full ml-5 mr-5'>
                    <div>
                        <h2 className='text-2xl font-semibold'>Ecommerce</h2>
                    </div>
                    <div className='flex gap-5 text-lg font-medium'>
                        <Link to="/" className="relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-black after:transition-all after:duration-300 hover:after:w-full cursor-pointer">Home</Link>
                        <Link to="/products" className="relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-black after:transition-all after:duration-300 hover:after:w-full cursor-pointer">Products</Link>
                        <Link to="/cart" className="relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-black after:transition-all after:duration-300 hover:after:w-full cursor-pointer">Cart</Link>
                        <Link to="/login" className="relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-black after:transition-all after:duration-300 hover:after:w-full cursor-pointer">Login</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar