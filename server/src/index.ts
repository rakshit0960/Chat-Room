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


    socket.id

    socket.on('disconnect', () => {
      console.log('user disconnected');
    });
});
server.listen(3000, () => {
  console.log('server running at c');
});