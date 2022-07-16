var http = require('http');
var fs = require('fs');

var server = http.createServer((request, response)=>{
    //change the MIME type to 'text/html' 
    response.writeHead(200,{"content-type":"text/html"});

    fs.readFile('index.html', (err, data)=>{
        if(err)
            throw err;
            console.log("Operation Success");
            response.end(data);
    });
}).listen(3000);