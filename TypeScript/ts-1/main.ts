export{}       // nothing but to remove the error (shows redeclaration of variable message. so simply typing export{} with null object can remove the error)

let message = 'Welcome Back'
console.log(message) 

//* VARIABLE DECLARATIONS

let x = 20;
const y = 20;

let sum;
// const title;     //is error cuz const declarations must be initialized
const title = 'codevolution';


// -----


//* VARIABLE TYPES

let isBeginner: boolean = true;
let total: number = 0;
let name: string = 'Vishwas';
// name = true;     //error(name type is defined as string)

// template strings can span multiple lines and have embedded expressions. eg:
let sentence: string = `My name is ${name} 
I am a beginner in TS`
console.log(sentence)


let n:null = null;
let u: undefined = undefined;

// in old version of ts, the null and undefined are subtypes. but now they are not
// let isNew: boolean = null;
// let myName: string = undefined;     //is error because in new version of ts, null and undefined are not subtypes. so cannot use null for boolean type

let list1: number[] = [1,2,3]
let list2: Array<number> = [1,2,3]

let person1: [string, number] = ['chris', 21]


// -----


//* ENUM
// enum type : which is a way of giving more friendly names to a set of numeric values

enum Color {Red = 5, Green, Blue}

let c:Color = Color.Green
console.log(c)  // runs the value 6 (which is the index) cuz we assumed red as 5

let randomValue: any = 10
randomValue = true 
randomValue = 'vishwas' 

let myVariable : unknown = 10;      // in any we can assign the myvariable as anything. 
//                                  so similar to any, declaring unknown which shows the errors


// -----


// FUNCTIONS

function hasName(obj:any): obj is {name: string} {
    return !!obj && 
            typeof obj === 'object' &&
            'name' in obj
}
// console.log(myVariable.name)     //error

if(hasName(myVariable)){
    console.log(myVariable.name)       // correct
}                   


// myVariable()    //error 

// myVariable.toUpperCase();        // is error
// (myVariable as string).toUpperCase();   //correct - we say that the myVariable should 1st treated as a string and then apply toUpperCase method


let a;
a = 10;
a = true

let b = 20

let multiType: number | boolean;
multiType = 20
multiType = true

let anyType: any;
anyType = 20
anyType = true 

function add(num1: number, num2: number): number{
    return num1 + num2
}
add(5,10)
// add(5,'10')     // 10 shows error

function add2(num1: number, num2?: number): number{
    if(num2)
        return num1 + num2
    else 
        return num1
}
add2(5,10);
add2(5)


function fullName(person: {firstName: string, lastName: string}){
    console.log(`${person.firstName} ${person.lastName}`)
}

let p = {
    firstName: 'Bruce',
    lastName:'Wayne'
}

fullName(p)

// or

interface Person{
    firstName:string;
    lastName?: string;
}

function fullName2(person: Person){
    console.log(`${person.firstName} ${person.lastName}`)
}

let p2 = {
    firstName: 'Bruce',
}

fullName2(p2)


// -----


// * CLASS
class Employee {
    employeeName: string;

    constructor(name: string){
        this.employeeName = name        // constructor to initialize the employee name
    }

    greet(){
        console.log(`Good morning ${this.employeeName}`)
    }
}

let emp1 = new Employee('Vishwas')
console.log(emp1.employeeName)
emp1.greet()

class Manager extends Employee{
    constructor(managerName: string){
        super(managerName)
    }

    delegateWork(){      // method to Manager class
        console.log(`Manager delegating tasks`) 
    }
}

let m1 = new Manager('Bruce')
m1.delegateWork()
m1.greet()
console.log(m1.employeeName) 


//     ====

//  => Access modifiers
class Employee2 {
    private employeeName: string;

    constructor(name: string){
        this.employeeName = name        // constructor to initialize the employee name
    }

    greet(){
        console.log(`Good morning ${this.employeeName}`)
    }
}

let emp2 = new Employee2('Vishwas')
// console.log(emp2.employeeName)      // cannot access employeeName cuz it is private
emp2.greet()

class Manager2 extends Employee2{
    constructor(managerName: string){
        super(managerName)
    }

    delegateWork(){      // method to Manager class
        console.log(`Manager delegating tasks`) 
    }
}

let m2 = new Manager2('Bruce')
m2.delegateWork()
m2.greet()
// console.log(m2.employeeName)   // cannot access employeeName cuz it is private
