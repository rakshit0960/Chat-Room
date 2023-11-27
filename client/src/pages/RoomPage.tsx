import { useState } from "react";
import { useParams, useRoutes } from "react-router-dom";
import Message from "../components/Message";
import { message } from "../interfaces/interfaces";
import useUser from "../contexts/useUser";
import useSocket from "../contexts/useSocket";

export default function RoomPage() {
  const [message, setMessage] = useState<string>("");
  const [messages, setMessages] = useState<message[]>([]);
  const {roomName} = useParams();
  const {username} = useUser();
  const {socket} = useSocket();

  const handleSendMessage = () => {
    // send message using socket.io
    socket.emit('send-message', {roomName,username, id: socket.id, message})
    setMessage('');
  }

  return (
    <div className="w-full h-screen flex flex-col justify-between px-2" onKeyDown={e => (e.key === "Enter") ? handleSendMessage() : null}>
      <div className="flex justify-between border-b-2 px-16 py-6 text-4xl">
        <div>Welcome {username}</div>
        <div>{`${{roomName}.roomName}`}</div>
      </div>
      <div className="flex flex-col justify-end gap-6 pt-2">
        <div className="flex flex-col gap-6">
          {messages.map((message, i) => (
            <Message key={i} message={message} />
          ))}
        </div>
        <div className="grid grid-cols-6 h-16 text-xl mb-2">
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
