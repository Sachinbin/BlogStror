import React, { useContext } from 'react'
import { BlogStore } from '../context/BlogContext'
import { useForm } from 'react-hook-form'
import { nanoid } from 'nanoid'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router'

const Register = () => {
    let {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm({ mode: "onChange" })
    let { user, setUser, mode } = useContext(BlogStore)
    let navigate = useNavigate()


    let handleSub = (data) => {
        console.log(data)
        reset()
        let arr = [...user, { ...data, id: nanoid() }]
        setUser(arr)
        toast.success("Registred Successfuly")
        navigate("/auth")
        localStorage.setItem("regUser", JSON.stringify(arr))
    }
    return (
        <div className={`py-30 flex justify-center items-center shadow ${mode ? "text-white bg-black" : ""}`}>
            <div className='border border-gray-200 shadow-2xl p-10 rounded-[15px]'>
                <div className=' flex flex-col justify-center items-center '>
                    <div className={`text-2xl h-12 w-12 bg-blue-600 flex justify-center items-center rounded-[50%] ${mode ? "bg-green-800" : ""}`}>
                        <i className="fa-solid fa-pen"></i>
                    </div>
                    <h1 className='mt-5 text-2xl font-semibold mb-2'>Welcome Back</h1>
                    <p className='text-sm text-gray-600 mb-4'>Sign in to your account to continue</p>
                </div>
                <form onSubmit={handleSubmit(handleSub)}
                    className='flex flex-col gap-5 mb-4'>
                    <div className=' flex flex-col '>
                        <label className='mb-3'>Name</label>
                        <input {...register("name", { required: true })} type="text" className='border border-gray-200 px-3 py-2 rounded-[6px] w-90' placeholder='Ex.Sachin Bind' />
                    </div>
                    <div className=' flex flex-col '>
                        <label className='mb-3'>Email</label>
                        <input {...register("email", { required: true })} className='border border-gray-200 px-3 py-2 rounded-[6px] w-90' type="email" placeholder='example@gmail.com' />
                    </div>
                    <div className=' flex flex-col '>
                        <label className='mb-3'>Password</label>
                        <input
                            {...register("password", { required: true })}
                            type="password"
                            className='border border-gray-200 px-3 py-2 rounded-[6px] w-90'
                            placeholder='Enter the Password' />
                    </div>
                    <div className=' flex flex-col '>
                        <label className='mb-3'>Confirm Password</label>
                        <input
                            type="password"
                            {...register("password", { required: "Please fill the All Field" })}
                            className='border border-gray-200 px-3 py-2 rounded-[6px] w-90'
                            placeholder='Confirm Password' />
                        {errors.password && <p className='text-sm text-red-600'>{errors.password.message}</p>}
                    </div>
                    <button className={`bg-blue-600 p-2 font-bold text-white rounded-[6px] ${mode ? "bg-green-800" : ""}`}>Sign In</button>
                </form>
                <p className='text-center  '>Don't have an account?<span className={`text-blue-600 cursor-pointer hover:underline ${mode ? "text-green-800" : ""}`}>Sign up</span></p>
            </div>
        </div>

    )
}

export default Register
