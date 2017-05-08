var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/register', (req, res, next) => {
  res.send('REGISTER');
});

router.get('/authenticate', (req, res, next) => {
	res.send('AUTHENTICATE');
});

router.get('/profile', (req, res, next) => {
	res.send('PROFILE');
});


module.exports = router;
