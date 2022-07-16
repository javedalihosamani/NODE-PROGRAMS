var fs = require('fs');

var readStream = fs.createReadStream(__dirname+'/dummyRead.txt', 'utf-8');
var readStream = fs.createWriteStream(__dirname+'/dummyWrite.txt', 'utf-8');

readStream.on('data', (chunk)=>{
    console.log("New Chunk received..!");
    console.log(chunk);
});