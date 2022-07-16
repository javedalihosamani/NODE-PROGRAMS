var cp = require('child_process');

for(var i=1; i<6; i++){
    var worker = cp.spawn("node",["slave.js", i]);

    worker.stdout.on('data', (data)=>{
        console.log("Value of Stdout :" + data);
    });
    worker.stderr.on('data', (data)=>{
        console.log("STDERR :" + data);
    });
    worker.on('data', (data)=>{
        console.log("Child Process exited with code.", data);
    });
}