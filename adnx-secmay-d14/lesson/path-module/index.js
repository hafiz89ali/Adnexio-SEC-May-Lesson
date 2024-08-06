// global variable nodejs
console.log(__dirname);
console.log(__filename);
console.log(process.cwd());

// this type of path will cause error in windows
// because of the backlash
// const path = C:\Users\Hafiz\sec-folder\day14\lesson\path-module
const htmlPath = "./output/index.html";

// path module
const path = require("path");
const pathResolved = path.resolve(htmlPath);
