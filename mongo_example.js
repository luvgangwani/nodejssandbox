var express = require('express');

var path = require('path');

var mongodb = require('mongodb');

var bodyParser = require('body-parser');

//var jade = require('jade');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));
app.use('/scripts', express.static(__dirname + '/node_modules/bootstrap/dist'));
app.use('/js', express.static(__dirname + '/node_modules/jquery/dist'));

app.set('view engine', 'jade');

app.get("/", function(request, response){

	response.sendFile('mongo_example.html', {root: path.join(__dirname)});
});

app.get("/thelist", function(request, response){

	var MongoClient = mongodb.MongoClient;

	var url = "mongodb://localhost:27017/mongonodeexample";

	MongoClient.connect(url, function(err, db){

		if(err){

			console.log("Unable to connect..", err);
		}
		else {

			console.log("Connected successfully!");

			var collection = db.collection('students');

			collection.find({}).toArray(function(err, result){

				if(err){

					response.send(err);
				}
				else if(result.length){

					response.render('thelist',{
						"result" : result
					});
				}
				else {

					response.send("No documents found")
				}
			});
		}
		db.close();
	});

});

app.get("/newstudent", function(request, response){

	response.sendFile('new_student.html', {root: path.join(__dirname)});
});

app.post("/addstudent", function(request, response){

	console.log(request.body);
	var MongoClient = mongodb.MongoClient;

	var url = "mongodb://localhost:27017/mongonodeexample";

	MongoClient.connect(url, function(err, db){

		if(err){

			console.log("Unable to connect..", err);
		}
		else{

			console.log("Connected successfully!");

			var collection = db.collection('students');

			var student1 = {

				fname : request.body.fname,
				lname : request.body.lname,
				age : request.body.age,
				address : request.body.address,
				gpa : request.body.gpa

			};

			collection.insert([student1], function(err, result){

				if(err){

					console.log("Could not insert data..", err);
				}
				else{

					response.redirect('/thelist');
				}
			});
		}
		db.close();
	});
});

app.listen('8888', function(){

	console.log("Server has started...");
});