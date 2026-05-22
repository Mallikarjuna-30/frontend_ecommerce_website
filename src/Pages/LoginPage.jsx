import React from 'react'

const LoginPage = () => {
    return (
        <div className='flex min-h-screen w-full bg-gray-200 items-center justify-center p-5'>
            <div className=' container w-[800px] h-[500px] bg-white rounded-2xl shadow-[5px_10px_20px_0px_rgba(0,0,0,0.1)] overflow-hidden border-gray-300 ml-35'>
                <div className='flex w-full h-full gap-5'>
                    <div className='flex flex-col h-full w-full justify-center items-center'>
                        <h1 className='text-4xl font-bold text-center mb-10'>Login</h1>
                        <div className=' flex flex-col items-center justify-center'>
                            <form action="" className='flex flex-col gap-5'>
                                <div className='flex flex-col'>
                                    <label htmlFor="username" className='mb-2 text-xl font-semibold'>Username</label>
                                    <input type="text" placeholder='Username' className='border border-gray-300 p-2 rounded w-[300px]' />
                                </div>
                                <div className='flex flex-col'>
                                    <label htmlFor="password" className='mb-2 text-xl font-semibold'>Password</label>
                                    <input type="password" placeholder='Password' className='border border-gray-300 p-2 rounded w-[300px]' />
                                </div>
                                <button type="submit" className='w-[300px] m-auto bg-blue-500 text-white p-2 rounded mt-10'>Login</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex flex-col text-black h-full w-full justify-center items-center'>
                <h2 className='text-4xl font-bold text-center mb-10'>Welcome to our store!</h2>
                <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
            </div>
        </div>
    )
}

export default LoginPage