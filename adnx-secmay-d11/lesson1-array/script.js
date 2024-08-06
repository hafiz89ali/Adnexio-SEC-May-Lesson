console.log("javascript loaded");

//ARRAY INTRODUCTONS IN JAVASCRIPT

// Nazim go to the supaermarket and buy some fruits
// Nazim took a basket and put some fruits in it
// inside the basket, Nazim can put aplles, bananas, oranges, mangoes, and grapes.
// Let say, basket is an array
// array is a data structure that can store multiple values
// array represent by square brackets - '[]

const emptyBasket = []; // empty basket or empty array

// we can fill the array with some ELEMENTS

// array with five (5) string elements
// each element is separated by comma
const stringElements = ["apple", "banana", "orange", "mango", "grape"];

// array with five (5) number elements
const numberElements = [10, 20, 30, 40, 50];

// array with five (5) boolean elements
const booleanElements = [true, false, true, false, true];

// array with five (5) object elements
const objectElements = [
  { name: "apple", price: 10 },
  { name: "banana", price: 20 },
  { name: "orange", price: 30 },
  { name: "mango", price: 40 },
  { name: "grape", price: 50 },
];

// array with five (5) array elements
const arrayElements = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20],
  [21, 22, 23, 24, 25],
];

// array with five (5) mixed elements
const mixedElements = [
  "apple",
  10,
  true,
  { name: "apple", price: 10 },
  [1, 2, 3, 4, 5],
];

const nazimBasket = ["apple", "banana", "orange", "mango", "grape"];
console.log("Displaying 'nazimBasket':");
console.log(nazimBasket);

// 2. ARRAY INDEX
// array index starts from 0
// to access the first element in the array
// to determine the value of the element in the array by its index
console.log("Displaying every element in 'nazimBasket' by its index:");
console.log(nazimBasket[0]); // -> apple
console.log(nazimBasket[1]); // -> banana
console.log(nazimBasket[2]); // -> orange
console.log(nazimBasket[3]); // -> mango
console.log(nazimBasket[4]); // -> grape
console.log(nazimBasket[5]); // -> undefined

// 3. ARRAY LENGTH
// In array we have a property called length

console.log("Displaying 'nazimBasket' length:");
console.log(nazimBasket.length); // -> 5

// 4. ARRAY METHODS
// what is method?
// method is a function that belongs to an object (array is an object)

// 4.1. PUSH METHOD (MUTATING METHOD)
console.log("Displaying 'nazimBasket' after PUSH METHOD:");
console.log(nazimBasket);
// add kiwi to the end of the array
nazimBasket.push("kiwi");
console.log(nazimBasket);

// 4.2. POP METHOD (MUTATING METHOD)
// remove kiwi from the end of the array
nazimBasket.pop();
console.log(nazimBasket);
nazimBasket.pop(nazimBasket.pop()); // chain method
console.log(nazimBasket);

// 4.3. UNSHIFT METHOD (MUTATING METHOD)
// add lemon to the beginning of the array
nazimBasket.unshift("lemon");
console.log(nazimBasket);

// 4.4. SHIFT METHOD (MUTATING METHOD)
// remove lemon from the beginning of the array
nazimBasket.shift();
console.log(nazimBasket);

// 4.5. SPLICE METHOD (MUTATING METHOD)
// remove the element by its index
// splice method takes two arguments
// first argument is the index of the element to be removed
// second argument is the number of elements to be removed
nazimBasket.splice(2, 2);
console.log(nazimBasket);

// 4.6. SLICE METHOD (NON-MUTATING METHOD)
// slice method take two arguments
// first argument is the starting index
// second argument is the ending index (exclusive)
const newBasket = nazimBasket.slice(1, 3);
console.log(nazimBasket);
console.log(newBasket);

// 4.7. CONCAT METHOD (NON-MUTATING METHOD)
// concat method takes one or more arguments
// concat method returns a new array
const fruits = ["apple", "banana", "orange"];
const vegetables = ["carrot", "onion", "pepper"];
const newBasket2 = fruits.concat(vegetables);
console.log(newBasket2);

// 4.8. SORT METHOD (MUTATING METHOD)
// sort method sorts the elements in the array
// sort alphabetically
console.log(newBasket2.sort());
// sort numerically
// sort by using 16 unicode code points
// sort method is not suitable for sorting numbers
// modify the function callback to sort numbers
const numbers = [10, 5, 20, 30, 15, 1000];
console.log(
  numbers.sort(function (a, b) {
    return a - b;
  })
);
// or mapping
console.log(numbers.map((n) => n * 2).sort((a, b) => a - b));

// OTHER AVAILABLE ARRAY METHODS
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

// 5. ARRAY ITERATION
