var fs = require('fs');

//Renaming the file Asynchronously 
fs.rename('output1.txt', 'output2.txt', (err) => {
    if (err)
        throw err;
    console.log('rename => File renamed successfully');
});

//Renaming the file Synchronously
fs.renameSync('output2.txt', 'output3.txt');
console.log('renameSync => File renamed successfully');