import React, {useState} from 'react'
import { Child } from './Child'


export const Parent = () =>{
    console.log('Parent Render')

    const [count, setCount] = useState(0)
  return (
    <div>
      <button onClick={()=> setCount((c) => c + 1)}>Count - {count}</button>
      <button oncClick={()=> setCount(0)}>Count to 0</button>
      <button oncClick={()=> setCount(5)}>Count to 5</button>
      <Child />
    </div>
  )
}
                    