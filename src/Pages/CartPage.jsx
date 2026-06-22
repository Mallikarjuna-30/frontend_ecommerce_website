import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../Context/CartContext'

const CartPage = () => {
    const { cart, removetoCart, increaseQuantity, decreaseQuantity } = useContext(CartContext)
    const navigate = useNavigate()
    const handleClick = () => {
        navigate("/")
    }

    return (
        <div className='w-full h-screen'>
            <Navbar />
            {
                cart.length === 0 ?
                    <div className='flex flex-col items-center justify-center m-10 p-10 gap-5 min-h-[75vh]'>
                        <h1 className='text-3xl font-semibold'>Ooops!! Your Cart Is Empty</h1>
                        <button className='border p-3 bg-black text-white rounded-lg cursor-pointer text-xl' onClick={() => handleClick()}>Continue Shopping</button>
                    </div> :
                    <div className='flex flex-row gap-5 justify-center'>
                        <div className="flex flex-col gap-5 w-full p-10 min-h-screen">
                            {cart.map((item) => (
                                <div
                                    key={`${item.id}-${item.size}`}
                                    className="flex flex-col md:flex-row items-center gap-5 p-5 bg-white rounded-xl shadow-md"
                                >
                                    {/* Product image */}
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-28 h-28 object-cover rounded-lg"
                                    />
                                    {/* Product details */}
                                    <div className="flex-1 flex flex-col gap-2">
                                        <h2 className="text-lg font-semibold">
                                            {item.title}
                                        </h2>
                                        <div className="flex gap-4 text-gray-600 text-sm">
                                            <p>
                                                Size:
                                                <span className="font-medium text-black ml-1">
                                                    {item.size}
                                                </span>
                                            </p>
                                            <p>
                                                Qty:
                                                <span className="font-medium text-black ml-1">
                                                    {item.quantity}
                                                </span>
                                            </p>
                                        </div>
                                        <p className="text-green-600 text-sm">
                                            In Stock
                                        </p>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <button
                                            onClick={() => decreaseQuantity(item.id, item.size)}
                                            className="w-8 h-8 border rounded-lg cursor-pointer"
                                        >
                                            -
                                        </button>
                                        <span className="font-semibold">
                                            {item.quantity}
                                        </span>
                                        <button
                                            onClick={() => increaseQuantity(item.id, item.size)}
                                            className="w-8 h-8 border rounded-lg cursor-pointer"
                                        >
                                            +
                                        </button>
                                    </div>
                                    {/* Price section */}
                                    <div className="flex flex-col items-end gap-2">
                                        <p className="text-xl font-bold">
                                            {item.price}
                                        </p>
                                        <p className="text-sm text-gray-500">
                                            Total: ₹{Number(item.price.replace("₹", "")) * item.quantity}
                                        </p>
                                        {/* Remove button later */}
                                        <button className="text-red-500 hover:text-red-700 cursor-pointer" onClick={() => removetoCart(item.id, item.size)}>
                                            Remove
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="flex flex-col gap-5 p-5 bg-white rounded-xl shadow-md sticky top-10 h-fit mr-5 w-[25vw]">
                            <h2 className='text-xl font-semibold w-full text-center'>Cart Summary</h2>
                            <p className='w-full'>Subtotal: ₹{cart.reduce((total, item) => total + Number(item.price.replace("₹", "")) * item.quantity, 0)}</p>
                            <button className="bg-blue-500 text-white p-2 rounded-lg cursor-pointer">Checkout</button>
                        </div>
                    </div>
            }
            <Footer />
        </div>
    )
}

export default CartPage