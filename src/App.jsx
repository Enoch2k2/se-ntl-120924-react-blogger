import { useEffect, useState } from "react"
import Form from "./components/Form"
import List from "./components/List"

import { baseUrl } from "./Global"
import Navbar from "./components/Navbar"

import { Routes, Route } from "react-router-dom"
import Blog from "./components/Blog"
import EditForm from "./components/EditForm"
import Home from "./components/Home"

import { Container } from "@mui/material"

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
      <Container>
      <Routes>
        <Route 
          path="/" 
          element={<Home />}
        />
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
      </Container>
    </>
  )
}

export default App
