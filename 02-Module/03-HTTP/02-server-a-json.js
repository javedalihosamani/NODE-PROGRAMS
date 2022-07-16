var http = require('http');

var server = http.createServer((request, response)=>{
    //change the MIME type to 'application/json' 
    response.writeHead(200,{"Content-Type":"application/json"});

    //Create a JSON
	let json_response = {
		status : 200 , 
		message : 'successful' , 
		result : [ 'sunday' , 'monday' , 'tuesday' , 'wednesday' ] , 
		code : 2000
	}

    response.end(JSON.stringify(json_response));
}).listen(3000);