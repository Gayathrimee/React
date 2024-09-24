import React, {useState} from 'react'

function HookCounter() {

  const [count,setCount] = useState(0)
  // (0) : taking an initial value of the state varible as 0 
  // count : current value of the state variable
  // setCount : a method that can update the state variable

  return (
    <div>
      <button onClick = {() => setCount(count + 1)} >Count {count}</button>
    </div>
  )
}

export default HookCounter 
                                              