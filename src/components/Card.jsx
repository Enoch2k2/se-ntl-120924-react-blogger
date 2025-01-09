import React from 'react'

const Card = ({ blog }) => {
  return (
    <div>
      <h3>{ blog.title }</h3>
      <p>By: { blog.author }</p>
      <p>{ blog.content }</p>
    </div>
  )
}

export default Card