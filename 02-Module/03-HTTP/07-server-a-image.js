var http = require('http');
var fs = require('fs');

http.createServer((req, res)=>{
    res.writeHead(200, {'content-type':'image/jpg'});

    fs.exists('image.jpg',(exists)=>{
        if(exists){
            var rstream = fs.createReadStream('image.jpg');
            rstream.pipe(res);
        }else{
            res.end();
        }
    });
}).listen(3000);