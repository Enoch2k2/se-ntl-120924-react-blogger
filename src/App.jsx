import { useEffect, useState } from "react"
import Form from "./components/Form"
import List from "./components/List"

import { baseUrl } from "./Global"

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
      <h1>Welcome to Blogger!</h1>
      <Form addBlog={addBlog} />
      <List blogs={blogs} />
    </>
  )
}

export default App
