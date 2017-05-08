var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/register', (req, res, next) => {
  res.send('REGISTER');
});

router.post('/authenticate', (req, res, next) => {
	res.send('AUTHENTICATE');
});

router.get('/profile', (req, res, next) => {
	res.send('PROFILE');
});

module.exports = router;
