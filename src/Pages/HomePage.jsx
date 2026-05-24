import React from 'react'
import Navbar from '../Components/Navbar'
import ImageSlide from '../Components/ImageSlide'

const HomePage = () => {
    return (
        <div className='w-screen h-full'>
            <Navbar />
            <ImageSlide />
            <div className='text-center mt-10 mb-10'>
                <h2 className='text-3xl text-black font-bold'>Elevate Your Shopping Experience</h2>
                <p className='text-lg mt-2 text-gray-600 font-medium'>“Discover the latest trends at unbeatable prices.”</p>
            </div>
            <div className='flex flex-wrap'>

            </div>
        </div>
    )
}

export default HomePage