var fs = require('fs');

var data = "<h1>This is File System Module..!</h1>";

var createFile = fs.createWriteStream('output.txt');

createFile.write(data, 'utf8');

createFile.end();
console.log('New File Created..!');