import React from 'react'
import Navbar from '../Components/Navbar'

const HomePage = () => {
    return (
        <div>
            <Navbar />
            <h1 className='text-4xl font-bold text-center mt-10'>Welcome to our store!</h1>
            <p className='text-center mt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
        </div>
    )
}

export default HomePage