const fs = require('fs');
const path = require('path');
const log = require('../../log');

const intCodeProgram = (intArray, currentPosition = 0) => {
  const instruction = intArray[currentPosition];
  if (instruction === 99) {
    return intArray;
  }

    const param1Address = intArray[currentPosition + 1];
    const param2Address = intArray[currentPosition + 2];
    const newPositionAddress = intArray[currentPosition + 3];

  if (instruction === 1) {
    intArray[newPositionAddress] = intArray[param1Address] + intArray[param2Address];
  }

  if (instruction === 2) {
    intArray[newPositionAddress] = intArray[param1Address] * intArray[param2Address];
  }

  return intCodeProgram(intArray, currentPosition + 4);
};

const input = fs.readFileSync(path.join(__dirname, '../input.txt'))
                .toString()
                .split(',')
                .map(num => Number(num));

input[1] = 12;
input[2] = 2;

log(intCodeProgram(input)[0]);
