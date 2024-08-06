const animals = {
  wildlifeAnimals: ["🐅", "🐆", "🦓", "🦒", " 🦏"],
  farmAnimals: ["🐄", "🐖", "🐓", "🦃", "🦆"],
  pets: ["🐕", "🐈", "🦜", "🦎", "🐇"],
};

for (let i = 0; i < animals.pets.length; i++) {
  const pet = animals.pets[i];
  console.log(`I love ${pet} pets!`);
}
