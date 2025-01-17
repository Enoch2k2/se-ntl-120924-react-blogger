import { useEffect, useRef, useState } from "react"
import Form from "./components/Form"
import List from "./components/List"

import { baseUrl } from "./Global"
import Navbar from "./components/Navbar"

import { Routes, Route } from "react-router-dom"
import Blog from "./components/Blog"
import EditForm from "./components/EditForm"
import Home from "./components/Home"

import { Container } from "@mui/material"
import { useFullCrud } from "./hooks/blog"

function App() {
  // const [blogs, setBlogs] = useState([])
  const [blogs, fetchBlogs, addBlog, removeBlog, updateBlog] = useFullCrud()
  // const counter = useRef(0)

  useEffect(() => {
    // fetch(baseUrl + "/blogs")
    //   .then(resp => resp.json())
    //   .then(data => setBlogs(data))
    fetchBlogs(baseUrl + "/blogs")
  }, [])

  // function addBlog(blog) {
  //   const updatedblogs = [...blogs, blog]
  //   setBlogs(updatedblogs)
  // }

  // function updateBlog(updatedBlog) {
  //   const updatedBlogs = blogs.map(blog => updatedBlog.id === blog.id ? updatedBlog : blog)

  //   setBlogs(updatedBlogs)
  // }

  // function removeBlog(id) {
  //   const updatedBlogs = blogs.filter(blog => blog.id !== id)
  //   setBlogs(updatedBlogs)
  // }

  return (
    <>
      <Navbar />
      <Container>
        {/* {counter.current}
        <button onClick={() => counter.current++}>Increment!</button>
        <button onClick={() => console.log(counter.current)}>Log Counter</button> */}
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
