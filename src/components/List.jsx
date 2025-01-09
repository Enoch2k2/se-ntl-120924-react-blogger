import React from 'react'
import Card from './Card'

const List = ({ blogs }) => {

  const blogCards = blogs.map((blog, idx) => <Card key={idx+1} blog={blog} />)

  return (
    <div>
      <h2>Blog List</h2>
      <div>
        {blogCards}
      </div>
    </div>
  )
}

export default List