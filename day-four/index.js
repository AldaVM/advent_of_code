const inputs = require("./input");

let keysValids = [
  {
    value: "byr",
    isRequired: true,
    expresion: /(^19[2-9][0-9]|^200[0-2]$){1}$/,
  },
  { value: "iyr", isRequired: true, expresion: /^(201[0-9]$|2020$){1}/ },
  { value: "eyr", isRequired: true, expresion: /^(202[0-9]$|2030$){1}/ },
  {
    value: "hgt",
    isRequired: true,
    expresion: /^1[5-8][0-9]cm$|^[1][5-9][0-3]cm$|^[5-6][0-9]in$|^[5-7][0-6]in$/,
  },
  { value: "hcl", isRequired: true, expresion: /^#(?:[0-9a-fA-F]{3}){1,6}$/ },
  {
    value: "ecl",
    isRequired: true,
    expresion: /(^amb|^blu|^brn|^gry|^grn|^hzl|^oth){1}$/,
  },
  { value: "pid", isRequired: true, expresion: /^[0-9]{9}$/ },
  { value: "cid", isRequired: false },
];

function validateKeys(keys, item) {
  let errors = 0;

  for (const key of keys) {
    if (!item[key.value] && key.isRequired) errors++;
    if (item[key.value] && key.isRequired) {
      if (!key.expresion.test(item[key.value])) errors++;
    }
  }

  return errors;
}

function convertStringToObject(lineString) {
  return lineString.split(" ").reduce((currentValue, item) => {
    if (item !== "") {
      const [key, value] = item.split(":");
      currentValue[key] = value;
    }
    return currentValue;
  }, {});
}

function partOne(input) {
  let previousIndex = 0;
  let counterValids = 0;

  for (let index = 0; index < input.length; index++) {
    if (input[index] === "") {
      let valid = validateKeys(
        keysValids,
        convertStringToObject(input.slice(previousIndex, index).join(" "))
      );

      if (valid === 0) {
        counterValids++;
      }

      previousIndex = index;
    }
  }
  return counterValids;
}

console.log(partOne(inputs));
