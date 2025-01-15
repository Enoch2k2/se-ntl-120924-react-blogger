import React, { useContext, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { baseUrl, headers } from '../Global'
import { BlogsContext } from '../context/BlogsContext'

const EditForm = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const {blogs, updateBlog} = useContext(BlogsContext)
  
  const blog = blogs.find(blog => blog.id === id)
  
  if(!blog) {
    return <h3>Blog doesn't exist</h3>
  }

  const [formData, setFormData] = useState({
    title: blog.title,
    author: blog.author,
    content: blog.content
  })

  
    function handleChange(event) {
      // event.target.name // title
      // event.target.value // value of the title input
      const { name, value } = event.target
  
      setFormData({
        ...formData,
        [name]: value
      })
    }
  
    function handleSubmit(event) {
      event.preventDefault()
  
      const options = {
        method: "PATCH",
        headers,
        body: JSON.stringify(formData)
      }
  
      fetch(baseUrl + "/blogs/" + id, options)
        .then(resp => resp.json())
        .then(data => {
          updateBlog(data)
          navigate(`/blogs/${id}`)
        })
    }

  return (
    <div>
      <h3>Edit { blog.title }</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title: </label>
          <input 
            type="text"
            name="title"
            id="title"
            value={formData.title}
            onChange={handleChange} 
          />
        </div><br />
        <div>
          <label htmlFor="author">Author: </label>
          <input 
            type="text"
            name="author"
            id="author"
            value={formData.author}
            onChange={handleChange}
           />
        </div><br />
        <div>
          <label htmlFor="content">Content: </label><br />
          <textarea 
            type="text"
            name="content"
            id="content"
            rows={15}
            cols={50}
            value={formData.content}
            onChange={handleChange}
          >
          </textarea>
        </div>
        <button type="submit">Update Blog</button>
      </form>
    </div>
  )
}

export default EditForm