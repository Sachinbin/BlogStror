import React, { useContext } from 'react'
import Card from '../components/BlogCard'
import { BlogStore } from '../context/BlogContext'

const Home = () => {
  let {blogformData ,mode}= useContext(BlogStore)
  // console.log(blogformData)

  return (
    <div className={`px-[180px] ${mode?"bg-black text-white":""}  py-30`}>
      <div className='flex flex-col justify-center items-center'>
        <h1 className='font-bold text-5xl'>Welcome to <span className={`text-blue-600  ${mode?"text-green-800":""}`}>Inkwell</span></h1>
        <p className='text-[18px] text-center text-gray-600 mt-5 '>Discover thoughtful articles on technology, programming, and software <br />engineering from passionate writers.</p>
      </div>
      <div className='flex justify-between mt-18'>
        <h1 className='font-bold text-2xl'>
          Latest Articles
        </h1>
        <p className='text-[15px] text-gray-600'>3 articles</p>
      </div>
     <div className='flex gap-10'>
       {
        blogformData.map((elem)=>{
          return <Card elem={elem} key={elem.id}/>
        })
      }
     </div>
    </div>
  )
}

export default Home
