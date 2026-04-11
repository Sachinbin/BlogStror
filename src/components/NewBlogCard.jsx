import React from 'react'
import { useContext } from 'react'
import { BlogStore } from '../context/BlogContext'
import { data, useNavigate } from 'react-router'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'


const NewBlogCard = () => {
  let { mode, blogformData, setBlogFormData, isLoggedIn, user } = useContext(BlogStore)
  let navigate = useNavigate()
  let {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm({
    mode: "onChange"
  })
  let res = user.find((elem) => {
    return elem.email === isLoggedIn.email && elem.password === isLoggedIn.password
  })

  // console.log(res)

  let handleSub = (data) => {
    let newBlog = {
      id: res?.id, // unique id
      title: data.title,
      description: data.excerpt,
      category: [data.tag], // array hona chahiye
      content: [data.content], // array bana (important)
      author: res?.name || "Anonymous",
      date: new Date().toLocaleDateString()
    }

    let arr = [...(blogformData || []), newBlog]
    setBlogFormData(arr)
    localStorage.setItem("blogs", JSON.stringify(arr))
    console.log("Saved:", arr)
    navigate("/dashboard")
    toast.success("Blog created successfuly")
    reset()

  }
  return (
    <div className={`py-25 px-[180px] ${mode ? "bg-black text-white" : ""}`}>
      <div className='px-15'>
        <p onClick={() => navigate("/dashboard")}
          className={`text-sm text-gray-600 w-fit hover:text-black cursor-pointer flex gap-2 items-center mb-5 ${mode ? "hover:text-gray-300" : ""}`}><i class="fa-solid fa-arrow-left"></i>Back to Dashboard</p>
        <form
          onSubmit={handleSubmit(handleSub)}
          className='flex flex-col gap-5 mb-4 border border-gray-200 p-5 shadow rounded-[18px]'>
          <h1 className=' font-semibold mb-4'>Create New Article</h1>
          <div className=' flex flex-col '>
            <label className='mb-3 text-sm '>Title</label>
            <input
              {...register("title", { required: "Please Fill the title" })}
              type="text"
              className='border border-gray-200 px-3 py-2 rounded-[6px] text-sm'
              placeholder='Enter a compelling title...' />
            {errors.title && <p className='text-sm text-red-600'>{errors.title.message}</p>}
          </div>
          <div className=' flex flex-col '>
            <label className='mb-3 text-sm '>Excerpt</label>
            <textarea
              {...register("excerpt", { required: "Please Fill the excerpt" })}
              className='border border-gray-200 text-sm px-3 py-2 rounded-[6px] ' type="text" placeholder='Write a brief summary of your article...' ></textarea>
            <p className='text-[13px] mt-1 text-gray-600'>A short description that appears on the blog listing</p>
            {errors.excerpt && <p className='text-sm text-red-600'>{errors.excerpt.message}</p>}
          </div>
          <div className=' flex flex-col '>
            <label className='mb-3 text-sm '>Content</label>
            <textarea
              {...register("content", { required: "Please Fill the content" })}
              type="text" className='border text-sm border-gray-200 px-3 py-2 rounded-[6px]' placeholder='Write your article content here...'></textarea>
            <p className='text-[13px] mt-1 text-gray-600'>Supports Markdown: ## for headers, **bold**, *italic*, `code`, etc.</p>
            {errors.content && <p className='text-sm text-red-600'>{errors.content.message}</p>}
          </div>
          <div className=' flex flex-col '>
            <label className='mb-3 text-sm '>Tag</label>
            <input
              {...register("tag", { required: "Please Fill the tag" })}
              type="text" className='border text-sm border-gray-200 px-3 py-2 rounded-[6px]' placeholder='Add tags (press Enter to add)' />
            <p className='text-[13px] mt-1 text-gray-600'>Add up to 5 tags to help readers find your article</p>
            {errors.tag && <p className='text-sm text-red-600'>{errors.tag.message}</p>}
          </div>
          <div className='flex justify-between items-center'>
            <div></div>
            <div className='flex gap-4'>
              <button className={` bg-amber-50 text-sm shadow text-black p-2 font-semibold flex items-center gap-4 rounded-[6px] ${mode ? "bg-gray-400" : ""}`}><i class="fa-regular fa-floppy-disk"></i>Save as Draft</button>
              <button type='submit' className={`bg-blue-600 p-2 text-sm font-semibold flex items-center gap-4  text-white rounded-[6px] ${mode ? "bg-green-800" : ""}`}><i class="fa-solid fa-paper-plane"></i>Publish</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}



export default NewBlogCard
