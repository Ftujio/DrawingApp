var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


router.get('/dashboard', function (req, res) {
   if (!req.session.user) { // check if the session has the user object
        console.log('you are not log in');
//     return res.status(401).send();
   }

   /* If the session exist return the ... */
    console.log('log in');
   //   return res.status(200).send("Welcome to super-secret API");
});


module.exports = router;
