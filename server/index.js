/**
 * @file websocket server 端
 */
const server = require('http').createServer();
const socketIO = require('socket.io');
const io = socketIO(server);

io.on('connect', (socket) => {
    let room = '';

    socket.on('join', (nextRoom) => {
        socket.leave(room)
        socket.join(nextRoom);
        room = nextRoom;
    })

    socket.on('disconnect', () => {
        socket.leave(room)
    })

    socket.on('move', (value) => {
        socket.emit('move', value);
        socket.to(room).emit('move', value);
    })
})

server.listen(3002);
