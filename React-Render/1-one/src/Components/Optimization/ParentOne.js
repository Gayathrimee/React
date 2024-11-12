import React, { useState } from 'react'
import ChildOne from './ChildOne'

const ParentOne = () => {

    const [count, setCount] = useState(0)

    console.log('Parent Render')
  return (
    <div>
        <button onClick={()=> setCount((c) => c + 1)}>Count - {count}</button> 
        <ChildOne />
    </div>
  )
}

export default ParentOne              