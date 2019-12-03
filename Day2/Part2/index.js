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

const getInput = () => fs.readFileSync(path.join(__dirname, '../input.txt'))
                .toString()
                .split(',')
                .map(num => Number(num));

let found = false;
let selectedNoun;
let selectedVerb;

for(let noun = 0; noun <= 99; noun++) {
  for(let verb = 0; verb <= 99; verb++) {
    const input = getInput();

    input[1] = noun;
    input[2] = verb

    if(intCodeProgram(input)[0] === 19690720) {
      found = true;
      selectedNoun = noun;
      selectedVerb = verb;
      break;
    }
  }

  if(found) {
    break;
  }
}


log(100 * selectedNoun + selectedVerb);
