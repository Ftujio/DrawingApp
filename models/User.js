var mongoose = require('mongoose');
var bcrypt = require('bcrypt');
const config = require('../models/database');

var userSchema = new mongoose.Schema({
   name: {
		 type: String,
	 },
	 email: {
		 type: String,
		 required: true
	 },
	 username: {
		 type: String,
		 required: true
	 },
	 password: {
		 type: String,
		 required: true
	 }
});

var User = module.exports = mongoose.model('users', userSchema);

module.exports.getUserById = function(id, callback){
	User.findById(id, callback);
}

module.exports.getUserByUsername = function(username, callback){
	cons query = { username: username };
	User.findOne(query, callback);
}
