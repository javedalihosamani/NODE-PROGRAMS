var zlib = require('zlib');
var fs = require('fs');

var zip = zlib.createGzip();

var read = fs.createReadStream('node.txt');
var write = fs.createWriteStream('nodeZIP.gz');

read.pipe(zip).pipe(write);
console.log("File is created..!");