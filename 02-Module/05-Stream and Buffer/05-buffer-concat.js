var buf1 = Buffer.from('a');
var buf2 = Buffer.from('b');
var buf3 = Buffer.from('c');
var arr = [buf1, buf2, buf3];

console.log(arr);

buf = Buffer.concat(arr);
console.log(buf);

var buff = Buffer.from('Be-practical');
console.log(buff);

var newbuff = Buffer.alloc(20);

buff.copy(newbuff);
console.log("Content of newbuff :  " + newbuff.toString());

var buff4 = Buffer.from('Be-practical');
var buff5 = Buffer.from('Be-practical');

console.log(buff4.equals(buff5));

var buff6 = Buffer.from('Be-practical');
console.log(buff6.indexOf('a'));

var buf7 = Buffer.from('Be-practical Tech Solutions..!');
console.log( buf7.length);

var buf8 = Buffer.from('Be-practical Tech Solutions..!');
var json = buf.toJSON(buf8);

var buf9 = Buffer.from('Be-practical Tech Solutions..!');
console.log( buf9.toString('ascii'));
