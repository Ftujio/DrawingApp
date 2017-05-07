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

module.exports.getPictureByDescription = function (description, callback) {
    Picture.find(description, callback);
}

// http://stackoverflow.com/questions/24348437/mongoose-select-a-specific-field-with-find

// module.exports.getPictureByAuthor = function (req, res, next) {
//
//     var query = pictureSchema.findOne({ 'author_name': req.body.author_name });
//
//     res.send(query);
//
//     // //query with mongoose
//     // var query = pictureSchema.author_name.find({}).select('author_name');
//     //
//     // query.exec(function (err, getPictureByAuthor) {
//     //     if (err) return next(err);
//     //     res.send(getPictureByAuthor);
//     // });
// };