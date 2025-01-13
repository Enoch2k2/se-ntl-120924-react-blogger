import { useEffect, useState } from "react"
import Form from "./components/Form"
import List from "./components/List"

import { baseUrl } from "./Global"
import Navbar from "./components/Navbar"

import { Routes, Route } from "react-router-dom"
import Blog from "./components/Blog"

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
          path="/blogs/:id"
          element={<Blog blogs={blogs} />}
        />
      </Routes>
    </>
  )
}

export default App
