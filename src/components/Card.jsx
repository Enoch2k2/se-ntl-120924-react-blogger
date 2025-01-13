import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({ blog }) => {
  return (
    <div>
      <h3><Link to={`/blogs/${blog.id}`}>{ blog.title }</Link></h3>
      <p>By: { blog.author }</p>
      <p>{ blog.content }</p>
    </div>
  )
}

export default Card