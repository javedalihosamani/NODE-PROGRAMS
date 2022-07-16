var fs = require('fs');
var {Console} = require('console');

const output = fs.createWriteStream('./stdout.log');
const errOutput = fs.createWriteStream('./stderr.log');

const print = new Console(output, errOutput);

const roll = 12345;
print.log("ROLL : %d", roll);
print.log('This will be stored in a file');