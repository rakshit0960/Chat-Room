import { io } from "socket.io-client";
import socketContext from "./socketContest";
interface Prop {
  children: JSX.Element | JSX.Element[] | string  
}

const baseUrl = import.meta.env.VITE_BASE_URL

export default function SocketProvider({children}: Prop) {
  return (
    <socketContext.Provider value={{socket: io(baseUrl)}} >
        {children}
    </socketContext.Provider>
  )
}
