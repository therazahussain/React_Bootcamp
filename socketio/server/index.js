const express = require('express');
const { Server } = require('socket.io');
const http = require('http');
const app = express();
const cors = require('cors');


app.use(cors());
const server = http.createServer(app)


const io = new Server(server, {
    cors: {
        origin: 'http://localhost:3000',
        methods: ['GET', 'POST']
    },
});

// establishing a connection wiht the client side 
io.on("connection", (socket) => {
    console.log(`User Connected ${socket.id}`)

    // to join a specific room telling client to join the desired room as per user choice
    socket.on("join_room", (data) => {
        socket.join(data);
    })

    //  to send the message
    socket.on("send_message", (data) => {
        // to brodcast message to all the connected user other than user itself
        // socket.broadcast.emit("receive_message", data)
    
        // to send the data to only the users who are connect in a specific room. 
        socket.to(data.room).emit("receive_message", data)
    })
})


server.listen(3001, () => {
    console.log('listening on port 3001')
});