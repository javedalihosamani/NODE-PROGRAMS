var http = require('http');
var fs = require('fs');

http.createServer((req, res)=>{
    res.writeHead(200, {'content-type':'audio/mp3'});

    fs.exists('audio.mp3',(exists)=>{
        if(exists){
            var rstream = fs.createReadStream('audio.mp3');
            rstream.pipe(res);
        }else{
            res.end();
        }
            
    });
}).listen(3000);