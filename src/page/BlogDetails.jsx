import React, { useContext } from 'react'
import { useNavigate, useParams } from 'react-router'
import { BlogStore } from '../context/BlogContext'
import BlogContent from '../components/BlogContent'

const BlogDetails = () => {
  let navigate = useNavigate()
  let { id } = useParams()
  let { blogformData ,mode,setLoggedOut} = useContext(BlogStore);
  let item = blogformData.find((elem) => elem.id === Number(id));
  console.log(id)
  console.log(item)

  if (!item) {
  return <h1 className='px-[180px] text-3xl font-bold mt-20'>Loading...</h1>
}
  return (
    <div  className={`w-full flex justify-center py-30 ${mode?"bg-black text-white":""}`}>
      <div className='w-[60%]'>

        <p onClick={() => navigate("/")} className='text-gray-500 w-fit text-[15px] cursor-pointer mb-7'>
          ← Back to Articles
        </p>


        <div className='flex gap-2 mb-3 flex-wrap'>
          {(item.category || [])?.map((elem) => {
           return <p className={`bg-gray-200 px-2 py-1 rounded-[8px] text-[12px] font-semibold  ${mode?"bg-gray-400":""}`} >{elem}</p>
          })}
        </div>

        <p className='text-4xl font-bold mb-6'>
          {item.title}
        </p>

        <div className='flex items-center gap-5 text-gray-500 text-sm mb-7'>
          <div className='flex items-center gap-1'>
            <i className="fa-regular fa-user"></i>
            <p>{item.author}</p>
          </div>

          <div className='flex items-center gap-1'>
            <i className="fa-regular fa-calendar-days"></i>
            <p>{item.date}</p>
          </div>
        </div>

        <div className=' leading-7'>
          <p className='mb-10'>
           {(item || null)?.description}
          </p>

          {
            (item.content || [])?.map((elem) => {
              return <BlogContent elem={elem} key={elem.id}/>
            })
          }
         

          
        </div>

      </div>
    </div>
  )
}

export default BlogDetails

