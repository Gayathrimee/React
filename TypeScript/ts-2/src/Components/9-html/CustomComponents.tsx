import React from 'react'
import { Greet } from '../1-Greet' 

const CustomComponents = (props: React.ComponentProps<typeof Greet>) => {
  return <div> {props.name} </div>
}

export default CustomComponents
