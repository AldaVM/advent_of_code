const input = require("./input.js");

function partOne(numbers) {
  let tableHash = {};
  let result = 0;

  for (const number of numbers) {
    tableHash[number] = true;
    let toFind = 2020 - number;
    if (tableHash[toFind]) {
      result = number * toFind;
      break;
    }
  }

  return result;
}

console.log(partOne(input));

function partTwo(numbers) {
  let tableHash = {};
  let isNotFind = true;
  let result = 0;
  let index = 0;

  while (isNotFind) {
    for (const number of numbers) {
      tableHash[number] = true;
      let sum = numbers[index] + number;
      let toFind = 2020 - sum;
      if (tableHash[toFind]) {
        isNotFind = false;
        result = toFind * number * numbers[index];
      }
    }
    index++;
  }

  return result;
}

console.log(partTwo(input));
