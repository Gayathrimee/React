//                          ~ Hooks ~

// - What are Hooks?
// * Hooks are a new feature addition in React version 16.8 which allow us to use
// React features without having to write a class. 
// eg: State of a component 

// * Hooks don't work inside classes. They let us use react outside classes.

// // ========================================================================

// - Why Hooks ?

//  Reasons:
// * Set 1
// . Understand how 'this' keyword works in js 
// . Remember to bind event handlers in class components 
// . Classes don't minify very well and make hot reloading very unreliable

// * Set 2
// . There is no particular way to reuse stateful component logic
// . HOC and render props patterns do address this problem 
// . Makes the code harder to follow
// . There is need a to share stateful logic in a better way     
 
// * Set 3
// . Create components for complex scenarios such as data fetching and subscribing to events 
// . Related code is not organized in one place 
// . eg: Data fetching - In componentDidMout and componentDidUpdate
// . eg: Event listeners - In componentDidMout and componentWillUnmount
// . Because of stateful logic - Cannot break components into smaller ones 

// // ========================================================================

// - Networthy points 
// * React version 16.8 or higher 
// * Completley opt in :- if we don't want to learn or use hooks no need to learn or use
// * Hooks don't contain any breaking changes and the release is 100% backwards-compatible.
// * Classes won't be removed from React
// * Can't use Hooks inside of a class component
// * Hooks don't replace your existing knowledge of React concepts
// * Instead, Hooks provide a more direct API to the React cincepts you already know  

// // ========================================================================

// -Summary
// * Hooks are a new feature additon in React version 16.8. 
// * They allow us to use React featuers without having to write a class.
// * Avoid the whole confusion with 'this' keyword.  
// * Allow us to reuse stateful logic. 
// * Organize the logic inside a component into reusable isolated units. 

// // ========================================================================
// Easier

//* this.state, setState can only be used in classComponents
// Hooks allows us to use them in functional components 

// * . Hook is a special fn that let's us hook into react features 
//   . It lets us add react 'State' into functional components. 

// eg: useState()

// This hook or fn accepts an argument which is the initial value of the state property and 
// returns the current value of the state property and a method i.e capable of updating the state property 

// here taking the initial value of the state variable is 0 and returns a pair of values 
// current value of the state variable which we are going to call as count
// and a method that can update the state variable which we call as setCount 

// // ========================================================================

// Rules of Hooks 

// 1. "Only Call Hooks at the Top Level"
//     - Don't call Hooks inside loops, conditions, or nested functions

// 2. "Only Call Hooks from React Functions"
//     - Call them from within React functional components and not just any regular JS fn. 