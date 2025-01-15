import { createContext, useState, useEffect } from "react";
import { baseUrl } from "../Global"

export const BlogsContext = createContext({})

export function BlogsProvider({ children }) {
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


  return <BlogsContext.Provider value={{ blogs, addBlog, updateBlog, removeBlog }}>{children}</BlogsContext.Provider>
}

