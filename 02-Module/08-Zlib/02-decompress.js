var zlib = require('zlib');
var fs = require('fs');

var unzip = zlib.createUnzip();

var read = fs.createReadStream('nodeZIP.gz');
var write = fs.createWriteStream('nodeUnzip.txt');

read.pipe(unzip).pipe(write);
console.log("File is created..!");