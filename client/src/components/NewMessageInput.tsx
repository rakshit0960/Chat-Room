interface NewMessageInputProp {
    message: string
    setMessage: React.Dispatch<React.SetStateAction<string>>
    handleSendMessage: () => void
}

export const NewMessageInput:React.FunctionComponent<NewMessageInputProp> = ({message, setMessage, handleSendMessage}) => {
  return (
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
  );
};
