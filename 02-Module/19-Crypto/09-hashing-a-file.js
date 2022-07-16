var crypto = require('crypto');
var fs = require('fs');

// Algorithm to be used for HASH
var algorithm = 'sha256';

//Creating Hash Object
var hash = crypto.createHash(algorithm);

//Reading the content of the file
var fileName = 'data.txt';
var file_data = fs.ReadStream(fileName);

//Passing the data to be hashed
file_data.on("data", (data)=>{
    hash.update(data);
});

file_data.on("end", ()=>{
    var gen_hash = hash.digest('hex');
    console.log('Hash Generated Using :'+ algorithm + '\n Hashed OutPut is :'+ gen_hash + '\n File name is :'+ fileName);
});