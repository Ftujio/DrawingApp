var express = require('express');
var router = express.Router();

var Picture = require('../models/Picture');

/* GET picture listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});

/* POST creating a picture */
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

/* GET the picture by author */
router.get('/get-picture/author', function (req, res) {
    console.log('Here');
    Picture.find({ "author_name": req.query.author_name }, function (err, pictures) {
        if (err) {
            console.log(err);
            return res.status(500).send();
        }
        res.json(pictures);
    });
});

/* GET the picture by title */
router.get('/get-picture/title', function (req, res) {
    Picture.find({ "title": req.query.title }, function (err, pictures) {
        if (err) {
            console.log(err);
            return res.status(500).send();
        }
        res.json(pictures);
    });
});

/* GET the pictures by tags */
router.get('/get-picture/tags', function (req, res) {

    var tags = req.query.tags.split(',');

   Picture.find({ "tags": {$in:tags} }, function (err, pictures) {
       if (err) {
           console.log(err);
           return res.status(500).send();
       }
       res.json(pictures);
   });
});

module.exports = router;