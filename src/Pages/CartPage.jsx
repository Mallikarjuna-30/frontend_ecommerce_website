import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../Context/CartContext'

const CartPage = () => {
    const { cart } = useContext(CartContext)
    const navigate = useNavigate()
    const handleClick = () => {
        navigate("/")
    }

    return (
        <div className='w-full '>
            <Navbar />
            {
                cart.length === 0 ?
                    <div className='flex flex-col items-center justify-center m-10 p-10 gap-5 min-h-[75vh]'>
                        <h1 className='text-3xl font-semibold'>Ooops!! Your Cart Is Empty</h1>
                        <button className='border p-3 bg-black text-white rounded-lg cursor-pointer text-xl' onClick={() => handleClick()}>Continue Shopping</button>
                    </div> :
                    <div className='w-full p-8 h-screen'>
                        <h1 className='text-3xl font-semibold text-gray-800 mb-15 flex items-center justify-center'>Shopping Cart</h1>
                        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
                            {cart.map((item) => (
                                <div
                                    key={item.id}
                                    className='bg-white hover:shadow-xl transition duration-300 overflow-hidden group cursor-pointer'
                                >
                                    {/* Image Section */}
                                    <div className='relative overflow-hidden' onClick={() => handleProductClick(item.id)}>
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className='w-full h-[350px] object-cover transition duration-500 group-hover:scale-105'
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
            }
            <Footer />
        </div>
    )
}

export default CartPage