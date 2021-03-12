const inputs = require("./input");

function partOne(input, right) {
  let counterTree = 0;
  let start = right;
  const lengthLine = input[0].length;

  for (let index = 1; index < input.length; index++) {
    if (input[index + 1]) {
      start += right;

      if (start > lengthLine) {
        start = start - lengthLine;
      }

      if (start === lengthLine) {
        start = 0;
      }

      if (input[index + 1][start] === "#") {
        counterTree++;
      }
    }
  }

  return counterTree;
}

function partTwo(input, right, down) {
  let counterTree = 0;
  let start = right;
  const lengthLine = input[0].length;

  for (let index = 0; index < input.length; index += down) {
    if (index !== 0) {
      if (start > lengthLine) {
        start = start - lengthLine;
      }

      if (start === lengthLine) {
        start = 0;
      }

      if (input[index][start] === "#") {
        counterTree++;
      }

      start += right;
    }
  }

  return counterTree;
}

let result = [
  partTwo(inputs, 1, 1),
  partTwo(inputs, 3, 1),
  partTwo(inputs, 5, 1),
  partTwo(inputs, 7, 1),
  partTwo(inputs, 1, 2),
].reduce((multiply, item) => {
  multiply *= item;
  console.log(item);
  return multiply;
}, 1);

// console.log(result);
