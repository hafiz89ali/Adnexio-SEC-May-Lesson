// IMPORTANT! Assignment of elements to variables must done initially

const text = document.querySelector("#text");
const nameInput = document.querySelector("#nameInput");
const submitName = document.querySelector("#submitName");

// 1. Get the value of the input using event listener
// event in javascript
// onsubmit, onclick, onmouseover, onmouseout, onkeydown, onkeyup, onkeypress
// when user fill the input -> oninput, onchange
// addEventListener("event", function)
// accept 2 arguments: event name, callback function
nameInput.addEventListener("input", function (e) {
  console.log(e.target.value);
});

// 2. add event listener to the button
submitName.addEventListener("click", function () {
  console.log("Button clicked");
  const name = nameInput.value;
  text.innerText = "Hello " + name + "!";
});

/*************************************************/
// introduction to function
// 1. function declaration
function greet() {
  // function scope
  console.log("Hello World");
}

// 2. function invocation / call
greet();
greet();
greet();
greet();
greet();

// 3. functon declaration with parameter
function greetWithName(name) {
  console.log("Hello " + name);
}

// 4. function invocation with argument
greetWithName("John");
greetWithName("Doe");
greetWithName("Jane");
