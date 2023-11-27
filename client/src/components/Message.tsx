import { message } from "../interfaces/interfaces";

export default function Message({message}: {message: message}) {
  return (
    <div className="flex my-6" style={{flexDirection: (message.mine) ? "row-reverse" : "row"}}>
        <div className="border-2 px-10 py-4">
            <div>
                {message.user}
            </div>
            <div>
                {message.message} 
            </div>
        </div>

    </div>
  )
}
