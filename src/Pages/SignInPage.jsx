import React from 'react'
import { Link } from 'react-router-dom'
import SignUpDetails from '../Components/SignUpDetails'

const SignInPage = () => {
    return (
        <div className='flex min-h-screen w-full bg-gray-200 items-center justify-center p-5'>
            <div className='flex flex-col text-black h-full w-full justify-center items-center'>
                <h2 className='text-4xl font-bold text-center mb-10'>Welcome to our store!</h2>
                <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
            </div>
            <div className=' container w-[800px] min-h-[450px] h-auto bg-white rounded-2xl shadow-[5px_10px_20px_0px_rgba(0,0,0,0.1)] overflow-hidden border-gray-300 mr-20'>
                <div className='flex justify-center items-center p-3 mt-6 mb-3'>
                    <Link to="/" className='p-2 text-black font-semibold text-2xl'>Ecommerce</Link>
                </div>
                <div className='flex w-full h-full gap-5'>
                    <SignUpDetails />
                </div>
            </div>
        </div>
    )
}

export default SignInPage