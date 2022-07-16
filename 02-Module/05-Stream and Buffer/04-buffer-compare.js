var buf1 = Buffer.from('abc');
var buf2 = Buffer.from('abc');

var x = Buffer.compare(buf1, buf2);
console.log(x);

var buf1 = Buffer.from('a');
var buf2 = Buffer.from('b');

var x = Buffer.compare(buf1, buf2);
console.log(x);


var buf1 = Buffer.from('b');
var buf2 = Buffer.from('a');

var x = Buffer.compare(buf1, buf2);
console.log(x);