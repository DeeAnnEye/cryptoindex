var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cors = require('cors');
var logger = require('morgan');
const http = require('http')
const socketio = require('socket.io')
var cron = require('node-cron');

const axios = require('axios');

var usersRouter = require('./routes/users');
var indexRouter = require('./routes/index');
var authRouter = require('./routes/auth')

var app = express();
const server = http.createServer(app)
const io = socketio(server)
const crypto = io.of('/crypto');

const getPrice = async () => {
    try {
        const { data } = await axios.get(`https://api.nomics.com/v1/currencies/ticker?key=df4f2c2bf8926feecee70b01bf6ec9f9&convert=USD&per-page=10&page=1`)
        // console.log(response.data);
        return data;
    } catch (error) {
        console.error(error)
    }
}

const sendPrice = () => {
    cron.schedule('*/10 * * * * *', async () => {
        console.log('running a task every 10 seconds');
        crypto.emit('price', { data: await getPrice() })
    });
}

crypto.on('connect', async socket => {

    console.log(`${socket.id} is connected to the server`);
    socket.on('get:price', async (data) => {
        socket.emit('price', { data: await getPrice() })
    })
    socket.on('disconnect', () => {
        console.log(`${socket.id} is disconnected from the server`);
    })

});

sendPrice();

app.use(logger('dev'));
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/auth', authRouter);

// static assets for production
if(process.env.NODE_ENV === 'production'){
    app.use(express.static('/app/build'))

    app.get('*', (req,res) => {
        res.sendFile('/app/build/index.html')
    })
}

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => { console.log(`Server started running on port ${PORT}`) })

module.exports = app;
