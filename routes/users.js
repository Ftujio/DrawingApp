const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');

const User = require('../models/user');

// REGISTER
router.post('/register', (req, res, next) => {
	console.log(req.body);

	let newUser = new User({
		username: req.body.username,
		email: req.body.email,
		password: req.body.password
	});

	console.log(newUser);

	User.addUser(newUser, (err, user) => {
		console.log('********************************************************');
		if(err){
			res.json({success: false, msg: 'Failed to register user'});
		} else {
			res.json({success: true, msg: 'User registered'});
		}
	});
});

router.post('/authenticate', (req, res, next) => {
	res.send('AUTHENTICATE');
});

router.get('/profile', (req, res, next) => {
	res.send('PROFILE');
});

module.exports = router;
