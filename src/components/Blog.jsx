import React from 'react'
import { useParams } from 'react-router-dom'

const Blog = ({ blogs }) => {
  const { id } = useParams()

  const blog = blogs.find(blog => blog.id === id)

  if(!blog) {
    return <h3>Blog doesn't exist</h3>
  }

  return (
    <div>
      <h3>{blog.title}</h3>
      <p>By: {blog.author}</p>
      <p>{blog.content}</p>
    </div>
  )
}

export default Blog