import React, { useReducer } from 'react'

const initialState = 0
const reducer = (state, action) => {
    // return newState
// reducer accepts 2 parameters and return another one parameter

// instead of newState;
    switch(action){
        case 'increment': 
          return state + 1
        case 'decrement': 
          return state - 1
        case 'reset': 
          return initialState
        default : 
          return state
    }
}

function CounterOne() {
  const [count,dispatch] = useReducer(reducer, initialState)

  return (
    <div>
        <div>Count - {count}</div>
      <button onClick={() => dispatch('increment')}>Increment</button>
      <button onClick={() => dispatch('decrement')}>Decrement</button>
      <button onClick={() => dispatch('reset')}>reset</button>
    </div>
  )
}

export default CounterOne                                  