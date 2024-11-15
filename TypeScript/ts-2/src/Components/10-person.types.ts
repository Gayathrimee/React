// export type PersonProps = {
//     name: {
//         first: string
//         last: string
//     }
// }

// Extracting this name object into a separate type 

export type Name = {
    first: string
    last: string
}

export type PersonProps = {
    name: Name
}