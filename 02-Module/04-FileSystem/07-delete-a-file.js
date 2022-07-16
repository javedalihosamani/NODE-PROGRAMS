var fs = require('fs');

//Deleting the file Asynchronously
fs.unlink('output2.txt', (err)=>{
    if(err)
        throw err;
    console.log('File deleted successfully');   
});

//Deleting the file Synchronously
fs.unlinkSync("output2.txt");
console.log('File Deleted Successfully');