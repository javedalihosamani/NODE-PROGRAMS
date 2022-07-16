var fs = require('fs');

//Writing the file Asynchronously

var content = "this is the write a file1 content in the file";

fs.writeFile("output.txt", content, (err)=>{
    if(err)
        throw err;

    console.log('writeFile = It\'s saved!');
});

//Writing the file Synchronously
var content1 = "We are writing this file synchronously using node.js";

fs.writeFileSync('output.txt', content1);
console.log("writeFileSync => File Written Successfully");