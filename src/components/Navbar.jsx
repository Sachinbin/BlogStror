import React from 'react'

const Navbar = () => {
  return (
    <div >
      <nav className='flex px-[180px] justify-between items-center h-15 border shadow-2xl '>
        <div className='flex justify-center items-center'>
            <div className='text-blue-500 text-2xl'>
                <i className="fa-solid fa-pen"></i>
            </div>
            <h1 className='text-xl font-bold'>Inkwell</h1>
        </div>
        <div className='flex items-center gap-5'>
            <i className="fa-regular fa-moon"></i>
            <button className='text-sm font-semibold'>Login</button>
            <button className='text-sm font-semibold text-white px-3 py-2 rounded-xl bg-blue-600'>Sign Up</button>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
