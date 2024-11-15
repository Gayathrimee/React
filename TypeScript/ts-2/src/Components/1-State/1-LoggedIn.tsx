//Here We have data that can change. What we need is a state variable. Using StateHook to manage its types:
// steps 
//1. Import useState from React
//2. Create a logged in state variable whose initial value is false. 
//3. Conditionally render the user inside the div tag
// 4. We define the handler fn

// And this is our fully Functional Components. And we've got it done without having to write a single line of ts code

import { useState } from "react"        //step 1

export const LoggedIn = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(false)         //step 2

    // const handleLogin = () => {}
    const handleLogin = () => {
        setIsLoggedIn(true)             // step 4
    }

    // const handleLogout = () => {}
    const handleLogout = () => {
        setIsLoggedIn(false)            // step 4       (if use 0 instead of false it shows error. its based the value we give in the useState(). if give any numbe there, isLoggedin's type becomes 'number')
    }


    return (
        <div>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Logout</button>
            {/* <div>User is logged in/ logged out</div> */}
            <div>User is {isLoggedIn ? 'logged in' : 'logged out'} </div>       {/* step 3 */} { /* so if user is logged in? render the text 'logged in' else render 'logged out' */ }
        </div>
    )
}