import React, { useEffect, useState } from 'react'

function HookMouse() {

    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

    const logMousePosition = e => {
        console.log('Mouse event')
        setX(e.clientX)
        setY(e.clientY)
    }

    useEffect(() =>{
        console.log('useEffect called')
        window.addEventListener('mousemove', logMousePosition)

        return()=>{
            console.log('component unmounting code')
            window.addEventListener('mousemove', logMousePosition)   // seems to be not needed
        }
    }, [])

  return (
    <div>
      Hooks X - {x} Y - {y}
    </div>
  )
}

export default HookMouse