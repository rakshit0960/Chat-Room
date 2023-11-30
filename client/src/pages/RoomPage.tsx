import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMessage } from "../interfaces/interfaces";
import useUser from "../contexts/useUser";
import useSocket from "../contexts/useSocket";
import RoomHeader from "../components/RoomHeader";
import { MessageList } from "../components/MessageList";
import { NewMessageInput } from "../components/NewMessageInput";

export default function RoomPage() {
  const [message, setMessage] = useState<string>("");
  const [messages, setMessages] = useState<IMessage[]>([]);
  let { roomName } = useParams<{roomName: string}>();
  const { username } = useUser();
  const { socket } = useSocket();
  roomName = typeof(roomName) == "string" ? roomName : " "; 

  const handleSendMessage = () => {
    if (!username || !message) return;
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
      <RoomHeader roomName={roomName} username={username} />
      <div className="flex flex-col justify-end gap-6 pt-2 my-24">
        <MessageList messages={messages} />
        {/* <div className="grid grid-cols-6 h-16 text-xl mb-2"></div> */}
        <NewMessageInput
          handleSendMessage={handleSendMessage}
          message={message}
          setMessage={setMessage}
        />
      </div>
    </div>
  );
}
