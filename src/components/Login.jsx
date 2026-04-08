import React, { useContext } from 'react'
import { BlogStore } from '../context/BlogContext'

const Login = () => {
    let {mode}= useContext(BlogStore)
    return (
        <div className={`py-30 flex justify-center items-center shadow-2xl ${mode?"text-white bg-black":""}`}>
            <div className='border border-gray-200 shadow-2xl p-10 rounded-[15px]'>
                <div className=' flex flex-col justify-center items-center '>
                    <div className={`text-2xl h-12 w-12 bg-blue-600 flex justify-center items-center rounded-[50%] ${mode?"bg-green-800":""}`}>
                        <i className="fa-solid fa-pen"></i>
                    </div>
                    <h1 className='mt-5 text-2xl font-semibold mb-2'>Welcome Back</h1>
                    <p className='text-sm text-gray-600 mb-4'>Sign in to your account to continue</p>
                </div>
                <form  className='flex flex-col gap-5 mb-4'>
                    <div className=' flex flex-col '>
                        <label className='mb-3'>Email</label>
                        <input className='border border-gray-200 px-3 py-2 rounded-[6px] w-90' type="email" placeholder='example@gmail.com' />
                    </div>
                   <div className=' flex flex-col '>
                        <label className='mb-3'>Password</label>
                        <input type="password" className='border border-gray-200 px-3 py-2 rounded-[6px] w-90' type="email" placeholder='Enter the Password' />
                    </div>
                    <button className={`bg-blue-600 p-2 font-bold text-white rounded-[6px] ${mode?"bg-green-800":""}`}>Sign In</button>
                </form>
                <p className='text-center  '>Don't have an account?<span className={`text-blue-600 cursor-pointer hover:underline ${mode?"text-green-800":""}`}>Sign up</span></p>
            </div>
        </div>
    )
}

export default Login
