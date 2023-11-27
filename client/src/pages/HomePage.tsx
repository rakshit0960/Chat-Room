import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useSocket from "../contexts/useSocket";
import useUser from "../contexts/useUser";

export default function HomePage() {
  const { socket } = useSocket();

  const [roomName, setRoomName] = useState<string>("");
  const {username, setUsername} = useUser();
  const [joining, setJoining] = useState<boolean>(false);

  const navigate = useNavigate();

  const handleJoin = () => {
    if (!joining && username && roomName) {
      setJoining(true);
      
      // join using socket.io
      socket.emit('join-room', { roomName, username });
    }
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
      <div className="flex flex-col gap-4 border-2 border-black p-10 rounded-xl">
        <h1 className="text-center text-4xl mb-8">Join a Room</h1>
        <div className="flex flex-col gap-2">
          <label htmlFor="username" className="text-lg">
            Username:
          </label>
          <input
            required={true}
            autoComplete="on"
            type="text"
            id="username"
            name="name"
            placeholder="Enter your username"
            className="border-2 border-gray-700 rounded-md px-4 py-2 text-xl"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="roomName" className="text-lg">
            Room Name:
          </label>
          <input
            required={true}
            autoComplete="on"
            type="text"
            id="roomName"
            name="roomName"
            placeholder="Enter room name"
            className="border-2 border-gray-700 rounded-md px-4 py-2 text-xl"
            value={roomName}
            onChange={(e) => setRoomName(e.target.value)}
          />
        </div>
        <button
          className={`border-2 border-gray-700 rounded-md px-4 py-2 text-xl mt-4 ${joining ? 'opacity-50 cursor-not-allowed' : ''}`}
          onClick={handleJoin}
          disabled={joining}
        >
          {joining ? 'Joining...' : 'Join'}
        </button>
      </div>
    </div>
  );
}
