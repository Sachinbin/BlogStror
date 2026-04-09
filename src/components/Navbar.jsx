import React, { useContext } from 'react'
import { BlogStore } from '../context/BlogContext'
import { useNavigate } from 'react-router'
import { toast } from 'react-toastify'

const Navbar = () => {
  let { mode, setMode, isLoggedIn ,loggedOut,setLoggedOut,setIsLoggedIn } = useContext(BlogStore)
  let navigate = useNavigate()
  // console.log(mode)
  return (
    <div  >
      <nav className={`flex px-[180px] justify-between items-center h-15 border shadow border-b border-gray-200 fixed top-0 w-full backdrop-blur-2xl ${mode ? "bg-black text-white" : ""} `}>
        <div onClick={() => navigate("/")} className='flex justify-center items-center cursor-pointer'>
          <div className={`text-blue-500 text-2xl ${mode ? "text-green-800" : ""}`}>
            <i className="fa-solid fa-pen"></i>
          </div>
          <h1 className={`text-xl font-bold`}>Inkwell</h1>
        </div>
        <div className='flex items-center gap-5 '>
          <div onClick={() => setMode((prev) => !prev)}>

            {
              mode ? <i className="fa-solid fa-sun"></i> : <i className="fa-regular fa-moon"></i>
            }
          </div>
          {
            isLoggedIn ? 
            <div onClick={()=>setLoggedOut((prev)=>!prev)}
             className='flex justify-center items-center gap-2 hover:bg-green-800 hover:px-4 py-1 hover:text-white rounded-[15px]'>
              <h1 className='bg-blue-700 px-3 py-1 rounded-[50%] text-white font-bold'>{isLoggedIn?.name?.substring(0,1).toUpperCase()}</h1>
              <p className='font-bold '>{isLoggedIn?.name}</p>
            </div> :
              <div className='flex gap-3'>
                <button onClick={() => navigate('/auth')} className='text-sm font-semibold hover:bg-green-700 hover:px-4 rounded-[12px] hover:text-white'>Login</button>
                <button onClick={() => navigate('/auth/register')} className={`text-sm font-semibold text-white px-3 py-2 rounded-xl bg-blue-500 ${mode ? "bg-green-800" : ""}`}>Sign Up</button>
              </div>
          }
        </div>
      </nav>
      {loggedOut?
      <div className='fixed bg-white right-22 top-14 h-fit w-50 rounded-[14px] shadow border border-gray-200 ' >
        <div className='px-3 py-0 flex flex-col'>
          <h1 className='font-semibold'>{isLoggedIn?.name}</h1>
          <p className='text-[12px] text-gray-700'>{isLoggedIn?.email}</p>
          <p className='text-[12px] text-gray-700'>Auther</p>
        </div>
        <hr />
        <div onClick={()=>navigate('/dashboard')}
         className=' px-3 py-1 flex gap-3 items-center text-gray-600 hover:bg-green-500  hover:text-white'>
          <i class="fa-solid fa-list"></i>
          <h1 className='text-sm text-black'>Dashboard</h1>
        </div>
        <hr />
        <div onClick={()=>{
          setIsLoggedIn(null)
          localStorage.removeItem("logUr")
          toast.success("logged out")
          navigate("/auth")
        }} className=' px-3 py-1 flex gap-3 items-center text-gray-600 hover:bg-green-500 rounded-b-[14px]'>
          <i class="fa-solid fa-arrow-right-from-bracket"></i>
          <h1 className='text-red-600'>Logout</h1>
        </div>

      </div>:""}
    </div>
  )
}

export default Navbar
