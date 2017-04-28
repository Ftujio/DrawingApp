/**
 * Created by kalin on 25.04.17.
 */

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.send("Welcome to registration1");
});

// https://www.youtube.com/watch?v=pzGQMwGmCnc

module.exports = router;