import { io } from "socket.io-client";
import socketContext from "./socketContest";

interface Prop {
    children: JSX.Element | JSX.Element[] | string  
}

export default function SocketProvider({children}: Prop) {
  return (
    <socketContext.Provider value={{socket: io('http://localhost:3000')}} >
        {children}
    </socketContext.Provider>
  )
}
