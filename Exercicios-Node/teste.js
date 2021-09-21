const { sortBy } = require("lodash");

const generateDiferentsNumbers = (quantity, array = []) => {
  while (array.length < quantity) {
    let randomNumber = parseInt(Math.random() * (60)) + 1
    if (array.indexOf(randomNumber) === -1) array.push(randomNumber);
  }
  return array
}
const compareElements = (a, b) => {
  if (a < b) return -1;
  if (a > b) return 1;
  return 0;
}

function numbersGenerator(quantidade) {
  let quantity = +quantidade || 0
  let numbers = []

  numbers = generateDiferentsNumbers(quantity, numbers)
  numbers.sort(compareElements)

  return numbers
}

console.log(numbersGenerator(7));
