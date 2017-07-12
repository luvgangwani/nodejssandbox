var express = require("express");

var fs = require("fs");

var path = require("path");

var app = express();

app.get('/', function(request, response){

	//response.send(JSON.stringify(request.query));
	response.send("Hello "+request.query.firstname);

});

app.listen(8888, function(){

	console.log("Server has started..");
});