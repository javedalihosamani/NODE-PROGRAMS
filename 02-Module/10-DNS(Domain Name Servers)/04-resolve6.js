var dns = require('dns');

dns.resolve6('www.google.com', (err, address)=>{
    console.log(`Address : ${address}`);

    address.forEach((a)=>{
        dns.reverse(a, (err, hostname)=>{
            if(err) throw err;
            console.log(`REVERSE FOR ${a}: ${hostname}`);
        })
    });
} );