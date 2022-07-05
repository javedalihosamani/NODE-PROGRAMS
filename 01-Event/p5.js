let Emitter = require("events").EventEmitter;

let x = new Emitter();

x.on("sum",function(a,b){
    console.log("SUM = ", a+b);
});

x.emit("sum", 130, 120);
