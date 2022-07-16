let dgram = require('dgram');

let socket = dgram.createSocket("udp4");
socket.send(Buffer.from("Hi this is a second dgram message"),3000, 'localhost');

console.log("data is updated in socket & is ready to receive.");