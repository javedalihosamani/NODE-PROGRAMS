var assert = require('assert');

function Demo(x,y,z) {
    return x+y+z;
}
// console.log(Demo(10,4,1));

var expected_output = 16;
console.log("Expected Output :" + expected_output);

var output = Demo(10,4,1);
console.log(output);

assert(output == expected_output);
console.log(assert(output == expected_output));