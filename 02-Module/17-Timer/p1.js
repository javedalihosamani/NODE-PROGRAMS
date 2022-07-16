function Hello(){
    console.log("This will Run Immediately..!");
}
Hello();

console.log("setImmediate..!");
setImmediate(Hello);

console.log("setInterval..!");
setInterval(Hello , 1000);

console.log("setTimeout..!");
setTimeout(Hello, 1000);

// clearInterval();
// clearTimeout();