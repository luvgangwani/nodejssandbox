var express = require("express");

var app = express();

var route = express.Router();

/*app.use('/routeexample', route);

route.get('/firstparameter', function(request, response){

	response.send('This is parameter 1');
});

route.get('/secondparameter', function(request, response){

	response.send('This is parameter 2');
});*/

app.use('/user', route);

route.get('/:username/:action', function(request, response){

	response.send(request.params);

});

app.listen(8888, function(){

	console.log("Server has started..");
});