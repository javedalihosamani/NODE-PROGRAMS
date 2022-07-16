//This method is used throw a specified error if it evaluates to be true.
var assert = require('assert');

//Case 1 : No error
assert.ifError(null);

//Case 2 : throws 1
//assert.ifError(1);

//Case 3 : throws error
//assert.ifError('error');

//Case 4 : throws error
//assert.ifError('false');

//Case 5 : throws error
assert.ifError(false);