// Error Handling Phase Methods:

// are of 2 types:

// 1. Static getDerivedStateFromError(error)
// 2. ComponentDidCatch(error,info)

// if we could catch the error anywhere in the component tree and display a fallback UI.
// And this is where Error Boundary takes the spotlight 

// * Error Boundary : A class component that implements either one or both of the lifecycle methods 
//                     getDerivedStateFromError or ComponentDidCatch becomes an error boundary 

// -> The static method getDerivedStateFromError method is used to render a fallback UI after an error is thrown and 
// -> The ComponentDidCatch method is used to log the error info


// Summary

// . Error boundaries are React components that catch JS error in their child component tree, log those errors, and display fall-back UI.
// . A class component becomes an Error Boundary by defining either or both of getDerivedStateFromError and componentDidCatch lifecycle methods.
// . The placement of the Error Boundary also matters as it controls if the entire app should have the fall-back UI or just the component causing the problem. 
// . Provide a way to gracefully handle error in application code.