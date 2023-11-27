import { useState } from "react";
import { useParams } from "react-router-dom";
import Message from "../components/Message";
import { message } from "../interfaces/interfaces";
import useUser from "../contexts/useUser";

export default function RoomPage() {
  const [nextMessage, setNextMessage] = useState<string>("");
  const [messages, setMessages] = useState<message[]>([]);
  const param = useParams();
  const {username} = useUser();

  const handleSendMessage = () => {
    // send message using socket.io
    setMessages(messages => [...messages, {mine: true, user: username, message: nextMessage}]);
    setNextMessage('');
  }
  return (
    <div className="w-full h-screen flex flex-col justify-between px-2" onKeyDown={e => (e.key === "Enter") ? handleSendMessage() : null}>
      <div className="flex justify-between border-b-2 px-16 py-6 text-4xl">
        <div>Welcome {username}</div>
        <div>{`${param.roomName}`}</div>
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
            value={nextMessage}
            onChange={(e) => setNextMessage(e.target.value)}
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
