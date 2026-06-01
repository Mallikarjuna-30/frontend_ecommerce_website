import React from 'react'
import { useNavigate } from 'react-router-dom'
import products from '../Data/products'

const ProductsArea = () => {
    const navigate = useNavigate()
    const handleProductClick = (id) => {
        navigate(`/product/${id}`)
    }
    return (
        <section id='products'>
            <div className='w-full min-h-screen p-8 overflow-x-hidden'>
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
                            <div className='relative overflow-hidden' onClick={() => handleProductClick(item.id)}>
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className='w-full h-[300px] object-cover transition duration-500 group-hover:scale-105'
                                />
                            </div>
                            {/* Product Details */}
                            <div className='p-4'>
                                <h2 className='font-semibold text-lg text-gray-800'>
                                    {item.name}
                                </h2>
                                <p className='text-green-600 font-bold text-lg mt-1'>
                                    {item.price}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ProductsArea