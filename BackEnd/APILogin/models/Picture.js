var mongoose = require('mongoose');

var pictureSchema = new mongoose.Schema({
    author_name: String,
    title: String,
    description: String,
    tags: [String]
});

var Picture = mongoose.model('pictures', pictureSchema);

module.exports = Picture;

/*Get picture by Id*/
module.exports.getPictureById = function (id, callback) {
    Picture.findById(id, callback);
}