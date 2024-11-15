What and Why 

* What is TypeScript - Open-source programming language from Microsoft
* Typed superset of JS 
* Compiles down to plain JS 


Why TypeScript + React?

=> Advantages
- With static type checking, we get to learn about potential bugs as we are typing the code,
than heading to the browser and figuring out at runtime 
- Provides a way to describe the shape of an object hence providing better documentation and autocomplete
- Makes maintenance and and refactoring of large code bases much easier 

=> Dis 
- TypeScript is just frustrating most of the times
- We have to write a lot more code than we normally do and the compiler keeps complaining. 
We simply dont know what to do about those errors 
- It doesnt seem to be productive for me 

* null and undefined have not much use on their own 
 that is why in ts null and undefined are classified as subtypes of all other types 
 that means we can assign a value of null or undefined to a boolean , numbe or a string types variable 

* enum type : 
- which is a way of giving more friendly names to a set of numeric values
- for declaring enum, we use enum keyword and that is followed by a name for the enum which is in turn followed by the values in a pair of curly braces 

* Classes
-> Access Modifiers
- They are keywords that set the accessibility of properties and methods in a class.
- 3 types: public, Private and Protected Access Modifiers
- By default each class member is public so we can easily access them throughout the pgm 

* 3 tips related to props and types 
=> 1. we can destructure props when defining components :
 eg: in input.tsx , 
            we can remove props in (props:inputProps) to -> ({value, handleChange}: inputProps) and then change props.value -> value

=> 2. Exporting types:
        we define types right at the top in all our files. This works for simple components. 
        But when working on large components with multiple types we want to move types into a seperate file and import them where necessary. 

=> 3. Reusing types 
        It is possible to extract a type and use it in multiple places. 

* useState
    We have data that can change, what we need is a state variable  => using state hook to manage its types 

steps:
1. Import useState from React
2. Create a logged in state variable whose initial value is false
3. Conditionally render the text inside the div tag. 
4. Define the handler fn. 
-> and this is our fully functional conditonal components. We got it done withour writing a single line of ts code. 