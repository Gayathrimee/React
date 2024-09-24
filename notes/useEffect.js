//                      useEffect

// The Effect Hook lets you perform side effects iin functional components
// It is a close replacement for componentDidMount, componentDidUpdate, and 
// componentWillUnmount

//                      multiple useEffects

function FriendsStatusWithCounte(props){
    const [count, setCount] = useState(0)

    useEffect (() => {
        document.title = `You clicked ${count} times`
    })

    const [isOnline, setIsOnline] = useState(null)

    useEffect(() => {
        function handleStatusChange(status){
            setIsOnline(status.isOnline)
        }

        ChatAPI.suscribeToFriendStatus(props.friend.id, handleStatusChange);
        return () =>{
            ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange)
        }
    })
} 