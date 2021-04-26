const { Server } = require("socket.io");
const io = new Server();
const crypto = io.of('/crypto');
crypto.on('connect', async socket => {
    console.log(`${socket.id} is connected to the server`);
    socket.on('disconnect', () => {
        console.log(`${socket.id} is disconnected from the server`);
    })
});
module.exports = io;