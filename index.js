const { Socket } = require('socket.io')(8000)

//node srever which will handle io socket

const users = {};

io.on('connection', socket=> {
    socket.on('new-user-joined',name => {
        console.log("new user",name);
        user[socket.id] = name;
        socket.broadcast.emit('user-joined')
    });

    socket.on('send', message =>{
        socket.broadcast.emit('recive',{message: message, namw: user[socket.id]})
    });

    socket.on('disconnet', message =>{
        socket.broadcast.emit('center',user[socket.id])
        delete user[socket.id];
    });
})