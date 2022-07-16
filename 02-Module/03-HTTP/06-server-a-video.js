var http = require('http');
var fs = require('fs');

http.createServer((req, res)=>{
    res.writeHead(200, {'content-type':'video/mp4'});

    fs.exists('video.mp4',(exists)=>{
        if(exists){
            var rstream = fs.createReadStream('video.mp4');
            rstream.pipe(res);
        }else{
            res.end();
        }
    });
}).listen(3000);