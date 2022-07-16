var cluster = require("cluster");
var http = require('http');
var numOfCPUS = require('os').cpus().length;

if(cluster.isMaster){
    console.log(`Master with Process ID : ${process.pid} is running`);

    for(var i =1; i<=numOfCPUS; i++){
        cluster.fork();
    }

    cluster.on("exit", (worker, code, signal)=>{
        console.log(`Worker with Process ID : ${worker.process.pid} died`);
    });
} else {
    http.createServer((req, res)=>{
        res.writeHead(200);
        res.end('An Example of clusters \n');
    }).listen(3000);
    console.log(`Worker with Process ID : ${process.pid} started`);
}