var http = require('http');
var fs = require('fs');

var server = http.createServer((request, response)=>{
    response.writeHead(200,{"content-type":"application/pdf"});

    fs.readFile('index.pdf', (err, data)=>{
        if(err)
            throw err;
            console.log("Operation Success");
            response.end(data);
    });
}).listen(3000);