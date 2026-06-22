import React from 'react'
import { useState, useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import products from '../Data/products'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import { CartContext } from '../Context/CartContext.jsx'
const ProductDetailPage = () => {
    const navigate = useNavigate()
    const [selectedSize, setSelectedSize] = useState("")
    const { id } = useParams()
    const product = products.find((item) => item.id == id)
    const { addtoCart } = useContext(CartContext)
    const handleProductClick = (id) => {
        navigate(`/product/${id}`)
        useEffect(() => {
            window.scrollTo(0, 0);
        }, [id]);
    }
    const relatedProducts = products.filter(
        (item) =>
            item.category === product.category &&
            item.id !== product.id
    );
    const handleToCart = () => {
        if (!selectedSize) {
            alert("Select Size !")
            return
        }
        addtoCart({
            ...product,
            size: selectedSize,
            quantity: 1
        });
    }
    return (
        <div className='min-h-screen w-full gap-10'>
            <Navbar />
            <div className='px-10 top-0 mt-3'>
                <div className='grid md:grid-cols-2 gap-10 ml-4'>
                    <img
                        src={product.image}
                        alt={product.name}
                        className='w-full max-w-[500px] h-auto object-cover rounded-xl ml-10'
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
                            <span>
                                (Also includes all applicable duties)
                            </span>
                        </p>
                        <p className='mt-5 text-gray-600'>
                            Size
                        </p>
                        {['S', 'M', 'L', 'XL'].map((size) => (
                            <button
                                key={size}
                                className={`border border-gray-400 px-3 py-1 rounded-md text-sm cursor-pointer hover:bg-black hover:text-white transition mt-3 mr-2 ${size === selectedSize ? 'bg-black text-white' : ''}`}
                                onClick={() => {
                                    setSelectedSize(size),
                                        window.scrollTo(0, 0)
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
                            <button className={`mt-8 px-6 py-3 rounded-lg text-white transition-all
                                ${selectedSize ?
                                    "bg-black hover:opacity-90 cursor-pointer"
                                    : "bg-gray-400 cursor-not-allowed"
                                }`} onClick={handleToCart} disabled={!selectedSize}>
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
            <div className="related-products mt-12 mb-6 ml-12 px-4">
                <h2 className="text-2xl font-bold mb-6">
                    You May Also Like
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {relatedProducts.slice(0, 4).map((item) => (
                        <div
                            key={item.id}
                            className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transition-transform duration-300 hover:scale-105"
                        >
                            <img
                                src={item.image}
                                alt={item.name}
                                className="w-full h-[350px] object-cover"
                                onClick={() => handleProductClick(item.id)}
                            />
                            <div className="p-4">
                                <h3 className="font-semibold text-lg">
                                    {item.name}
                                </h3>
                                <p className="text-green-600 font-bold mt-2">
                                    {item.price}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default ProductDetailPage