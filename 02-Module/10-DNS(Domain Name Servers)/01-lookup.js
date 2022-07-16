var dns = require('dns');

dns.lookup('www.facebook.com', (err, address, family)=>{
    if(err) throw err;

    console.log("Address :" , address);
    console.log("Family :" , family);
});