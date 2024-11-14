type GreetProps = {
    name: string
    messageCount?: number 
    isLoggedIn: boolean
}

export const Greet = (props:GreetProps) => {

  const {messageCount = 0} = props  // if messageCount is passed in use that value if not use 0 as its value.

  return (
    <div>
      <h2>
        { props.isLoggedIn
         ? `Welcome ${props.name}! You have ${messageCount} unread messages`
         : 'Welcom Guest' 
        }
        </h2>
    </div>
  )
}