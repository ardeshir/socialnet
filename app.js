// app.js

var express = require('express');
var app = express();

app.configure(function() {
	app.set('view engine', 'jade');
	app.set('view options', {layout:true});
	app.set('views', __dirname + '/views');
	app.use(express.static(__dirname + '/public'));
});

app.get('/', function(req, res) {
	res.render('index.jade');
})

app.listen(8787); 
