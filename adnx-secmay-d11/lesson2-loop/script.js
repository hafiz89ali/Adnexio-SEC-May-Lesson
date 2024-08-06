console.log("javascript loaded");

// LOOP INSTRUCTION IN JAVASCRIPT

// Loop is a programming concept that repeats a sequence of instructions until a specified condition is met.
// Must have a starting point, a condition, and increment or decrement.
// Iteration is the process of repeating a sequence of instructions until a specified condition is met.

// 1. FOR LOOP
// for(starting point; condition; increment/decrement){}
for (let i = 0; i < 3; i++) {
  // loop scope
  console.log(i);
  console.log(i < 3);
}

// challenge 1: display only even number from 1 - 100
console.log("challenge 1: display only even number from 1 - 100");
for (let i = 1; i <= 100; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

// challenge 2:
// if the number is divisible by 3, display "fizz"
// if the number is divisible by 5, display "buzz"
// if the number is divisible by 3 and 5, display "fizzbuzz"
// example: 1, 2, fizz, 4, buzz, fizz, 7, 8, fizz, buzz, 11, fizz, 13, 14, fizzbuzz
console.log(
  "challenge 2: if the number is divisible by 3, display 'fizz', if the number is divisible by 5, display 'buzz', if the number is divisible by 3 and 5, display 'fizzbuzz'"
);
for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("fizzbuzz");
  } else if (i % 3 === 0) {
    console.log("fizz");
  } else if (i % 5 === 0) {
    console.log("buzz");
  } else {
    console.log(i);
  }
}

// straight pattern
// *
// *
