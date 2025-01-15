import Form from "./components/Form"
import List from "./components/List"
import Navbar from "./components/Navbar"
import EditForm from "./components/EditForm"
import Blog from "./components/Blog"

import { Routes, Route } from "react-router-dom"

import { BlogsProvider } from "./context/BlogsContext"

function App() {
  
  return (
    <>
      <Navbar />
      <h1>Welcome to Blogger!</h1>
      <BlogsProvider>
        <Routes>
          <Route 
            path="/blogs/new" 
            element={<Form />}
          />
          <Route
            path="/blogs"
            element={<List />}
          />
          <Route
            path="/blogs/:id/edit"
            element={<EditForm />}
          />
          <Route
            path="/blogs/:id"
            element={<Blog />}
          />
        </Routes>
      </BlogsProvider>
    </>
  )
}

export default App
