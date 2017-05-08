const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const session = require('express-session')
const passport = require('passport');
const cookieParser = require('cookie-parser');
const cors = require('cors');

const config = require('./config/database');

const app = express();

mongoose.connect(config.database);
mongoose.connection.on('connected', () => {
	console.log('Connected to database', config.database);
});

mongoose.connection.on('error', () => {
	console.log('Database error', error);
});

const index = require('./routes/index');
const users = require('./routes/users');
const picture = require('./routes/picture');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

app.use(logger('dev'));
app.use(cookieParser('secret kappa'));
app.use(session({
	secret: 'secret kappa',
	resave: false,
	saveUninitialized: true
}));
app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);

app.use('/', index);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json(err);
});

module.exports = app;
