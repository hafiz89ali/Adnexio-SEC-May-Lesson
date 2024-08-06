const key = document.querySelector("#key");

// addEventListener(a, b)
// a: event name
// b: function to call when event is triggered
// document.addEventListener("keydown", function () {
//   console.log("key pressed");
// });

// document.addEventListener("keyup", function () {
//   console.log("key released");
// });

document.addEventListener("keydown", function (event) {
  // alert when user press 'k'' button
  if (event.key === "k") {
    alert("You pressed k button");
  }
  console.log(event);
  key.innerText = event.key;
  code.innerText = event.code;
  keyCode.innerText = event.keyCode;
});
