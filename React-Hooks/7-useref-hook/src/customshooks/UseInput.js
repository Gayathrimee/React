import React, { useState } from 'react'

function UseInput(initalValue) {

    const [value, setValue] = useState(initalValue)
    const reset = () =>{
        setValue(initalValue)
    }
    const bind = {
        value, 
        onchange: e =>{
            setValue(e.target.value)
        }
    }
  return [value, bind, reset]
}

export default UseInput
