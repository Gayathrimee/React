import {useState} from 'react'

function useCounter(intialCount = 0,interval) {
    const [count, setCount] = useState(intialCount)
    
    const increment = ()=>{
        setCount(prevCount => prevCount + interval)
    }
        
    const decrement = ()=>{
        setCount(prevCount => prevCount - interval)
    }
        
    const reset = ()=>{
        setCount(intialCount)
    }

  return [count, increment, decrement, reset]
}

export default useCounter
