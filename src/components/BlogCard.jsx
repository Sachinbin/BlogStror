import React from 'react'
import { useNavigate } from 'react-router'

const Card = ({elem}) => {
  let navigate =useNavigate()
  return (
    <div onClick={()=>navigate(`/blog/${elem.id}`)} className='border-1 border-gray-700 w-80 h-fit rounded-[10px] p-5 mt-10 shadow-2xl'>
      <div className='flex flex-col gap-1'>
        <div className='flex gap-2'>
          <p className='bg-gray-200 px-2 py-1 rounded-[8px] text-[12px] font-semibold'>{elem.category[0]}</p>
          <p className='bg-gray-200 px-2 py-1 rounded-[8px] text-[12px] font-semibold'>{elem.category[1]}</p>
        </div>
        <div>
          <p className='bg-gray-200 px-2 py-1 rounded-[8px] w-fit text-[12px] font-semibold'>{elem.category[2]}</p>
        </div>
      </div>
      <p className='font-bold text-xl mt-1 w-[60%]'>{elem.title}</p>
      <div className='mt-10 w-[90%] text-gray-600'>
        <p>{elem.description}</p>
      </div>
      <div className='flex items-center justify-between mt-5'>
        <div className='flex justify-center items-center text-gray-500 text-sm gap-1'>
          <i className="fa-regular fa-user"></i>
          <p>{elem.author}</p>
        </div>
        <div className='flex justify-center items-center text-gray-500 text-sm gap-1'>
          <i className="fa-regular fa-calendar-days"></i>
          <p>{elem.date}</p>
        </div>
      </div>
    </div>
  )
}

export default Card
