var dns = require('dns');

dns.lookupService('157.240.250.35', 22, (err, hostname, service)=>{
    if(err) throw err;

    console.log("Hostname :" , hostname);
    console.log("Service :" , service);
});