import React from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import products from '../Data/products'
import Navbar from '../Components/Navbar'
import ProductsArea from './ProductsArea'

const ProductDetailPage = () => {
    const [selectedSize, setSelectedSize] = useState()
    const { id } = useParams()
    const product = products.find((item) => item.id == id)
    return (
        <div className='h-screen w-full'>
            <Navbar />
            <div className='px-10 top-0 mt-3'>
                <div className='grid md:grid-cols-2 gap-10 ml-4'>
                    <img
                        src={product.image}
                        alt={product.name}
                        className='ml-8 w-[85%] h-[85%] object-cover rounded-xl'
                    />
                    <div className='w-full mt-8'>
                        <h1 className='text-4xl font-semibold'>
                            {product.name}
                        </h1>
                        <p className='text-2xl text-green-600 mt-4'>
                            {product.price}
                        </p>
                        <p className='text-sm text-gray-500 mt-2'>
                            incl. of taxes
                            <p>
                                (Also includes all applicable duties)
                            </p>
                        </p>
                        <p className='mt-5 text-gray-600'>
                            Size
                        </p>
                        {['S', 'M', 'L', 'XL'].map((size) => (
                            <button
                                key={size}
                                className={`border border-gray-400 px-3 py-1 rounded-md text-sm hover:bg-black hover:text-white transition mt-3 mr-2 ${size === selectedSize ? 'bg-black text-white' : ''}`}
                                onClick={() => {
                                    setSelectedSize(size)
                                }}
                                style={{
                                    backgroundColor: size === selectedSize ? 'black' : 'white',
                                    color: size === selectedSize ? 'white' : 'black',
                                }}
                            >
                                {size}
                            </button>
                        ))}

                        <div>
                            <button className='mt-8 bg-black text-white px-6 py-3 rounded-lg'>
                                Add To Cart
                            </button>
                            <p className='text-gray-600 mt-10 w-[80%]'>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut molestias magni saepe blanditiis aliquid nulla tempore aperiam, pariatur aspernatur, nam possimus officia sapiente quod repudiandae.
                                Premium quality t-shirt with stylish design and comfortable fabric.
                            </p>
                        </div>

                    </div>
                </div>
            </div>
            <ProductsArea />
        </div>
    )
}

export default ProductDetailPage