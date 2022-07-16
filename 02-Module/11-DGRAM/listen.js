let dgram = require('dgram');

let socket = dgram.createSocket("udp4");

socket.on("message", (msg, err)=>{
    console.log(msg.toString());
});
socket.bind(3000);