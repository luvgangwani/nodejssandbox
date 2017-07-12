var express = require("express");

var cookieParser = require("cookie-parser");

var app = express();

app.use(cookieParser());

app.get('/setCookie', function(request, response){

	response.cookie('name', 'Jesse Quick');
	response.end('This site needs cookies enabled. It might set some cookies');
});

app.get('/clearCookie', function(request, response){

	response.clearCookie('name');
	response.send('Cookie has been cleared');
});

app.listen(8888, function(){

	console.log("Server is running..");
});