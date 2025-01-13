import React from 'react'
import { useOutletContext } from 'react-router-dom'

const Example = () => {

  const { blogs } = useOutletContext()

  console.log(blogs)

  return (
    <div>Example</div>
  )
}

export default Example