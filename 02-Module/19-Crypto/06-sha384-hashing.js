var crypto = require('crypto');

var hash = crypto.createHash('sha384');

data = hash.update('Be-practical Tech Solutions..!', 'utf-8');

var gen_hash = data.digest('hex');

console.log("Hash :" + gen_hash );