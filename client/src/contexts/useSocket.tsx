import { useContext } from "react";
import socketContext, { ISocketContext } from "./socketContest";

export default function useSocket(): ISocketContext {
    const value = useContext(socketContext);
    if (!value) throw new Error('vale of socketContext cannot be null')
    return value;
}