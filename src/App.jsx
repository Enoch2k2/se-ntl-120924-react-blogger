import { useEffect, useState } from "react"
import Form from "./components/Form"
import List from "./components/List"

import { baseUrl } from "./Global"
import Navbar from "./components/Navbar"

import { Routes, Route } from "react-router-dom"
import Blog from "./components/Blog"
import EditForm from "./components/EditForm"

function App() {
  const [blogs, setBlogs] = useState([])

  useEffect(() => {
    fetch(baseUrl + "/blogs")
      .then(resp => resp.json())
      .then(data => setBlogs(data))
  }, [])

  function addBlog(blog) {
    const updatedblogs = [...blogs, blog]
    setBlogs(updatedblogs)
  }

  function updateBlog(updatedBlog) {
    const updatedBlogs = blogs.map(blog => updatedBlog.id === blog.id ? updatedBlog : blog)

    setBlogs(updatedBlogs)
  }

  function removeBlog(id) {
    const updatedBlogs = blogs.filter(blog => blog.id !== id)
    setBlogs(updatedBlogs)
  }

  return (
    <>
      <Navbar />
      <h1>Welcome to Blogger!</h1>
      <Routes>
        <Route 
          path="/blogs/new" 
          element={<Form addBlog={addBlog} />}
        />
        <Route
          path="/blogs"
          element={<List blogs={blogs} />}
        />
        <Route
          path="/blogs/:id/edit"
          element={<EditForm blogs={blogs} updateBlog={ updateBlog } />}
        />
        <Route
          path="/blogs/:id"
          element={<Blog blogs={blogs} removeBlog={removeBlog} />}
        />
      </Routes>
    </>
  )
}

export default App
