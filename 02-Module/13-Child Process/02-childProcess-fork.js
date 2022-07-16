var cp = require('child_process');

for(var i=1; i<6; i++){
    var worker = cp.fork('slave.js', [i]);
    
    worker.on('data', (data)=>{
        console.log("Child Process exited with code.", data);
    });
}