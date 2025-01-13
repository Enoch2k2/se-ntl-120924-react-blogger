import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <ul>
      <li><Link to="/blogs">Blog List</Link></li>
      <li><Link to="/blogs/new">Blog Form</Link></li>
    </ul>
  )
}

export default Navbar