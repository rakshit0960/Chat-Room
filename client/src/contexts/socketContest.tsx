import { createContext } from "react";
import { Socket } from "socket.io-client";

export interface ISocketContext {
    socket: Socket
}

const socketContext = createContext<null | ISocketContext>(null);

export default socketContext