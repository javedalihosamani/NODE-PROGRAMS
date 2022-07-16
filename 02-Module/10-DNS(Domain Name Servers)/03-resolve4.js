var dns = require('dns');

dns.resolve4('www.be-practical.com', (err, address)=>{
    console.log(`Address : ${address}`);

    address.forEach((a)=>{
        dns.reverse(a, (err, hostname)=>{
            if(err) throw err;
            console.log(`REVERSE FOR ${a}: ${hostname}`);
        })
    });
} );