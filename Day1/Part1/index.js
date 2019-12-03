const readline = require('readline');
const fs = require('fs');
const path = require('path');
const log = require('../../log');

const calculateFuel = (mass) =>  Math.floor( mass / 3) - 2; 

const readInterface = readline.createInterface({
  input: fs.createReadStream(path.join(__dirname, '../input.txt')),
});

let result = 0;
readInterface.on('line', (line) => {
  result = result + calculateFuel(Number(line));
});

readInterface.on('close', () => log(result));
