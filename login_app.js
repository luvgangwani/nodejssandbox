var express = require("express");

var bodyParser = require("body-parser");

var sessions = require("express-session");

var session;

var app = express();

app.use(bodyParser());

app.use(sessions({
	secret: 'qwertyuiop',
}))

app.get('/login', function(request, response){

	response.sendFile('./login_app.html', {root: __dirname});
});

app.post('/login', function(request, response){

	session = request.session;
	if (request.body.username == 'admin' && request.body.password == 'admin') {

		session.uniqueID = request.body.username;
	}
	response.redirect('/homepage');
});

app.get('/homepage', function (request, response) {
	
	if (session.uniqueID) {
		console.log(session.uniqueID);
		response.redirect('/admin');

	}
	else {

		response.send ('Access denied!');
	}

});

app.get('/admin', function (request, response) {

	response.send("Access granted!");

});

app.get('/logout', function (request, response) {
	request.session.destroy(function (error) {
		console.log(error);
		response.redirect('/login');
	})
})

app.listen(8888, function(){

	console.log("Server has started..");
});