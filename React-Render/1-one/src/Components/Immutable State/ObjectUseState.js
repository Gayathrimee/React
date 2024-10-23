import React, { useState } from 'react'

const initState = {
    fname:'Bruce',
    lname:'Wayne'
}
export const ObjectUseState = () => {
    const [person, setPerson] = useState(initState)

    const changeName = () =>{
        // person.fname = 'Clark'
        // person.lname = 'Kent'
        // setPerson(person)            //this won't work. we can't directly change a string like this
        
        // right version

        const newPerson = {...person}
        newPerson.fname = 'Clark'
        newPerson.lname = 'kent'
        setPerson(newPerson)

    }

    console.log('ObjectUseState Render')

    return (
    <div>
        <button onClick={changeName}>{person.fname} {person.lname}</button>
    </div>
  )
}
                              
export default ObjectUseState