var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cors = require('cors');
var logger = require('morgan');
const http = require('http')
const socketio = require('socket.io')


var usersRouter = require('./routes/users');
var indexRouter = require('./routes/index');
var authRouter = require('./routes/auth')

var app = express();
const server = http.createServer(app)
const io = socketio(server)
const crypto = io.of('/crypto');


crypto.on('connect', async socket => {
    console.log(`${socket.id} is connected to the server`);
    socket.on('disconnect', () => {
    console.log(`${socket.id} is disconnected from the server`);
    })
});

app.use(logger('dev'));
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/auth', authRouter);

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => { console.log(`Server started running on port ${PORT}`) })

module.exports = app;
