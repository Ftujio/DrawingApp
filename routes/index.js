var express = require('express');
var router = express.Router();

var User = require('../models/User');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* POST make registration */
router.post('/register', function (req, res) {
    var username = req.body.username;
    var email = req.body.email;
    var password = req.body.password;

    var newuser = new User();
    newuser.username = username;
    newuser.email = email;
    newuser.password = password;
    newuser.save(function (err, savedUser) {
        if (err) {
            console.log(err);
            return res.status(500).send();
        }

        return res.status(200).send();
    })
});

/* POST the user can login */
router.post('/login', function (req, res) {
    var username = req.body.username;
    var password = req.body.password;

    User.findOne({username: username}, function (err, user) {
        if (err) {
            console.log(err);
            return res.status(500).send();
        }

        if (!user){
            console.log('There is no such a use');
            return res.status(404).send();
        }

        user.comparePassword(password, function (err, isMatch) {
            if (isMatch && isMatch == true) {
              /* store the user in the session */
                req.session.user = user;

                return res.status(200).send();
            } else {
                console.log('The password is incorrect');
                return res.status(401).send();
            }
        });
    })
});

/* GET the user can logout */
router.get('/logout', function (req, res) {
    req.session.destroy();
    return res.status(200).send();
});

module.exports = router;