var express = require('express');
var router = express.Router();

Picture = require('../models/Picture');

/* GET picture listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});

/* POST a picture */
router.post('/post-picture', function (req, res) {
    var picture = req.body;
    Picture.addPicture(picture, function (err, picture) {
       if (err) {
           console.log(err);
           return res.status(500).send();
       }
       res.json(picture);
    });
});

/* POST a picture */
router.put('/put-picture/:_id', function (req, res) {
    var id = req.params._id;
    var picture = req.body;
    Picture.updatePicture(id, picture, function (err, picture) {
        if (err) {
            console.log(err);
            return res.status(500).send();
        }
        res.json(picture);
    });
});

/* POST a picture */
router.delete('/delete-picture/:_id', function (req, res) {
    var id = req.params._id;
    Picture.removePicture(id, function (err, picture) {
        if (err) {
            console.log(err);
            return res.status(500).send();
        }
        res.json(picture);
    });
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
