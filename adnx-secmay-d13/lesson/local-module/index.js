const math = require("./math.js");
const animals = require("./animal.js");
const chemElement = require("./chemElement.js");

const birthYear = 1989;
const firstName = "John";
const lastName = "Doe";

const age = new Date().getFullYear() - birthYear;

console.log(
  `Hello, my name is ${firstName} ${lastName} and I am ${age} years old.`
);

console.log(math.pi, math.goldenRatio, math.eulersNumber);
console.log(animals.wildlifeAnimals, animals.farmAnimals, animals.pets);
console.log(
  chemElement.alkaliMetals,
  chemElement.nobleGases,
  chemElement.halogens
);
