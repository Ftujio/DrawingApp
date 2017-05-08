var mongoose = require('mongoose');

var pictureSchema = mongoose.Schema({
    author_name: String,
    title: String,
    description: String,
    tags: [String]
});

var Picture = module.exports = mongoose.model('Picture', pictureSchema);

//module.exports = Picture;

/* Add picture */
module.exports.addPicture = function (picture, callback) {
    Picture.create(picture, callback);
}

/* Update picture */
module.exports.updatePicture = function (id, picture, callback) {
    var query = {_id: id};
    var update = {
        author_name: picture.author_name,
        title: picture.title,
        description: picture.description,
        tags: picture.tags
    }
    Picture.findOneAndUpdate(query, update, callback);
}

/* Delete picture */
module.exports.removePicture = function (id, callback) {
    var query = {_id: id};
    Picture.remove(query, callback);
}