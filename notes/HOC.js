// Higher Order Components(HOC)   

// * why?:
// To share common functionality between components 

// * what? :
// A pattern where a fn takes a component as an argument and returns a new component. 

// pattern: const NewComponent = higherOrderComponent(originalComponent)
//     const EnhancedComponent = higherOrderComponent(originalComponent)

// eg: const IronMan = withSuit (TonyStark)
//   here : TonyStark is the original Component 
//          withSuit is the function that Enhance TonyStark
//          And return IronMan which ofcourse is the enhanced component