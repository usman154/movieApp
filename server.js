var express = require('express'),
app = express(),
model = require('./model/moviesModel'),
bodyParser = require('body-parser'),
mongoose = require('mongoose'),
port = process.env.port || 3000;
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://test:test@ds239439.mlab.com:39439/movieapp', function(data){
	
	console.log("Connected with database successfully");
});
app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
  });
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(__dirname+"/frontend"));
var routes = require('./routes/routes');
routes(app);
app.listen(port)
console.log(`Server is listening on the port ${port}`);