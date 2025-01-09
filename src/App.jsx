import { useState } from "react"
import Form from "./components/Form"
import List from "./components/List"

function App() {
  const [blogs, setBlogs] = useState([])

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
