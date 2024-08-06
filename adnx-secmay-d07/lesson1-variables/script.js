console.log("Hello World Javascript");

// JavaScript Intro 101

// 1. Variables
// assign a value to a variable

// var vs let
// var more traditional, let is newer
var x = 5;
let y = 39;

// const
const pi = 3.14;
const birthYear = 1989;

// put inside your mind that we will use let and constant only

console.log(y);
console.log(pi);
// reassign a value to a variable

y = 40;
//pi = 3.14159;
console.log(y);
//console.log(pi); -> Uncaught TypeError: Assignment to constant variable.

// variable naming convention
// what is convention? is a rule
// camelCase:
// snake_case
// PascalCase
// kebab-case
// UPPERCASE

// 2. Data Types
// what is a data type?
// Number
let num = 3.14;
// String
let str = "Hello World";
let str2 = "Hello World";
let str3 = `Hello World`;
// Boolean
let isMale = true;
let isFemale = false;
// Undefined
let z;
console.log(z);
// Null
let a = null;
console.log(a);
// Object
// Using curly braces
let person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
};
console.log(person);
// Array
// Using square brackets
let fruits = ["apple", "banana", "orange"];
console.log(fruits);

// determine the data type of a variable
console.log(num, typeof num);
console.log(str, typeof str);
console.log(isMale, typeof isMale);
console.log(z, typeof z);
console.log(a, typeof a);
console.log(person, typeof person);
console.log(fruits, typeof fruits);
