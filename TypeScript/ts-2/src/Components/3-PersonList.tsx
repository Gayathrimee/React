import {Name} from './10-person.types'

// type PersonListProps = {
//     names: {
//         first: string
//         last:string
//     } []
// }

// instead this |^

type PersonListProps = {
    names: Name[]
}
// use this |^

export const PersonList = (props: PersonListProps) => {
    return (
        <div>
            {props.names.map((name) => {
                return (
                    <h2 key={name.first}> 
                    {name.first} {name.last}
                    </h2>
                )
            })}
        </div>
    )
}