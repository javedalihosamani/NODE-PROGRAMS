const EventEmitter = require('./EventEmitter');

var x = new EventEmitter();

x.on("products", function(){
    const a = 30;
    const b = 20;
    console.log("PRODUCTS = ", a*b);
});
x.emit("products");

x.on("sum", function(){
    const a = 30;
    const b = 20;
    console.log("SUM = ", a+b);
});
x.emit("sum");