/*var http = require('http');
var fs = require('fs');

//send 404 response

function send404Response(response){

	response.writeHead(404, {'Content-Type' : 'text/plain'});
	response.write('Page not found!');
	response.end();

}
function onRequest(request, response){

	if (request.method == 'GET' && request.url == '/') {

		response.writeHead(200, {'Content-Type' : 'text/html'});
		fs.createReadStream('/index.html').pipe(response);

	}
	else {

		send404Response(response);
	}
}

http.createServer(onRequest).listen(8888);
console.log("Server is now running...");*/

/*---------------- Using connect ----------------*/

/*var connect = require('connect');
var http = require('http');

var app = connect();

function doFirst(request, response, next){

	console.log("We are using connect module using doFirst..");
	next();
}

function doSecond(request, response, next){

	console.log("We are using connect module using doSecond..");
	next();
}

app.use(doFirst);
app.use(doSecond);

http.createServer(app).listen(8888);
console.log("Server is now running...");*/

/*---------------- Using express ----------------*/

/*var express = require("express");

var app = express();

app.get('/hellothere', function(request, response){

	response.send('Hello, this is a test page!');
});

app.listen(8888, function(){

	console.log("Listening at port 8888");
});*/

/*---------------- Using express - Create HTML server ----------------*/

var express = require("express");

var fs = require("fs");

var path = require("path");

var app = express();

app.get('/', function(request, response){

	response.sendFile('index.html', {root: path.join(__dirname, "./")});
});

app.get(/^(.+)$/, function(request, response){

	console.log(request.params[0]);
	try {

		if (fs.statSync(path.join(__dirname, './', request.params[0])).isFile()) {

			response.sendFile(request.params[0], {root: path.join(__dirname, './')});
		}
	}
	catch(err) {

		console.log(err);
		response.sendFile('404.html', {root: path.join(__dirname, './')});
	}
});

app.listen(8888, function(){

	console.log("Server has started..");
});