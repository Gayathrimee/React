import React, { useState, useEffect } from 'react'

function HookCounterOne() {
    const [count, setCount] = useState(0)
    const [name, setName] = useState('')

    useEffect(() =>{
      console.log('useEffect - Updating document title')
        document.title = ` You clicked ${count} times`
    }, [count])
              
  return (
    <div>
      <input type='text' value={name} onChange={e => setName(e.target.value)} />
      <button onClick={() => setCount(count + 1)}>
        Clicked {count} times
      </button>
    </div>
  )
}

export default HookCounterOne

// In ClassCounterOne.js (Class Component), when clicked on button increase the count in the title along with the count in the button
// To apply this in the functional component we use useEffect'