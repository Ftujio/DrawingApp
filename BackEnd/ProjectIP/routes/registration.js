/**
 * Created by kalin on 25.04.17.
 */

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
//  res.render('index', { title: 'Express' });
    res.send("Welcome to registration");
});

module.exports = router;