var crypto = require('crypto');

var hash = crypto.createHash('ripemd160');

data = hash.update('Be-practical Tech Solutions..!', 'utf-8');

var gen_hash = data.digest('hex');

console.log("Hash :" + gen_hash );