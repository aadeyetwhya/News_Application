import React from 'react'
import { useSelector } from 'react-redux'

function Test() {
    const mode=useSelector(state=>state.lightMode)
    console.log(mode)

  return (
    <div>
      <h1>Test</h1>
    </div>
  )
}

export default Test
