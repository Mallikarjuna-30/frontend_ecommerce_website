import React from 'react'
import products from '../Data/products'

const ProductsArea = () => {
    return (
        <div className='w-full min-h-screen p-8 overflow-x-hidden bg-gray-100'>
            <h1 className='text-3xl font-bold text-gray-800 mb-8'>
                Trending T-Shirts
            </h1>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
                {products.map((item) => (
                    <div
                        key={item.id}
                        className='bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden group cursor-pointer'
                    >
                        {/* Image Section */}
                        <div className='relative overflow-hidden'>
                            <img
                                src={item.image}
                                alt={item.name}
                                className='w-full h-[300px] object-cover transition duration-500 group-hover:scale-105'
                            />
                            {/* Sizes Slide Up */}
                            <div
                                className='absolute bottom-0 left-0 w-full bg-white/95 backdrop-blur-sm 
                                translate-y-full group-hover:translate-y-0 
                                transition-all duration-300 p-3'
                            >
                                <p className='text-sm font-semibold text-gray-700 text-center mb-2'>
                                    Sizes Available
                                </p>
                                <div className='flex justify-center gap-2'>
                                    {['S', 'M', 'L', 'XL'].map((size) => (
                                        <button
                                            key={size}
                                            className='border border-gray-400 px-3 py-1 rounded-md text-sm hover:bg-black hover:text-white transition'
                                        >
                                            {size}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                        {/* Product Details */}
                        <div className='p-4'>
                            <h2 className='font-semibold text-lg text-gray-800'>
                                {item.name}
                            </h2>
                            <p className='text-green-600 font-bold text-lg mt-1'>
                                {item.price}
                            </p>
                            <button
                                className='mt-4 w-full bg-black text-white py-2 rounded-lg 
                                hover:bg-gray-800 transition cursor-pointer'
                            >
                                View Details
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ProductsArea