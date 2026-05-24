import React from 'react'
import products from '../Data/products'

const ProductsArea = () => {
    return (
        <div className='p-8 w-screen h-screen '>
            <h1 className='text-gray-700 text-2xl font-semibold'>Trending T-Shirts</h1>
            <div className='grid grid-cols-4 gap-5'>
                {products.map((item) => {
                    <div key={item.id} className="flex shadow-[5px_10px_20px_0px_rgba(0,0,0,0.1)] rounded-xl overflow-hidden">
                        <img src={item.image} alt={item.name} className="w-[150px] h-[350px] rounded-xl" />
                        <div className='w-full h-full'>
                            <h2 className='font-bold text-gray-900'>{item.name}</h2>
                            <p>{item.price}</p>
                            <button className='text-gray-600 underline'>View Details</button>
                        </div>
                    </div>
                })}
            </div>
        </div>
    )
}

export default ProductsArea