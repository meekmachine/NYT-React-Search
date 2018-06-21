var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Article = require('./models/Article.js');
var routes = require('./routes');
var app = express();

//Deliver static content
app.use(express.static(process.cwd() + '/public'));

// Connect to localhost if not a production environment
if(process.env.NODE_ENV == 'production'){

  // Gotten using `heroku config | grep MONGODB_URI` command in Command Line
  //MUST REPLACE THIS WITH OWN 
  mongoose.connect('mongodb://heroku_kbdv0v69:860jh71jd1iu5m5639gjr0gg9l@ds129028.mlab.com:29028/heroku_kbdv0v69');
}
else{
  mongoose.connect('mongodb://localhost/nytreact');
}
var db = mongoose.connection;
// Add routes, both API and view
app.use(routes);
// Show any Mongoose errors
db.on('error', function(err) {
  console.log('Mongoose Error: ', err);
});

//Launch app
var port = process.env.PORT || 3000;
app.listen(port, function(){
	console.log('Running on port: ' + port);
});