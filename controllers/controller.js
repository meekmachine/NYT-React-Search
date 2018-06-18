var express = require('express');
var router = express.Router();

//Import the Article model/schema
var Article = require('../models/Article.js');

//This route will display the ReactJS application
router.get("/", function(req,res) {
	res.sendFile(process.cwd() + "/public/index.html");
});

//API GET - This route will query Mongo DB for all saved artilces. Will be used by your componenets as necessary.
router.get("/api/saved", function(req,res) {

	//Query Mongo for the Articles
		Article.find({}, function(err, articles){
			//log any errors
			if (err){
				console.log(err);
			}
			//send doc to the browser as a json
			else {
				res.json(articles)
			}
		});
});

//API POST - this route will save an article to the database
router.post("/api/saved", function(res, res) {
	//call in the Article model/schema, create a new  entry
	var entry = new Article (req.body);

	// save the entry to MongoDB
	entry.save(function(err, doc) {
		// log any errors
		if (err) {
			console.log(err);
			res.sendStatus(400);
		}
		// else save to DB
		else {
			console.log(doc);
			res.sendStatus(200);
		}
	});
});


//API DELETE - delete a saved article in the database
router.post("/api/delete/:articleMongoId", function(req, res) {
	console.log(req.params.articleMongoId);
	Article.findByIdAndRemove(req.params.articleMongoId, function (err, todo) {
		if (err) {
			//Send error
			console.log(err);
			res.sendStatus(400);
		}
		else {
			//Send sucess
			res.sendStatus(200);
		}
	});
});

//CATCH ALL - redirect user to the "/" route for any unknown case by using "*"
router.get("*", function(req, res) {
	res.redirect("/");
});

//Export Router to Server.js to use
module.exports = router;