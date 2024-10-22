import React, {useState, useCallback} from 'react'
import Count from './Count.js'
import Button from './Button.js'
import Title from './Title.js'


function ParentComponent() {

    const [age, setAge] = useState(23)
    const [salary, setSalary] = useState(50000)

    const incrementAge = useCallback(() =>{
      setAge(age + 1)
    }, [age])

    const incrementSalary = useCallback(() =>{
      setSalary(salary + 15000)
    }, [salary])
              
  return (                                                                                                                         
    <div>
      <Title />
        <Count text = 'Age' count = {age} />
        <Button handleClick = {incrementAge}>increment Age</Button>
        <Count text = "salary" count = {salary}/>
        <Button handleClick = {incrementSalary}>Increment Salary</Button>
    </div>
  )
}

export default ParentComponent
