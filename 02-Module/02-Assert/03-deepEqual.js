var assert = require('assert');
var a = 10;
var b = '10';
var c = 10.25;

//assert.deepEqual(a,b, "Nothing printed because they are using == for comparison");

//assert.deepEqual(a,c, "Error because values doesn't match");

//assert.deepStrictEqual(a,b, "Error because they are using === for comparison");

//assert.notDeepStrictEqual(a,b);

//assert.equal(a,b, "Nothing printed because they are using == for comparison");

assert.equal(a,c, "Error because values doesn't match");