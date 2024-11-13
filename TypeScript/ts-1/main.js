"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var message = 'Welcome Back';
console.log(message);
//* VARIABLE DECLARATIONS
var x = 20;
var y = 20;
var sum;
// const title;     //is error cuz const declarations must be initialized
var title = 'codevolution';
// -----
//* VARIABLE TYPES
var isBeginner = true;
var total = 0;
var name = 'Vishwas';
// name = true;     //error(name type is defined as string)
// template strings can span multiple lines and have embedded expressions. eg:
var sentence = "My name is ".concat(name, " \nI am a beginner in TS");
console.log(sentence);
var n = null;
var u = undefined;
// in old version of ts, the null and undefined are subtypes. but now they are not
// let isNew: boolean = null;
// let myName: string = undefined;     //is error because in new version of ts, null and undefined are not subtypes. so cannot use null for boolean type
var list1 = [1, 2, 3];
var list2 = [1, 2, 3];
var person1 = ['chris', 21];
// -----
//* ENUM
// enum type : which is a way of giving more friendly names to a set of numeric values
var Color;
(function (Color) {
    Color[Color["Red"] = 5] = "Red";
    Color[Color["Green"] = 6] = "Green";
    Color[Color["Blue"] = 7] = "Blue";
})(Color || (Color = {}));
var c = Color.Green;
console.log(c); // runs the value 6 (which is the index) cuz we assumed red as 5
var randomValue = 10;
randomValue = true;
randomValue = 'vishwas';
var myVariable = 10; // in any we can assign the myvariable as anything. 
//                                  so similar to any, declaring unknown which shows the errors
// -----
// FUNCTIONS
function hasName(obj) {
    return !!obj &&
        typeof obj === 'object' &&
        'name' in obj;
}
// console.log(myVariable.name)     //error
if (hasName(myVariable)) {
    console.log(myVariable.name); // correct
}
// myVariable()    //error 
// myVariable.toUpperCase();        // is error
// (myVariable as string).toUpperCase();   //correct - we say that the myVariable should 1st treated as a string and then apply toUpperCase method
var a;
a = 10;
a = true;
var b = 20;
var multiType;
multiType = 20;
multiType = true;
var anyType;
anyType = 20;
anyType = true;
function add(num1, num2) {
    return num1 + num2;
}
add(5, 10);
// add(5,'10')     // 10 shows error
function add2(num1, num2) {
    if (num2)
        return num1 + num2;
    else
        return num1;
}
add2(5, 10);
add2(5);
function fullName(person) {
    console.log("".concat(person.firstName, " ").concat(person.lastName));
}
var p = {
    firstName: 'Bruce',
    lastName: 'Wayne'
};
fullName(p);
function fullName2(person) {
    console.log("".concat(person.firstName, " ").concat(person.lastName));
}
var p2 = {
    firstName: 'Bruce',
};
fullName2(p2);
// -----
// * CLASS
var Employee = /** @class */ (function () {
    function Employee(name) {
        this.employeeName = name; // constructor to initialize the employee name
    }
    Employee.prototype.greet = function () {
        console.log("Good morning ".concat(this.employeeName));
    };
    return Employee;
}());
var emp1 = new Employee('Vishwas');
console.log(emp1.employeeName);
emp1.greet();
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(managerName) {
        return _super.call(this, managerName) || this;
    }
    Manager.prototype.delegateWork = function () {
        console.log("Manager delegating tasks");
    };
    return Manager;
}(Employee));
var m1 = new Manager('Bruce');
m1.delegateWork();
m1.greet();
console.log(m1.employeeName);
//     ====
//  => Access modifiers
var Employee2 = /** @class */ (function () {
    function Employee2(name) {
        this.employeeName = name; // constructor to initialize the employee name
    }
    Employee2.prototype.greet = function () {
        console.log("Good morning ".concat(this.employeeName));
    };
    return Employee2;
}());
var emp2 = new Employee2('Vishwas');
// console.log(emp2.employeeName)      // cannot access employeeName cuz it is private
emp2.greet();
var Manager2 = /** @class */ (function (_super) {
    __extends(Manager2, _super);
    function Manager2(managerName) {
        return _super.call(this, managerName) || this;
    }
    Manager2.prototype.delegateWork = function () {
        console.log("Manager delegating tasks");
    };
    return Manager2;
}(Employee2));
var m2 = new Manager2('Bruce');
m2.delegateWork();
m2.greet();
// console.log(m2.employeeName)   // cannot access employeeName cuz it is private
