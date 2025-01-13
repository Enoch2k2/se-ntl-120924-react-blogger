import { useEffect, useState } from "react"

import { baseUrl } from "./Global"
import { Outlet } from "react-router-dom"
import Navbar from "./components/Navbar"

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
      <Outlet context={{ blogs, addBlog }} />
    </>
  )
}

export default App
