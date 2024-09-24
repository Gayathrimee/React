// * UseReducer 

// -UseReducer is a hook that is used for state management
// - It is an alternative to useState 
// - Difference b/w them is: useState is built using UseReducer

// // ------------------------------------------------------------------

// * reduce()

// The reduce() method executes a reducer function (that we provide) on each element
// of the array, resulting in a single output value.

// eg:
// const array1 = [1,2,3,4]
// const reducer = (accumulator, currentValue) => accumulator + currentValue;

// // 1 + 2 + 3 + 4
// console.log(array1.reduce(reducer))
// //expected output: 10

// // 5 + 1 + 2 + 3 + 4
// console.log(array1.reduce(reducer,5))
// //expected output: 15

// explanation: 
// 1. we have an array1 with 4 nos 
// 2. a fn reducer with 2 parameter acc, cv which returns a single value which is the sum of acc and cv 
// 3. log statement 
// 4. next log statement :- we have the second form of the reduced method which accepts the initial value for the accumulator parameter
//     This time the summation will be 10 + the initial value 5 = 15

// //-------

// main points: 

// - The reduce method takes 2 parameters
// - The 1st parameter is the reducer fn and the 2nd para is 
//   an initial value that the reducer fn can make use of
// - The reducer fn itself accepts 2 parameters and reduces them down to a single value
//   and then returns that value 

// - In our eg, the reducer takes 2 values and returns one value which is the summation

// // -----------------------------------

// reduce vs useReducer

// * reduce in JS 
// - In reduce method we have 2 parameters 
//     1. a reducer fm and         2. an initial value for the accumulator
// - The reducer in its simplest form will accept 2 parameters which are 
//     the accumulator and the item value and returns a single value 
// - reduce method returns a single value

// * useReducer in React
// - In useReducer we have 2 parameters 
//     1. a reducer fn and         2. the initial state
// - Has current state and something called as an action 
//     and the reducer will returns a single value
// - useReducer returns a pair of values. 
//     [newState, dispatch] => newState : value, dispatch: basically used to specify the action 

// //-------------------

//  summary

// - useReducer is a hook that is used for state management in React 
// - useReducer is related to reducer fns 
// - useReducer (reducer, initialState)
// - reducer (currentState, action) 