var mongoose = require('mongoose');
var bcrypt = require('bcrypt');
SALT_WORK_FACTOR = 10; /* level of security */

var userSchema = new mongoose.Schema({
   username: String,
   password: String,
   firstname: String,
   lastname: String
});

/* From stackoverflow */
userSchema.pre('save', function (next) {
   var user = this;

   /* Only hash the password if it has been modified (or is new) */
   if (!user.isModified('password')) return next();

   /* Generate a salt */
   bcrypt.genSalt(SALT_WORK_FACTOR, function (err, salt) {
       if (err) return next(err);

       /* Hash the password using our new salt */
       bcrypt.hash(user.password, salt, function (err, hash) {
           if (err) return next(err);

           /* Override the cleartext password with the hashed one */
           user.password = hash;
           next();
       });
   });
});

userSchema.methods.comparePassword = function (candidatePassword, callback) {
    bcrypt.compare(candidatePassword, this.password, function (err, isMatch) {
        if (err) return callback(err);
        callback(undefined, isMatch);
    });
};

var User = mongoose.model('myusers', userSchema);
module.exports = User;