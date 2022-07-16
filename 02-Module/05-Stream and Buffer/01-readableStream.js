var fs = require('fs');

console.log(__dirname);
console.log(__filename);

var readStream = fs.createReadStream(__dirname+'/dummyRead.txt', 'utf-8');
//console.log(readStream);

readStream.on('data', (chunk)=>{
    console.log("New Chunk received..!");
    console.log(chunk);
});