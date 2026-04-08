import React from 'react'

const BlogContent = ({elem}) => {
  return (
    <div>
       <p className='font-semibold text-2xl mb-10'>{elem.heading}</p>
          <p className='mb-12 t'>
            {elem.text}
          </p>
    </div>
  )
}

export default BlogContent
