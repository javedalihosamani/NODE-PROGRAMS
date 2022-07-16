const cluster = require('cluster');

if(cluster.isWorker){
    console.log('Node Worker is Running..!');
}
else{
    cluster.fork();
    cluster.fork();
    cluster.fork();
    cluster.fork();
    cluster.fork();
}