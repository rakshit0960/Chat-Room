import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const [roomName, setRoomName] = useState<string>("");
  const navigate = useNavigate();
  const handleJoin = () => {
    //join using socket.io
    navigate(`/room/${roomName}`);
  };
  return (
    <div className="w-screen h-screen grid place-items-center">
      <div className="flex flex-col gap-1 border-2 border-black p-10 rounded-xl">
        <h1 className="text-center text-4xl mb-12">Join a Room</h1>
        <input
          autoComplete="on"
          type="text"
          name="name"
          placeholder="Username"
          className="border-2 border-gray-700 rounded-md px-4 py-1 text-3xl"
        />
        <input
          autoComplete="on"
          type="text"
          name="roomName"
          placeholder="roomName"
          className="border-2 border-gray-700 rounded-md px-4 py-1 text-3xl"
          value={roomName}
          onChange={(e) => setRoomName(e.target.value)}
        />
        <button
          className="border-2 border-gray-700 rounded-md px-4 py-1 text-3xl mt-4"
          onClick={handleJoin}
        >
          Join
        </button>
      </div>
    </div>
  );
}
