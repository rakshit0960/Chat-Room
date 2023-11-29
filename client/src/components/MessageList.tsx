import React from "react";
import Message from "./Message";
import { IMessage } from "../interfaces/interfaces";

interface MessageListProp {
    messages: IMessage[]
}

export const MessageList: React.FunctionComponent<MessageListProp> = ({messages}) => {
  return (
    <div className="flex flex-col flex-end gap-6 mb-20 mt-13">
      {messages.map((data, i) => (
        <Message key={i} data={data} />
      ))}
    </div>
  );
};
