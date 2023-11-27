"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const node_http_1 = require("node:http");
const socket_io_1 = require("socket.io");
const app = (0, express_1.default)();
const server = (0, node_http_1.createServer)(app);
const io = new socket_io_1.Server(server, {
    cors: {
        origin: '*'
    }
});
io.on('connection', (socket) => {
    console.log('a user connected', socket.id);
    socket.on('join-room', ({ roomName, username }) => {
        if (typeof roomName !== 'string' || typeof username !== 'string')
            throw Error('Bad request');
        console.log('user:', username, 'wants to join room:', roomName, 'id:', socket.id);
        socket.join(roomName); // join the room
        io.to(socket.id).emit('join-room', { roomName });
    });
    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
});
server.listen(3000, () => {
    console.log('server running at http://localhost:3000');
});
