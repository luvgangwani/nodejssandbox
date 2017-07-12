var express = require("express");

var fs = require("fs");

var path = require("path");

var bodyParser = require("body-parser");

var app = express();

app.use(bodyParser());

app.get('/', function(request, response){

	response.sendFile('index.html',{root: path.join(__dirname, './')});

});

app.post('/', function(request, response){

	response.send(request.body);
});

app.listen(8888, function(){

	console.log("Server has started..");
});