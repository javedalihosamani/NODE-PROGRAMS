// Loading crypto module in node.js
var crypto = require('crypto');

// Creating hash Object
var hash = crypto.createHash("md5");

// Passing the data to be hashed
var data = hash.update('Be-practical Tech Solutions..!', 'utf-8');

//Creating the hash in the required formate
var gen_hash = data.digest('hex');

//Printing the output on the console
console.log("hash : " + gen_hash);