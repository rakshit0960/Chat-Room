import React, { useEffect, useState } from "react";
import { IMessage } from "../interfaces/interfaces";
import { PiUserCircleLight } from "react-icons/pi";
import useSocket from "../contexts/useSocket";
import { IconContext } from "react-icons";

interface MessageProps {
  data: IMessage;
}

const Message: React.FC<MessageProps> = ({ data }) => {
  const [mine, setMine] = useState<boolean>(false)
  const {socket} = useSocket()
  const { id, username, message} = data;

  useEffect(() => {
    setMine(id == socket.id)
  }, [])

  return (
    <IconContext.Provider value={{ className: "w-8 h-8 rounded-full mr-2" }}>
    <div
      className={`flex ${mine ? "justify-end" : "justify-start"} items-start`}
    >
      <div
        className={`max-w-md p-4 ${
          (id == socket.id) ? "bg-blue-500 text-white" : "bg-gray-300"
        } rounded-lg shadow-md`}
        style={{ transition: "background 0.3s, color 0.3s" }}
      >
        <div className="flex items-center mb-2">
          <PiUserCircleLight />
          <span className="font-semibold">{username}</span>
        </div>
        <p className="text-sm">{message}</p>
      </div>
    </div>
    </IconContext.Provider>
  );
};

export default Message;
