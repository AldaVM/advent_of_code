const input = require("./input");

function convertToBinary(item) {
  // FBLR == 0101
  return item.replace(/f|l/gi, 0).replace(/b|r/gi, 1);
}

function convertBinaryToDecimal(binary) {
  // Cada bit esta asociado a una potencia de dos partiendo desde el ultimo bit
  return binary
    .split("")
    .reverse()
    .reduce((decimalNumber, bit, index) => {
      if (bit !== 0) {
        decimalNumber += bit * Math.pow(2, index);
      }
      return decimalNumber;
    }, 0);
}

function getDecimalList(list) {
  return list
    .map((item) => convertBinaryToDecimal(convertToBinary(item)))
    .sort((a, b) => a - b);
}

function getMaxNumberOfList(list) {
  return Math.max(...list);
}

function getMinNumberOfList(list) {
  return Math.min(...list);
}

function generteListNumber(init, end) {
  let values = [];

  for (let index = init; index <= end; index++) {
    values.push(index);
  }

  return values;
}

function validateList(list, toCompare) {
  for (let index = 0; index < list.length; index++) {
    if (toCompare[index] != list[index]) {
      return toCompare[index];
    }
  }
}

const decimalList = getDecimalList(input);
const correctValues = generteListNumber(
  decimalList[0],
  decimalList[decimalList.length - 1]
);

console.log(validateList(decimalList, correctValues));
