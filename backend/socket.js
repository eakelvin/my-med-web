const express = require('express')
const socketIo = require('socket.io');

function setupSocket(server) {

  const io = socketIo(server, {
    cors: {
      origin: 'http://localhost:5173',
    },
  });

  io.on('connection', (socket) => {
    console.log('User Connected');
    
    // io emits sends to all connected users
    // io.emit('firstEvent', 'Hello this is a test')

    // socket emits sends to a specific connected user
    // socket.emit('firstEvent', 'Hello, this is a test');

    socket.on('connect', () => {
      console.log('User Connected');
    });
    ``
    socket.on('disconnect', () => {
      console.log('User disconnected');
    });

    socket.on('new_user', (data) => {
      // console.log('New User Logged in', data.message);
      io.emit('new_user', {message: data.message})
      socket.emit('new_user', {message: data.message})
    })

  });

  return io;
}

module.exports = setupSocket;