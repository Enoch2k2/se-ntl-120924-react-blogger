import React, { useContext } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { baseUrl } from '../Global'
import { BlogsContext } from '../context/BlogsContext'

const Blog = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const { blogs, removeBlog } = useContext(BlogsContext)

  const blog = blogs.find(blog => blog.id === id)

  if(!blog) {
    return <h3>Blog doesn't exist</h3>
  }

  function handleDelete(event) {
    event.preventDefault()
    
    const options = {
      method: "DELETE"
    }

    fetch(baseUrl + "/blogs/" + id, options)

    removeBlog(id)

    navigate("/blogs")
  }

  return (
    <div>
      <h3>{blog.title}</h3>
      <p>By: {blog.author}</p>
      <p>{blog.content}</p>
      <Link to={`/blogs/${id}/edit`}>Edit</Link>
      <a href="#" style={{ marginLeft: '10px'}} onClick={handleDelete}>Delete</a>
    </div>
  )
}

export default Blog