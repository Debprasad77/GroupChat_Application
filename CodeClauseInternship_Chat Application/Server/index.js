const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const cors = require('cors');

const app = express();
app.use(cors());
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"]
  }
});

const usersByRoom = new Map();

io.on('connection', (socket) => {
  console.log(`User connected: ${socket.id}`);

  socket.on('join_room', (data) => {
    const { username, room } = data;
    socket.join(room);

    if (!usersByRoom.has(room)) {
      usersByRoom.set(room, new Map());
    }
    const roomUsers = usersByRoom.get(room);
    roomUsers.set(socket.id, username);

    io.to(room).emit('room_users', {
      users: Array.from(roomUsers.values())
    });

    socket.emit('receive_message', {
      username: 'System',
      message: `Welcome to ${room}, ${username}!`,
      timestamp: new Date()
    });

    socket.to(room).emit('receive_message', {
      username: 'System',
      message: `${username} joined the chat`,
      timestamp: new Date()
    });
  });

  socket.on('send_message', (data) => {
    io.to(data.room).emit('receive_message', {
      username: data.username,
      message: data.message,
      timestamp: new Date()
    });
  });

  socket.on('disconnect', () => {
    usersByRoom.forEach((users, room) => {
      if (users.has(socket.id)) {
        const username = users.get(socket.id);
        users.delete(socket.id);
        
        io.to(room).emit('room_users', {
          users: Array.from(users.values())
        });
        
        io.to(room).emit('receive_message', {
          username: 'System',
          message: `${username} left the chat`,
          timestamp: new Date()
        });
      }
    });
  });

  socket.on('leave_room', (data) => {
    const { room, username } = data;
    const roomUsers = usersByRoom.get(room);
  
    if (roomUsers) {
      roomUsers.delete(socket.id);
  
      io.to(room).emit('room_users', {
        users: Array.from(roomUsers.values())
      });
  
      io.to(room).emit('receive_message', {
        username: 'System',
        message: `${username} left the chat`,
        timestamp: new Date()
      });
  
      if (roomUsers.size === 0) {
        usersByRoom.delete(room);
      }
    }
  
    socket.leave(room);
  });
  
});



const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));