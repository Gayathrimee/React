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