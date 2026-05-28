import React from 'react'
import { FaSquareGithub, FaSquareInstagram, FaSquareXTwitter, FaSquareFacebook } from 'react-icons/fa6'

const Footer = () => {
    return (
        <div className='h-auto w-full bg-gray-100 flex justify-center py-5'>
            <div className='px-10 mt-2 flex flex-col items-center justify-center space-y-6'>
                <p className='text-black font-bold text-3xl'>
                    Just do it .
                </p>
                <div className='flex justify-between space-x-15 mt-8'>
                    <p className='text-sm text-gray-800 cursor-pointer font-semibold hover:text-black transition'>About</p>
                    <p className='text-sm text-gray-800 cursor-pointer font-semibold hover:text-black transition'>Careers</p>
                    <p className='text-sm text-gray-800 cursor-pointer font-semibold hover:text-black transition'>History</p>
                    <p className='text-sm text-gray-800 cursor-pointer font-semibold hover:text-black transition'>Services</p>
                    <p className='text-sm text-gray-800 cursor-pointer font-semibold hover:text-black transition'>Projects</p>
                    <p className='text-sm text-gray-800 cursor-pointer font-semibold hover:text-black transition'>Blog</p>
                </div>
                <div className='flex space-x-10 mt-6'>
                    <FaSquareInstagram className='text-2xl cursor-pointer transition rounded-[50%]' />
                    <FaSquareXTwitter className='text-2xl cursor-pointer transition rounded-[50%]' />
                    <FaSquareFacebook className='text-2xl cursor-pointer transition rounded-[50%]' />
                    <FaSquareGithub className='text-2xl cursor-pointer transition rounded-[50%]' />
                </div>
            </div>
        </div>
    )
}
export default Footer