/*There are two ways for Reading a file in nodejs :1) Asynchronously 2) Synchronously */

//Reading a File Asynchronously using nodejs

var fs = require('fs');

fs.readFile('output.txt', (err, data)=>{
    if(err)
        throw err;

    console.log("readFile => ",data);
});

// Reading the file Synchronously

var content = fs.readFileSync('output.txt');
console.log("readFileSync => ", content);