const cluster = require('cluster');

/* isMaster = Single thread
isWorker = node is running in multi thread (call fork()) */

if(cluster.isMaster){
    console.log("Node is running in single thread");
} else {
    console.log("Node is not running in single thread");
}