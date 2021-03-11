const input = require("./input.js");
const test = [
  "1-3 a: abcde",
  "1-3 b: cdefg",
  "2-9 c: ccccccccc",
  "2-9 c: ccc",
  "2-9 c: cccccc",
  "2-9 c: ccccccccccc"
];

function partOne(passwords) {
  let counter = 0;
  for (const password of passwords) {
    let [condition, pass] = password.split(": ");
    let [range, toFind] = condition.split(" ");
    let numberRange = range.split("-");
    let countRepeat = pass.split("").filter(character => character === toFind)
      .length;
    if (countRepeat > 0) {
      if (
        countRepeat >= Number(numberRange[0]) &&
        countRepeat <= Number(numberRange[1])
      ) {
        counter += 1;
      }
    }
  }

  return counter;
}

function partTwo(passwords) {
  let counter = 0;

  for (let password of passwords) {
    let [condition, passwordChars] = password.split(": ");
    let [positions, toFind] = condition.split(" ");
    let [positionOne, positionTwo] = positions.split("-");

    let validates = passwordChars.split("").filter((char, index) => {
      let isCorrect = false;
      if (char === toFind) {
        if (
          index === Number(positionOne) - 1 &&
          index !== Number(positionTwo) - 1
        ) {
          isCorrect = true;
        } else if (
          index === Number(positionTwo) - 1 &&
          index !== Number(positionOne) - 1
        ) {
          isCorrect = true;
        }
      }
      return isCorrect;
    }).length;

    if (validates === 1) {
      counter++;
    }
  }

  return counter;
}

console.log(partTwo(input));
