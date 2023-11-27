import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import Message from "../components/Message";
import { IMessage } from "../interfaces/interfaces";
import useUser from "../contexts/useUser";
import useSocket from "../contexts/useSocket";

export default function RoomPage() {
  const [message, setMessage] = useState<string>("");
  const [messages, setMessages] = useState<IMessage[]>([]);
  const { roomName } = useParams();
  const { username } = useUser();
  const { socket } = useSocket();

  const handleSendMessage = () => {
    // send message using socket.io
    socket.emit("send-message", { roomName, id: socket.id, username, message });
    setMessage("");
  };

  useEffect(() => {
    // receive message from server
    socket.on("send-message", (data: IMessage) => {
      console.log(data);
      setMessages((messages) => [...messages, data]);
    });

    return () => {
      socket.off("send-message"); // clear function
    };
  }, []);

  return (
    <div
      className="w-full h-screen flex flex-col justify-between px-2"
      onKeyDown={(e) => (e.key === "Enter" ? handleSendMessage() : null)}
    >
      <div className="flex justify-between items-center border-b-2 px-16 py-6 text-4xl fixed top-0 left-0 w-full bg-white">
        <div className="flex items-end">
          <CgProfile className="text-4xl mr-3"/>
          {username}
        </div>
        <div>{roomName}</div>
      </div>
      <div className="flex flex-col justify-end gap-6 pt-2 my-24">
        <div className="flex flex-col gap-6">
          {messages.map((data, i) => (
            <Message key={i} data={data} />
          ))}
        </div>
        <div className="grid grid-cols-6 h-16 text-xl mb-2"></div>
        <div className="grid grid-cols-6 h-16 text-xl pb-2 fixed bottom-0 left-0 w-full bg-white">
          <input
            type="text"
            className="border-2 col-span-5 px-6 rounded border-black"
            placeholder="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button
            className="border-2 w-full rounded border-black"
            onClick={handleSendMessage}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}
