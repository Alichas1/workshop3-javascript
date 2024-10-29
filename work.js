//1. Spread

//task.1

const fruits = ["Apple", "Banana", "Orange"];

const morefruits = [...fruits, "mango", "pineapple"];

console.log(morefruits);

//task.2
const startingFruits = ["Pear", "Melon", "Kiwi"];

const totalfruits = [...startingFruits, ...morefruits];

console.log(totalfruits);

//task.3

const car = {
  make: "Toyota",
  model: "Corolla",
  year: 2020,
};

const updatecar = { ...car };

updatecar.year = 2022;

console.log(updatecar);

//task.4

const coloredCar = { ...updatecar, color: "Red" };

console.log(coloredCar);

//task.5

function updateCarmodel(car, newmodel) {
  return { ...car, model: newmodel };
}

//task.6
const newmodelcar = updateCarmodel(coloredCar, "camry");

console.log(newmodelcar);

//2. Destructure

//task.1
const fullName = ["John", "Doe"];

const [firstName, lastName] = fullName;

console.log("Firstname: ", firstName, "Lastname: ", lastName);

//task.2
const user = {
  name: "Alice",
  age: 25,
};

const { name, age } = user;

console.log(name);
console.log(age);

//task.3
console.log(firstName, lastName, name, age);

//task.4

function getFullname({ firstName, lastName }) {
  return `${firstName} ${lastName}`;
}

//task.5

const person = {
  firstName: "Jane",
  lastName: "Smith",
};

const fullnameperson = getFullname(person);
console.log(fullnameperson);

//3. loops

//task.1
for (let i = 0; i <= 5; i++) console.log(i);

//task.2
let i = 10;
while (i < 16) {
  console.log(i);
  i++;
}

//task.3

const numbers = [9, 10, 17, 34, 2, 4, 100];
let lowest = numbers[0];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] < lowest) {
    lowest = numbers[i];
  }
}

console.log(lowest);
//task.4

function getLowest() {
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] < lowest) {
      lowest = numbers[i];
    }
  }

  return lowest;
}

//.4 filter

//task.1

const ages = [12, 18, 25, 8, 30, 16];

const adultAges = ages.filter((age) => age >= 18);
console.log("Adults: ", adultAges);

//task.2

function getAdultAges(age) {
  return age >= 18;
}

//task.3

const newAdultAges = getAdultAges(ages);

console.log("adultAges: ", newAdultAges);

//5. truthiness

//task.1

const values = [0, "hello", null, undefined, false, "false", -1, "JavaScript"];

//task.2

function chekTruthiness(value) {
  if (value) {
    console.log(`${value}: is truthy`);
  } else {
    console.log(`${value}: is falsy`);
  }
}

//task.3

values.forEach(chekTruthiness);

//task.4

for (let i = 0; i < values.length; i++) {
  let x = values[i];
  chekTruthiness(x);
}

//task.5
while (i < values.length) {
  chekTruthiness(values[i]);
  i++;
}

//6. scope

// task.1

const globalVar = "i am global";

//task2. och 3

function testScope() {
  const localVar = "i am local";

  console.log(globalVar, localVar);
}

testScope();

//task.4
//det funkar inte att printa ut det utanför functionen
console.log(localVar);
