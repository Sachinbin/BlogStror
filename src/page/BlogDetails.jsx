import React, { useContext } from 'react'
import { useParams } from 'react-router'
import { BlogStore } from '../context/BlogContext'

const BlogDetails = () => {
  let {id} = useParams()
  let {blogformData} = useContext(BlogStore);
  let item = blogformData.find((elem) => elem.id === Number(id));
  console.log(item)

  return (
    <div>
      <h1>blog det</h1>
    </div>
  )
}

export default BlogDetails

