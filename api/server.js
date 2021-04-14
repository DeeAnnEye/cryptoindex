var createError = require('http-errors');
var express = require('express');
var path = require('path');
var logger = require('morgan');

var usersRouter = require('./routes/users');
var indexRouter = require('./routes/index');
var authRouter = require('./routes/auth')

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/auth', authRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT,() => {console.log(`Server started running on port ${PORT}`)})

module.exports = app;
