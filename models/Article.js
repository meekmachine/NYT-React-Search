//Require Mongoose
var mongoose = require('mongoose');

//create a schema class
var Schema = mongoose.schema;

//Creating the Schema for each article
var ArticleSchema = new Schema({

	//Title of the  the article
	title: {
		type: String,
		required:true,
	},

	//Date of the article
	date: {
		type: String,
		required: true,
	},

	//Link to Article
	url: {
		type: String,
		required: true
	}

});

//Creating the Article model with Mongoose
var Article = mongoose.model('Article', ArticleSchema);

//Export the model
module.exports = Article;