const readline = require('readline');
const fs = require('fs');
const path = require('path');
const log = require('../../log');

const calculateFuelForMass = (mass) =>  Math.floor( mass / 3) - 2; 

const calculateFuel = (mass) => {
  let remainingMass = mass;
  let totalFuel = 0;

  while (remainingMass > 0) {
    const fuelForMass = calculateFuelForMass(remainingMass); 

    if (fuelForMass > 0) {
      totalFuel = totalFuel + fuelForMass;
    }

    remainingMass = fuelForMass;
  }

  return totalFuel;
}

const readInterface = readline.createInterface({
  input: fs.createReadStream(path.join(__dirname, '../input.txt')),
});

let result = 0;
readInterface.on('line', (line) => {
  result = result + calculateFuel(Number(line));
});

readInterface.on('close', () => log(result));
