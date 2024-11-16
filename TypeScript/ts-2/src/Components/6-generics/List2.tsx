// reWritten version of List.tsx
// Using GENERICS

type ListProps<T> = {
    items: T[]  
    onClick: (value: T) => void
}

export const List2 = <T extends {}>({ items, onClick}: ListProps<T>) => {

/* export const List2 = <T extends string | number>({ items, onClick}: ListProps<T>) => {
 => if want to specify any types, we can use like this.*/

    return (
        <div>
            <h2>List of items</h2>
            {items.map((item,index) => {
                return (
                    <div key = {index} onClick={() => onClick(item)}>
                    {renderItem(item)}          {/* was 1st {item} only, then showed error. so we gpt gave the solution */}                    {/* {typeof item === 'object'? JSON.stringify(item) : item} */}
                    {/* {typeof item === 'object'? JSON.stringify(item) : item} */}
                    </div>
                )
            })}
        </div>
    )
} 


// gpt's solution for error:

// Utility function to handle different item types
function renderItem<T>(item: T): React.ReactNode {
    if (typeof item === 'object' && item !== null) {
        return <pre>{JSON.stringify(item, null, 2)}</pre>; // Nicely formatted object
    }
    return item as React.ReactNode; // String or number safe rendering
} 