var express = require('express');
var router = express.Router();

var User = require('../models/User');
var Picture = require('../models/Picture');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

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

router.get('/logout', function (req, res) {
    req.session.destroy();
    return res.status(200).send();
});


router.post('/post-picture', function (req, res, next) {
    var authorname = req.body.author_name;
    var title = req.body.title;
    var description = req.body.description;
    var tags = req.body.tags;

    var newpicture = new Picture();
    newpicture.author_name = authorname;
    newpicture.title = title;
    newpicture.description = description;
    newpicture.tags = tags;

    newpicture.save(function (err, savedPicture) {
        if (err) {
            console.log(err);
            return res.status(500).send();
        }
        return res.status(200).send();
    })
});

router.get('/get-picture/:_id', function (req, res) {
    Picture.getPictureById(req.params._id, function (err, picture) {
       if (err) {
           console.log(err);
           return res.status(500).send();
       }
       res.json(picture);
       console.log('Successfull');
    });
});

router.get('/get-picture', function (req, res) {
    Picture.findOne({ "author_name": req.query.author_name }, function (err, pictures) {
        console.log("Ala bala" + req.query.author_name);
        if (err) {
            console.log(err);
            return res.status(500).send();
        }
        res.json(pictures);
    });
});

module.exports = router;