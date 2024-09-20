// contexts

// 3 steps ;

// 1. Create a UserContext
// 2. Provide a Context Value 
// 3. Consume the Context Value

// eg: 

function Content(){
    return (
        <ThemeContext.Consumer>
            {theme => (
                <UserContext.Consumer>
                    {user => (
                        <ProfilePage user = {user} theme = {theme} />
                    )}
                </UserContext.Consumer>
            )}
        </ThemeContext.Consumer>
    )
}

// we have 2 contexts here 

// 1. Theme Context            2. User Context 

// 1. Theme Context Consumer accepts a function as a child passing the theme value
// 2. Within the fn body we have another fn as a child which provides the user context value 

// Both of them are then passed as props to a component