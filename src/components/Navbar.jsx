import React, { useContext } from 'react'
import { BlogStore } from '../context/BlogContext'
import { useNavigate } from 'react-router'

const Navbar = () => {
  let {mode, setMode } = useContext(BlogStore)
  let navigate = useNavigate()
  // console.log(mode)
  return (
    <div  >
      <nav className={`flex px-[180px] justify-between items-center h-15 border shadow-2xl border-b border-gray-200 fixed top-0 w-full backdrop-blur-2xl ${mode?"bg-black text-white":""} `}>
        <div onClick={()=>navigate("/")} className='flex justify-center items-center cursor-pointer'>
          <div className={`text-blue-500 text-2xl ${mode?"text-green-800":""}`}>
            <i className="fa-solid fa-pen"></i>
          </div>
          <h1 className={`text-xl font-bold`}>Inkwell</h1>
        </div>
        <div className='flex items-center gap-5 '>
          <div onClick={()=>setMode((prev)=> !prev)}>
            
            {
              mode?<i className="fa-solid fa-sun"></i>:<i className="fa-regular fa-moon"></i>
            }
          </div>
          <button onClick={()=>navigate('/auth')} className='text-sm font-semibold'>Login</button>
          <button onClick={()=>navigate('/auth/register')} className={`text-sm font-semibold text-white px-3 py-2 rounded-xl bg-blue-600 ${mode?"bg-green-800":""}`}>Sign Up</button>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
