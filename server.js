var express = require('express'),
app = express(),
model = require('./model/moviesModel'),
bodyParser = require('body-parser'),
mongoose = require('mongoose'),
port = process.env.port || 3000;
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/MovieDb');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
var routes = require('./routes/routes');
routes(app);
app.listen(port)
console.log(`Server is listening on the port ${port}`);