import express from 'express';
import { createServer } from 'node:http';
import { Server } from 'socket.io';

const app = express();
const server = createServer(app);

const io = new Server(server, {
  cors: {
    origin: '*'
  }
});

io.on('connection', (socket) => {
    console.log('a user connected', socket.id);


    socket.on('join-room', ({roomName, username}) => {
      if (typeof roomName !== 'string' || typeof username !== 'string') throw Error('Bad request');
      console.log('user:', username, 'wants to join room:', roomName, 'id:', socket.id)
      socket.join(roomName); // join the room
      io.to(socket.id).emit('join-room', {roomName});
    });


    socket.on('disconnect', () => {
      console.log('user disconnected');
    });
});
server.listen(3000, () => {
  console.log('server running at http://localhost:3000');
});