var cp = require('child_process').execFile;


for(var i=1; i<6; i++){
    var child = cp('node', ['slave.js'], (error, stdout, stderr)=>{
        if(error){
            console.log("STDERR", stderr);
            throw error;
        }
        console.log('Node.js Version :' , stdout);
    });
}