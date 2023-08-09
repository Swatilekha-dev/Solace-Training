const http = require('http');

const hostname = '127.0.0.1';
// const port = 21;

// const port-23;

const port = 9090;
//port- 3000 - pass using
//part- 9000 - pass 12 
//port- 21 - falls
//port-443- pass

const server = http.createServer ((req, res) => {
	res.statusCode = 200; //server could process the request properly
	res.setHeader('Content-Type', 'text/plain');  
	res.end('Hello World123 on the browser\n'); //what is the response from the server

});

server. listen (port, hostname, () => {
	console.log(`Server running at http://${hostname}:${port}/`);
	console.log("Consoles Hello World");
	console.log("Consoles Hello World123");

});