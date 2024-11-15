// type PersonProps = {
//     name: {
//         first: string
//         last: string
//     }
// }

// instead of writing types in here(if in larger components it will be hard to write all types here, so), we're exporting it into another file 

import { PersonProps } from "./10-person.types"

export const Person = (props: PersonProps) => {
    return (
    <div>
        {props.name.first} {props.name.last}
    </div>
    )
}