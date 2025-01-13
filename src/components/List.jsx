import React from 'react'
import Card from './Card'
import { Outlet, useOutletContext } from 'react-router-dom'

const List = () => {
  const { blogs } = useOutletContext()

  const blogCards = blogs.map((blog, idx) => <Card key={idx+1} blog={blog} />)

  return (
    <div>
      <h2>Blog List</h2>
      <Outlet context={{ blogs }}/>
      <div>
        {blogCards}
      </div>
    </div>
  )
}

export default List