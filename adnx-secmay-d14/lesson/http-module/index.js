const http = require("node:http");
const fs = require("node:fs");

const indexHtml = fs.readFileSync("./index.html", "utf-8");
// Create a local server to receive data from
const server = http.createServer(function (req, res) {
  res.write(indexHtml);
  res.end();
});

// listen server on port -
const PORT = 8282;
server.listen(PORT, function () {
  console.log("Server is running on port " + PORT);
});

// ----------------NOTE----------------

// function declaration
// function add(a, b) {
//   return a + b;
// }

// arrow function
// const add = (a, b) => {
//   return a + b;
// };

// function expression
// const add = function (a, b) {
//   return a + b;
// }

// ----------------ASSIGNMENT----------------

// host your html resume by using node.js
// 1. home -> index.html (using '/')
// 2. about -> about.html (using '/about')
// 3. contact -> contact.html (using '/contact')
