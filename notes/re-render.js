* Causes for re-render 

1. A component can re-render if it calls a setter fn or a dispatch fn. 
2. A component can render if its parent component rendered. 


* Same Element Reference 
. Component can change its state but not props. 
. React automatically provide the optimization. 
. React looks at OptParentOne Component. 
. Convert button and children prop. 
. Re-render is caused by a state change in OptParentOne. 
. Component has no means of directly changing the props. 
. Children props couldn't' have changed. 
. Make use of the React element that was previously created. 
. Children props has to be referencing the same element from the previous render, 
   will skip the render phase for the ChildOne component. 



* Parent Child and Render 

1. New State is different from the old state 
2. New State is same as the old state 
    a. Right after the initial render 
    b. After re-renders 

* Unnecessary Renders 
. When a parent component renders, React will recursively render all of its child components. 
. Rendering is not a bad thing as it is how React knows whether it needs to actually make any changes to the DOM. 
. "Unnecessary renders" where the child component goes through the render phase but not the commit phase. 

* Same element reference 
. In React, when a parent component renders, React will recursively render all of its child components. 
. "Unnecessary renders" where the child component goes through the rendr phase but not the commit phase. 
. You can extract the expensive child component and instead pass it down as props to the parent component. 
. Whenever there is a re-render caused by a change in the state of the parent component, React will optimize the re-render for you by
  knowing that the props has to be referencing the same element before and after the render.

* React.memo 
. In React, when a parent component renders, a child component might un-necessarily render. 
. To optimize this behaviour, we can use React.memo and pass in the child component. 
. React.memo will perform a shallow comparison of the previous and new props and re-render the child component only if the props have changed.


 *    Questions on optimization
When do I use the same element reference technique and when do I use React.memo? 

Same element Reference         
. When your parent component re-renders because of state change in the parent component. 
. This technique does not work if the parent component re-renders because of changes in its props 
. state change? yes
  props change? no

React.memo 
. When our child component is being asked to re-render due to changes in the parent's' state which do not 
affect the child component props in anyway


* Render Optimization 
When we optimize the rendering of one component, React will also skip rendering that component's' entire subtree because its effectively stopping the default 
"render children recursively" behavior of React.


* Ways to cause a re-render 
- Component calls UseState setter function or UseReducer dispatch fn 
- If parent component re-renders 
- React context   

* Context and Render 
When the context provider is in the parent conponent and the parent component's state updates, 
every child componoent re-renders and not just the component consuming the context value.