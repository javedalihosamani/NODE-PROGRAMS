var crypto = require('crypto');

//Creating Hmac Object (Keyed Hash Message Authentication)
var hmac = crypto.createHmac('sha256', 'yoursecretkeyhere');

var data = hmac.update('Be-practical Tech Solutions..!', 'utf-8');

var gen_hmac = data.digest('hex');

console.log("Hmac :" + gen_hmac);