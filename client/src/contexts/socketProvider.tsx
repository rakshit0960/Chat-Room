import { io } from "socket.io-client";
import socketContext from "./socketContest";

interface Prop {
    children: JSX.Element | JSX.Element[] | string  
}

export default function SocketProvider({children}: Prop) {
  return (
    <socketContext.Provider value={{socket: io(import.meta.env.VITE_SERVER_URL)}} >
        {children}
    </socketContext.Provider>
  )
}
