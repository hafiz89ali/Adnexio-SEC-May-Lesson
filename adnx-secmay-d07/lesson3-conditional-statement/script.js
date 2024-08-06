// Conditional Statement
// 1. if statement
if (true) {
  // true block
  console.log("This is true");
} else {
  // false block
  console.log("This is false");
}

let isMoreThan18YearsOld = true;
console.log(typeof isMoreThan18YearsOld);
if (isMoreThan18YearsOld) {
  console.log("You are eligible to vote");
} else {
  console.log("You are not eligible to vote");
}

// comparison operation
// dynamic value
const birthYear = 1989;
let currentYear = 2024;
let age = currentYear - birthYear;
if (age > 18) {
  console.log("You are eligible to vote");
} else {
  console.log("You are not eligible to vote");
}

// truthy and falsy value
let fname = "John";
if (fname) {
  console.log("Name is present -" + fname);
} else {
  console.log("Name is not present");
}

// LESSON FOR TOMORROW (22-5-2024)
const h4 = document.querySelector("h4");
let bYear = prompt("Enter your birth year");
let cYear = 2024;
if (cYear - bYear > 18) {
  alert();
  if (h4) {
    h4.style.color = "red";
    h4.innerText = "You are eligible to vote";
  }
} else {
  if (h4) {
    h4.style.color = "blue";
    h4.innerText = "You are not eligible to vote";
  }
}

// More on JavaScript - freecodecamp.org/learn/javascript-algorithms-and-data-structures/
