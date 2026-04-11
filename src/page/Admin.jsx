import React, { useContext } from 'react'
import { useNavigate } from 'react-router'
import { BlogStore } from '../context/BlogContext'

const Admin = () => {
    let navigate =useNavigate()
    let {mode,setLoggedOut} = useContext(BlogStore)
    return (
        <div onDoubleClick={()=>setLoggedOut((prev)=>!prev)} className={`py-30 px-[180px] ${mode?"bg-black text-white":""}`}>
            <div className='flex justify-between items-center mb-10'>
                <div >
                    <h1 className='text-3xl font-bold'>Dashboard</h1>
                    <p className='text-gray-600 text-[16px] '>Manage your articles, sachin</p>
                </div>
                <button onClick={() => navigate('/dashboard/new')}
                 className={`bg-blue-500 p-2 gap flex gap-4 items-center text-white font-semibold text-sm rounded-[10px] ${mode?"bg-green-800":""}`}><i class="fa-solid fa-plus"></i> New Article</button>
            </div>
            <div className='flex justify-between mb-10'>
                <div className={`h-30 w-80 shadow rounded-[15px]  border border-gray-200 p-5 ${mode?"bg-black text-white":""} `}>
                    <h1 className='text-gray-600'>Total Articles</h1>
                    <p className='text-3xl font-bold'>0</p>
                </div>
                <div className={`h-30 w-80 shadow rounded-[15px]  border border-gray-200 p-5 ${mode?"bg-black":""} `}>
                    <h1 className='text-gray-600'>Published</h1>
                    <p className='text-3xl font-bold text-green-600'>0</p>
                </div>
                <div className={`h-30 w-80 shadow rounded-[15px]  border border-gray-200 p-5 ${mode?"bg-black text-white":""} `}>
                    <h1 className='text-gray-600'>Drafts</h1>
                    <p className='text-3xl font-bold text-gray-700'>0</p>
                </div>
            </div>
            <div >
                <h1 className='text-xl font-bold mb-4'>Your Articles</h1>
                <div className={`h-80  shadow w-full  border border-gray-200 rounded-[15px] flex flex-col justify-center items-center gap-1 ${mode?"bg-black":""}`}>
                    <div className='text-5xl text-gray-500'>
                        <i className="fa-regular fa-file-lines"></i>
                    </div>
                    <h1 className='font-bold text-xl'>No articles yet</h1>
                    <p className='text-sm'>Start writing your first article</p>
                    <button onClick={() => navigate('/dashboard/new')} className={`bg-blue-500 p-2 gap flex gap-4 items-center text-white font-semibold text-sm rounded-[10px] ${mode?"bg-green-800":""}`}><i class="fa-solid fa-plus"></i> Create Article</button>
                </div>
            </div>
        </div>
    )
}

export default Admin
