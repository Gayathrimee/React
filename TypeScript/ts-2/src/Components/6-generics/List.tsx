type ListProps = {
    items: string[] | number[]  
    onClick: (value: string | number) => void
}

export const List = ({ items, onClick}: ListProps) => {
    return (
        <div>
            <h2>List of items</h2>
            {items.map((item,index) => {
                return (
                    <div key = {index} onClick={() => onClick(item)}>
                        {item}
                    </div>
                )
            })}
        </div>
    )
}

// since we need to specify each type, we are adding a generic type so that we can use any type of data
// rewriting this code into list2.tsx 