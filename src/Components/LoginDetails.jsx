import React from 'react'
import { Link } from 'react-router-dom'
import google from '../Images/google.png'
import phone from '../Images/phone-call.png'
import email from '../Images/email.png'
const LoginDetails = () => {
    return (
        <div className='flex w-full h-full items-center justify-center p-5'>
            <div className='flex flex-col h-full w-full justify-center items-center mb-5'>
                <h1 className='text-2xl text-center text-gray-800 font-semibold mb-8 mt-0'>Log in</h1>
                <div className="flex flex-col gap-5 mt-5 w-[70%]">
                    <div className="bg-transparent hover:bg-blue-100 p-2 rounded flex items-center border border-gray-300 transition-all duration-300 justify-start pl-5 cursor-pointer">
                        <img src={google} alt="" className='w-5 h-5 mr-2' />
                        <p>Continue with Google</p>
                    </div>
                    <div className="bg-transparent hover:bg-blue-100 p-2 rounded flex items-center border border-gray-300 transition-all duration-300 justify-start pl-5 cursor-pointer">
                        <img src={phone} alt="" className='w-5 h-5 mr-2' />
                        <p>Continue with Phone Number</p>
                    </div>
                    <div className="bg-transparent hover:bg-blue-100 p-2 rounded flex items-center border border-gray-300 transition-all duration-300 justify-start pl-5 cursor-pointer">
                        <img src={email} alt="" className='w-5 h-5 mr-2' />
                        <p>Continue with Email</p>
                    </div>
                </div>
                <div className='flex justify-center items-center mt-5'>
                    <p className='text-sm text-gray-700 font-semibold'>Don't have an account? <Link to="/signup" className='text-blue-400 font-semibold hover:underline cursor-pointer'>Sign up</Link></p>
                </div>
            </div>
        </div>
    )
}

export default LoginDetails