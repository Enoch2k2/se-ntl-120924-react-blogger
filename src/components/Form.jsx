import React, { useState } from 'react'

const initialState = {
  title: "",
  author: "",
  content: ""
}

const Form = ({ addBlog }) => {
  // const [title, setTitle] = useState("")
  // const [author, setAuthor] = useState("")
  // const [content, setContent] = useState("")

  const [formData, setFormData] = useState(initialState)

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

    addBlog(formData)
    setFormData(initialState)
  }

  return (
    <div>
      <h2>Create Blog</h2>
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
        <button type="submit">Create Blog</button>
      </form>
    </div>
  )
}

export default Form