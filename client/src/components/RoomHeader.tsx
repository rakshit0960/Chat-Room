import { CgProfile } from 'react-icons/cg'
interface RoomHeaderProp {
    username: string,
    roomName: string
}
const RoomHeader:React.FunctionComponent<RoomHeaderProp> = ({username, roomName}) => {
  return (
    <div className="flex justify-between items-center border-b-2 px-16 py-6 text-4xl fixed top-0 left-0 w-full bg-white">
    <div className="flex items-end">
      <CgProfile className="text-4xl mr-3"/>
      {username}
    </div>
    <div>{roomName}</div>
  </div>
  )
}

export default RoomHeader;