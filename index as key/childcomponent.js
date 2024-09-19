import React from 'react'

function ChildComponent(props) {
  return (
    <div>
      {/* <button onClick={props.greetHandler}>Greet Parent</button> */}

      {/* using arrow function:  */}
      <button onClick={() => props.greetHandler('child')}>Greet Parent</button>
      {/* here we can pass any number of parameters. It's the advantage of using arrow fn */}
    </div>
  )
}

export default ChildComponent