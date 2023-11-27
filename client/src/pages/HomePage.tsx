import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useSocket from "../contexts/useSocket";
import useUser from "../contexts/useUser";

export default function HomePage() {
  const { socket } = useSocket();

  const [roomName, setRoomName] = useState<string>("");
  const {username, setUsername} = useUser();

  const navigate = useNavigate();

  const handleJoin = () => {
    //join using socket.io
    socket.emit('join-room', {roomName, username});
  };

  useEffect(() => {
    // when server sends 'join-room' event
    socket.on('join-room', ({roomName}) => {
        navigate(`/room/${roomName}`);
    })


    // cleanup function
    return () => {
        socket.off('join-room')
    }
  }, [])

  return (
    <div className="w-screen h-screen grid place-items-center">
      <div className="flex flex-col gap-1 border-2 border-black p-10 rounded-xl">
        <h1 className="text-center text-4xl mb-12">Join a Room</h1>
        <input
          required={true}
          autoComplete="on"
          type="text"
          name="name"
          placeholder="Username"
          className="border-2 border-gray-700 rounded-md px-4 py-1 text-3xl"
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
        <input
          required={true}
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
