var cp = require('child_process');

for(var i=1; i<6; i++){
    var worker = cp.exec('node slave.js', + i, (error, stdout, stderr)=>{
        if(error){
            console.log(error.stack);
            console.log("Error Code :"+ error.stack);
            console.log("Error Signal :"+ error.signal);
        }
        if(stderr){
            console.log("Value of STDERR :" + stderr);
        }
        console.log("Value of STDOUT :"+ stdout);
    });
}