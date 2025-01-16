import React from 'react'

function BlueHeader({ children }) {
  return (
    <div>
      <h1 style={{color: "blue"}}>{children}</h1>
    </div>
  )
}

export default BlueHeader