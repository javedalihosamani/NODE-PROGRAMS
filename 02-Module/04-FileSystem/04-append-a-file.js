var fs = require('fs');

new_data = "This data will be appended at the end of the file.";

//Writing a File Asynchronously using nodejs
fs.appendFile('output.txt', new_data, (err)=>{
    if (err)
        throw err;
    console.log('appendFile => File Appended Successfully');
});

//Writing a File Synchronously using nodejs
var content = "\n We are Appending this file synchronously using node.js";
fs.appendFileSync('output.txt', content);
console.log("appendFileSync => File Appended Successfully");