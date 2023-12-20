const express = require('express')
const server = express()
const socketIo = require('socket.io');

function setupSocket(server) {
  const io = socketIo(server, {
    cors: {
      origin: 'http://localhost:5173',
    },
  });

  io.on('connection', (socket) => {
    // io.emit('firstEvent', 'Hello this is a test')
    socket.emit('firstEvent', 'Hello, this is a test');

    socket.on('connect', () => {
      console.log('Socket connected to the server.');
    });

    socket.on('disconnect', () => {
      console.log('User disconnected');
    });
  });

  return io;
}

module.exports = setupSocket;