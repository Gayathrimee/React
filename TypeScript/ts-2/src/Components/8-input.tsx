import React from "react"

type InputProps = {
    value: string
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export const Input = (props: InputProps) => {  
    return <input type="text" value={props.value} onChange={props.handleChange} />
} 


//  or

export const Input2 = (props: InputProps) => {  
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(event)
    }

    return <input type="text" value={props.value} onChange={handleInputChange} />
}


//  or

// we can destructure props when defining components 

export const Input3 = ({value, handleChange}: InputProps) => {
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(event)
    }
    return <input type = 'text' value={value} onChange={handleInputChange}
}